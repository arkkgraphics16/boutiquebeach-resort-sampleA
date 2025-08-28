/**
 * Minimal booking API route.
 * Expects JSON body { name, email, phone, roomType, checkIn, checkOut }
 * This simple handler logs and returns success. Extend to use nodemailer.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const data = req.body || {}
    console.log('Booking received:', data)
    // TODO: send email via SMTP using env vars
    return res.status(200).json({ ok: true, message: 'Booking received' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ ok: false })
  }
}
