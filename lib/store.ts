'use client';
import { create } from 'zustand';
import { Market, Order, User } from './types';
import { seedMarkets } from './mock';

type State = {
  markets: Market[];
  user: User;
  orders: Order[];
  portfolio: Record<string,{ qty:number; avg:number }>;
  placeOrder: (p:{ marketId:string; side:'BUY'|'SELL'; qty:number; price:number })=>void;
  deposit: (n:number)=>void;
  reset: ()=>void;
}

const initial = {
  markets: seedMarkets(),
  user: { id:'guest', name:'Guest', cash: 10000 },
  orders: [] as Order[],
  portfolio: {} as Record<string,{qty:number;avg:number}>,
};

export const useFM = create<State>((set,get)=>({
  ...initial,
  placeOrder: ({ marketId, side, qty, price }) => {
    const { user, portfolio, orders } = get();
    const cost = side==='BUY' ? qty*price : -qty*price;
    if(side==='BUY' && user.cash < cost) return alert('Insufficient cash');
    const pos = portfolio[marketId] || { qty:0, avg:0 };
    const newPos = side==='BUY'
      ? { qty: pos.qty+qty, avg: (pos.qty*pos.avg + qty*price)/(pos.qty+qty) }
      : { qty: pos.qty-qty, avg: pos.avg };
    set({
      portfolio: { ...portfolio, [marketId]: newPos },
      orders: [...orders, { id: crypto.randomUUID(), marketId, side, qty, price, ts: Date.now() }],
      user: { ...user, cash: user.cash - cost }
    });
  },
  deposit: (n)=> set(({user})=>({ user: { ...user, cash: user.cash + Math.max(0,n) } })),
  reset: ()=> set(initial)
}));
