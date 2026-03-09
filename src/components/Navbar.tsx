import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = React.useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Company', 
      path: '/company',
      subItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Founder Message', path: '/founder-story' },
      ]
    },
    { name: 'Brands', path: '/brands' },
    { name: 'Reports', path: '/test-reports' },
    { name: 'Contact', path: '/contact' },
  ];

  const isCompanyActive = location.pathname === '/about' || location.pathname === '/founder-story';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
          The Humble Muse
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            if (link.subItems) {
              return (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center space-x-1 text-xs uppercase tracking-[0.2em] transition-colors hover:text-ink",
                      isCompanyActive ? "text-ink font-medium" : "text-muted"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={12} className={cn("transition-transform duration-300", isCompanyOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {isCompanyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4 w-48"
                      >
                        <div className="bg-paper border border-ink/5 shadow-xl rounded-2xl overflow-hidden py-2">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block px-6 py-3 text-[10px] uppercase tracking-widest text-muted hover:text-ink hover:bg-ink/5 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-xs uppercase tracking-[0.2em] transition-colors hover:text-ink",
                    isActive ? "text-ink font-medium" : "text-muted"
                  )
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-b border-ink/5 px-6 py-8 flex flex-col space-y-6 overflow-hidden"
          >
            {navLinks.map((link) => {
              if (link.subItems) {
                return (
                  <div key={link.name} className="flex flex-col space-y-4">
                    <button
                      onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                      className={cn(
                        "flex items-center justify-between text-sm uppercase tracking-widest transition-colors",
                        isCompanyActive ? "text-ink font-medium" : "text-muted"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} className={cn("transition-transform", isMobileCompanyOpen && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileCompanyOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col space-y-4 pl-4 border-l border-ink/5"
                        >
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-sm uppercase tracking-widest transition-colors",
                      isActive ? "text-ink font-medium" : "text-muted"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
