import React from 'react';
import { Mail, PhoneCall, MapPin, Linkedin } from 'lucide-react';

const Contact = ({ contact }) => {
  const { info = [], languages = [], location = {} } = contact;
  return (
    <section id="contact" className="mx-auto my-12 max-w-7xl">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <div className="grid gap-8 p-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">I'm open to freelance projects, internships, and collaborations.</p>

            <ul className="mt-6 space-y-3">
              {info.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.label === 'Email' && <Mail className="h-5 w-5 text-sky-600" />}
                  {item.label === 'Phone' && <PhoneCall className="h-5 w-5 text-green-600" />}
                  {item.label === 'LinkedIn' && <Linkedin className="h-5 w-5 text-blue-700" />}
                  <a href={item.href} className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm ring-1 ring-slate-200 hover:bg-slate-50 bg-gradient-to-r ${item.color_gradient || ''}`}>
                    <span className="font-medium text-slate-900">{item.label}:</span>
                    <span className="text-slate-800 underline-offset-2 group-hover:underline">{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-900">Languages</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {languages.map((l, i) => (
                  <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-800 ring-1 ring-slate-200">
                    {l.name} — {l.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-none text-cyan-300" />
              <div>
                <div className="text-lg font-semibold">{location.city}, {location.country}</div>
                <div className="text-sm text-white/80">{location.availability}</div>
              </div>
            </div>

            <form className="mt-6 space-y-3">
              <div>
                <label className="block text-sm text-white/80">Your Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-300" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm text-white/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-300" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-white/80">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-300" placeholder="Tell me about your project..." />
              </div>
              <button type="button" className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-300">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
