import { Target, Eye, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  isSnapshot?: boolean;
}

export function About({ isSnapshot = false }: AboutProps) {
  if (isSnapshot) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-6">About Us</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="font-['Lora'] text-gray-700 text-lg md:text-xl leading-relaxed text-center">
              For over a century, <strong className="font-semibold text-[#1a2332]">Premier Prints Mumbai</strong> has been the trusted name in quality printing. 
              We blend traditional expertise with modern innovation to deliver print solutions that make a lasting impact. 
              From books and packaging to corporate and custom printing — your story begins here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-4">Our Story</h2>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-4">A Century of Craftsmanship</h3>
            <p className="font-['Lora'] text-gray-700 mb-4 leading-relaxed text-lg">
              Since 1923, Premier Prints has been turning creativity into print. What started with a single printing press in Mumbai has grown into one of the most trusted printing solution providers — known for precision, innovation, and reliability.
            </p>
            <p className="font-['Lora'] text-gray-700 leading-relaxed text-lg">
              Through every era of print, we've evolved — embracing new technologies while preserving the craftsmanship that built our reputation.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMGJvb2tzJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjM2MTk4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Printing facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/30 to-transparent"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-[#f8f9fa] p-10 rounded-sm border-l-4 border-[#d4a574]">
            <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center mb-6 shadow-sm">
              <Eye className="text-[#d4a574]" size={28} />
            </div>
            <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-4">Our Vision</h3>
            <p className="font-['Lora'] text-gray-700 text-lg leading-relaxed">
              To redefine print excellence for the next 100 years — blending tradition, technology, and sustainability.
            </p>
          </div>
          
          <div className="bg-[#f8f9fa] p-10 rounded-sm border-l-4 border-[#d4a574]">
            <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center mb-6 shadow-sm">
              <Target className="text-[#d4a574]" size={28} />
            </div>
            <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-4">Our Mission</h3>
            <p className="font-['Lora'] text-gray-700 text-lg leading-relaxed">
              To deliver world-class printing solutions with unwavering quality, customer focus, and innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h3 className="font-['Montserrat'] text-3xl text-[#1a2332] mb-8">Our Core Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Quality', 'Integrity', 'Innovation', 'Sustainability', 'Customer Commitment'].map((value) => (
              <div key={value} className="px-6 py-3 bg-white border-2 border-[#d4a574]/30 rounded-sm hover:border-[#d4a574] transition-colors">
                <span className="font-['Montserrat'] text-gray-800 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Timeline */}
        <div className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] rounded-sm p-10 md:p-16">
          <h3 className="font-['Montserrat'] text-3xl text-white text-center mb-16">Our Legacy Timeline</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center border-l-2 border-[#d4a574] pl-6">
              <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="font-['Montserrat'] text-2xl text-[#d4a574] mb-2 font-semibold">1923s</div>
              <p className="font-['Lora'] text-sm text-gray-300">Founded as a small print shop in Karachi.</p>
            </div>
            
            <div className="text-center border-l-2 border-[#d4a574] pl-6">
              <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="font-['Montserrat'] text-2xl text-[#d4a574] mb-2 font-semibold">1949s</div>
              <p className="font-['Lora'] text-sm text-gray-300">Expanded into commercial printing services in Mumbai.</p>
            </div>
            
            <div className="text-center border-l-2 border-[#d4a574] pl-6">
              <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="font-['Montserrat'] text-2xl text-[#d4a574] mb-2 font-semibold">1980s</div>
              <p className="font-['Lora'] text-sm text-gray-300">Adopted advanced Offset printing technology</p>
            </div>
            
            <div className="text-center border-l-2 border-[#d4a574] pl-6">
              <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="font-['Montserrat'] text-2xl text-[#d4a574] mb-2 font-semibold">2020s</div>
              <p className="font-['Lora'] text-sm text-gray-300">Currently working offset digital, Gifting.</p>
            </div>

 <div className="text-center border-l-2 border-[#d4a574] pl-6">
              <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="font-['Montserrat'] text-2xl text-[#d4a574] mb-2 font-semibold">2023s</div>
              <p className="font-['Lora'] text-sm text-gray-300">Celebrating 100 years of printing excellence</p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
