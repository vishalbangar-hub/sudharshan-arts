import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Sustainability } from './components/Sustainability';
import { Testimonials } from './components/Testimonials';
import { OurWork } from './components/OurWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && (
          <>
            <Hero setActiveSection={setActiveSection} />
            <TrustBanner />
            <About isSnapshot={true} />
            <Services isHomepage={true} />
            <FeaturedWork setActiveSection={setActiveSection} />
            <WhyChooseUs />
            <Testimonials isHomepage={true} />
            <Sustainability isHomepage={true} />
          </>
        )}
        
        {activeSection === 'about' && <About isSnapshot={false} />}
        
        {activeSection === 'services' && <Services isHomepage={false} />}
        
        {activeSection === 'work' && <OurWork />}
        
        {activeSection === 'sustainability' && <Sustainability isHomepage={false} />}
        
        {activeSection === 'testimonials' && <Testimonials isHomepage={false} />}
        
        {activeSection === 'contact' && <Contact />}
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}