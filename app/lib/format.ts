/**
 * Formatting utilities for Angola (pt-AO) locale.
 */

const kzFormatter = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

/**
 * Format a numeric amount in Angolan Kwanzas (AOA).
 */
export function formatKz(amount: number): string {
  return kzFormatter.format(amount)
}

const dateFormatter = new Intl.DateTimeFormat("pt-AO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Africa/Luanda",
})

/**
 * Format date in dd/MM/yyyy format with Africa/Luanda timezone.
 */
export function formatDate(date: Date | string | number): string {
  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date
  return dateFormatter.format(d)
}

const dateTimeFormatter = new Intl.DateTimeFormat("pt-AO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Luanda",
})

/**
 * Format date and time with Africa/Luanda timezone.
 */
export function formatDateTime(date: Date | string | number): string {
  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date
  return dateTimeFormatter.format(d)
}
