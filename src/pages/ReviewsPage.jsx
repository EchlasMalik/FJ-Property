import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Navbar from '../components/fj/Navbar.jsx'
import ReviewsSection from '../components/fj/ReviewsSection.jsx'
import FinalCTA from '../components/fj/FinalCTA.jsx'

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar alwaysSolid />
      <ReviewsSection standalone />

      <section className="bg-[#f4f6fb] py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-4 font-display text-3xl sm:text-4xl font-black text-navy">
              4.9 / 5
            </p>
            <p className="mt-2 text-navy/60">
              Based on real customer feedback across Birmingham, Coventry,
              Solihull and Walsall.
            </p>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
