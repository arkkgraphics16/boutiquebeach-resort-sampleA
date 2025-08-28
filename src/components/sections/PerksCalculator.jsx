import React, { useState, useEffect, useMemo } from 'react'
import { calculateOtaSavings } from '../../utils/priceCalc'

export default function PerksCalculator() {
  const [nightly, setNightly] = useState(3200)
  const [nights, setNights] = useState(1)
  const [otaPercent, setOtaPercent] = useState(15)
  const [debouncedNightly, setDebouncedNightly] = useState(nightly)

  useEffect(() => {
    const t = setTimeout(() => setDebouncedNightly(nightly), 250)
    return () => clearTimeout(t)
  }, [nightly])

  const results = useMemo(() => {
    return calculateOtaSavings(debouncedNightly, nights, otaPercent)
  }, [debouncedNightly, nights, otaPercent])

  const fmt = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 })

  return (
    <section className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Perks calculator — Book Direct</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <label className="flex flex-col">
          <span className="text-sm">Nightly rate</span>
          <input
            aria-label="nightly rate"
            type="number"
            min="0"
            step="1"
            value={nightly}
            onChange={e => setNightly(Number(e.target.value))}
            className="mt-1 p-2 border rounded"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm">Nights</span>
          <input
            aria-label="nights"
            type="number"
            min="1"
            step="1"
            value={nights}
            onChange={e => setNights(Math.max(1, Number(e.target.value) || 1))}
            className="mt-1 p-2 border rounded"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm">OTA cut</span>
          <select
            aria-label="ota cut"
            value={otaPercent}
            onChange={e => setOtaPercent(Number(e.target.value))}
            className="mt-1 p-2 border rounded"
          >
            <option value={10}>10% (low)</option>
            <option value={15}>15% (common)</option>
            <option value={20}>20% (high)</option>
            <option value={25}>25% (peak)</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center mb-4">
        <div className="p-3 bg-gray-50 rounded">
          <div className="text-sm">OTA fee (total)</div>
          <div className="text-lg font-medium mt-1">{fmt.format(results.otaFeePhp)}</div>
        </div>

        <div className="p-3 bg-gray-50 rounded">
          <div className="text-sm">You keep (net earnings)</div>
          <div className="text-lg font-medium mt-1">{fmt.format(results.netEarningsPhp)}</div>
        </div>

        <div className="p-3 bg-gray-50 rounded">
          <div className="text-sm">You save vs OTA</div>
          <div className="text-lg font-medium mt-1">{fmt.format(results.savedPhp)}</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">Calculation uses integer-safe math to avoid rounding errors.</div>
        <a href="#booking" className={`px-4 py-2 rounded-lg font-semibold ${results.netEarningsPhp <= 0 ? 'opacity-50 pointer-events-none' : 'bg-blue-600 text-white'}`}>
          Book Direct
        </a>
      </div>
    </section>
  )
}
