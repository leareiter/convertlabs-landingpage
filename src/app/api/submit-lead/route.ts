import { NextRequest, NextResponse } from 'next/server';

interface LeadSubmissionData {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  calculatorType: string;
  estimation: {
    min: number;
    max: number;
    weeks?: number;
    accounts?: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadSubmissionData = await request.json();
    if (!body.email || !body.firstName || !body.lastName || !body.company || !body.calculatorType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    const loopsData = {
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      company: body.company,
      calculatorType: body.calculatorType, 
      budgetMin: body.estimation.min, 
      budgetMax: body.estimation.max, 
      submittedAt: Math.floor(Date.now() / 1000), 
    };

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
        
        // Try to update the existing contact
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
        { error: 'Failed to submit lead to Loops' },
        { status: 500 }
      );
    }

    const result = await response.json();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        looopsId: result.id || result.lead_id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in submit-lead API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
