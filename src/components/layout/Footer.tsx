import Link from "next/link";
import { Container } from "./Container";
import { ArrowRight, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-cream pt-section pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Philosophy */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-6">KADAMBA</h3>
            <p className="text-cream/70 font-sans font-light leading-relaxed mb-8 max-w-xs text-sm md:text-base">
              Rooted in ancient Ayurvedic wisdom, elevated for the modern ritual. Pure, potent, and elegantly crafted skincare.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/60 hover:text-sandalwood transition-colors duration-300">
                <Globe className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/60 hover:text-sandalwood transition-colors duration-300">
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-cream/90 mb-8">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-cream/70">
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">All Products</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Face Care</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Body Rituals</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Hair Care</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-cream/90 mb-8">About</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-cream/70">
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Our Story</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Ingredients</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Journal</Link></li>
              <li><Link href="#" className="hover:text-sandalwood transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-cream/90 mb-8">Newsletter</h4>
            <p className="text-cream/70 font-sans font-light leading-relaxed mb-6 text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="relative border-b border-cream/30 pb-2 group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent text-sm font-light text-cream placeholder:text-cream/50 focus:outline-none pr-10"
                required
              />
              <button 
                type="submit" 
                aria-label="Subscribe"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-cream/60 group-hover:text-sandalwood transition-colors duration-300"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 text-xs font-light text-cream/50">
          <p>© {new Date().getFullYear()} Kadamba Ayurveda. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cream transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
