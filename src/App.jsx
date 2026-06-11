import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import AIShowcase from './components/AIShowcase';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Technologies from './components/Technologies';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <Services />
        <AIShowcase />
        <Process />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Technologies />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
