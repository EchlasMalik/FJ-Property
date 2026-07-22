import { motion } from 'framer-motion'
import { Wrench, Smile, Clock3, ShieldCheck } from 'lucide-react'
import Navbar from '../components/fj/Navbar.jsx'
import WhyUsSection from '../components/fj/WhyUsSection.jsx'
import FinalCTA from '../components/fj/FinalCTA.jsx'

const STATS = [
  { icon: Wrench, value: '8+', label: 'Services Under One Roof' },
  { icon: Smile, value: '100%', label: 'Focus On Doing It Right' },
  { icon: Clock3, value: 'Same-Day', label: 'Availability On Most Jobs' },
  { icon: ShieldCheck, value: 'Fully', label: 'Insured & Reliable Team' },
]

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar alwaysSolid />
      <WhyUsSection standalone />

      <section className="bg-[#f4f6fb] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-display text-sm font-bold uppercase tracking-widest text-gold-hover">
              By The Numbers
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black uppercase text-navy">
              What That Looks Like
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border border-navy/10 bg-white p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center bg-navy">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <p className="mt-4 font-display text-2xl font-black text-navy">{stat.value}</p>
                  <p className="mt-1 text-sm text-navy/60">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
