import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Ingredients } from "@/components/home/Ingredients";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Vision } from "@/components/home/Vision";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary selection:text-background bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <ProductShowcase />
        <Ingredients />
        <Vision />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
