// File: src/components/layout/Header.jsx
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

  useEffect(() => {
    // if on a dedicated page (like /booking), mark appropriately
    if (router.pathname === '/booking') {
      setActive('booking')
      return
    }

    const sections = NAV.map(n => document.getElementById(n.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        // pick the section with highest intersection ratio
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
      // small focus for keyboard users
      el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
      window.history.replaceState(null, '', `#${id}`)
    } else {
      // fallback to a route (e.g., booking page)
      if (id === 'booking') router.push('/booking')
    }
  }

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-40">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-bold">BoutiqueBeach</div>

        <nav className="space-x-4 text-sm" aria-label="Primary">
          {NAV.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => handleClick(e, item.id)}
              className={`inline-block px-3 py-2 rounded transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-300 ${active === item.id ? 'bg-amber-200 font-semibold text-black' : 'text-gray-700 hover:text-black hover:bg-amber-50'}` }
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
