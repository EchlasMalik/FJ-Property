import { Link } from 'react-router-dom'
import Navbar from '../components/fj/Navbar.jsx'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar alwaysSolid />
      <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
          404
        </span>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase text-white">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
        >
          Back to Home
        </Link>
      </section>
    </div>
  )
}
