import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const ACCENT = '#f0076f'

export default function Hero({ onSeeDifferent }) {
  return (
    <section className="relative pt-28 sm:pt-32" id="top">
      {/* Gradient backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,7,111,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.25),transparent_40%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Hybrid Intelligence. <span style={{ color: ACCENT }}>Decisive Advantage.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-slate-300"
            >
              AI technology + human expertise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={onSeeDifferent}
                className="px-5 py-3 rounded-md text-white font-medium shadow-lg"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}
              >
                See How We're Different
              </button>
            </motion.div>
          </div>

          {/* Spline Visual */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Split comparison labels */}
            <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-between px-4 text-xs uppercase tracking-wider">
              <span className="text-slate-300">Traditional Agency</span>
              <span className="text-white" style={{ color: ACCENT }}>Making Science Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
