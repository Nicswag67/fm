import { Market } from './types';

export const makeSeries = (n: number, min: number, max: number) => {
  const out: { t:number; price:number }[] = [];
  let v = (min+max)/2;
  for(let i=0;i<n;i++){
    v += (Math.random()-.5)*.02;
    v = Math.max(min, Math.min(max, v));
    out.push({ t:i, price: Number(v.toFixed(2)) });
  }
  return out;
};

export const seedMarkets = (): Market[] => ([
  { id:'nfl-2025-kc-den', league:'NFL', label:'Broncos vs. Chiefs – Moneyline (DEN to win)', description:'Will the Denver Broncos win on Sep 14, 2025?', closesAt:'2025-09-14T18:00:00Z', lastPrice:.46, history: makeSeries(60,.38,.52), status:'open' },
  { id:'mlb-2025-nym-lad', league:'MLB', label:'Dodgers @ Mets – Over/Under 8.5 (Over)', description:'Will total runs be 9 or more?', closesAt:'2025-08-22T23:59:00Z', lastPrice:.58, history: makeSeries(60,.44,.64), status:'open' },
  { id:'prem-2025-ars-che', league:'Premier League', label:'Arsenal vs Chelsea – Both Teams To Score', description:'Will both teams score on Aug 31, 2025?', closesAt:'2025-08-31T15:00:00Z', lastPrice:.54, history: makeSeries(60,.42,.62), status:'open' }
]);
