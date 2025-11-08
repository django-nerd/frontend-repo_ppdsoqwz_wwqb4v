import React from 'react';

const About = ({ about }) => {
  const { summary_paragraphs = [], core_competencies = [], stats = [] } = about;
  return (
    <section className="mx-auto mt-12 max-w-7xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-slate-900">About</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            {summary_paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">Core Competencies</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {core_competencies.map((c, i) => (
                <li key={i} className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200">{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-center text-white">
                <div className="text-2xl font-bold">{s.value}{s.suffix || ''}</div>
                <div className="text-xs opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
