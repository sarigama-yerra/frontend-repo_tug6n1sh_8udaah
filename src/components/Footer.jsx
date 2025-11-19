import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-slate-300">
          <div>
            <div className="text-white font-semibold text-lg">Making Science</div>
            <p className="mt-3 text-sm text-slate-400">Hybrid Intelligence platform combining AI technology and human expertise.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#platform" className="hover:text-white">Platform</a></li>
              <li><a href="#proof" className="hover:text-white">Proof</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Resources</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-slate-400 text-sm">
          <div>© {new Date().getFullYear()} Making Science. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
