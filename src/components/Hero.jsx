import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail } from 'lucide-react';

const Hero = ({ personal }) => {
  const { name, main_title, summary, resume_link, profile_image } = personal;
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1">
          <p className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-sky-300 ring-1 ring-white/15">
            Portfolio • Interactive 3D
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Hi, I'm <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">{name}</span>
          </h1>
          <p className="mt-3 text-lg text-slate-200 md:text-xl">{main_title}</p>
          <p className="mt-4 max-w-2xl text-slate-300">{summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resume_link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </div>

        <div className="mt-6 w-full max-w-xs self-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:mt-0 md:max-w-sm">
          <img
            src={profile_image}
            alt={`${name} profile`}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
