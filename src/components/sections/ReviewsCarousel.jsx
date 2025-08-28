// ReviewsTestimonial.jsx
// Replace your current ReviewsCarousel file with this component.
// Tailwind-only. No images. Uses inline SVG icons for stars & quote mark.

export default function ReviewsTestimonial() {
  const reviews = [
    {
      id: 1,
      name: 'Mara Villanueva',
      location: 'Bacolod City, Philippines',
      rating: 5,
      text: 'We had an incredible stay — the staff treated us like family, and the island tour was unforgettable. Would recommend for anyone who wants to genuinely unwind.',
    },
    {
      id: 2,
      name: "Rafael \"Raf\" Mercado",
      location: 'Manila, Philippines',
      rating: 5,
      text: 'Perfect balance of quiet and adventure. Room was spotless, and the breakfast was honestly one of the best I\'ve had in years.',
    },
    {
      id: 3,
      name: 'Aileen Soriano',
      location: 'Malay, Aklan',
      rating: 4,
      text: 'Close to the beach and the views at sunrise are worth the trip. Small, charming resort that feels curated and personal.',
    },
  ];

  function StarIcon({ filled }) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        className="w-4 h-4 inline-block mr-0.5"
      >
        <path
          strokeWidth="0"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.92-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
        />
      </svg>
    );
  }

  function QuoteIcon() {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-8 h-8 text-slate-300"
        fill="none"
        stroke="currentColor"
      >
        <path strokeWidth="1.5" d="M9 7H7a4 4 0 00-4 4v2a4 4 0 004 4h2v-6H9V7zM17 7h-2a4 4 0 00-4 4v2a4 4 0 004 4h2v-6h0V7z" />
      </svg>
    );
  }

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm max-w-6xl mx-auto" aria-labelledby="reviews-heading">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 id="reviews-heading" className="text-2xl font-semibold">What guests say</h2>
          <p className="text-sm text-slate-500 mt-1">Real feedback from recent guests</p>
        </div>
        <div className="hidden sm:block">
          <QuoteIcon />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.id}
            className="border p-4 rounded-xl bg-white shadow-sm flex flex-col justify-between h-full"
            aria-label={`Review by ${r.name}`}>

            <div className="mb-4">
              <div className="mb-2">
                {/* stars */}
                <div className="text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < r.rating} />
                  ))}
                  <span className="sr-only">{r.rating} out of 5 stars</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">"{r.text}"</p>
            </div>

            <footer className="mt-4 pt-4 border-t text-sm text-slate-600">
              <div className="font-medium text-slate-800">{r.name}</div>
              <div className="text-xs">{r.location}</div>
            </footer>
          </article>
        ))}
      </div>

      <div className="mt-6 text-xs text-slate-400">Verified stays • Reviews collected in the past 12 months</div>
    </section>
  );
}
