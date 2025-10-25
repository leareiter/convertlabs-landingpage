import { NextRequest, NextResponse } from 'next/server';
import { CalculatorService } from '@/lib/calculator/calculator-service';
import { CalculateRequest } from '@/lib/calculator/types';

export async function POST(request: NextRequest) {
  try {
    const body: CalculateRequest = await request.json();
    
    if (!body.calculatorType || !body.data) {
      return NextResponse.json(
        { error: 'Missing required fields: calculatorType and data' },
        { status: 400 }
      );
    }

    const result = CalculatorService.calculate(body.calculatorType, body.data);
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error in calculate-project API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
