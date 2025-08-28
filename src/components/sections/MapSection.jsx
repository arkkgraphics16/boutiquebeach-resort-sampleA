export default function MapSection() {
  return (
    <section id="map" className="bg-white p-4 rounded">
      <h3 className="font-semibold mb-2">Location</h3>
      <img 
        src="/images/placeholders/map-thumbnail.jpg" 
        alt="Island top view" 
        className="w-full h-64 object-cover rounded"
      />
      <p className="text-sm mt-2">3-min walk to beach access</p>
    </section>
  )
}
