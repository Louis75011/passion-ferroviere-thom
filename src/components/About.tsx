import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F4F4F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-burgundy font-bold text-[10px] uppercase tracking-[0.3em] mb-4"
            >
              Parcours et Vision
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="special-title text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight"
            >
              L'expertise au service du <span className="italic font-serif font-normal">mouvement.</span>
            </motion.h2>
            
            <div className="space-y-6 text-slate-gray text-sm leading-relaxed">
              <p>
                Depuis Rambouillet, Thomas Ghorbani déploie une analyse globale des infrastructures ferroviaires. Son approche conjugue héritage historique et prospective numérique.
              </p>
              <p>
                Ancien ingénieur devenu consultant stratégique, il accompagne les mutations du rail : de l'ouverture à la concurrence aux nouveaux réseaux hydrogène.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="bg-white p-8 border border-navy/5 shadow-sm">
              <span className="text-burgundy font-bold text-[10px] block mb-4">01 / Riguer</span>
              <p className="text-xs leading-relaxed text-slate-gray">
                Une autorité technique indiscutable basée sur une compréhension fine de la mécanique et de la physique ferroviaire.
              </p>
            </div>
            <div className="bg-white p-8 border border-navy/5 shadow-sm">
              <span className="text-burgundy font-bold text-[10px] block mb-4">02 / Pédagogie</span>
              <p className="text-xs leading-relaxed text-slate-gray">
                La capacité de vulgariser des systèmes complexes (ERTMS, maintenance prédictive) pour les rendre actionnables.
              </p>
            </div>
            <div className="bg-navy p-8 col-span-2 text-white">
              <span className="text-white/60 font-bold text-[10px] block mb-4 italic">Ligne Éditoriale</span>
              <p className="special-title text-xl italic leading-relaxed">
                "Offrir une niche experte accessible, entre vulgarisation scientifique et analyse sectorielle."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
