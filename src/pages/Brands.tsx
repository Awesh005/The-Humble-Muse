import { motion } from 'motion/react';

export default function Brands() {
  const brands = [
    {
      name: 'HUMYN',
      tagline: 'Authentic Materials. Modern Living.',
      description: 'HUMYN is our first brand built on the philosophy of authentic materials and craftsmanship. Products are made using pure copper and natural wood, rooted in traditional materials yet designed for modern living.',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1920',
      status: 'Launched'
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted block mb-4">The Portfolio</span>
        <h1 className="text-6xl md:text-7xl font-serif">Our Brands</h1>
      </div>

      <div className="grid grid-cols-1 gap-32">
        {brands.map((brand) => (
          <motion.div 
            key={brand.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-ink/5 flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 overflow-hidden">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-5xl font-serif tracking-widest">{brand.name}</h2>
                  <span className="px-4 py-1.5 bg-ink text-paper text-[10px] uppercase tracking-[0.2em] rounded-full">
                    {brand.status}
                  </span>
                </div>
                <p className="text-xl font-serif italic text-muted leading-relaxed">
                  {brand.tagline}
                </p>
                <p className="text-muted leading-relaxed font-light">
                  {brand.description}
                </p>
                <div className="pt-6">
                  <button className="text-xs uppercase tracking-[0.2em] font-semibold border-b-2 border-ink pb-2 hover:text-muted hover:border-muted transition-colors">
                    Explore HUMYN
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-32 border-t border-ink/5 text-center space-y-8"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted block">Future Forward</span>
          <h3 className="text-4xl md:text-5xl font-serif italic">More brands launching soon — Stay tuned.</h3>
          <div className="w-12 h-px bg-ink/20 mx-auto" />
          <p className="text-muted max-w-sm mx-auto font-light">
            We are currently developing new concepts that celebrate India's artisanal traditions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
