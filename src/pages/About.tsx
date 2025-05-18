
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container">
          {/* Story Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  The Story Behind <span className="text-softpink">StickyStudies</span>
                </h1>
                
                <p className="mb-4 text-lg">
                  Hi! I'm Mia, a student and stationery enthusiast who turned my passion into a small business.
                </p>
                
                <p className="mb-4">
                  StickyStudies was born in my dorm room during late-night study sessions when I needed something to make the hours of reviewing notes more enjoyable. I started designing cute stickers for my own planners and notebooks, and soon my friends were asking for them too!
                </p>
                
                <p className="mb-4">
                  What started as a creative hobby has grown into a small business that helps students worldwide make their study sessions more productive and fun. Each sticker is designed with love and printed on high-quality vinyl that won't peel or fade.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button 
                    className="bg-softpink hover:bg-softpink/80 text-primary-foreground"
                    asChild
                  >
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-softpink text-softpink hover:bg-softpink/10"
                    asChild
                  >
                    <Link to="/products">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Shop Collection
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Creator working on sticker designs" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Values Section */}
          <section className="mb-20 bg-softgray/30 py-16 px-6 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                StickyStudies is built on these core principles that guide everything we create
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                <div className="w-12 h-12 bg-softpink/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Creativity</h3>
                <p className="text-muted-foreground">
                  We believe that studying doesn't have to be boring. Our designs bring joy and creativity to your study sessions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                <div className="w-12 h-12 bg-softyellow/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We use eco-friendly materials whenever possible and minimize waste in our production process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                <div className="w-12 h-12 bg-softblue/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💙</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We're building a community of students and stationery lovers who support and inspire each other.
                </p>
              </div>
            </div>
          </section>
          
          {/* Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">How Our Stickers Are Made</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-softpink flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="font-medium text-lg mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Each sticker starts as a hand-drawn sketch before being digitized
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-softpurple flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="font-medium text-lg mb-2">Print</h3>
                <p className="text-muted-foreground">
                  Printed on high-quality vinyl with vibrant, fade-resistant colors
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-softyellow flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="font-medium text-lg mb-2">Cut</h3>
                <p className="text-muted-foreground">
                  Precisely cut to create perfect shapes with our professional cutting machine
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-softgreen flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="font-medium text-lg mb-2">Package</h3>
                <p className="text-muted-foreground">
                  Carefully packaged and shipped to bring joy to your stationery collection
                </p>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                  <h3 className="font-medium text-lg mb-2">How long does shipping take?</h3>
                  <p className="text-muted-foreground">
                    Orders are processed within 1-2 business days. Domestic shipping typically takes 3-5 business days, while international shipping can take 1-3 weeks.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                  <h3 className="font-medium text-lg mb-2">Are your stickers waterproof?</h3>
                  <p className="text-muted-foreground">
                    Yes! All our stickers are printed on high-quality, waterproof vinyl that's durable and won't fade or peel easily.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                  <h3 className="font-medium text-lg mb-2">Do you accept custom orders?</h3>
                  <p className="text-muted-foreground">
                    We love creating custom designs for special occasions! Please contact us through our contact page with your request and we'll get back to you within 48 hours.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                  <h3 className="font-medium text-lg mb-2">How can I track my order?</h3>
                  <p className="text-muted-foreground">
                    You'll receive a shipping confirmation email with tracking information once your order ships. You can also log into your account to view order status.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
