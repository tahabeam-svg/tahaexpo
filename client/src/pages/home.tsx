import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Star, Users, Calendar, MapPin } from "lucide-react";
import heroImg from "@assets/HOME-PAGE_1772052244464.png";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const features = [
  {
    icon: Star,
    title: "Premium Venue",
    desc: "15,000 sqm of world-class event space designed for excellence.",
  },
  {
    icon: Users,
    title: "Tailored Events",
    desc: "From collectors to conferences, every event is crafted to perfection.",
  },
  {
    icon: Calendar,
    title: "Expert Planning",
    desc: "Our dedicated team ensures flawless event execution.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Strategically located in the heart of Riyadh, Saudi Arabia.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <section ref={heroRef} className="relative h-screen overflow-hidden" data-testid="section-hero">
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroImg}
            alt="Dunes Gate"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-6">
              <span className="inline-block w-16 h-px bg-[#C6A75E] mb-6" />
            </div>
            <h1
              data-testid="text-hero-title"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F1E8] leading-tight mb-6 max-w-4xl"
            >
              A Premier Destination
            </h1>
            <p
              data-testid="text-hero-tagline"
              className="text-[#C6A75E] text-lg sm:text-xl md:text-2xl tracking-wider font-light mb-4 max-w-2xl"
            >
              for Collectors, Conferences & Celebrations
            </p>
            <p className="text-[#F5F1E8]/60 text-sm md:text-base max-w-lg mx-auto mb-10 tracking-wide">
              Experience unmatched luxury and elegance in the heart of Riyadh, Saudi Arabia
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/venue" data-testid="link-hero-venue">
                <span className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#1A1A1A] px-8 py-3 font-medium tracking-wider uppercase text-sm rounded-md cursor-pointer transition-opacity hover:opacity-90">
                  Explore The Venue <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/contact" data-testid="link-hero-contact">
                <span className="inline-flex items-center gap-2 border border-[#C6A75E]/50 text-[#F5F1E8] px-8 py-3 font-medium tracking-wider uppercase text-sm rounded-md cursor-pointer hover:border-[#C6A75E] transition-colors backdrop-blur-sm">
                  Get in Touch
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#C6A75E]/40 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[#C6A75E]/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-[#1A1A1A]" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block w-12 h-px bg-[#C6A75E] mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E8] mb-4">
              Why Dunes Gate
            </h2>
            <p className="text-[#F5F1E8]/50 max-w-xl mx-auto">
              Where tradition meets innovation, creating unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-feature-${i}`}
                className="group text-center p-8 border border-[#C6A75E]/10 rounded-md bg-[#1A1A1A] hover:border-[#C6A75E]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-[#C6A75E]/30 flex items-center justify-center group-hover:bg-[#C6A75E]/10 transition-colors">
                  <feature.icon size={24} className="text-[#C6A75E]" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F1E8] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#F5F1E8]/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#222]" data-testid="section-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-4 block">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E8] mb-6 leading-tight">
                Crafting Prestigious Experiences Since 2025
              </h2>
              <p className="text-[#F5F1E8]/60 leading-relaxed mb-6">
                Dunes Gate is a premier event venue in Riyadh, Saudi Arabia, dedicated to delivering
                world-class event experiences. Our vision is rooted in royal elegance, security,
                and community, creating spaces that inspire and connect.
              </p>
              <p className="text-[#F5F1E8]/60 leading-relaxed mb-8">
                From high-profile conferences and collectors exhibitions to lavish celebrations,
                every event at Dunes Gate is meticulously planned and executed to exceed expectations.
              </p>
              <Link href="/about" data-testid="link-about-preview">
                <span className="inline-flex items-center gap-2 text-[#C6A75E] text-sm tracking-wider uppercase cursor-pointer hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "15,000", label: "sqm Total Area" },
                { num: "3,550", label: "sqm Main Hall" },
                { num: "450+", label: "Parking Spaces" },
                { num: "6+", label: "Event Categories" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  data-testid={`stat-${i}`}
                  className="bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-6 text-center"
                >
                  <div className="font-serif text-2xl md:text-3xl text-[#C6A75E] mb-2">
                    {stat.num}
                  </div>
                  <div className="text-xs text-[#F5F1E8]/50 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
