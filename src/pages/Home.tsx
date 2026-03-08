import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Craftsmanship" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/0 via-paper/10 to-paper" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-9xl font-serif font-light leading-tight mb-8"
          >
            The Humble <br /> <span className="italic">Muse</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-muted font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A house of brands inspired by authenticity, craftsmanship, and thoughtful design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              to="/brands" 
              className="inline-block px-12 py-4 bg-ink text-paper text-xs uppercase tracking-[0.3em] hover:bg-ink/90 transition-all rounded-full"
            >
              Explore Brands
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Meaningful everyday products <br /> <span className="italic">crafted from authentic materials.</span>
            </h2>
            <div className="w-16 h-px bg-ink/20 mx-auto" />
            <p className="text-muted text-lg leading-relaxed font-light max-w-2xl mx-auto">
              We believe that the objects we surround ourselves with should tell a story. 
              By focusing on authentic materials and purposeful design, we create products 
              that elevate the mundane into the extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Highlight - HUMYN */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070" 
                alt="HUMYN Materials" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-12 -left-12 w-48 h-48 bg-paper border border-ink/5 p-8 rounded-full flex flex-col justify-center items-center text-center hidden md:flex shadow-xl">
              <span className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Featured</span>
              <span className="text-2xl font-serif tracking-widest">HUMYN</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Brand Highlight</span>
            <h2 className="text-5xl font-serif leading-tight">
              HUMYN: The beauty of <br /> <span className="italic">copper and wood.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed font-light">
              Our flagship brand, HUMYN, focuses on products crafted from pure copper and natural wood. 
              Each piece is a celebration of raw materials, brought to life through meticulous craftsmanship 
              and a deep respect for nature's textures.
            </p>
            <div className="pt-6">
              <Link to="/brands" className="group inline-flex items-center space-x-4">
                <span className="text-xs uppercase tracking-widest font-semibold border-b border-ink pb-1">
                  Discover HUMYN
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-48 px-6 text-center bg-ink text-paper overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-8"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-paper/40 block">The Horizon</span>
          <h2 className="text-4xl md:text-6xl font-serif italic font-light">
            Stay tuned for more <br /> brands and products.
          </h2>
          <div className="w-12 h-px bg-paper/20 mx-auto" />
          <p className="text-paper/40 text-sm uppercase tracking-widest">
            Hermit Cove LLP — Gurgaon, India
          </p>
        </motion.div>
        
        {/* Decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-paper/5 rounded-full pointer-events-none" />
      </section>
    </div>
  );
}
