import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6 border-b border-navy/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-navy p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle line decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-burgundy/50 group-hover:bg-burgundy transition-colors"></div>
          
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-60">Collaboration Professionnelle</p>
            <h2 className="special-title text-3xl md:text-5xl italic leading-tight mb-6">
              Ouvert à la discussion pour vos projets futurs.
            </h2>
          </div>
          
          <div className="mt-8 md:mt-0">
            <a 
              href="mailto:contact@thomasghorbani.fr" 
              className="inline-block px-10 py-5 border border-white/30 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-navy transition-all duration-500 whitespace-nowrap"
            >
              Envoyer un message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
