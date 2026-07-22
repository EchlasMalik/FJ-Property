import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/fj/Navbar.jsx'
import GallerySection from '../components/fj/GallerySection.jsx'
import FinalCTA from '../components/fj/FinalCTA.jsx'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar alwaysSolid />
      <GallerySection standalone />

      <section className="border-t border-gold/40 bg-navy py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
              Your Job Could Be
              <span className="text-gold"> Next</span>
            </h2>
            <p className="mt-4 text-white/70">
              Every job is different, but the result is always the same — done
              properly, on time. Get a free, no-obligation quote today.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
