import { motion } from 'framer-motion'

const ACCENT = '#f0076f'

export default function CaseStudy() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-800/60 shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <div className="h-8 w-28 rounded bg-white/90 text-slate-900 font-semibold flex items-center justify-center">Brand</div>
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white">[Brand] Achieved +11% Quote Growth with Autonomous Campaigns</h3>
              <p className="mt-4 text-slate-300">"[Testimonial quote from CMO]"</p>
              <p className="mt-2 text-slate-400">— Name, Title, Company</p>
              <button className="mt-6 inline-flex items-center px-5 py-3 rounded-md text-white font-medium" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}>
                See More Proof
              </button>
            </div>
            <div className="p-8 sm:p-10 bg-slate-900/50">
              {/* Simple before/after bars */}
              <div className="space-y-6">
                <div>
                  <div className="text-slate-300 mb-2">Before</div>
                  <div className="h-3 rounded bg-slate-700">
                    <div className="h-3 rounded" style={{ width: '65%', background: '#475569' }} />
                  </div>
                </div>
                <div>
                  <div className="text-slate-300 mb-2">After</div>
                  <div className="h-3 rounded bg-slate-700">
                    <div className="h-3 rounded" style={{ width: '76%', background: ACCENT }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
