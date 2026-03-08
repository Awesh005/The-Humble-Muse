import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-serif uppercase tracking-widest mb-6">The Humble Muse</h3>
          <p className="text-sm text-paper/60 max-w-xs leading-relaxed">
            Curating premium experiences and luxury brands that resonate with the soul. 
            Part of Hermit Cove LLP.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest text-paper/40 mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-paper/80 transition-colors">About Us</Link></li>
            <li><Link to="/brands" className="hover:text-paper/80 transition-colors">Our Brands</Link></li>
            <li><Link to="/contact" className="hover:text-paper/80 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-paper/40 mb-6">Office</h4>
          <address className="not-italic text-sm text-paper/60 leading-relaxed">
            Hermit Cove LLP<br />
            9th Floor, Innvov8 UCP<br />
            Sector 39, Gurgaon<br />
            HR 122001
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-paper/40">
        <p>&copy; {new Date().getFullYear()} Hermit Cove LLP. All rights reserved.</p>
        <p>Stay tuned for more brands and products.</p>
      </div>
    </footer>
  );
}
