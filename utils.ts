export const fmtUSD = (n: number) => n.toLocaleString(undefined,{ style: 'currency', currency: 'USD' });
export const impliedProbToOdds = (p: number) => {
  if(p<=0) return '0';
  if(p>=1) return '∞';
  return p>=.5 ? `-${Math.round(p/(1-p)*100)}` : `+${Math.round((1-p)/p*100)}`;
};
