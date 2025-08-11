export async function createAchLink(userId: string){
  // TODO: call ACH provider to create link token
  return { linkToken: "demo-token" };
}
export async function postAchTransfer(userId: string, amount: number){
  // TODO: initiate transfer and record pending ledger entry
  return { ok: true, transferId: "xfer_demo" };
}
