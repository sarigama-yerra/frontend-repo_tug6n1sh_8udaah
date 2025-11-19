import { motion } from 'framer-motion'

const ACCENT = '#f0076f'

export default function DeRisk({ onPilot }) {
  const bullets = [
    '30-Day Pilots',
    'Modular Entry Points',
    'Outcome-Based Pricing',
    'We only win when you win',
  ]

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white"
        >
          Start small. Scale fast.
        </motion.h2>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-slate-300">
          {bullets.map((b, i) => (
            <motion.li key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }} className={`rounded-xl px-5 py-4 border border-white/10 bg-slate-900/40 ${b.includes('win') ? 'ring-2 ring-pink-500/40' : ''}`}>
              {b.includes('win') ? <strong>{b}</strong> : b}
            </motion.li>
          ))}
        </ul>
        <button onClick={onPilot} className="mt-8 inline-flex items-center px-6 py-3 rounded-md text-white font-medium" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}>
          Design Your Entry Point
        </button>
      </div>
    </section>
  )
}
