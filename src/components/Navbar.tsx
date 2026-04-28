import { motion } from 'motion/react';

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-navy/10 h-16 flex items-center justify-between px-6 md:px-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-sm group-hover:bg-burgundy transition-colors duration-300">
            <span className="text-white font-bold text-[10px]">TG</span>
          </div>
          <span className="special-title text-lg font-bold uppercase tracking-widest text-navy transition-colors">
            Thomas Ghorbani
          </span>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold">
        <a href="#expertise" className="text-slate-gray hover:text-burgundy transition-colors">Expertise</a>
        <a href="#about" className="text-slate-gray hover:text-burgundy transition-colors">Parcours</a>
        <a href="#contact" className="px-5 py-2 bg-navy text-white hover:bg-burgundy transition-all duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
