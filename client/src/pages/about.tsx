import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, Zap, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const chairman = {
  name: "HRH Prince Meshhour bin Talal bin Abdulaziz Al Saud",
  title: "Chairman of the Board",
  image: "/assets/official/chairman.png",
  bio: "His Royal Highness Prince Meshhour brings distinguished leadership and extensive personal collecting experience to guide the strategic vision of Dunes Gate. With a deep commitment to preserving cultural heritage and fostering community engagement, he ensures the venue meets the highest standards of prestige and excellence.",
  quote: "Dunes Gate represents more than a venue\u2014it is a sanctuary for passion, a platform for excellence, and a bridge connecting collectors and communities.",
};

const boardMembers = [
  {
    name: "Mr. Youssef Ibrahim Hamidaddin",
    title: "Board Member & General Manager",
    image: "/assets/official/board-member-youssef.png",
    bio: "Mr. Youssef Ibrahim Hamidaddin leads the strategic operations and partnerships that elevate Dunes Gate's standing in the regional and international event venue landscape. With deep expertise in collection management, market dynamics, and operational excellence, he ensures seamless execution across all events.",
    quote: "Our role is to transform visions into reality. Through careful planning, strategic execution, and a culture of excellence, we ensure that Dunes Gate becomes the trusted partner for every significant event.",
  },
  {
    name: "Mr. Mohannad Atif Saleh",
    title: "Board Member",
    image: "/assets/official/board-member-mohannad.png",
    bio: "Mr. Mohannad Atif Saleh leads the strategic operations and partnerships that elevate Dunes Gate's standing in the regional and international event venue landscape. With deep expertise in collection management, market dynamics, and operational excellence, he ensures seamless execution across all events.",
    quote: "By connecting cultures and communities through shared passions, we create opportunities for growth, understanding, and lasting relationships.",
  },
];

const managementTeam = [
  {
    name: "Mr. Hadi A. Farid",
    title: "Operation Lead",
    bio: "Overseeing all operational aspects of Dunes Gate from venue development through execution. With expertise spanning infrastructure management and daily operations, he ensures seamless coordination of all venue functions while maintaining the highest standards of service delivery and operational efficiency.",
  },
  {
    name: "Mr. Abdullah Badawi",
    title: "Marketing & Media Lead",
    bio: "Leading Dunes Gate's Marketing and Media vision to position the venue as a premier event destination. Drawing on deep expertise in brand development and market strategy, he orchestrates marketing campaigns that showcase the venue's capabilities and drive sustainable growth.",
  },
];

