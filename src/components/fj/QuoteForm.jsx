import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'
import { SERVICES, buildWhatsAppUrl } from '../../lib/contactRequest.js'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

export default function QuoteForm({
  title = 'Get a Free Quote',
  subtitle = "Tell us what you need — we'll reply on WhatsApp fast.",
  className = '',
}) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.phone.trim()) {
      setToast({ type: 'error', message: 'Name and phone number are required.' })
      setTimeout(() => setToast(null), 4500)
      return
    }

    setStatus('loading')
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const url = buildWhatsAppUrl(form)
      window.open(url, '_blank', 'noopener,noreferrer')
      setToast({ type: 'success', message: 'Opening WhatsApp to send your enquiry...' })
      setForm(initialForm)
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setStatus('idle')
      setTimeout(() => setToast(null), 4500)
    }
  }

  return (
    <div className={`border border-gold/50 bg-navy/70 backdrop-blur-sm p-5 sm:p-6 shadow-2xl ${className}`}>
      <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
      <p className="mt-1 text-sm text-white/60">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/30 outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="07XXX XXXXXX"
            className="w-full border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/30 outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/30 outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
            Select Service
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-white/20 bg-white/5 px-4 py-2 text-white outline-none focus:border-gold transition-colors [&>option]:text-navy"
          >
            <option value="">Choose a service...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us a bit about the job..."
            className="w-full border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/30 outline-none focus:border-gold transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gold px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover hover:shadow-[0_8px_30px_rgba(212,160,23,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Initiate Service'}
        </button>
      </form>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-2 border border-gold/40 bg-navy px-5 py-3 shadow-2xl"
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 text-red-400 shrink-0" />
            )}
            <span className="text-sm font-medium text-white">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
