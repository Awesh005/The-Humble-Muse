import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted block mb-4">Get in Touch</span>
            <h1 className="text-6xl font-serif">Contact Us</h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-ink/5 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-ink" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Our Office</h4>
                <address className="not-italic text-muted leading-relaxed">
                  Hermit Cove LLP<br />
                  9th Floor, Innvov8 UCP<br />
                  Sector 39, Gurgaon<br />
                  HR 122001
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-ink/5 rounded-full flex items-center justify-center shrink-0">
                <Mail size={20} className="text-ink" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Email</h4>
                <p className="text-muted">concierge@hermitcove.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-ink/5 rounded-full flex items-center justify-center shrink-0">
                <Phone size={20} className="text-ink" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Phone</h4>
                <p className="text-muted">+91 (0124) 456 7890</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-12 rounded-3xl shadow-sm border border-ink/5"
        >
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted">Subject</label>
              <select className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors">
                <option>General Inquiry</option>
                <option>Brand Partnership</option>
                <option>Press</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-ink transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button className="w-full bg-ink text-paper py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-ink/90 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
