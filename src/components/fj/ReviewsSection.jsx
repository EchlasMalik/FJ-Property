import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BadgeCheck, ArrowRight } from 'lucide-react'

const REVIEWS = [
  {
    quote:
      'FJ Property Services cleared our entire house in a single day. Absolutely phenomenal work — every room was spotless when they finished. Cannot recommend them highly enough.',
    name: 'Sarah M.',
    location: 'Birmingham',
    service: 'House Clearance',
  },
  {
    quote:
      'Called them for an emergency plumbing job on a Sunday. They were at my door within the hour and had everything fixed before lunch. Professional, polite, and fairly priced.',
    name: 'James T.',
    location: 'Coventry',
    service: 'Plumbing',
  },
  {
    quote:
      'Used FJ for a full house removal — they wrapped everything with care, loaded up efficiently, and not a single item was damaged. Stress-free from start to finish.',
    name: 'Linda K.',
    location: 'Solihull',
    service: 'Removals',
  },
  {
    quote:
      'Needed a sofa collected and delivered to my new flat same day. They turned up on time, handled it perfectly, and the price was incredibly reasonable. Five stars.',
    name: 'David R.',
    location: 'Walsall',
    service: 'Single Items',
  },
]

export default function ReviewsSection({ standalone = false } = {}) {
  return (
    <section
      id="reviews"
      className={`bg-navy ${standalone ? 'pt-32 pb-24 sm:pt-40' : 'py-24'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-3 h-1 w-16 bg-gold" />
          <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Field Reports
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase text-white">
            Client Reviews
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-white/10 bg-white/5 p-7 hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  {review.service}
                </span>
              </div>

              <p className="mt-5 font-display text-lg italic leading-relaxed text-white/90">
                "{review.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-gold font-display text-lg font-bold text-navy">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">{review.name}</p>
                  <p className="text-xs text-white/50">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: REVIEWS.length * 0.08 }}
            className="mt-12 text-center"
          >
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
            >
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
