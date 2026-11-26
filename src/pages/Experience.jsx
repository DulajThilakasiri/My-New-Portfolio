import SectionTitle from "../components/SectionTitle";
import { experience } from "../data";
export default function Experience() {
  return (
    <section className="py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Where I've worked"
          title="Experience"
         
        />
        <div className="max-w-4xl space-y-5">
          {experience.map((e, i) => (
            <article
              key={e.company}
              className="card-h bg-white dark:bg-zinc-900 rounded-2xl p-7 md:p-8 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-orange-50 dark:bg-zinc-800 text-accent flex items-center justify-center font-display font-bold text-lg">
                  {e.initials}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h2 className="font-display font-bold text-xl">
                        {e.role}
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                        {e.company}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-400">{e.period}</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-4">
                    {e.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
