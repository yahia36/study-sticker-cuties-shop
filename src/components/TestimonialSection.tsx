
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma T.",
    avatar: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    content: "These stickers are so adorable! They've made my study sessions so much more enjoyable and I genuinely look forward to using them in my planner each day.",
    rating: 5
  },
  {
    id: 2,
    name: "Lily K.",
    avatar: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    content: "The motivation stickers have seriously helped me stay focused during exam season. Plus, the quality is amazing - they don't peel off like other stickers I've tried!",
    rating: 5
  },
  {
    id: 3,
    name: "Jordan M.",
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    content: "The bookmarks are my favorite! I use them for all my textbooks, and they make studying much more bearable. The quotes on them are super encouraging.",
    rating: 4
  },
  {
    id: 4,
    name: "Alex P.",
    avatar: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    content: "These stickers have transformed my bullet journal into something I'm actually excited to use. The weekly planner stickers help me stay organized in the cutest way!",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-softpink/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of stationery lovers who have added a touch of joy to their study sessions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-softpink/30">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-softpink">
                <img 
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-softorange text-softorange" />
                ))}
              </div>
              
              <blockquote className="mb-6 text-lg italic">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              <cite className="font-medium text-softpink not-italic">
                - {testimonials[activeIndex].name}
              </cite>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-softpink scale-125" : "bg-softpink/30"
                )}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <Button 
              size="icon" 
              variant="outline" 
              onClick={prevTestimonial}
              className="rounded-full border-softpink hover:bg-softpink/10 hover:text-softpink"
            >
              ←
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <Button 
              size="icon" 
              variant="outline"
              onClick={nextTestimonial}
              className="rounded-full border-softpink hover:bg-softpink/10 hover:text-softpink"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
