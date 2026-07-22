import { Shield, Users, Zap, PoundSterling } from 'lucide-react'

const BADGES = [
  { icon: Shield, label: 'Reliable Service' },
  { icon: Users, label: 'Professional Team' },
  { icon: Zap, label: 'Fast & Efficient' },
  { icon: PoundSterling, label: 'Affordable Prices' },
]

const LOOP = [...BADGES, ...BADGES, ...BADGES, ...BADGES]

export default function TrustBadges() {
  return (
    <div className="relative w-full overflow-hidden border-y border-gold bg-navy py-5">
      <div className="flex w-max animate-marquee">
        {LOOP.map((badge, i) => {
          const Icon = badge.icon
          return (
            <div key={i} className="flex items-center gap-3 px-8">
              <Icon className="h-5 w-5 text-gold shrink-0" />
              <span className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-wide text-white">
                {badge.label}
              </span>
              <span className="ml-8 text-gold">✦</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
