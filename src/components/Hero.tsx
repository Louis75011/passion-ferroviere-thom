import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:grid md:grid-cols-12 border-b border-navy/10 mt-16 overflow-hidden">
      {/* Left Column: Identity */}
      <div className="md:col-span-4 border-r border-navy/10 p-8 md:p-12 flex flex-col justify-between bg-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 w-1.5 h-24 bg-burgundy hidden md:block"></div>
          <div className="relative group">
            <img 
              src="https://i.ibb.co/NgBqPJGg/image.png" 
              alt="Thomas Ghorbani" 
              className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-xl border border-navy/5"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-burgundy mb-1">Localisation</p>
              <p className="text-sm text-slate-gray italic leading-relaxed">
                Rambouillet (78) — Résidence principale<br/>
                Saint-Germain-en-Laye — Week-ends
              </p>
            </div>
            
            <div className="pt-8 border-t border-navy/5">
              <h3 className="special-title text-2xl italic text-navy leading-tight mb-4">
                L'élégance de la précision ferroviaire.
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-gray uppercase tracking-wider">
                Conducteur de projets, expert technique, et passionné d'innovations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Editorial Body */}
      <div className="md:col-span-8 p-12 md:p-16 flex flex-col bg-[#F4F4F2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="special-title text-6xl md:text-8xl font-light text-navy leading-none mb-6">
            Rapport <span className="italic text-burgundy font-serif font-normal">d'expertise</span>
          </h1>
          
          <div className="line-accent w-full mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <span className="font-bold text-navy uppercase tracking-tighter text-[10px] lg:text-[11px] block mb-2">01 / Positionnement Stratégique</span>
                <p className="text-[13px] md:text-[12px] lg:text-lg leading-relaxed">
                  Le ferroviaire constitue un domaine à forte densité technique et culturelle. Un site bien positionné capte les décideurs, les professionnels et les amateurs éclairés. L'enjeu est de transformer cette complexité en levier de croissance numérique.
                </p>
              </div>
              <div>
                <span className="font-bold text-navy uppercase tracking-tighter text-[10px] lg:text-[11px] block mb-2">02 / Technologies Modernes</span>
                <p className="text-[13px] md:text-[12px] lg:text-lg leading-relaxed text-slate-gray">
                  De l'optimisation aérodynamique à la signalisation numérique ERTMS, l'innovation est le cœur battant du rail. L'hybridation (Alstom Coradia iLint) et la maintenance prédictive via l'IoT redéfinissent l'exploitation moderne.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="font-bold text-burgundy uppercase tracking-tighter text-[10px] lg:text-[11px] block mb-2">03 / Prospective & Climat</span>
                <p className="text-[13px] md:text-[12px] lg:text-lg leading-relaxed text-slate-gray">
                  La réhabilitation du train face aux enjeux climatiques place l'axe ferroviaire au centre de la transition énergétique. Substitution au court-courrier aérien et retour en grâce des trains de nuit sont les piliers de demain.
                </p>
              </div>
              <div>
                <span className="font-bold text-burgundy uppercase tracking-tighter text-[10px] lg:text-[11px] block mb-2">Note de l'Expert</span>
                <p className="text-[13px] md:text-[12px] lg:text-lg leading-relaxed italic font-serif text-navy">
                  "L'autorité technique ne vaut que si elle est accompagnée d'une pédagogie rigoureuse. Ma mission est de rendre intelligible l'avenir du mouvement."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-auto pt-10 border-t border-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex gap-4">
              <div className="px-4 py-2 border border-navy/20 text-[10px] uppercase tracking-widest font-bold text-navy">
                Infrastructure
              </div>
              <div className="px-4 py-2 border border-navy/20 text-[10px] uppercase tracking-widest font-bold text-navy">
                Technologie
              </div>
            </div>
            <a href="#expertise" className="text-[10px] uppercase tracking-[0.3em] font-bold text-burgundy hover:translate-x-2 transition-transform inline-flex items-center gap-2 group">
              Explorer le domaine <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
