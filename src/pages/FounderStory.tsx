import { motion } from 'motion/react';

export default function FounderStory() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted block mb-4">The Journey</span>
        <h1 className="text-6xl md:text-7xl font-serif italic">Founder’s Story</h1>
      </motion.div>

      <div className="space-y-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-16"
        >
          <img 
            src="./user.png" 
            alt="Ranchi Forests" 
            className="w-full h-full object-contain grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent" />
        </motion.div>

        <div className="space-y-12 text-xl text-muted leading-relaxed font-light">
          <p className="text-3xl font-serif text-ink italic leading-snug">
            "The Humble Muse was born from a simple idea — that everyday products should feel more thoughtful, authentic, and connected to the way we live."
          </p>
          
          <p>
            Our family comes from Ranchi, Jharkhand, surrounded by forests where traditional and mindful living practices are a natural part of life. This deep-rooted connection to nature and simplicity forms the bedrock of everything we create.
          </p>

          <p>
            The Humble Muse is a bootstrapped family venture with me as the key founder, supported by my wife and brother. This intimate, family-led approach allows us to stay true to our vision without compromise.
          </p>

          <p>
            Together we aim to build brands that bring India’s authentic materials and artisanal craftsmanship into modern homes with transparency. We want to bridge the gap between traditional wisdom and contemporary living.
          </p>

          <p>
            Our first brand <span className="text-ink font-medium">HUMYN</span> reflects this philosophy through products crafted from pure copper and natural wood—materials that age beautifully and carry a soul of their own.
          </p>
        </div>

        <div className="pt-24 text-center border-t border-ink/5">
          <div className="w-12 h-px bg-ink/20 mx-auto mb-8" />
          <p className="font-serif text-2xl italic">The Humble Muse Family</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted mt-4">Ranchi — Gurgaon</p>
        </div>
      </div>
    </div>
  );
}
