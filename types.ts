export type Market = {
  id: string;
  league: 'NFL' | 'NBA' | 'MLB' | 'Premier League' | string;
  label: string;
  description: string;
  closesAt: string; // ISO
  lastPrice: number; // 0..1
  history: { t: number; price: number }[];
  status: 'open' | 'closed' | 'settled';
};

export type Position = { qty: number; avg: number };
export type Order = { id: string; marketId: string; side: 'BUY'|'SELL'; qty: number; price: number; ts: number };
export type User = { id: string; name: string; cash: number };
