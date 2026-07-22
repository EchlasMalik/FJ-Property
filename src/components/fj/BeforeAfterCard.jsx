import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, RotateCcw, ImageOff, Maximize2, X } from 'lucide-react'

function ImageOrPlaceholder({ src, alt, tag, className, style, animate }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        style={style}
        className={`${className} flex flex-col items-center justify-center gap-2 bg-navy/95 text-white/40`}
      >
        <ImageOff className="h-8 w-8" />
        <span className="font-display text-xs font-semibold uppercase tracking-wide">
          Add {tag} photo
        </span>
      </div>
    )
  }

  if (animate) {
    return (
      <motion.img
        src={src}
        alt={alt}
        style={style}
        initial={false}
        animate={animate}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onError={() => setFailed(true)}
        className={className}
      />
    )
  }

  return <img src={src} alt={alt} style={style} onError={() => setFailed(true)} className={className} />
}

function Lightbox({ beforeSrc, afterSrc, label, revealed, onToggle, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] max-w-5xl w-full"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative overflow-hidden border border-gold/40 bg-navy">
          <img
            src={beforeSrc}
            alt={`${label} — before`}
            className="max-h-[85vh] w-full object-contain"
          />
          <motion.img
            src={afterSrc}
            alt={`${label} — after`}
            initial={false}
            animate={{ opacity: revealed ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-contain"
          />

          <span
            className={`absolute top-4 left-4 px-3 py-1 font-display text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${
              revealed
                ? 'bg-gold text-navy'
                : 'border border-white/40 bg-navy/70 text-white backdrop-blur-sm'
            }`}
          >
            {revealed ? 'After' : 'Before'}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-display text-lg font-bold text-white">{label}</span>
          <button
            type="button"
            onClick={onToggle}
            className="flex shrink-0 items-center gap-1.5 bg-gold px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-hover"
          >
            {revealed ? (
              <>
                <RotateCcw className="h-3.5 w-3.5" />
                Show Before
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5" />
                Show After
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function BeforeAfterCard({ beforeSrc, afterSrc, label, index = 0 }) {
  const [revealed, setRevealed] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const toggleReveal = () => setRevealed((v) => !v)

  return (
    <>
      <motion.div
        role="button"
        tabIndex={0}
        onClick={toggleReveal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleReveal()
          }
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        aria-pressed={revealed}
        className="group relative block w-full aspect-[4/3] cursor-pointer overflow-hidden border-2 border-transparent bg-navy text-left transition-colors hover:border-gold focus:outline-none focus-visible:border-gold"
      >
        <ImageOrPlaceholder
          src={beforeSrc}
          alt={`${label} — before`}
          tag="before"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <ImageOrPlaceholder
          src={afterSrc}
          alt={`${label} — after`}
          tag="after"
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: revealed ? 1 : 0 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/5 to-transparent transition-opacity group-hover:opacity-90" />

        <span
          className={`absolute top-4 left-4 px-3 py-1 font-display text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${
            revealed
              ? 'bg-gold text-navy'
              : 'border border-white/40 bg-navy/70 text-white backdrop-blur-sm'
          }`}
        >
          {revealed ? 'After' : 'Before'}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setLightboxOpen(true)
          }}
          aria-label={`Enlarge ${label} photo`}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4">
          <span className="font-display text-lg font-bold text-white">{label}</span>
          <span className="flex shrink-0 items-center gap-1.5 bg-black/50 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors group-hover:bg-gold group-hover:text-navy">
            {revealed ? (
              <>
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5" />
                Reveal
              </>
            )}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            beforeSrc={beforeSrc}
            afterSrc={afterSrc}
            label={label}
            revealed={revealed}
            onToggle={toggleReveal}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
