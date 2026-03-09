import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted block mb-4">The Philosophy</span>
        <h1 className="text-6xl md:text-7xl font-serif leading-tight">About The Humble Muse</h1>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10 text-xl text-muted leading-relaxed font-light"
          >
            <p className="text-2xl text-ink font-serif italic">
              The Humble Muse is a house of brands inspired by the idea that everyday products can carry deeper meaning when they are rooted in authenticity, craftsmanship, and thoughtful design.
            </p>
            
            <p>
              Our mission is to build brands across categories that celebrate India’s rich material heritage and artisanal traditions while bringing them into modern homes with transparency and purpose.
            </p>

            <p>
              We believe that objects people use every day should not only be functional but also honest in their materials, mindful in their design, and respectful of the hands that create them.
            </p>

            <p>
              At The Humble Muse, we work closely with skilled artisans and traditional makers to develop products that reflect true craftsmanship rather than mass imitation.
            </p>

            <p>
              Our first brand, <span className="text-ink font-medium">HUMYN</span>, brings this philosophy to life through products crafted from pure copper and natural wood.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl grayscale opacity-80">
              <img 
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1905" 
                alt="Artisanal Craft" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted text-center">
              Celebrating India's Material Heritage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
