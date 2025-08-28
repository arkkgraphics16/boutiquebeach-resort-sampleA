import RoomCard from './RoomCard'
export default function RoomsList() {
  return (
    <section id="rooms">
      <h2 className="text-xl font-semibold mb-4">Rooms</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <RoomCard title="Deluxe" price="3200" image="/images/placeholders/room-deluxe.jpg" />
        <RoomCard title="Suite" price="5200" image="/images/placeholders/room-suite.jpg" />
        <RoomCard title="Standard" price="2500" image="/images/placeholders/room-standard.jpg" />
      </div>
    </section>
  )
}
