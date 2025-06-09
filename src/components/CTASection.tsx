import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookmarkPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription success
    toast({
      title: "You're subscribed!",
      description: "Check your inbox for a special discount code.",
    });
    
    setEmail("");
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-softpink/30 to-softpurple/30">
      <div className="container">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-softpink/30 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <BookmarkPlus className="h-12 w-12 text-softpurple animate-float" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Join Our Sticker Club
            </h2>
            
            <p className="text-muted-foreground mb-6 max-w-lg">
              Subscribe to our newsletter for new product announcements, exclusive discounts, and free printable study stickers every month!
            </p>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 border-softpink focus:ring-softpink"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                className="bg-softpurple hover:bg-softpurple/80 text-white"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-muted-foreground">
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
