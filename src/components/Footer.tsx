import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="h-16 bg-white border-t border-navy/10 px-6 md:px-10 flex items-center justify-between text-[9px] md:text-[10px] text-slate-gray uppercase tracking-[0.2em] font-medium">
      <div className="hidden sm:block">
        © {new Date().getFullYear()} Thomas Ghorbani — Consultant Expert Ferroviaire
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <Link to="/accessibilite" className="hover:text-burgundy transition-colors">Accessibilité</Link>
        <Link to="/mentions-legales" className="hover:text-burgundy transition-colors">Mentions Légales</Link>
        <Link to="/politique-de-confidentialite" className="hover:text-burgundy transition-colors">Confidentialité</Link>
        <span className="text-burgundy font-bold hidden md:inline">Expertise Rail France</span>
      </div>
    </footer>
  );
}
