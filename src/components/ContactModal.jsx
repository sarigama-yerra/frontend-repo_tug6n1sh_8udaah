import { useState } from 'react'

const ACCENT = '#f0076f'

export default function ContactModal({ open, onClose, type = 'contact' }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', notes: '' })
  const [status, setStatus] = useState(null)

  if (!open) return null

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/${type === 'pilot' ? 'pilot' : 'contact'}`
      const payload = type === 'pilot' 
        ? { name: form.name, email: form.email, company: form.company, notes: form.notes }
        : { name: form.name, email: form.email, company: form.company, message: form.message }

      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '', notes: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur p-6">
        <div className="text-white text-xl font-semibold">{type === 'pilot' ? 'Request a Pilot' : 'Contact Us'}</div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="bg-slate-800/60 border border-white/10 rounded px-3 py-2 text-white outline-none focus:ring-2" />
            <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="bg-slate-800/60 border border-white/10 rounded px-3 py-2 text-white outline-none focus:ring-2" />
          </div>
          <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Company" className="w-full bg-slate-800/60 border border-white/10 rounded px-3 py-2 text-white outline-none focus:ring-2" />
          {type === 'pilot' ? (
            <textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Goals or notes (optional)" className="w-full bg-slate-800/60 border border-white/10 rounded px-3 py-2 text-white min-h-[100px] outline-none focus:ring-2" />
          ) : (
            <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="w-full bg-slate-800/60 border border-white/10 rounded px-3 py-2 text-white min-h-[120px] outline-none focus:ring-2" />
          )}
          <div className="flex items-center justify-between">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-white/10 text-slate-200">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-md text-white font-medium" style={{ background: `linear-gradient(135deg, ${ACCENT}, #7c3aed)` }}>
              {status === 'loading' ? 'Sending…' : 'Submit'}
            </button>
          </div>
          {status === 'success' && <div className="text-green-400 text-sm">Thanks! We’ll be in touch shortly.</div>}
          {status === 'error' && <div className="text-red-400 text-sm">Something went wrong. Please try again.</div>}
        </form>
      </div>
    </div>
  )
}
