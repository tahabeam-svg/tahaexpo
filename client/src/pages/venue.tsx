import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Maximize2,
  Crown,
  ClipboardList,
  DoorOpen,
  Car,
  Sparkles,
  Users,
  Presentation,
  Palette,
  Heart,
  Laptop,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const venueStats = [
  { icon: Maximize2, value: "15,000", unit: "sqm", label: "Total Area" },
  { icon: DoorOpen, value: "3,550", unit: "sqm", label: "Main Hall" },
  { icon: Crown, value: "620", unit: "sqm", label: "VIP Area" },
  { icon: ClipboardList, value: "210", unit: "sqm", label: "Registration" },
  { icon: DoorOpen, value: "3", unit: "", label: "Meeting Rooms" },
  { icon: Car, value: "450", unit: "", label: "Parking Spaces" },
];

const eventCategories = [
  { icon: Sparkles, label: "Collectors", desc: "Exclusive collectors' exhibitions and showcases" },
  { icon: Presentation, label: "Conferences", desc: "World-class conferences and business summits" },
  { icon: Palette, label: "Exhibitions", desc: "Art, culture, and industry exhibitions" },
  { icon: Users, label: "Cultural Events", desc: "Celebrations of heritage and community" },
  { icon: Heart, label: "Weddings", desc: "Elegant and unforgettable celebrations" },
  { icon: Laptop, label: "Hybrid Events", desc: "Seamless blend of physical and virtual" },
];

