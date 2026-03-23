import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: '100+ Years of Experience',
      description: 'A legacy of trust, craftsmanship, and unparalleled quality that spans a century.'
    },
    {
      title: 'Advanced Digital & Offset Technology',
      description: 'State-of-the-art equipment ensuring precision and consistency in every print job.'
    },
    {
      title: 'Eco-Friendly Materials',
      description: 'Committed to sustainability with recycled papers and vegetable-based inks.'
    },
    {
      title: 'On-Time Delivery & Trusted Service',
      description: '99% on-time delivery rate with dedicated customer support throughout your project.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2d3e50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-white mb-4">Why Choose Us</h2>
          <p className="font-['Lora'] text-xl text-gray-300 max-w-3xl mx-auto">
            Premier Prints stands apart with our commitment to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-white mb-3">{reason.title}</h3>
                  <p className="font-['Lora'] text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
