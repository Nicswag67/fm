import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest){
  const { amount } = await req.json();
  return NextResponse.json({ ok:true, amount });
}
