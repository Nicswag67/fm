export async function startKyc(userId: string, payload: any){
  // TODO: call KYC provider
  return { ok: true, sessionUrl: "https://kyc.example/start" };
}
export async function handleKycWebhook(body: any){
  // TODO: verify signature and update user status
  return { ok: true };
}
