export async function fetchFinalStats(marketId: string){
  // TODO: call stats provider and return normalized result for settlement
  return { marketId, result: Math.random() > 0.5 ? 1 : 0 };
}
