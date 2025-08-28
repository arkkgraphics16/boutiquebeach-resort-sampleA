export function calculateOtaSavings(nightlyPhp, nights = 1, otaPercent = 15) {
  const nNightly = Number(nightlyPhp) || 0
  const nNights = Math.max(1, Math.floor(Number(nights) || 1))
  const nPercent = Math.max(0, Math.min(100, Number(otaPercent) || 0))

  const total = Math.round(nNightly * nNights)
  const otaFee = Math.round((total * nPercent) / 100)
  const net = total - otaFee
  const saved = otaFee

  return {
    otaFeePhp: otaFee,
    netEarningsPhp: net,
    savedPhp: saved,
  }
}
