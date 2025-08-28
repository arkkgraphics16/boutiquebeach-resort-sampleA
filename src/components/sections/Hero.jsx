export default function Hero() {
  return (
    <section className="bg-[url('/images/placeholders/hero-sunrise.jpg')] bg-cover bg-center py-28">
      <div className="container mx-auto px-6 text-white">
        <div className="max-w-xl bg-black/40 p-6 rounded">
          <h1 className="text-3xl font-bold">BoutiqueBeach Resort</h1>
          <p className="mt-2">From ₱3,200/night</p>
          <a href="#booking" className="inline-block mt-4 bg-amber-400 px-4 py-2 rounded">Book Direct</a>
        </div>
      </div>
    </section>
  )
}
