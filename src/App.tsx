import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 text-center">
      <div>
        <h1 className="font-display text-9xl font-bold text-navy/10 mb-4 animate-pulse">404</h1>
        <h2 className="text-2xl font-bold text-navy mb-8">Page non trouvée</h2>
        <p className="text-slate-gray mb-8">L'aiguillage semble vous avoir mené sur une voie de garage.</p>
        <a href="/" className="px-8 py-3 bg-navy text-white rounded-full font-bold hover:bg-burgundy transition-all">Retour en gare</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/mentions-legales" element={
          <LegalPage title="Mentions Légales">
            <h2>Éditeur du site</h2>
            <p>Le site thomasghorbani.fr est édité par Thomas Ghorbani, résidant à Rambouillet.</p>
            <p>Email : contact@thomasghorbani.fr</p>
            
            <h2>Hébergement</h2>
            <p>Ce site est hébergé sur les infrastructures de Google Cloud Platform (Cloud Run).</p>
            
            <h2>Développement</h2>
            <p>Conception par Louis Rouanet (Arx Systema) pour Thomas Ghorbani.</p>
            
            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu (textes, images, expertise ferroviaire) est la propriété exclusive de Thomas Ghorbani, sauf mention contraire.</p>
          </LegalPage>
        } />

        <Route path="/politique-de-confidentialite" element={
          <LegalPage title="Politique de Confidentialité">
            <h2>Données personnelles</h2>
            <p>Les données collectées via le formulaire de contact ou l'emailing direct sont uniquement destinées à la prise de contact professionnelle et ne sont jamais cédées à des tiers.</p>
            
            <h2>Cookies</h2>
            <p>Le site utilise des cookies techniques essentiels au bon fonctionnement et à l'analyse anonyme d'audience.</p>
            
            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande.</p>
          </LegalPage>
        } />

        <Route path="/rgaa" element={
          <LegalPage title="Déclaration RGAA">
            <p>Thomas Ghorbani s'engage à rendre son service accessible, conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005.</p>
            <p>À cette fin, les landmarks HTML5 et la hiérarchie des titres ont été respectés. Les contrastes ont été vérifiés pour assurer une lisibilité optimale.</p>
            <p>Cette déclaration s'applique au site : thomasghorbani.fr</p>
          </LegalPage>
        } />

        <Route path="/accessibilite" element={
          <LegalPage title="Accessibilité">
            <p>Nous nous efforçons d'assurer une expérience utilisateur fluide pour tous, y compris les personnes en situation de handicap.</p>
            <p>Le site respecte les principes suivants :</p>
            <ul>
              <li>Contrastes de couleurs conformes aux normes WCAG AA.</li>
              <li>Structure sémantique claire pour les technologies d'assistance.</li>
              <li>Navigation au clavier optimisée.</li>
            </ul>
            <p>Pour tout problème rencontré, veuillez nous contacter à l'adresse contact@thomasghorbani.fr.</p>
          </LegalPage>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
