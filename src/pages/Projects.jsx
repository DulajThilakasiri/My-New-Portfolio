import SectionTitle from "../components/SectionTitle";
import { projects } from "../data";

export default function Projects() {
  return (
    <>
      <section className="pt-8 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle eyebrow="Portfolio" title="My Projects" />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="card-h group h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent"
              >
                <div className="photo-frame w-full h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">
                    {p.title}
                  </h2>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
