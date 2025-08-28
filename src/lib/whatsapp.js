export function buildWhatsAppLink(number, text) {
  const base = 'https://wa.me/'
  const msg = encodeURIComponent(text || '')
  return `${base}${number}?text=${msg}`
}
