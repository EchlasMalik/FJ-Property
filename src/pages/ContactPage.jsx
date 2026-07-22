import { motion } from 'framer-motion'
import { Clock, MapPin, MessageCircle } from 'lucide-react'
import Navbar from '../components/fj/Navbar.jsx'
import QuoteForm from '../components/fj/QuoteForm.jsx'
import FinalCTA from '../components/fj/FinalCTA.jsx'

const INFO = [
  {
    icon: Clock,
    title: 'Working Hours',
    text: 'Mon – Sat: 8:00am – 6:00pm\nEmergency call-outs available',
  },
  {
    icon: MapPin,
    title: 'Where We Cover',
    text: 'Birmingham, Coventry, Solihull, Walsall and the surrounding West Midlands',
  },
  {
    icon: MessageCircle,
    title: 'Response Time',
    text: "We typically reply on WhatsApp within minutes during working hours",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navbar alwaysSolid />

      <section className="bg-navy pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
              Get In Touch
            </span>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white">
              Contact Us
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-white/70">
              Fill out the form below and we'll pick it up on WhatsApp — usually
              within minutes during working hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {INFO.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="border border-white/10 bg-white/5 p-6">
                    <div className="flex h-11 w-11 items-center justify-center bg-gold/15">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-sm text-white/60">{item.text}</p>
                  </div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <QuoteForm
                title="Send Us a Message"
                subtitle="We'll reply on WhatsApp as soon as we can."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
