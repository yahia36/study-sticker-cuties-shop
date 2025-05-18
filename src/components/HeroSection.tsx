
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-softpurple/20 to-softpink/20 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-softpink">Cute Stickers</span> to Make 
            <span className="text-softpurple"> Studying</span> Fun!
          </h1>
          
          <p className="text-lg mb-8 text-foreground/80">
            Handcrafted motivational stationery, bookmarks, and planner stickers to brighten your study sessions and keep you inspired.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-softpink hover:bg-softpink/80 text-primary-foreground group"
              asChild
            >
              <Link to="/products">
                <BookOpen className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                Explore Collection
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-softpurple text-softpurple hover:bg-softpurple/10"
              asChild
            >
              <Link to="/about">About the Creator</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-softyellow rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-40 -right-10 w-32 h-32 bg-softgreen rounded-full opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-softblue rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default HeroSection;
