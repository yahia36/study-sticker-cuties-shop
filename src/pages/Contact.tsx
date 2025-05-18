
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Sticker } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch With Us
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a question about our stickers? Want to place a custom order? Drop us a message and we'll get back to you soon!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-softpink/10 p-8 rounded-xl">
                  <div className="flex flex-col gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-softpink flex items-center justify-center">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-medium text-lg">Email Us</h3>
                      </div>
                      <a 
                        href="mailto:hello@stickystudies.com" 
                        className="text-softpink hover:underline"
                      >
                        hello@stickystudies.com
                      </a>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-softpurple flex items-center justify-center">
                          <Instagram className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-medium text-lg">Follow Us</h3>
                      </div>
                      <a 
                        href="https://instagram.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-softpink hover:underline"
                      >
                        @stickystudies
                      </a>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-softyellow flex items-center justify-center">
                          <Sticker className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-medium text-lg">Working Hours</h3>
                      </div>
                      <p className="mb-1">Monday - Friday: 9am - 5pm</p>
                      <p className="text-muted-foreground">
                        We typically respond to emails within 24 hours on business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-softpink/20">
                  <h2 className="text-xl font-medium mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          required
                          className="border-softpink/30 focus:border-softpink focus:ring-softpink"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="border-softpink/30 focus:border-softpink focus:ring-softpink"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="What is this regarding?"
                        required
                        className="border-softpink/30 focus:border-softpink focus:ring-softpink"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="min-h-32 border-softpink/30 focus:border-softpink focus:ring-softpink"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-softpink hover:bg-softpink/80 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* FAQ Preview */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Find quick answers to common questions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                  <h3 className="font-medium text-lg mb-2">When will my order ship?</h3>
                  <p className="text-muted-foreground">
                    Orders typically ship within 1-2 business days. You'll receive a tracking number once your package is on its way!
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
                  <h3 className="font-medium text-lg mb-2">Do you offer wholesale options?</h3>
                  <p className="text-muted-foreground">
                    Yes! If you're interested in wholesale orders for your store, please email us at wholesale@stickystudies.com for pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
