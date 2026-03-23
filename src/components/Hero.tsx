import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bannerImg from "../images/banner.jpg";


interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#1a2332] via-[#2d3e50] to-[#1a2332]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
  src={bannerImg}
  alt="Modern printing technology"
  className="w-full h-full object-cover opacity-10"
/>
       
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 backdrop-blur-sm border border-[#d4a574]/30 rounded-sm text-[#d4a574] mb-8 font-['Montserrat'] text-sm tracking-wide">
            <span className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse"></span>
            <span>Celebrating a Century of Excellence</span>
          </div>
          
          <h1 className="font-['Montserrat'] text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-semibold">
            100 Years of<br />
            Printing Excellence
          </h1>
          
          <p className="font-['Lora'] text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
            From classic craftsmanship to cutting-edge technology — we've been bringing ideas to life in print since 1925.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveSection('services')}
              className="group bg-[#d4a574] hover:bg-[#c49563] text-white px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl font-['Montserrat'] font-medium"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={() => setActiveSection('contact')}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 font-['Montserrat'] font-medium"
            >
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d4a574]/5 rounded-tl-full"></div>
    </section>
  );
}
