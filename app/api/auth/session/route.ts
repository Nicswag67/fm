import { NextResponse } from 'next/server';
export async function GET(){
  return NextResponse.json({ user:{ id:'guest', name:'Guest' } });
}
