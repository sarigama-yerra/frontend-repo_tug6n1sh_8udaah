import { motion } from 'framer-motion'

const ACCENT = '#f0076f'

export default function NewRules() {
  const items = [
    { from: 'Hours', to: 'Intelligence' },
    { from: 'Optimization', to: 'Autonomy' },
    { from: 'Projects', to: 'Perpetual' },
  ]

  return (
    <section id="platform" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white text-center"
        >
          While they're stuck in the past, we're 5 light years ahead.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-xl"
            >
              <div className="text-slate-300">{it.from} →</div>
              <div className="mt-1 text-2xl font-semibold" style={{ color: ACCENT }}>{it.to}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#advantage" className="inline-flex items-center justify-center px-5 py-3 rounded-md text-white font-medium" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}>
            Understand Hybrid Intelligence
          </a>
        </div>
      </div>
    </section>
  )
}
