import { NextRequest, NextResponse } from 'next/server';
import { seedMarkets } from '@/lib/mock';
export async function GET(req: NextRequest, { params }: { params: { id:string }}){
  const m = seedMarkets().find(x=>x.id===params.id);
  return m ? NextResponse.json(m) : new NextResponse('Not found', { status:404 });
}
