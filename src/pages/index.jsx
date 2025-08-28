// File: src/pages/index.jsx
import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import RoomsList from '../components/sections/RoomsList'
import PerksCalculator from '../components/sections/PerksCalculator'
import MapSection from '../components/sections/MapSection'
import Activities from '../components/sections/Activities'
import FAQ from '../components/sections/FAQ'
import ReviewsCarousel from '../components/sections/ReviewsCarousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>BoutiqueBeach Resort — Book Direct</title>
        <meta name="description" content="BoutiqueBeach Resort — Book direct, save on OTA fees. From ₱3,200/night." />
      </Head>

      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />

        <main className="flex-1">
          <Hero />

          <div className="container mx-auto px-4 md:px-6 -mt-10 space-y-6">
            {/* Top row: Rooms + Perks Calculator */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RoomsList />
              </div>

              <aside className="sticky top-24">
                <PerksCalculator />
              </aside>
            </div>

            {/* Map + Activities */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <MapSection />
              </div>
              <div>
                <Activities />
              </div>
            </div>

            {/* FAQ + Reviews */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <FAQ />
              <ReviewsCarousel />
            </div>

            {/* Booking anchor section (keeps page focused) */}
            <section id="booking" className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">Ready to book?</h2>
              <p className="text-sm text-gray-600 mb-4">Fill the booking form to request a reservation. We confirm within 24 hours.</p>
              <a href="/booking" className="inline-block px-4 py-2 bg-emerald-600 text-white rounded">Go to booking</a>
            </section>
          </div>
        </main>

        <Footer />

        {/* Floating quick book CTA */}
        <a href="#booking" aria-label="Book Direct" className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-2xl shadow-lg bg-amber-500 text-black font-semibold">
          Book Direct
        </a>
      </div>
    </>
  )
}
