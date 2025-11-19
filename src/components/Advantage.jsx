import { motion } from 'framer-motion'
import { Play, Users, Lightbulb } from 'lucide-react'

const ACCENT = '#f0076f'

const Card = ({ icon: Icon, title, text, cta }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-xl"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}>
        <Icon className="text-white" size={20} />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div>
    <p className="mt-4 text-slate-300">{text}</p>
    <button className="mt-6 inline-flex items-center gap-2 text-white font-medium" style={{ color: ACCENT }}>
      {cta}
    </button>
  </motion.div>
)

export default function Advantage() {
  return (
    <section id="advantage" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white text-center"
        >
          Three reasons we're different.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card icon={Play} title="Autonomous" text="Autonomous campaigns. Zero brief." cta="Watch Demo" />
          <Card icon={Users} title="Strategic" text="Strategic guidance. Not just data." cta="Meet Experts" />
          <Card icon={Lightbulb} title="Innovation" text="Continuous innovation." cta="See Our Approach" />
        </div>
      </div>
    </section>
  )
}
