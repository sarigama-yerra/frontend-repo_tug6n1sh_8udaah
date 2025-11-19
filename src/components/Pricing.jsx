import { motion } from 'framer-motion'

const ACCENT = '#f0076f'

const tiers = [
  {
    name: 'Starter Pilot',
    price: '$9k',
    desc: '30-day pilot to prove ROI fast',
    features: ['1 product or line', 'Autonomous campaigns', 'Weekly strategy sync'],
  },
  {
    name: 'Growth',
    price: '$24k',
    desc: 'Scale across channels and markets',
    features: ['Multi-channel orchestration', 'AI + human co-pilot', 'Attribution & insights'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Global scope with governance',
    features: ['SSO & security', 'Custom models & SLAs', 'Executive enablement'],
  },
]

export default function Pricing({ onPilot }) {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white text-center"
        >
          Pricing that scales with outcomes
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl border p-6 shadow-xl ${t.highlighted ? 'border-pink-500/40 bg-slate-900/60' : 'border-white/10 bg-slate-900/40'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <div className="text-3xl font-extrabold" style={{ color: ACCENT }}>{t.price}</div>
              </div>
              <p className="mt-2 text-slate-300">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <button onClick={onPilot} className="mt-6 w-full px-4 py-2 rounded-md text-white font-medium" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}>
                Request Pilot
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
