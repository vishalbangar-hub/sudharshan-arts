import { Quote, Star, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  isHomepage?: boolean;
}

export function Testimonials({ isHomepage = false }: TestimonialsProps) {
  const testimonials = [
    {
      quote: "We've worked with Premier Prints for over 20 years — their quality and consistency are unmatched.",
      author: "Rajesh Sharma",
      role: "Publishing Partner",
      company: "Sharma Publications"
    },
    {
      quote: "Their attention to detail and service quality are outstanding. Every project is delivered with perfection.",
      author: "Priya Mehta",
      role: "Marketing Director",
      company: "TechCorp India"
    },
    {
      quote: "From design to delivery, Premier Prints has always been reliable and professional. They're our go-to printing partner.",
      author: "Anand Desai",
      role: "Publisher",
      company: "Desai Publishing House"
    },
    {
      quote: "The combination of traditional expertise and modern technology sets them apart. Truly world-class service.",
      author: "Kavita Patel",
      role: "Brand Manager",
      company: "Retail Excellence Ltd"
    }
  ];

  const clients = [
    'ICICI Bank', 'HDFC Bank', 'Allana Consumer Product Pvt. Ltd.', 
    'Aswad'
  ];

  const displayTestimonials = isHomepage ? testimonials.slice(0, 3) : testimonials;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-4">Client Testimonials</h2>
          <p className="font-['Lora'] text-xl text-gray-700">
            Trusted by leading brands, publishers, and businesses across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#f8f9fa] rounded-sm p-8 hover:shadow-xl transition-shadow border-t-4 border-[#d4a574]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#d4a574] fill-[#d4a574]" size={18} />
                ))}
              </div>
              
              <Quote className="text-[#d4a574] mb-4" size={32} />
              
              <p className="font-['Lora'] text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-300 pt-4">
                <div className="font-['Montserrat'] text-[#1a2332] font-semibold">{testimonial.author}</div>
                <div className="font-['Lora'] text-sm text-gray-600">{testimonial.role}</div>
                <div className="font-['Lora'] text-sm text-[#d4a574]">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {!isHomepage && (
          <>
            {/* Client Logos Section */}
            <div className="bg-[#f8f9fa] rounded-sm p-10 md:p-12 mb-16">
              <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] text-center mb-10">Our Trusted Clients</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {clients.map((client, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-6 bg-white rounded-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <span className="font-['Montserrat'] text-gray-600 text-center font-medium">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-[#f8f9fa] rounded-sm">
                <div className="font-['Montserrat'] text-5xl text-[#d4a574] mb-2 font-semibold">100+</div>
                <div className="font-['Montserrat'] text-gray-600">Years in Business</div>
              </div>
              <div className="text-center p-6 bg-[#f8f9fa] rounded-sm">
                <div className="font-['Montserrat'] text-5xl text-[#d4a574] mb-2 font-semibold">10,000+</div>
                <div className="font-['Montserrat'] text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-[#f8f9fa] rounded-sm">
                <div className="font-['Montserrat'] text-5xl text-[#d4a574] mb-2 font-semibold">500+</div>
                <div className="font-['Montserrat'] text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-[#f8f9fa] rounded-sm">
                <div className="font-['Montserrat'] text-5xl text-[#d4a574] mb-2 font-semibold">99%</div>
                <div className="font-['Montserrat'] text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </>
        )}

        {isHomepage && (
          <div className="text-center mt-12">
            <button className="group bg-transparent border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 font-['Montserrat'] font-medium">
              <span>View All Testimonials</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
