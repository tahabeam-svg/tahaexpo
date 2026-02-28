import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Presentation, Users, Heart, Palette, Laptop } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const showcaseEvents = [
  {
    id: 1,
    title: "Collectors Exhibition",
    category: "Collectors",
    icon: Sparkles,
    description: "An exclusive gathering of world-class collectors showcasing rare and precious items in a prestigious setting. Dunes Gate provides the perfect backdrop for displaying and preserving valuable collections with the highest security standards.",
    highlights: ["Premium Display Cases", "Climate-Controlled Environment", "VIP Access Areas", "Expert Curators"],
  },
  {
    id: 2,
    title: "Business Conferences & Summits",
    category: "Conference",
    icon: Presentation,
    description: "A landmark conference bringing together industry leaders, innovators, and decision-makers from across the region. Our state-of-the-art facilities support events of any scale with world-class technology and services.",
    highlights: ["3,550 sqm Main Hall", "3 Meeting Rooms", "Full AV Setup", "Hybrid Event Support"],
  },
  {
    id: 3,
    title: "Cultural Heritage Celebrations",
    category: "Cultural Gathering",
    icon: Users,
    description: "A celebration of Saudi Arabian culture, heritage, and traditions featuring performances, art, and culinary experiences. Dunes Gate honors the Kingdom's rich history while looking towards the future.",
    highlights: ["Performance Spaces", "Art Exhibition Areas", "Culinary Pavilions", "Community Gathering"],
  },
  {
    id: 4,
    title: "Weddings & Celebrations",
    category: "Wedding",
    icon: Heart,
    description: "An elegant and unforgettable celebration hosted in the grand halls of Dunes Gate. Our dedicated team ensures every detail is perfect for your most important day.",
    highlights: ["Grand Main Hall", "620 sqm VIP Area", "Outdoor Landscape", "Bespoke Catering"],
  },
  {
    id: 5,
    title: "Art & Industry Exhibitions",
    category: "Exhibition",
    icon: Palette,
    description: "Showcasing the finest in art, industry, and innovation. Our versatile spaces transform to create immersive exhibition experiences that captivate and inspire visitors.",
    highlights: ["Flexible Layout", "Professional Lighting", "Registration Hall", "450 Parking Spaces"],
  },
  {
    id: 6,
    title: "Hybrid & Virtual Events",
    category: "Hybrid",
    icon: Laptop,
    description: "Seamlessly blending physical and virtual experiences, Dunes Gate offers cutting-edge technology for hybrid events that connect audiences globally while maintaining the prestige of in-person attendance.",
    highlights: ["Live Streaming", "Virtual Platforms", "Tech Infrastructure", "Global Connectivity"],
  },
];

const categories = ["All", "Collectors", "Conference", "Cultural Gathering", "Wedding", "Exhibition", "Hybrid"];

export default function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? showcaseEvents
      : showcaseEvents.filter((e) => e.category === selectedCategory);

  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <section className="pt-32 pb-20 relative" data-testid="section-showcase-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E1F]/30 to-[#1A1A1A]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 data-testid="text-showcase-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F1E8] mb-6">
              Showcase
            </h1>
            <p className="text-[#F5F1E8]/60 max-w-2xl mx-auto leading-relaxed">
              Explore the range of prestigious events we host and collaborate on at Dunes Gate
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#1A1A1A]" data-testid="section-showcase-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-sm tracking-wider uppercase rounded-md transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#C6A75E] text-[#1A1A1A]"
                    : "border border-[#C6A75E]/20 text-[#F5F1E8]/60 hover:border-[#C6A75E]/50 hover:text-[#F5F1E8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                layout
                data-testid={`card-showcase-${event.id}`}
                className="group bg-[#222] border border-[#C6A75E]/10 rounded-md hover:border-[#C6A75E]/30 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full border border-[#C6A75E]/30 flex items-center justify-center mb-6 group-hover:bg-[#C6A75E]/10 transition-colors">
                    <event.icon size={24} className="text-[#C6A75E]" />
                  </div>
                  <span className="text-[#C6A75E] text-xs tracking-[0.2em] uppercase mb-3 block">
                    {event.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5F1E8] mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#F5F1E8]/50 leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {event.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-[#F5F1E8]/40"
                      >
                        <span className="w-1 h-1 bg-[#C6A75E]/50 rounded-full flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
