import { motion } from 'motion/react';

const expertises = [
  {
    title: "Patrimoine Riche",
    description: "De la naissance du rail en 1827 à la révolution TGV. Études de lignes mythiques et portraits d'ingénieurs.",
    borderColor: "border-navy"
  },
  {
    title: "Tech Moderne",
    description: "Systèmes ERTMS, hydrogène (Alstom Coradia), maintenance prédictive via IoT et jumeaux numériques.",
    borderColor: "border-burgundy"
  },
  {
    title: "Transition",
    description: "Réhabilitation face au climat, trains de nuit, ouverture à la concurrence et automatisation progressive.",
    borderColor: "border-slate-400"
  },
  {
    title: "Analyse Flux",
    description: "Cartographies dynamiques, gestion en temps réel et intelligence artificielle au service de l'exploitation.",
    borderColor: "border-navy"
  },
  {
    title: "Prospective",
    description: "Substitution à l’aérien court courrier et nouveaux modèles de mobilité durable en Europe.",
    borderColor: "border-burgundy"
  },
  {
    title: "Expertise",
    description: "Vulgarisation experte : rendre intelligibles des systèmes complexes pour les acteurs stratégiques.",
    borderColor: "border-slate-400"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white border-b border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="w-20 h-1 bg-navy mb-6 origin-left"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="special-title text-4xl font-bold text-navy"
          >
            Champs d'intervention
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {expertises.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`pt-6 border-t-2 ${exp.borderColor} flex flex-col h-full`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-tighter opacity-40">0{index + 1} / {exp.title.split(' ')[0]}</span>
              </div>
              <h3 className="special-title text-xl font-bold text-navy mb-4">{exp.title}</h3>
              <p className="text-slate-gray leading-snug text-sm">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
