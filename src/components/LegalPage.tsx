import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-gray hover:text-navy mb-8 transition-colors text-sm font-bold"
          >
            <ChevronLeft size={16} />
            Retour à l'accueil
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-navy/5"
          >
            <h1 className="font-display text-4xl font-bold text-navy mb-12">{title}</h1>
            <div className="markdown-body prose prose-slate max-w-none">
              {children}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
