import { NextResponse } from 'next/server';
import { BRAND_INFO } from '@/data/nexoraData';

export interface EnquiryPayload {
  service?: string;
  name: string;
  phone: string;
  email?: string;
  suburb: string;
  preferredDate?: string;
  preferredTimeMode?: 'flexible' | 'specific';
  preferredTimeValue?: string;
  propertySize?: string;
  notes?: string;
  website_url?: string; // Spam honeypot
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    // 1. Spam Honeypot Check
    if (body.website_url && body.website_url.trim() !== '') {
      return NextResponse.json({
        ok: true,
        message: BRAND_INFO.confirmationMessage,
      });
    }

    // 2. Validate Required Fields (Name, Phone, Suburb/Postcode)
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const suburb = body.suburb?.trim();

    if (!name || !phone || !suburb) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Please provide your Name, Phone Number, and Suburb/Postcode (Address). All other fields are optional.',
        },
        { status: 400 }
      );
    }

    // 3. Format Exact Client Enquiry Payload for cleaning@nexora.com
    const formattedEnquiry = [
      'NEXORA CLEANING - ENQUIRY',
      '========================================',
      `To:              ${BRAND_INFO.mainEmail}`,
      `Service:         ${body.service || 'End-of-lease / bond cleaning'}`,
      `Name:            ${name}`,
      `Phone:           ${phone}`,
      `Email:           ${body.email?.trim() || 'Not provided'}`,
      `Suburb/postcode: ${suburb}`,
      `Preferred date:  ${body.preferredDate || 'Flexible / Not specified'}`,
      `Preferred time:  ${
        body.preferredTimeMode === 'specific'
          ? `Specific Time (${body.preferredTimeValue || 'Not set'})`
          : 'Flexible'
      }`,
      `Property size:   ${body.propertySize || 'Not specified'}`,
      `Notes:           ${body.notes?.trim() || 'None'}`,
      '========================================',
    ].join('\n');

    // Optional webhook / email relay if configured via environment variable
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: BRAND_INFO.mainEmail,
          cc: BRAND_INFO.adminEmail,
          subject: `New Cleaning Quote Request — ${name} (${suburb})`,
          text: formattedEnquiry,
          payload: body,
        }),
      }).catch(() => {
        // Non-blocking fallback
      });
    }

    return NextResponse.json({
      ok: true,
      recipient: BRAND_INFO.mainEmail,
      message: BRAND_INFO.confirmationMessage,
      summary: formattedEnquiry,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unable to process your request right now. Please call or WhatsApp our Perth team.',
      },
      { status: 500 }
    );
  }
}
