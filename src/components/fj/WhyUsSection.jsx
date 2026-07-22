import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Users, Zap, PoundSterling, ArrowRight } from 'lucide-react'

const BG_IMAGE = '/why-fj-background.png'

const REASONS = [
  {
    number: '01',
    icon: Shield,
    title: 'Reliable Service',
    text: 'We turn up when we say we will, and we finish the job properly — no shortcuts, no excuses.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Professional Team',
    text: 'Experienced, courteous tradespeople who treat your property like it were their own.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Fast & Efficient',
    text: 'Same-day availability across most services, so you\'re never left waiting around.',
  },
  {
    number: '04',
    icon: PoundSterling,
    title: 'Affordable Prices',
    text: 'Straightforward, competitive pricing with no hidden fees or last-minute surprises.',
  },
]

export default function WhyUsSection({ standalone = false } = {}) {
  return (
    <section
      id="why-us"
      className={`relative overflow-hidden bg-navy lg:py-0 lg:min-h-screen lg:flex lg:items-center ${
        standalone ? 'pt-32 pb-24 sm:pt-40' : 'py-24'
      }`}
    >
      <div className="absolute inset-0">
        <img src={BG_IMAGE} alt="" className="h-full w-full object-cover opacity-10" />
      </div>

      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 flex flex-col"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            The Difference
          </span>
          <h2 className="mt-2 font-display text-5xl sm:text-6xl font-black uppercase leading-[0.95] text-white">
            Why
            <br />
            <span className="text-gold">FJ?</span>
          </h2>
          <p className="mt-6 text-white/70 max-w-xs">
            Property services shouldn't mean chasing quotes, missed windows or
            surprise costs. We built FJ Property Services to be the one call
            that actually delivers.
          </p>
          <div className="mt-8 h-32 w-px bg-gradient-to-b from-gold to-transparent" />

          {!standalone && (
            <Link
              to="/why-us"
              className="mt-8 inline-flex w-fit items-center gap-2 border border-gold px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-gold hover:text-navy"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden border border-white/10 bg-white/5 p-6 hover:border-gold/40 transition-colors"
              >
                <span className="absolute -top-2 right-4 font-display text-7xl font-black text-white/5 select-none">
                  {reason.number}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center bg-gold/15">
                  <Icon className="h-6 w-6 text-gold" />
                </div>

                <h3 className="relative mt-5 font-display text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="relative mt-2 text-sm text-white/60">{reason.text}</p>

                <div className="relative mt-4 h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-16" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
