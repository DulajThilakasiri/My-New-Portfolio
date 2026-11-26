import SectionTitle from "../components/SectionTitle";
import { education } from "../data";
export default function Education() {
  return (
    <section className="py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Learning journey"
          title="Education"
         
        />
        <div className="max-w-3xl space-y-5">
          {education.map((e, i) => (
            <article
              key={e.place}
              className="card-h bg-white dark:bg-zinc-900 rounded-2xl p-5 md:p-4 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">
                    {e.detail}
                  </p>
                  <h2 className="font-display font-bold text-xl md:text-2xl">
                    {e.qualification}
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                    {e.place}
                  </p>
                </div>
                <span className="text-sm text-zinc-400 whitespace-nowrap">
                  {e.period}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
