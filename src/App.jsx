import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NewRules from './components/NewRules'
import Advantage from './components/Advantage'
import ProofBar from './components/ProofBar'
import CaseStudy from './components/CaseStudy'
import Pricing from './components/Pricing'
import DeRisk from './components/DeRisk'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [openContact, setOpenContact] = useState(false)
  const [openPilot, setOpenPilot] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-pink-600/30 selection:text-white">
      {/* global gradient aura */}
      <div className="fixed inset-0 -z-[1] bg-[radial-gradient(60%_50%_at_50%_10%,rgba(240,7,111,0.18),transparent),radial-gradient(40%_40%_at_80%_10%,rgba(124,58,237,0.18),transparent)] pointer-events-none" />

      <Header onPilot={() => setOpenPilot(true)} />
      <main>
        <Hero onSeeDifferent={() => {
          const el = document.getElementById('platform');
          el?.scrollIntoView({ behavior: 'smooth' })
        }} />
        <NewRules />
        <Advantage />
        <ProofBar />
        <CaseStudy />
        <Pricing onPilot={() => setOpenPilot(true)} />
        <DeRisk onPilot={() => setOpenPilot(true)} />
      </main>
      <Footer />

      {/* Contact triggers hidden for future blog/auth links */}
      <button onClick={() => setOpenContact(true)} className="hidden">Contact</button>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} type="contact" />
      <ContactModal open={openPilot} onClose={() => setOpenPilot(false)} type="pilot" />
    </div>
  )
}

export default App
