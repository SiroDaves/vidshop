const CURRERCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'SEK',
  style: 'currency',
  maximumFractionDigits: 0,
})
export function formatCurrency(number: number) {
  return CURRERCY_FORMATTER.format(number)
}

export function getUsernameFromEmail(email: string): string {
  const atIndex = email.indexOf('@');
  
  if (atIndex !== -1) {
    return email.slice(0, atIndex);
  }
  
  return email; // Return the whole email if '@' is not found
}