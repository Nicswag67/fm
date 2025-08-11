'use client';
import { useFM } from '@/lib/store';
import { fmtUSD } from '@/lib/utils';

function Stat({title,value}:{title:string;value:string}){
  return <div className="glass rounded-2xl p-4"><div className="text-sm text-white/60">{title}</div><div className="text-2xl font-semibold">{value}</div></div>;
}

export default function Portfolio(){
  const { user, portfolio, markets, orders } = useFM();
  const mIdx = Object.fromEntries(markets.map(m=>[m.id,m]));
  const rows = Object.entries(portfolio);
  const mv = rows.reduce((a,[id,p])=> a + p.qty*(mIdx[id]?.lastPrice??0), 0);
  const cb = rows.reduce((a,[id,p])=> a + p.qty*(p.avg??0), 0);
  const pnl = mv - cb;
  return (
    <div className="grid gap-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Stat title="Cash" value={fmtUSD(user.cash)} />
        <Stat title="Positions (Market Value)" value={fmtUSD(mv)} />
        <Stat title="Unrealized P&L" value={`${pnl>=0?'+':''}${fmtUSD(pnl)}`} />
      </div>
      <div className="glass rounded-2xl p-4 overflow-x-auto">
        <div className="font-medium mb-3">Holdings</div>
        <table className="w-full text-sm">
          <thead className="text-white/60">
            <tr className="text-left border-b border-border"><th className="py-2">Market</th><th>Qty</th><th>Avg</th><th>Last</th><th>Value</th></tr>
          </thead>
          <tbody>
            {rows.length===0 && <tr><td colSpan={5} className="py-6 text-center text-white/50">No positions yet.</td></tr>}
            {rows.map(([id,p])=> (
              <tr key={id} className="border-b border-white/5">
                <td className="py-2 pr-4">{mIdx[id]?.label ?? id}</td>
                <td>{p.qty}</td>
                <td>{(p.avg*100).toFixed(0)}%</td>
                <td>{Math.round((mIdx[id]?.lastPrice??0)*100)}%</td>
                <td>{fmtUSD(p.qty*(mIdx[id]?.lastPrice??0))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="glass rounded-2xl p-4 overflow-x-auto">
        <div className="font-medium mb-3">Order History</div>
        <table className="w-full text-sm">
          <thead className="text-white/60">
            <tr className="text-left border-b border-border"><th className="py-2">Time</th><th>Side</th><th>Qty</th><th>Price</th><th>Market</th></tr>
          </thead>
          <tbody>
            {orders.length===0 && <tr><td colSpan={5} className="py-6 text-center text-white/50">No orders yet.</td></tr>}
            {orders.slice().reverse().map(o=> (
              <tr key={o.id} className="border-b border-white/5">
                <td className="py-2 pr-4">{new Date(o.ts).toLocaleString()}</td>
                <td>{o.side}</td>
                <td>{o.qty}</td>
                <td>{(o.price*100).toFixed(0)}%</td>
                <td>{mIdx[o.marketId]?.label ?? o.marketId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
