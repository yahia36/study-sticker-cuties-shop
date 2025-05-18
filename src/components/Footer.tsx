
import { Link } from "react-router-dom";
import { BookOpen, Instagram, Mail, Sticker } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-softgray/40 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 items-start">
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl text-softpink">
              <Sticker className="w-6 h-6" />
              <span>StickyStudies</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Cute motivational stationery stickers designed to make your study sessions more fun and productive!
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-softpink text-primary-foreground hover:bg-softpink/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hello@stickystudies.com" 
                className="p-2 rounded-full bg-softpink text-primary-foreground hover:bg-softpink/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-base">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-sm hover:text-softpink transition-colors">All Products</Link>
              <Link to="/products?category=motivation" className="block text-sm hover:text-softpink transition-colors">Motivational Stickers</Link>
              <Link to="/products?category=bookmarks" className="block text-sm hover:text-softpink transition-colors">Bookmarks</Link>
              <Link to="/products?category=planners" className="block text-sm hover:text-softpink transition-colors">Planner Sets</Link>
              <Link to="/about" className="block text-sm hover:text-softpink transition-colors">About the Creator</Link>
              <Link to="/contact" className="block text-sm hover:text-softpink transition-colors">Contact Us</Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-base">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates on new sticker releases and special offers!
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-softpink"
              />
              <Button className="bg-softpink hover:bg-softpink/80 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StickyStudies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-softpink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-softpink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
