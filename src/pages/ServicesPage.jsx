import { motion } from 'framer-motion'
import { PhoneCall, Hammer, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/fj/Navbar.jsx'
import ServicesSection from '../components/fj/ServicesSection.jsx'
import FinalCTA from '../components/fj/FinalCTA.jsx'

const STEPS = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Get In Touch',
    text: 'Call, WhatsApp, or fill out our quote form and tell us what you need doing.',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'We Get To Work',
    text: 'Our team turns up on time, fully equipped, and gets started straight away.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Job Done, Guaranteed',
    text: 'Walk away knowing it was handled properly — no shortcuts, no surprises.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar alwaysSolid />
      <ServicesSection standalone />

      <section className="border-t border-gold/40 bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              How It Works
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black uppercase text-white">
              Simple, Start To Finish
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative border border-white/10 bg-white/5 p-6"
                >
                  <span className="absolute -top-2 right-4 font-display text-6xl font-black text-white/5 select-none">
                    {step.number}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-gold/15">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-white/60">{step.text}</p>
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
