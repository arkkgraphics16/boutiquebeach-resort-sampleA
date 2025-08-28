// src/components/layout/Header.jsx
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NAV = [
  { id: 'rooms', label: 'Rooms' },
  { id: 'activities', label: 'Activities' },
  { id: 'booking', label: 'Book' },
]

export default function Header() {
  const router = useRouter()
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (router.pathname === '/booking') {
      setActive('booking')
      return
    }

    const sections = NAV.map(n => document.getElementById(n.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        let best = { id: null, ratio: 0 }
        for (const e of entries) {
          const id = e.target.id
          if (e.intersectionRatio > best.ratio) best = { id, ratio: e.intersectionRatio }
        }
        if (best.id) setActive(best.id)
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [router.pathname])

  function handleClick(e, id) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
      window.history.replaceState(null, '', `#${id}`)
    } else {
      if (id === 'booking') router.push('/booking')
    }
  }

  return (
    <header className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + Site name */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="BoutiqueBeach logo"
            className="w-8 h-8 rounded-md object-cover"
            width={32}
            height={32}
          />
          <span className="font-bold text-lg tracking-tight">BoutiqueBeach</span>
        </a>

        {/* Desktop nav (hidden on small screens) */}
        <nav className="hidden sm:flex items-center space-x-3 text-sm" aria-label="Primary">
          {NAV.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => handleClick(e, item.id)}
              className={`inline-block px-3 py-2 rounded transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                active === item.id ? 'bg-amber-200 font-semibold text-black' : 'text-gray-700 hover:text-black hover:bg-amber-50'
              }`}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
              <rect y="0" width="22" height="2" rx="1" className="fill-black" />
              <rect y="8" width="22" height="2" rx="1" className="fill-black" />
              <rect y="16" width="22" height="2" rx="1" className="fill-black" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: simple stacked links */}
      {open && (
        <div className="sm:hidden bg-white border-t">
          <div className="px-4 py-3 flex flex-col">
            {NAV.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={e => {
                  handleClick(e, item.id)
                  setOpen(false)
                }}
                className={`py-3 ${active === item.id ? 'bg-amber-50 font-semibold' : 'text-gray-700'} block`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
