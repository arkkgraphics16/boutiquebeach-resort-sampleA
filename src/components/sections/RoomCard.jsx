export default function RoomCard({ title, price, image }) {
  return (
    <article className="bg-white rounded p-3 shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-medium">{title}</h3>
      <div className="text-sm mt-1">From ₱{price}/night</div>
      <div className="mt-3">
        <a href="/booking" className="inline-block px-3 py-2 bg-blue-600 text-white rounded">Book</a>
      </div>
    </article>
  )
}
