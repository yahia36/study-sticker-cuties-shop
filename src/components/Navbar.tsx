
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen, Sticker } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-softpink">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl text-softpink">
          <Sticker className="w-7 h-7" />
          <span>StickyStudies</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks className="flex gap-6" />
          <Button className="bg-softpurple hover:bg-softpurple/90 text-primary-foreground">
            <BookOpen className="mr-2 h-4 w-4" />
            Shop Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="flex md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={cn(
              "block h-0.5 w-6 bg-foreground transition-transform",
              isMenuOpen && "translate-y-2 rotate-45"
            )}></span>
            <span className={cn(
              "block h-0.5 w-6 bg-foreground transition-opacity",
              isMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block h-0.5 w-6 bg-foreground transition-transform",
              isMenuOpen && "-translate-y-2 -rotate-45"
            )}></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-softpink",
        isMenuOpen ? "max-h-60" : "max-h-0"
      )}>
        <div className="container py-4 flex flex-col gap-4">
          <NavLinks className="flex flex-col gap-3" />
          <Button className="bg-softpurple hover:bg-softpurple/90 text-primary-foreground w-full">
            <BookOpen className="mr-2 h-4 w-4" />
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ className }: { className?: string }) => (
  <div className={className}>
    <Link to="/" className="font-medium hover:text-softpink transition-colors">Home</Link>
    <Link to="/products" className="font-medium hover:text-softpink transition-colors">Products</Link>
    <Link to="/about" className="font-medium hover:text-softpink transition-colors">About</Link>
    <Link to="/contact" className="font-medium hover:text-softpink transition-colors">Contact</Link>
  </div>
);

export default Navbar;
