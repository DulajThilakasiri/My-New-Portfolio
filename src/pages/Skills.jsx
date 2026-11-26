
import SectionTitle from "../components/SectionTitle";
import { skills } from "../data";


import {
  Atom,
  Code,
  Database,
  Cloud,
  GitBranch,

  Globe,
  Braces,
  FileCode,
  Palette,
  Terminal,
} from "lucide-react";

const icons = ["⌘", "</>", "▦", "⚙"];

// Technology icons and brand colors
const techIcons = {
  React: { icon: Atom, color: "#61DAFB" },
  "Vue.js": { icon: Globe, color: "#4FC08D" },
  JavaScript: { icon: Braces, color: "#F7DF1E" },
  HTML5: { icon: Globe, color: "#E34F26" },
  CSS3: { icon: Palette, color: "#1572B6" },
  "Tailwind CSS": { icon: Palette, color: "#06B6D4" },

  PHP: { icon: FileCode, color: "#777BB4" },
  Laravel: { icon: Terminal, color: "#FF2D20" },
  CodeIgniter: { icon: Code, color: "#EF4223" },
  Python: { icon: FileCode, color: "#3776AB" },
  Flask: { icon: Code, color: "#FFFFFF" },
  "REST APIs": { icon: Globe, color: "#A1A1AA" },

  MySQL: { icon: Database, color: "#4479A1" },
  PostgreSQL: { icon: Database, color: "#4169E1" },
  "Microsoft SQL Server": { icon: Database, color: "#CC2927" },
  DynamoDB: { icon: Database, color: "#4053D6" },

  Git: { icon: GitBranch, color: "#F05032" },
 GitHub: { icon: Code, color: "#FFFFFF" },
  Postman: { icon: Globe, color: "#FF6C37" },
  AWS: { icon: Cloud, color: "#FF9900" },
  "CI/CD fundamentals": { icon: Terminal, color: "#A78BFA" },
};

export default function Skills() {
  return (
    <section className="py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="My toolkit"
          title="Skills & Technologies"
         
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([group, items], i) => (
            <article
              key={group}
              className="card-h bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800 hover:border-accent"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center text-accent text-xl mb-6">
                {icons[i]}
              </div>

              <h2 className="font-display font-bold text-xl mb-5">
                {group}
              </h2>

              <div className="flex flex-wrap gap-2">
                {items.map((s) => {
                  const tech = techIcons[s];
                  const Icon = tech?.icon;

                  return (
                    <span
                      key={s}
                      className="stag inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-accent transition-colors"
                    >
                      {Icon && (
                        <Icon
                          size={14}
                          color={tech.color}
                          className="shrink-0"
                        />
                      )}
                      {s}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
