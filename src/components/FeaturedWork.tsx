import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface FeaturedWorkProps {
  setActiveSection: (section: string) => void;
}

export function FeaturedWork({ setActiveSection }: FeaturedWorkProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects: FeaturedProject[] = [
    {
      id: '1',
      title: 'Premium Corporate Brochures',
      category: 'Commercial Printing',
      image: 'https://images.unsplash.com/photo-1717994818194-c5a474939403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGNhdGFsb2clMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Luxury brochures featuring premium paper and gold foil accents'
    },
    {
      id: '2',
      title: 'Luxury Product Packaging',
      category: 'Packaging & Labels',
      image: 'https://images.unsplash.com/photo-1759563871371-eb0ec31824a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYWNrYWdpbmclMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Custom packaging with sustainable materials and intricate embossing'
    },
    {
      id: '3',
      title: 'Literary Collection Publishing',
      category: 'Publishing Solutions',
      image: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkZXNpZ258ZW58MXx8fHwxNzYzNjE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete book series with hardcover binding and custom endpapers'
    },
    {
      id: '4',
      title: 'Magazine & Editorial Design',
      category: 'Publishing Solutions',
      image: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NDA4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-quality magazine printing with vibrant color reproduction'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-4">Featured Work</h2>
          <p className="font-['Lora'] text-xl text-gray-700 max-w-3xl mx-auto">
            A glimpse into our portfolio of excellence
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={featuredProjects[currentSlide].image}
              alt={featuredProjects[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/40 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-4 py-2 bg-[#d4a574] text-white rounded-sm text-sm font-['Montserrat'] font-medium mb-4">
                {featuredProjects[currentSlide].category}
              </span>
              <h3 className="font-['Montserrat'] text-3xl md:text-4xl text-white mb-3">
                {featuredProjects[currentSlide].title}
              </h3>
              <p className="font-['Lora'] text-lg text-gray-200 max-w-2xl">
                {featuredProjects[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-sm flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="text-[#1a2332]" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-sm flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="text-[#1a2332]" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-[#d4a574]' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {featuredProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-32 rounded-sm overflow-hidden border-2 transition-all ${
                index === currentSlide 
                  ? 'border-[#d4a574] shadow-lg' 
                  : 'border-gray-200 hover:border-[#d4a574]/50'
              }`}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-[#d4a574]/20 border-2 border-[#d4a574]"></div>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setActiveSection('work')}
            className="group bg-transparent border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 font-['Montserrat'] font-medium"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
