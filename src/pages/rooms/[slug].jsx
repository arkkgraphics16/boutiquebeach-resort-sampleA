import { useRouter } from 'next/router'
export default function RoomPage() {
  const { query } = useRouter()
  return <div className="p-8">Room: {query.slug} — (placeholder)</div>
}
