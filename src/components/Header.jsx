import { useState } from 'react'
import { Menu, Globe, ChevronDown } from 'lucide-react'

const ACCENT = '#f0076f'

export default function Header({ onPilot }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-fuchsia-600 ring-2 ring-white/20 shadow-lg" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }} />
              <span className="text-white font-semibold tracking-tight">Making Science</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#platform" className="text-slate-300 hover:text-white transition">Platform</a>
              <a href="#products" className="text-slate-300 hover:text-white transition flex items-center gap-1">Products <ChevronDown size={14} className="opacity-70" /></a>
              <a href="#proof" className="text-slate-300 hover:text-white transition">Proof</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            </nav>
          </div>

          {/* Right: Lang + CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 text-slate-200/90 hover:text-white px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 transition">
              <Globe size={16} />
              <span className="text-sm">EN</span>
            </button>
            <button
              onClick={onPilot}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}
            >
              Request Pilot
            </button>
            <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm">
              <a href="#platform" className="text-slate-300 hover:text-white transition">Platform</a>
              <a href="#products" className="text-slate-300 hover:text-white transition">Products</a>
              <a href="#proof" className="text-slate-300 hover:text-white transition">Proof</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
