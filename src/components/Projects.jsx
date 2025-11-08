import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const Projects = ({ projects }) => {
  const [active, setActive] = useState(null);

  return (
    <section className="mx-auto mt-12 max-w-7xl">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img src={p.image} alt={p.title} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-1 line-clamp-3 text-sm text-slate-600">{p.description}</p>
                  </div>
                  {p.link && p.link !== '#' && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-700">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.map((t, j) => (
                    <span key={j} className="rounded-full bg-white px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200">{t}</span>
                  ))}
                </div>

                {p.modal_images?.length ? (
                  <button
                    onClick={() => setActive(p)}
                    className="mt-4 inline-flex rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-black"
                  >
                    View Screenshots
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6">
            <div className="max-h-[85vh] w-full max-w-5xl overflow-auto rounded-xl bg-white p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-900">{active.title}</h4>
                <button onClick={() => setActive(null)} className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {active.modal_images.map((src, idx) => (
                  <img key={idx} src={src} alt={`${active.title} ${idx + 1}`} className="w-full rounded-lg border border-slate-200" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
