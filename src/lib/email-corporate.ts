export const blockedFreeDomains = new Set([
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "yahoo.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
  "mail.com",
  "aol.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "protonmail.com",
  "yandex.com",
  "zoho.com",
  "gmx.com",
  "rediffmail.com",
  "fastmail.com",
  "qq.com",
]);

export function isCorporateEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase().trim();
  if (!domain) return false;
  return !blockedFreeDomains.has(domain);
}
