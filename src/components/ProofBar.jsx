import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ACCENT = '#f0076f'

function Counter({ from = 0, to = 100, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ val: from }}
        animate={{ val: isInView ? to : from }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        {({ val }) => (
          <div className="text-3xl sm:text-4xl font-extrabold text-white">
            {prefix}{Math.round(val)}{suffix}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default function ProofBar() {
  return (
    <section id="proof" className="relative py-12 border-y border-white/10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter prefix="$" to={750} suffix="M" />
          <Counter to={1000} suffix=" AI-Native Experts" />
          <Counter to={15} suffix=" Global Markets" />
          <Counter prefix="+" to={38} suffix="% ROAS Increase" />
        </div>
      </div>
    </section>
  )
}
