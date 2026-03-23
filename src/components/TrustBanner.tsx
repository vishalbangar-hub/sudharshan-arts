import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export function TrustBanner() {
  const stats = [
    { icon: Award, value: '100+', label: 'Years of Excellence', color: '#d4a574' },
    { icon: Users, value: '500+', label: 'Trusted Clients', color: '#d4a574' },
    { icon: TrendingUp, value: '10,000+', label: 'Projects Delivered', color: '#d4a574' },
    { icon: Shield, value: '99%', label: 'On-Time Delivery', color: '#d4a574' },
  ];

  return (
    <section className="bg-[#f8f9fa] py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-sm shadow-sm mb-3">
                  <Icon size={24} style={{ color: stat.color }} />
                </div>
                <div className="font-['Montserrat'] text-3xl md:text-4xl font-semibold text-[#1a2332] mb-1">
                  {stat.value}
                </div>
                <div className="font-['Montserrat'] text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
