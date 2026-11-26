import SectionTitle from "../components/SectionTitle";
import { profile } from "../data";
export default function Contact() {
  return (
    <section className="py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Get in touch"
          title="Let's work together"
      
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-9 md:p-11 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl mb-4">
                Let's talk about your idea.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-9">
                I'm interested in software development opportunities,
                collaborations and meaningful projects.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent-light"
              >
                Send an email →
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-9 border border-zinc-100 dark:border-zinc-800">
            <div className="space-y-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium hover:text-accent"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  Location
                </p>
                <p className="font-medium">{profile.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  GitHub
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  View GitHub profile →
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  LinkedIn
                </p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  Connect on LinkedIn →
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                  WHATS APP
                </p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  +94 78 66 40 874
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
