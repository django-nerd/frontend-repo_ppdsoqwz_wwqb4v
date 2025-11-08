import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Skills = ({ skills }) => {
  const { top_skills = [], categories = [] } = skills;
  return (
    <section className="mx-auto mt-12 max-w-7xl">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {top_skills.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200">
              <CheckCircle2 className="h-4 w-4" /> {s}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <div key={idx} className={`rounded-xl p-6 text-white bg-gradient-to-br ${cat.color_gradient}`}>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="rounded-full bg-white/15 px-3 py-1 text-sm ring-1 ring-white/20">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
