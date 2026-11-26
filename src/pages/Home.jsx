import { Link } from "react-router-dom";
import { profile } from "../data";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4">
                Software Engineer
              </p>
              <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                Hi, I'm <span className="text-accent">Dulaj</span>
              </h1>
              <p className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-xl mb-10">
                {profile.intro}
              </p>
              <div className="reveal d3 flex flex-wrap items-center gap-5">
                {/* View my work button */}
                <Link
                  to="/projects"
                  className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
                >
                  View my work →
                </Link>

                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-zinc-500 hover:text-[#0A66C2] transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9c0 .85.7 1.55 1.55 1.55h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2ZM8 19H5V9h3v10ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19Z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 .1.77 2.1 3.15 1.62.1-.73.4-1.23.7-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="text-zinc-500 hover:text-accent transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="reveal d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                    3+
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Years experience
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                    8+
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Enterprise Projects
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                    Full
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Stack developer
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal d2 flex justify-center md:justify-end">
              <div className="relative w-[250px] md:w-[250px] lg:w-[350px]">
                <video
                  src="/dark.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-4 left-0 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">
                  Building digital solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-4">
                Have a project in mind?
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Let's build something great.
              </h2>
              
              <Link
                to="/contact"
                className="inline-flex bg-accent text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-accent-light"
              >
                Let's talk →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
