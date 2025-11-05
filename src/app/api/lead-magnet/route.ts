import { NextRequest, NextResponse } from 'next/server';

interface LeadMagnetSubmissionData {
  email: string;
  leadMagnetType: 'designLM' | 'crmLM' | 'linkedinLM';
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadMagnetSubmissionData = await request.json();
    
    if (!body.email || !body.leadMagnetType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate leadMagnetType
    if (!['designLM', 'crmLM', 'linkedinLM'].includes(body.leadMagnetType)) {
      return NextResponse.json(
        { error: 'Invalid lead magnet type' },
        { status: 400 }
      );
    }

    const loopsApiKey = process.env.LOOPS_API_KEY;
    if (!loopsApiKey) {
      console.error('Missing LOOPS_API_KEY environment variable');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }

    // Set the clicked lead magnet to true, preserve others
    const loopsData: any = {
      email: body.email,
      submittedAt: Math.floor(Date.now() / 1000),
    };

    // Only set the clicked lead magnet to true, don't touch others
    if (body.leadMagnetType === 'designLM') {
      loopsData.designLM = true;
    } else if (body.leadMagnetType === 'crmLM') {
      loopsData.crmLM = true;
    } else if (body.leadMagnetType === 'linkedinLM') {
      loopsData.linkedinLM = true;
    }

    // Try to create the contact
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loopsApiKey}`,
      },
      body: JSON.stringify(loopsData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Loops API error:', response.status, errorText);
      
      // Handle 409 error (email already exists) by updating the contact
      if (response.status === 409) {
        // Try to update the existing contact with merge (preserve existing values)
        const updateResponse = await fetch('https://app.loops.so/api/v1/contacts/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${loopsApiKey}`,
          },
          body: JSON.stringify(loopsData),
        });

        if (!updateResponse.ok) {
          const updateErrorText = await updateResponse.text();
          console.error('Loops update API error:', updateResponse.status, updateErrorText);
          return NextResponse.json(
            { error: 'Failed to update existing contact in Loops' },
            { status: 500 }
          );
        }

        const updateResult = await updateResponse.json();
        
        return NextResponse.json(
          { 
            success: true, 
            message: 'Contact updated successfully',
            updated: true,
            looopsId: updateResult.id || updateResult.lead_id 
          },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to submit lead magnet to Loops' },
        { status: 500 }
      );
    }

    const result = await response.json();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead magnet submitted successfully',
        looopsId: result.id || result.lead_id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in lead-magnet API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
