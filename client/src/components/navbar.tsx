import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/image_1772052503241.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "The Venue", href: "/venue" },
  { label: "Showcase", href: "/showcase" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logoImg} alt="Dunes Gate" className="h-16 w-auto" />
              <span className="font-serif text-xl tracking-wider text-[#C6A75E] hidden sm:block">
                DUNES GATE
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <span
                  className={`px-4 py-2 text-sm tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${
                    location === item.href
                      ? "text-[#C6A75E]"
                      : "text-[#F5F1E8]/80 hover:text-[#C6A75E]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <button
            data-testid="button-mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F5F1E8] p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A]/98 backdrop-blur-md border-t border-[#C6A75E]/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div
                    className={`block px-4 py-3 text-sm tracking-widest uppercase cursor-pointer transition-colors ${
                      location === item.href
                        ? "text-[#C6A75E] bg-[#C6A75E]/10"
                        : "text-[#F5F1E8]/80 hover:text-[#C6A75E]"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
