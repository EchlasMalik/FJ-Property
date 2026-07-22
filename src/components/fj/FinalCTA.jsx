import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, ArrowUp } from 'lucide-react'
import Logo from './Logo.jsx'

const PHONE_1 = '07300 050696'
const PHONE_1_TEL = 'tel:07300050696'
const PHONE_2 = '07452 951282'
const PHONE_2_TEL = 'tel:07452951282'
const EMAIL = 'fjpropertyservices3@gmail.com'
const INSTAGRAM_HANDLE = '@fjpropertyservices_'
const INSTAGRAM_URL = 'https://instagram.com/fjpropertyservices_'

export default function FinalCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="border-t border-gold bg-navy">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] text-white">
            Your Property,
            <br />
            <span className="text-gold">Our Priority.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Ready to get started? One call is all it takes to get your job
            booked in with a team that shows up and gets it done.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_1_TEL}
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
            >
              <Phone className="h-5 w-5" />
              {PHONE_1}
            </a>
            <a
              href={PHONE_2_TEL}
              className="inline-flex items-center gap-2 border-2 border-gold px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-gold transition-all hover:bg-gold hover:text-navy hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)]"
            >
              <Phone className="h-5 w-5" />
              {PHONE_2}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo className="h-14 w-auto" />

          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} FJ Property Services. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-gold"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="pb-6 text-center">
          <a
            href="https://nexiorastudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white/30 transition-colors hover:text-gold"
          >
            Crafted by Nexiora Studios
          </a>
        </div>
      </div>
    </section>
  )
}
