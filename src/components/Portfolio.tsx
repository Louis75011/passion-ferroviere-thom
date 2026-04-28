import { motion } from 'motion/react';

const images = [
  "https://i.ibb.co/C3nqT2VS/train6.jpg",
  "https://i.ibb.co/CK1f0fT9/train5.jpg",
  "https://i.ibb.co/RksVp5SH/train4.jpg",
  "https://i.ibb.co/PZyh36jC/train-3.jpg",
  "https://i.ibb.co/gLjtF1vT/train2.jpg",
  "https://i.ibb.co/DxbNNTL/train.jpg"
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              className="w-20 h-1 bg-burgundy mb-6 origin-left"
            />
            <h2 className="special-title text-4xl font-bold text-navy">
              Portfolio <span className="italic font-serif font-normal text-burgundy">Ferroviaire</span>
            </h2>
          </div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-gray font-bold max-w-xs md:text-right">
            Capturer l'essence de la mobilité et le génie civil au travers du rail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden aspect-[16/10] group bg-navy/5"
            >
              <img 
                src={src} 
                alt={`Train ferroviaire ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
