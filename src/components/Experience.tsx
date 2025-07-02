import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Palette, Store, Package, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, seconds: 0 });

  // Calculate time elapsed since December 31st, 2024
  useEffect(() => {
    const startDate = new Date('2024-12-31T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeElapsed({ days, hours, seconds });
    };

    // Update immediately
    updateTimer();
    
    // Update every second
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const banaliAspects = [
    {
      id: 'overview',
      title: 'Business Strategy',
      icon: ShoppingBag,
      description: 'End-to-end brand execution',
      details: 'Built and launched a premium wellness supplement brand from concept to market, managing both technical development and business operations.',
      highlights: ['Complete brand launch', 'Market positioning', 'Revenue generation']
    },
    {
      id: 'branding',
      title: 'Brand Design',
      icon: Palette,
      description: 'Visual identity & packaging',
      details: 'Created comprehensive brand identity including logo design, packaging systems, and brand guidelines for premium wellness market positioning.',
      highlights: ['Logo & identity design', 'Product packaging', 'Brand guidelines']
    },
    {
      id: 'development',
      title: 'E-commerce Platform',
      icon: Store,
      description: 'Custom Shopify development',
      details: 'Developed custom Shopify storefront with Liquid templating, responsive design, and optimized checkout experience for conversion.',
      highlights: ['Custom theme development', 'Mobile-first design', 'Conversion optimization']
    },
    {
      id: 'operations',
      title: 'Marketplace Operations',
      icon: Package,
      description: 'Amazon & fulfillment',
      details: 'Managed Amazon marketplace presence, inventory systems, and fulfillment operations while scaling business growth and customer satisfaction.',
      highlights: ['Amazon marketplace setup', 'Inventory systems', 'Customer operations']
    }
  ];

  const currentAspect = banaliAspects.find(aspect => aspect.id === activeView) || banaliAspects[0];

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-center mb-6">Experience</h2>
          
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3">
              <ShoppingBag className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-green-900">Banali™</h3>
              <span className="ml-2 text-sm text-green-700">Wellness Supplement Brand</span>
            </div>
            <p className="text-secondary text-sm max-w-xl mx-auto">
              Built a wellness supplement brand from the ground up—handling design, development, and business operations.
            </p>
          </div>

          {/* Compact Navigation */}
          <div className="grid grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {banaliAspects.map((aspect, index) => (
              <motion.button
                key={aspect.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                viewport={{ once: true }}
                onClick={() => setActiveView(aspect.id)}
                className={`p-4 rounded-lg border transition-all duration-200 text-center cursor-pointer text-sm
                           ${activeView === aspect.id 
                             ? 'bg-green-50 border-green-200 shadow-sm' 
                             : 'bg-card border-light hover:shadow-sm hover:bg-green-50'
                           }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center">
                  <aspect.icon className={`w-4 h-4 mb-2 ${activeView === aspect.id ? 'text-green-600' : 'text-primary'}`} />
                  <h4 className={`font-medium text-xs mb-1 ${activeView === aspect.id ? 'text-green-900' : 'text-primary'}`}>
                    {aspect.title}
                  </h4>
                  <p className={`text-xs leading-tight ${activeView === aspect.id ? 'text-green-700' : 'text-muted'}`}>
                    {aspect.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Compact Content Area */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-lg border border-light p-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                
                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <currentAspect.icon className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="text-lg font-medium text-primary">{currentAspect.title}</h4>
                  </div>
                  
                  <p className="text-secondary mb-4 text-sm leading-relaxed">
                    {currentAspect.details}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-primary">Key Results</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {currentAspect.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.15, delay: index * 0.05 }}
                          className="flex items-center text-sm"
                        >
                          <ChevronRight className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-secondary">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Stopwatch */}
                <div className="flex justify-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full text-center">
                    <h5 className="text-sm font-medium text-green-900 mb-3 text-center">Time Since Launch</h5>
                    <div className="text-xs text-green-600 mb-2">Started Dec 31, 2024</div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-700 font-mono">{timeElapsed.days}</div>
                        <div className="text-xs text-green-600">Days</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-700 font-mono">{timeElapsed.hours}</div>
                        <div className="text-xs text-green-600">Hours</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-700 font-mono">{timeElapsed.seconds}</div>
                        <div className="text-xs text-green-600">Seconds</div>
                      </div>
                    </div>
                    <div className="text-xs text-green-500 mt-2">● Live</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;