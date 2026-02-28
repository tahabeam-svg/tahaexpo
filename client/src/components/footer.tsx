import { Link } from "wouter";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { Mail, MapPin, Phone } from "lucide-react";
import logoImg from "@assets/image_1772052503241.png";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#1A1A1A] text-[#F5F1E8]/80 border-t border-[#C6A75E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="Dunes Gate" className="h-10 w-auto" />
              <span className="font-serif text-xl tracking-wider text-[#C6A75E]">
                DUNES GATE
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#F5F1E8]/60">
              A premier destination for collectors, conferences, and celebrations in Riyadh, Saudi Arabia.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#C6A75E] mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "The Venue", href: "/venue" },
                { label: "Showcase", href: "/showcase" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="block text-sm tracking-wide hover:text-[#C6A75E] transition-colors cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#C6A75E] mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@dunesgate.com"
                data-testid="link-footer-email"
                className="flex items-center gap-3 text-sm hover:text-[#C6A75E] transition-colors"
              >
                <Mail size={16} className="text-[#C6A75E]" />
                info@dunesgate.com
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-[#C6A75E]" />
                Riyadh, Saudi Arabia
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-footer-whatsapp"
                  className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center hover:bg-[#C6A75E]/10 transition-colors"
                >
                  <SiWhatsapp size={18} className="text-[#C6A75E]" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-footer-instagram"
                  className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center hover:bg-[#C6A75E]/10 transition-colors"
                >
                  <SiInstagram size={18} className="text-[#C6A75E]" />
                </a>
                <a
                  href="mailto:info@dunesgate.com"
                  data-testid="link-footer-mail"
                  className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center hover:bg-[#C6A75E]/10 transition-colors"
                >
                  <Mail size={18} className="text-[#C6A75E]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#C6A75E]/10 text-center">
          <p className="text-xs text-[#F5F1E8]/40 tracking-wider">
            &copy; {new Date().getFullYear()} Dunes Gate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
