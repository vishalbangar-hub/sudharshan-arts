import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Briefcase, Package, BookOpen, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client?: string;
}

export function OurWork() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'commercial', label: 'Commercial', icon: Briefcase },
    { id: 'packaging', label: 'Packaging', icon: Package },
    { id: 'publishing', label: 'Publishing', icon: BookOpen },
    { id: 'custom', label: 'Custom', icon: Sparkles },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Premium Corporate Brochures',
      category: 'commercial',
      description: 'Luxury brochures for a leading Mumbai real estate developer, featuring premium paper stock and gold foil accents.',
      images: [
        'https://images.unsplash.com/photo-1717994818194-c5a474939403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGNhdGFsb2clMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Mumbai Realty Group'
    },
    {
      id: '2',
      title: 'Luxury Product Packaging',
      category: 'packaging',
      description: 'Custom packaging design for a premium cosmetics brand, featuring sustainable materials and intricate embossing.',
      images: [
        'https://images.unsplash.com/photo-1759563871371-eb0ec31824a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYWNrYWdpbmclMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Luxe Beauty Co.'
    },
    {
      id: '3',
      title: 'Literary Collection Publishing',
      category: 'publishing',
      description: 'Complete book series printing including hardcover binding, dust jackets, and custom endpapers for a prestigious publishing house.',
      images: [
        'https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkZXNpZ258ZW58MXx8fHwxNzYzNjE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Heritage Publishers'
    },
    {
      id: '4',
      title: 'Corporate Identity Package',
      category: 'commercial',
      description: 'Complete stationery suite including letterheads, business cards, and envelopes with custom die-cut designs.',
      images: [
        'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhdGlvbmVyeXxlbnwxfHx8fDE3NjM2MjI1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'TechVista Solutions'
    },
    {
      id: '5',
      title: 'Artisan Food Packaging',
      category: 'packaging',
      description: 'Eco-friendly packaging for an organic food brand with custom illustrations and biodegradable materials.',
      images: [
        'https://images.unsplash.com/photo-1598437220119-ec1f1259269a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwbW9ja3VwfGVufDF8fHx8MTc2MzU4OTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Earth Harvest Foods'
    },
    {
      id: '6',
      title: 'Magazine & Editorial Design',
      category: 'publishing',
      description: 'High-quality magazine printing with perfect binding and vibrant color reproduction for a leading lifestyle publication.',
      images: [
        'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NDA4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Mumbai Lifestyle Magazine'
    },
    {
      id: '7',
      title: 'Custom Wedding Invitations',
      category: 'custom',
      description: 'Bespoke wedding invitation suite with letterpress printing, custom paper, and gold foil detailing.',
      images: [
        'https://images.unsplash.com/photo-1717994818194-c5a474939403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGNhdGFsb2clMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Private Client'
    },
    {
      id: '8',
      title: 'Annual Report Design',
      category: 'commercial',
      description: 'Comprehensive annual report with infographics, photography, and premium binding for a Fortune 500 company.',
      images: [
        'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1NDA4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      client: 'Global Industries Inc.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-6">Our Work</h2>
          <p className="font-['Lora'] text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our century of craftsmanship. From intricate designs to large-scale productions, our portfolio showcases the diverse range and exceptional quality we bring to every print project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-sm transition-all font-['Montserrat'] font-medium inline-flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#d4a574] text-white shadow-lg'
                    : 'bg-[#f8f9fa] text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {Icon && <Icon size={18} />}
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-sm border-2 border-gray-100 overflow-hidden hover:border-[#d4a574] transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#d4a574]/10 text-[#d4a574] rounded-sm text-xs font-['Montserrat'] font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-['Montserrat'] text-xl text-[#1a2332] mb-2 group-hover:text-[#d4a574] transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-['Lora'] text-gray-600 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                {project.client && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="font-['Montserrat'] text-xs text-gray-500">
                      Client: <span className="text-[#1a2332] font-semibold">{project.client}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="font-['Lora'] text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200">
          <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-4">Have a Project in Mind?</h3>
          <p className="font-['Lora'] text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with the same quality and care we've delivered for over 100 years.
          </p>
          <button className="bg-[#d4a574] hover:bg-[#c49563] text-white px-8 py-4 rounded-sm transition-all shadow-lg hover:shadow-xl font-['Montserrat'] font-medium">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
