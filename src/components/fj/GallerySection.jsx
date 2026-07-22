import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import BeforeAfterCard from './BeforeAfterCard.jsx'

const PAIRS = [
  {
    before: '/gallery/before-1.jpg',
    after: '/gallery/after-1.jpg',
    label: 'House Clearance',
  },
  {
    before: '/gallery/before-2.jpg',
    after: '/gallery/after-2.jpg',
    label: 'Garden Clearance',
  },
  {
    before: '/gallery/before-3.jpg',
    after: '/gallery/after-3.jpg',
    label: 'Removals',
  },
  {
    before: '/gallery/before-4.jpg',
    after: '/gallery/after-4.jpg',
    label: 'Office Removal',
  },
  {
    before: '/gallery/before-5.jpg',
    after: '/gallery/after-5.jpg',
    label: 'Transport / Removals',
  },
  {
    before: '/gallery/before-6.jpg',
    after: '/gallery/after-6.jpg',
    label: 'Furniture Removal',
  },
]

export default function GallerySection({ standalone = false } = {}) {
  return (
    <section
      id="gallery"
      className={`bg-[#f4f6fb] ${standalone ? 'pt-32 pb-24 sm:pt-40' : 'py-24'}`}
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
          <span className="font-display text-sm font-bold uppercase tracking-widest text-gold-hover">
            Proof of Craft
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase text-navy">
            Our Work
          </h2>
          <p className="mt-4 text-navy/60">
            Real jobs, real results. Click a photo to see the transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIRS.map((pair, index) => (
            <BeforeAfterCard
              key={pair.label}
              beforeSrc={pair.before}
              afterSrc={pair.after}
              label={pair.label}
              index={index}
            />
          ))}
        </div>

        {standalone ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: PAIRS.length * 0.08 }}
            className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 border border-dashed border-navy/20 bg-white/50 px-8 py-10 text-center"
          >
            <Clock className="h-8 w-8 text-gold" />
            <p className="font-display text-lg font-bold text-navy">
              More Projects Coming Soon
            </p>
            <p className="text-sm text-navy/60">
              We're adding new completed jobs to this page regularly — check back soon.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: PAIRS.length * 0.08 }}
            className="mt-12 text-center"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-gold hover:text-navy"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
