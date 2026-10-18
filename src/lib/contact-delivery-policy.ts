// The database insert runs first and is mandatory: a lead is delivered only
// when it is saved in the leads table. CRM and email run afterwards as
// best-effort notifications of an already persisted lead.
export function shouldSendContactEmail(savedLocally: boolean): boolean {
  return savedLocally;
}

export function isContactDelivered(savedLocally: boolean): boolean {
  return savedLocally;
}
