import { Leaf, Recycle, Zap, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sustainablePrinting from "@/images/sustainable-printing.webp";

<ImageWithFallback
  src={sustainablePrinting}
  alt="Sustainable practices"
  className="w-full h-full object-cover"
/>


interface SustainabilityProps {
  isHomepage?: boolean;
}

export function Sustainability({ isHomepage = false }: SustainabilityProps) {
  const practices = [
    {
      icon: Recycle,
      title: 'Recycled & FSC-Certified Papers',
      description: 'We use responsibly sourced materials that minimize environmental impact.'
    },
    {
      icon: Leaf,
      title: 'Vegetable-Based Inks',
      description: 'Non-toxic, eco-friendly inks that are safe for people and the planet.'
    },
    {
      icon: Zap,
      title: 'Energy-Efficient Equipment',
      description: 'Modern printing technology that reduces energy consumption.'
    },
    {
      icon: Trash2,
      title: 'Responsible Waste Management',
      description: 'Systematic recycling and waste reduction programs.'
    }
  ];

  if (isHomepage) {
    return (
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
              <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-6">Sustainable Printing</h2>
              <p className="font-['Lora'] text-xl text-gray-700 mb-8 leading-relaxed">
                At Premier Prints, sustainability isn't a trend — it's a responsibility. We're committed to creating prints that last, and a planet that will too.
              </p>
              
              <div className="space-y-4 mb-8">
                {practices.slice(0, 3).map((practice, index) => {
                  const Icon = practice.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-[#d4a574]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#d4a574]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-['Montserrat'] text-[#1a2332] font-semibold mb-1">{practice.title}</h4>
                        <p className="font-['Lora'] text-gray-600 text-sm">{practice.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-[#d4a574]/30 rounded-sm font-['Montserrat'] text-sm text-gray-700">
                  FSC Certified
                </span>
                <span className="px-4 py-2 bg-white border border-[#d4a574]/30 rounded-sm font-['Montserrat'] text-sm text-gray-700">
                  Carbon Neutral
                </span>
                <span className="px-4 py-2 bg-white border border-[#d4a574]/30 rounded-sm font-['Montserrat'] text-sm text-gray-700">
                  Zero Waste Initiative
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <ImageWithFallback
  src={sustainablePrinting}
  alt="Sustainable practices"
  className="w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-sm overflow-hidden mb-16 h-[400px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1589365354848-78104c17f92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc2MzUyODY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sustainable practices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 to-[#2d3e50]/85 flex items-center">
            <div className="max-w-3xl mx-auto px-8 text-center text-white">
              <div className="w-16 h-16 bg-[#d4a574] rounded-sm flex items-center justify-center mx-auto mb-6">
                <Leaf size={32} />
              </div>
              <h2 className="font-['Montserrat'] text-5xl mb-4">Printing a Greener Tomorrow</h2>
              <p className="font-['Lora'] text-xl text-gray-200">
                At Premier Prints, sustainability isn't a trend — it's a responsibility.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="font-['Lora'] text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We've adopted eco-friendly practices that minimize waste and protect the environment, ensuring that we create prints that last — and a planet that will too.
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div 
                key={index}
                className="bg-[#f8f9fa] rounded-sm p-8 border-l-4 border-[#d4a574] hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="text-[#d4a574]" size={28} />
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#1a2332] mb-3">{practice.title}</h3>
                <p className="font-['Lora'] text-gray-700 leading-relaxed">{practice.description}</p>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] rounded-sm p-10 md:p-16 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-['Montserrat'] text-3xl mb-6">Our Environmental Commitment</h3>
            <p className="font-['Lora'] text-lg text-gray-200 mb-8 leading-relaxed">
              Every print job we complete is done with consideration for environmental impact. We continuously invest in cleaner technologies and sustainable materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm font-['Montserrat'] text-sm">
                Carbon Footprint Reduction
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm font-['Montserrat'] text-sm">
                Zero Waste Initiative
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm font-['Montserrat'] text-sm">
                Green Certifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
