import SectionTitle from "../components/SectionTitle";
import { profile, hobbies } from "../data";
export default function About() {
  return (
    <section className="py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Get to know me"
          title="About Me"
          
        />
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800">
              
              <p className="text-zinc-500 dark:text-zinc-400 leading-8">
                <div className="space-y-5 whitespace-pre-line leading-relaxed">
  {profile.about}
</div>
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 leading-8 mt-4">
                I enjoy working across the full development lifecycle
                understanding a problem, designing a solution, building it,
                testing it and improving it through feedback.
              </p>
            </div>
          </div>
          <aside className="md:col-span-2">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8">
              <h2 className="font-display text-xl font-bold mb-5">
                Quick details
              </h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-zinc-400">Name</dt>
                  <dd className="font-medium mt-1">{profile.name}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Role</dt>
                  <dd className="font-medium mt-1">{profile.role}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Location</dt>
                  <dd className="font-medium mt-1">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Email</dt>
                  <dd className="font-medium mt-1">{profile.email}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <h2 className="font-display text-xl font-bold mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((x) => (
                  <span
                    key={x}
                    className="text-xs px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
