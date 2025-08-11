import { NextResponse } from 'next/server';
import { seedMarkets } from '@/lib/mock';
export async function GET(){ return NextResponse.json(seedMarkets()); }
