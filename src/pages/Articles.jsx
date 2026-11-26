import SectionTitle from "../components/SectionTitle";
import { articles } from "../data";
export default function Articles() {
  return (
    <section className="py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Thoughts & notes"
          title="Articles"
          description="Here is my medium articles"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...articles]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((a, i) => (
            <article
              key={a.title}
              className="card-h bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800 hover:border-accent"
            >
              <p className="text-xs text-accent tracking-widest uppercase mb-4">
                {a.category} · {a.date}
              </p>
              <h2 className="font-display font-bold text-xl mb-3">{a.title}</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {a.description}
              </p>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-6 text-sm font-medium text-zinc-900 dark:text-white hover:text-accent"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
