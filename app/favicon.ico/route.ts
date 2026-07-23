import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/icon.png', 'https://www.sokoza.co.ke'), 308);
}
