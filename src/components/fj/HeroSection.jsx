import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import TrustBadges from './TrustBadges.jsx'
import QuoteForm from './QuoteForm.jsx'

const HERO_IMAGE = '/hero-background.png'

const PHONE_1_TEL = 'tel:07300050696'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-navy"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gold/60 z-10" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 pb-6 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="inline-block bg-gold px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-navy">
              Your Property, Our Priority
            </span>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] text-white">
              One Call.
              <br />
              <span className="text-gold">We Do</span>
              <br />
              It All.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80">
              From full house removals and clearances to plumbing, transport and
              general handyman work — FJ Property Services is the one call
              tradespeople and homeowners across the UK trust to get the job
              done right, every time.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={PHONE_1_TEL}
                className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-gold px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-gold hover:text-navy"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 shrink-0">
        <TrustBadges />
      </div>
    </section>
  )
}
