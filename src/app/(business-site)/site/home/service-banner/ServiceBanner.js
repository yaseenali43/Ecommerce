
// components/ServiceBanner.js
import { Truck, RefreshCw, Bell, CreditCard } from 'lucide-react';

const ServiceBanner = () => {
  const services = [
    { 
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Free Shipping",
      description: "Free Shipping for orders over ₹120"
    },
    { 
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      title: "Easy Returns",
      description: "Within 30 days for an exchange"
    },
    { 
      icon: <Bell className="w-6 h-6 text-white" />,
      title: "Premium Support",
      description: "24/7 customer support"
    },
    { 
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Secure Payment",
      description: "Multiple credit cards accepted"
    }
  ];

  return (
    <section className="bg-hero py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="relative group flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2"
            >
              {/* Gradient Decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-11 h-11 bg-secondary rounded-2xl rotate-45 group-hover:rotate-12 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                  <span>{service.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="mt-5 text-md font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs opacity-90">
                {service.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent  transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;