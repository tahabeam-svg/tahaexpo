import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section data-testid="section-contact-cta" className="bg-[#3A2E1F] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDNkE3NUUiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E8] mb-4">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-[#F5F1E8]/70 mb-8 max-w-xl mx-auto">
            Let us help you plan an unforgettable event at Dunes Gate. Reach out today
            to discuss your vision.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <Link href="/contact" data-testid="link-contact-cta">
              <span className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#1A1A1A] px-8 py-3 font-medium tracking-wider uppercase text-sm rounded-md cursor-pointer transition-opacity hover:opacity-90">
                Contact Us <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-6">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-cta-whatsapp"
              className="text-[#C6A75E]/70 hover:text-[#C6A75E] transition-colors"
            >
              <SiWhatsapp size={22} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-cta-instagram"
              className="text-[#C6A75E]/70 hover:text-[#C6A75E] transition-colors"
            >
              <SiInstagram size={22} />
            </a>
            <a
              href="mailto:info@dunesgate.com"
              data-testid="link-cta-email"
              className="text-[#C6A75E]/70 hover:text-[#C6A75E] transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
