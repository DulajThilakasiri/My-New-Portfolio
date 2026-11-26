const services = [
  [
    "Web Application Development",
    "Building responsive, reliable web applications with modern frontend and backend technologies.",
    "⌘",
  ],
  [
    "Backend & API Development",
    "Designing REST APIs, database integrations and maintainable application architecture.",
    "</>",
  ],
  [
    "Digital Solutions",
    "Combining software development and creative digital skills to help businesses grow.",
    "✦",
  ],
   [
    "Graphic Design",
    "Creating eye-catching flyers, posters, banners, social media designs, branding materials and other visual content.",
    "✎",
  ],
  
];

export default function Services() {
  return (
    

<section className="py-8 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              What I do
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
              Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(([title, desc, icon], i) => (
              <article
                key={title}
                className={`reveal d${i + 1} card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 text-xl text-accent">
                  {icon}
                </div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
  )
}