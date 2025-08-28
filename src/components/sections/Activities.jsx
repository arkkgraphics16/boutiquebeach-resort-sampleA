export default function Activities() {
  return (
    <section id="activities" className="bg-white p-4 rounded">
      <h3 className="font-semibold mb-2">Activities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-3 border rounded">
          <img src="/images/placeholders/activity-island.jpg" alt="Island Hopping" className="w-full h-40 object-cover rounded mb-2" />
          Island Hopping — <a href="#">WhatsApp</a>
        </div>
        <div className="p-3 border rounded">
          <img src="/images/placeholders/activity-dive.jpg" alt="Diving" className="w-full h-40 object-cover rounded mb-2" />
          Diving — <a href="#">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
