import { Briefcase, Package, BookOpen, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface ServicesProps {
  isHomepage?: boolean;
}

export function Services({ isHomepage = false }: ServicesProps) {
  const services = [
    {
      icon: Briefcase,
      title: 'Commercial Printing',
      description: 'Marketing materials, brochures, and business stationery that reflect your brand\'s identity.',
      details: 'Brochures, catalogues, business cards, and marketing materials designed to elevate your brand.',
      color: '#d4a574'
    },
    {
      icon: Package,
      title: 'Gifting and Merchandising',
      description: 'Custom designs that stand out on every shelf.',
      details: 'Custom packaging that protects, promotes, and inspires consumer engagement.',
      color: '#d4a574'
    },
    {
      icon: BookOpen,
      title: 'Calendar Printing',
      description: 'High-quality book printing for authors and publishers.',
      details: 'Custom calendar printing with premium quality and vibrant colors. Perfect for corporate gifts, promotions, and personal use.',
      color: '#d4a574'
    },
    {
      icon: FileText,
      title: 'Digital Printing',
      description: 'Professional stationery and presentation materials.',
      details: 'Fast and high-quality digital printing for all your business and personal needs.',
      color: '#d4a574'
    },
    {
      icon: Sparkles,
      title: 'Offset Printing',
      description: 'Unique projects made to match your vision.',
      details: 'High-quality offset printing for large-volume projects with precise color accuracy.',
      color: '#d4a574'
    }
  ];

  const displayServices = isHomepage ? services.slice(0, 5) : services;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-4">Our Services</h2>
          <p className="font-['Lora'] text-xl text-gray-700 max-w-3xl mx-auto">
            We offer complete end-to-end printing services — from design to delivery — tailored to meet every printing need with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-sm border-2 border-gray-100 p-8 hover:border-[#d4a574] transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-sm bg-[#f8f9fa] flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                  <Icon style={{ color: service.color }} className="group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-3">{service.title}</h3>
                <p className="font-['Lora'] text-gray-600 leading-relaxed">
                  {isHomepage ? service.description : service.details}
                </p>
              </div>
            );
          })}
        </div>

        {!isHomepage && (
          <>
            {/* Additional Info */}
            <div className="bg-[#f8f9fa] rounded-sm p-10 md:p-12 mb-12 border-l-4 border-[#d4a574]">
              <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-6">End-to-End Solutions</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-['Montserrat'] text-lg text-[#1a2332] mb-3 font-semibold">Design Consultation</h4>
                  <p className="font-['Lora'] text-gray-700 leading-relaxed">
                    Expert guidance from concept to final product with our experienced design team.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-['Montserrat'] text-lg text-[#1a2332] mb-3 font-semibold">Quality Assurance</h4>
                  <p className="font-['Lora'] text-gray-700 leading-relaxed">
                    Rigorous quality checks at every stage to ensure perfection in every print.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        {/*isHomepage && (
          <div className="text-center mt-12">
            <button className="group bg-[#d4a574] hover:bg-[#c49563] text-white px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl font-['Montserrat'] font-medium">
              <span>View All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        ) */ }

        {!isHomepage && (
          <div className="text-center mt-12">
            <button className="group bg-[#d4a574] hover:bg-[#c49563] text-white px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl font-['Montserrat'] font-medium">
              <span>Request a Quote Today</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