export default function About() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <section className="pt-32 pb-20 relative" data-testid="section-about-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E1F]/30 to-[#1A1A1A]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-4 block">
              About Dunes Gate
            </span>
            <h1 data-testid="text-about-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F1E8] mb-6">
              Our Story
            </h1>
            <p className="text-[#F5F1E8]/60 max-w-2xl mx-auto leading-relaxed">
              Founded in 2025, Dunes Gate is a prestigious event venue born from a vision
              to create an unparalleled gathering space in Riyadh, Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#222]" data-testid="section-vision-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-10"
            >
              <div className="w-14 h-14 rounded-full border border-[#C6A75E]/30 flex items-center justify-center mb-6">
                <Eye size={24} className="text-[#C6A75E]" />
              </div>
              <h2 className="font-serif text-2xl text-[#F5F1E8] mb-4">Our Vision</h2>
              <p className="text-[#F5F1E8]/60 leading-relaxed">
                Dunes Gate was established in 2025 as a visionary project dedicated to creating
                a world-class event venue that serves the diverse needs of Riyadh's dynamic community.
                We recognize that modern event venues must be versatile, secure, and beautifully designed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-10"
            >
              <div className="w-14 h-14 rounded-full border border-[#C6A75E]/30 flex items-center justify-center mb-6">
                <Target size={24} className="text-[#C6A75E]" />
              </div>
              <h2 className="font-serif text-2xl text-[#F5F1E8] mb-4">Our Mission</h2>
              <p className="text-[#F5F1E8]/60 leading-relaxed">
                To provide an elegant, professionally managed space where VIPs, collectors,
                businesses, cultural organizations, and families can celebrate their passions
                and achieve their goals.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Shield, label: "Premium Adaptability", desc: "Riyadh's most versatile premium event venue, adaptable for any scale or style" },
              { icon: Users, label: "Multi-Purpose Design", desc: "Expertly designed for collectors, conferences, exhibitions, and celebrations" },
              { icon: Target, label: "Service Excellence", desc: "Unwavering commitment to professional service and operational perfection" },
              { icon: MapPin, label: "Strategic Location", desc: "Prime positioning in the heart of Riyadh, connecting culture and commerce" },
            ].map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-value-${i}`}
                className="text-center p-6 border border-[#C6A75E]/10 rounded-md bg-[#1A1A1A]"
              >
                <value.icon size={20} className="text-[#C6A75E] mx-auto mb-3" />
                <h4 className="font-serif text-[#F5F1E8] mb-2">{value.label}</h4>
                <p className="text-xs text-[#F5F1E8]/50 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A]" data-testid="section-team">
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
              Our Leadership
            </h2>
            <p className="text-[#F5F1E8]/50 max-w-xl mx-auto">
              Meet the visionaries behind Dunes Gate
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
            data-testid="card-chairman"
          >
            <div className="bg-[#222] border border-[#C6A75E]/20 rounded-md p-8 md:p-10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C6A75E] text-[#1A1A1A] px-4 py-1 text-xs tracking-[0.2em] uppercase font-medium rounded-sm">
                Chairman of the Board
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                <div className="flex-shrink-0">
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    data-testid="img-chairman"
                    className="w-40 h-48 object-cover object-top rounded-md border-2 border-[#C6A75E]/30"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-xl md:text-2xl text-[#F5F1E8] mb-2">{chairman.name}</h3>
                  <p className="text-[#C6A75E] text-sm tracking-wider uppercase mb-4">{chairman.title}</p>
                  <p className="text-[#F5F1E8]/60 leading-relaxed text-sm mb-4">{chairman.bio}</p>
                  <blockquote className="border-l-2 border-[#C6A75E]/30 pl-4 italic text-[#F5F1E8]/50 text-sm leading-relaxed">
                    "{chairman.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {boardMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-board-${i}`}
                className="bg-[#222] border border-[#C6A75E]/10 rounded-md p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    data-testid={`img-board-${i}`}
                    className="w-32 h-40 object-cover object-top rounded-md border border-[#C6A75E]/20 mb-4"
                  />
                  <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">{member.name}</h3>
                  <p className="text-[#C6A75E] text-xs tracking-wider uppercase mb-4">{member.title}</p>
                  <p className="text-[#F5F1E8]/60 leading-relaxed text-sm mb-4">{member.bio}</p>
                  <blockquote className="border-l-2 border-[#C6A75E]/30 pl-4 italic text-[#F5F1E8]/50 text-xs leading-relaxed text-left">
                    "{member.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="font-serif text-2xl text-[#F5F1E8] mb-2">Management Team</h3>
            <p className="text-[#F5F1E8]/50 text-sm">Leadership by Visionaries, For Excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {managementTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-team-${i}`}
                className="bg-[#222] border border-[#C6A75E]/10 rounded-md p-6"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C6A75E]/15 to-[#8A6B3F]/15 border border-[#C6A75E]/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-serif text-lg text-[#C6A75E]">{member.name.split(" ").pop()?.charAt(0)}</span>
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-lg text-[#F5F1E8] mb-1">{member.name}</h4>
                  <p className="text-[#C6A75E]/70 text-xs tracking-wider uppercase mb-3">{member.title}</p>
                  <p className="text-[#F5F1E8]/50 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mt-12 text-center"
          >
            <div className="bg-[#222] border border-[#C6A75E]/10 rounded-md p-8">
              <Zap size={20} className="text-[#C6A75E] mx-auto mb-3" />
              <p className="text-[#F5F1E8]/50 text-sm leading-relaxed italic">
                "United by a dedication to excellence and a personal commitment to serving
                the community with professionalism and integrity."
              </p>
              <p className="text-[#C6A75E]/60 text-xs tracking-wider uppercase mt-3">
                Collective Commitment
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
