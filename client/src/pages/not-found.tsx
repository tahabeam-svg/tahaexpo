import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <span className="inline-block w-12 h-px bg-[#C6A75E] mb-6" />
        <h1 data-testid="text-404-title" className="font-serif text-5xl md:text-7xl text-[#C6A75E] mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl text-[#F5F1E8] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#F5F1E8]/60 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" data-testid="link-back-home">
          <span className="inline-flex items-center gap-2 bg-[#C6A75E] text-[#1A1A1A] px-8 py-3 font-medium tracking-wider uppercase text-sm rounded-md cursor-pointer transition-opacity hover:opacity-90">
            <ArrowLeft size={16} /> Back to Home
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
