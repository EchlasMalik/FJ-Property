import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Truck,
  Sofa,
  Home,
  Trash2,
  Wrench,
  PackageCheck,
  Hammer,
  Sprout,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Truck,
    title: 'Removals',
    description: 'Full house and office removals handled start to finish.',
    scope: [
      'Full house and office removals',
      'Packing & wrapping of all items',
      'Disassembly and reassembly of furniture',
      'Insured & damage-free handling',
    ],
  },
  {
    icon: Sofa,
    title: 'Single Items',
    description: 'One-off pickups for furniture and appliances.',
    scope: [
      'Sofas, beds & appliances',
      'Safe handling of bulky items',
      'Same-day availability',
      'Competitive rates',
    ],
  },
  {
    icon: Home,
    title: 'House Clearances',
    description: 'Complete clearances handled with care and discretion.',
    scope: [
      'Full house clearances',
      'End-of-tenancy clearances',
      'Probate clearances',
      'Responsible disposal of items',
    ],
  },
  {
    icon: Trash2,
    title: 'Waste Clearances',
    description: 'Licensed removal of garden, construction and household waste.',
    scope: [
      'Garden & green waste',
      'Construction debris',
      'Bulky household waste',
      'Fully licensed waste carriers',
    ],
  },
  {
    icon: Wrench,
    title: 'Plumbing',
    description: 'Reliable plumbing for repairs, fittings and emergencies.',
    scope: [
      'Leak repairs',
      'Bathroom & kitchen fitting',
      'Boiler & heating work',
      'Emergency call-outs',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Transport / Courier',
    description: 'Fast, secure delivery for business and personal needs.',
    scope: [
      'Same-day delivery',
      'Long-distance transport',
      'Secure & tracked delivery',
      'Business & personal courier',
    ],
  },
  {
    icon: Hammer,
    title: 'Handy Man',
    description: 'All-round home repairs and improvements, done properly.',
    scope: [
      'Flat-pack assembly',
      'Painting & decorating',
      'Shelving & fixtures',
      'General repairs',
    ],
  },
  {
    icon: Sprout,
    title: 'Gardening / Landscaping',
    description: 'Lawn care, hedge trimming and seasonal garden maintenance.',
    scope: [
      'Lawn mowing & edging',
      'Hedge trimming & pruning',
      'Garden tidy-ups & maintenance',
      'Seasonal planting & upkeep',
    ],
  },
]

export default function ServicesSection({ standalone = false } = {}) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      id="services"
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
            What We Do
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase text-navy">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const isOpen = openIndex === index
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group border border-navy/10 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-navy transition-colors group-hover:bg-gold">
                    <Icon className="h-7 w-7 text-gold transition-colors group-hover:text-navy" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60">{service.description}</p>

                  <div className="mt-4 h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-16" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                      {isOpen ? 'Hide scope' : 'View scope'}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-gold-hover" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-navy/40" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 space-y-2 border-t border-navy/10 pt-4"
                  >
                    {service.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            )
          })}
        </div>

        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: SERVICES.length * 0.05 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-gold hover:text-navy"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
