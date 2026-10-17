// Email is a notification of a persisted lead, not an alternative storage channel.
export function shouldSendContactEmail(savedLocally: boolean): boolean {
  return savedLocally;
}

export function isContactDelivered(savedLocally: boolean, sentToCrm: boolean): boolean {
  return savedLocally || sentToCrm;
}