function Venue3DPlaceholder() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const time = frame * 0.008;

      ctx.strokeStyle = "rgba(198, 167, 94, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        const radius = 30 + i * 18;
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy + 30,
          radius * (1 + 0.3 * Math.sin(time + i * 0.2)),
          radius * 0.35,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      const buildingW = 160;
      const buildingH = 200;
      const bx = cx - buildingW / 2;
      const by = cy - buildingH / 2 - 20;

      ctx.fillStyle = "rgba(198, 167, 94, 0.08)";
      ctx.fillRect(bx, by, buildingW, buildingH);

      ctx.strokeStyle = "rgba(198, 167, 94, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(bx, by, buildingW, buildingH);

      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(cx, by - 60 + Math.sin(time) * 5);
      ctx.lineTo(bx + buildingW, by);
      ctx.strokeStyle = "rgba(198, 167, 94, 0.4)";
      ctx.stroke();

      ctx.fillStyle = "rgba(198, 167, 94, 0.06)";
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(cx, by - 60 + Math.sin(time) * 5);
      ctx.lineTo(bx + buildingW, by);
      ctx.closePath();
      ctx.fill();

      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
          const wx = bx + 20 + col * 45;
          const wy = by + 30 + row * 42;
          const glow = Math.sin(time * 2 + row + col) * 0.3 + 0.3;
          ctx.fillStyle = `rgba(198, 167, 94, ${glow})`;
          ctx.fillRect(wx, wy, 28, 22);
        }
      }

      ctx.fillStyle = "rgba(198, 167, 94, 0.15)";
      ctx.fillRect(cx - 20, by + buildingH - 50, 40, 50);

      const doorGlow = Math.sin(time * 1.5) * 0.15 + 0.25;
      ctx.fillStyle = `rgba(198, 167, 94, ${doorGlow})`;
      ctx.fillRect(cx - 20, by + buildingH - 50, 40, 50);

      ctx.beginPath();
      ctx.arc(cx, by - 60 + Math.sin(time) * 5, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(198, 167, 94, ${Math.sin(time * 3) * 0.3 + 0.5})`;
      ctx.fill();

      frame++;
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.setTransform(2, 0, 0, 2, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
      <canvas
        ref={canvasRef}
        data-testid="canvas-3d-venue"
        className="w-full h-full"
        style={{ imageRendering: "auto" }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#C6A75E]/50 tracking-[0.2em] uppercase">
        Interactive 3D Model
      </div>
    </div>
  );
}

export default function Venue() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <section className="pt-32 pb-20 relative" data-testid="section-venue-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E1F]/30 to-[#1A1A1A]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Spaces
            </span>
            <h1 data-testid="text-venue-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F1E8] mb-6">
              The Venue
            </h1>
            <p className="text-[#F5F1E8]/60 max-w-2xl mx-auto leading-relaxed">
              State-of-the-art facilities designed to host the most prestigious events
              in the Kingdom
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#222]" data-testid="section-active-venue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-[#C6A75E]/10 text-[#C6A75E] px-3 py-1 text-xs tracking-[0.2em] uppercase rounded-sm mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Active Venue
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E8] mb-6">
                Dunes Gate Main Venue
              </h2>
              <p className="text-[#F5F1E8]/60 leading-relaxed mb-6">
                Our flagship venue spans 15,000 square meters, featuring a grand main hall,
                exclusive VIP areas, professional meeting rooms, and state-of-the-art
                registration facilities. Every detail has been designed to accommodate
                events of the highest caliber.
              </p>
              <img
                src="/assets/official/aerial-view.png"
                alt="Dunes Gate Main Venue - Aerial View"
                className="w-full rounded-md border border-[#C6A75E]/10"
                data-testid="img-venue-main"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Venue3DPlaceholder />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            {venueStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`stat-venue-${i}`}
                className="bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-5 text-center"
              >
                <stat.icon size={18} className="text-[#C6A75E] mx-auto mb-2" />
                <div className="font-serif text-xl text-[#F5F1E8] mb-0.5">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-xs text-[#F5F1E8]/40 ml-1">{stat.unit}</span>
                  )}
                </div>
                <div className="text-[10px] text-[#F5F1E8]/40 tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/contact" data-testid="link-venue-contact">
              <span className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#1A1A1A] px-8 py-3 font-medium tracking-wider uppercase text-sm rounded-md cursor-pointer transition-opacity hover:opacity-90">
                Contact Us About This Venue <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]" data-testid="section-future-venue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div
                  className="w-full aspect-video rounded-md border border-[#C6A75E]/10 bg-[#222] flex items-center justify-center"
                  data-testid="img-venue-future"
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-dashed border-[#C6A75E]/30 flex items-center justify-center">
                      <MapPin size={28} className="text-[#C6A75E]/40" />
                    </div>
                    <p className="text-[#C6A75E]/50 font-serif text-lg">Coming Soon</p>
                    <p className="text-[#F5F1E8]/30 text-sm mt-2">Details will be announced</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent rounded-md" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 bg-[#8A6B3F]/20 text-[#C6A75E] px-3 py-1 text-xs tracking-[0.2em] uppercase rounded-sm mb-6">
                Coming Soon
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E8] mb-6">
                Future Venue
              </h2>
              <p className="text-[#F5F1E8]/60 leading-relaxed mb-6">
                We are expanding. A second venue is in development, designed to complement
                our flagship location and offer even more possibilities for extraordinary events.
                Stay tuned for more details.
              </p>
              <p className="text-[#F5F1E8]/40 text-sm italic">
                Details and specifications will be announced soon.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#222]" data-testid="section-event-categories">
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
              Event Categories
            </h2>
            <p className="text-[#F5F1E8]/50 max-w-xl mx-auto">
              We cater to a diverse range of prestigious events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`card-category-${i}`}
                className="group bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-8 hover:border-[#C6A75E]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#C6A75E]/30 flex items-center justify-center mb-5 group-hover:bg-[#C6A75E]/10 transition-colors">
                  <cat.icon size={20} className="text-[#C6A75E]" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F1E8] mb-2">{cat.label}</h3>
                <p className="text-sm text-[#F5F1E8]/50 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]" data-testid="section-location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-4 block">
                Strategic Location
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E8] mb-6">
                Prime Riyadh Location
              </h2>
              <p className="text-[#F5F1E8]/60 leading-relaxed mb-6">
                Strategically positioned in the heart of Riyadh with unmatched accessibility.
                Easy access from all city districts, minimizing travel time for guests, and
                located near the entertainment district for enhanced experiences.
              </p>
              <div className="space-y-3">
                {[
                  "Central Riyadh Positioning",
                  "Easy access from all city districts",
                  "Entertainment District proximity",
                  "Community integration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#F5F1E8]/50 text-sm">
                    <MapPin size={14} className="text-[#C6A75E] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/official/location-map.png"
                alt="Dunes Gate Location - Riyadh"
                className="w-full max-w-md mx-auto rounded-md border border-[#C6A75E]/10"
                data-testid="img-location-map"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
