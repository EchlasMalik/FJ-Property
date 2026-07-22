import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'

const PHONE_1 = '07300 050696'
const PHONE_1_TEL = 'tel:07300050696'

const LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ alwaysSolid = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  const solid = alwaysSolid || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-[#0D1B3E]/95 backdrop-blur shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLinkClick} className="shrink-0 py-1">
            <Logo className="h-20 sm:h-24 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-display text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={PHONE_1_TEL}
              className="inline-flex items-center gap-2 bg-gold px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center p-2 text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0D1B3E]/98 backdrop-blur border-t border-gold/20"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="py-3 font-display text-base font-semibold uppercase tracking-wide text-white/90 hover:text-gold border-b border-white/10 last:border-b-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_1_TEL}
                onClick={handleLinkClick}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-gold px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-hover"
              >
                <Phone className="h-4 w-4" />
                Call Now — {PHONE_1}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
