import { NextRequest, NextResponse } from 'next/server';

interface LeadSubmissionData {
  email: string;
  name: string;
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
    if (!body.email || !body.name || !body.company || !body.calculatorType) {
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
      firstName: body.name.split(' ')[0] || body.name,
      lastName: body.name.split(' ').slice(1).join(' ') || '',
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
      
      // Handle 409 error (email already exists) as success
      if (response.status === 409) {
        console.log('Email already exists in Loops audience, treating as success');
        return NextResponse.json(
          { 
            success: true, 
            message: 'Email already exists in audience',
            alreadyExists: true 
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
    console.log('Lead submitted successfully to Looops:', result);

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
