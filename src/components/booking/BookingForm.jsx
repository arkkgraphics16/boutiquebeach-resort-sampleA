import { useState } from 'react'

export default function BookingForm(){
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.target)
    const body = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      roomType: fd.get('roomType'),
      checkIn: fd.get('checkIn'),
      checkOut: fd.get('checkOut')
    }
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const json = await res.json()
      setSuccess(json.ok)
    } catch(err) {
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  if (success) return <div className="p-4 bg-green-50 rounded">Booking received. Check your email.</div>

  return (
    <form onSubmit={submit} className="space-y-3 max-w-lg">
      <input name="name" placeholder="Name" required className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <input name="phone" placeholder="Phone" required className="w-full p-2 border rounded" />
      <select name="roomType" className="w-full p-2 border rounded">
        <option>Deluxe</option>
        <option>Suite</option>
        <option>Standard</option>
      </select>
      <div className="grid grid-cols-2 gap-2">
        <input name="checkIn" type="date" className="p-2 border rounded" required/>
        <input name="checkOut" type="date" className="p-2 border rounded" required/>
      </div>
      <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
        {loading ? 'Sending...' : 'Send Booking'}
      </button>
    </form>
  )
}
