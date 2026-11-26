import { Link } from "react-router-dom";
import { profile } from "../data";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display font-bold text-lg">
          <span className="text-zinc-900 dark:text-white">dulaj</span>
          <span className="text-accent">.</span>
        </Link>
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
