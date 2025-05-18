
// Load the contact page content
document.addEventListener('DOMContentLoaded', function() {
  const contactContent = document.getElementById('contact-content');
  if (contactContent) {
    contactContent.innerHTML = `
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch With Us
          </h1>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            Have a question about our stickers? Want to place a custom order? Drop us a message and we'll get back to you soon!
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <div class="bg-softpink/10 p-8 rounded-xl">
              <div class="flex flex-col gap-8">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full bg-softpink flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <h3 class="font-medium text-lg">Email Us</h3>
                  </div>
                  <a 
                    href="mailto:hello@stickystudies.com" 
                    class="text-softpink hover:underline"
                  >
                    hello@stickystudies.com
                  </a>
                </div>
                
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full bg-softpurple flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </div>
                    <h3 class="font-medium text-lg">Follow Us</h3>
                  </div>
                  <a 
                    href="https://instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-softpink hover:underline"
                  >
                    @stickystudies
                  </a>
                </div>
                
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full bg-softyellow flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="4.5" y1="9" x2="4.5" y2="13"></line><line x1="8.5" y1="9" x2="8.5" y2="13"></line><line x1="12.5" y1="9" x2="12.5" y2="13"></line></svg>
                    </div>
                    <h3 class="font-medium text-lg">Working Hours</h3>
                  </div>
                  <p class="mb-1">Monday - Friday: 9am - 5pm</p>
                  <p class="text-muted-foreground">
                    We typically respond to emails within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white p-8 rounded-xl shadow-sm border border-softpink/20">
              <h2 class="text-xl font-medium mb-6">Send Us a Message</h2>
              
              <form id="contact-form" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="name" class="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      class="border-softpink/30 focus:border-softpink focus:ring-softpink flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                  
                  <div class="space-y-2">
                    <label for="email" class="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      class="border-softpink/30 focus:border-softpink focus:ring-softpink flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                
                <div class="space-y-2">
                  <label for="subject" class="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    required
                    class="border-softpink/30 focus:border-softpink focus:ring-softpink flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                
                <div class="space-y-2">
                  <label for="message" class="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    required
                    class="min-h-32 border-softpink/30 focus:border-softpink focus:ring-softpink h-24 w-full rounded-md border px-3 py-2 text-sm"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-softpink hover:bg-softpink/80 text-primary-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium"
                  id="submit-button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <!-- FAQ Preview -->
        <div class="mt-16">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p class="text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
              <h3 class="font-medium text-lg mb-2">When will my order ship?</h3>
              <p class="text-muted-foreground">
                Orders typically ship within 1-2 business days. You'll receive a tracking number once your package is on its way!
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm border border-softpink/20">
              <h3 class="font-medium text-lg mb-2">Do you offer wholesale options?</h3>
              <p class="text-muted-foreground">
                Yes! If you're interested in wholesale orders for your store, please email us at wholesale@stickystudies.com for pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    
    if (contactForm && submitButton) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Change button state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // In a real application, this would send data to the server
        setTimeout(function() {
          // Simulate form submission
          showToast('Message sent!', 'We\'ll get back to you as soon as possible.');
          
          // Reset form
          contactForm.reset();
          
          // Reset button
          submitButton.textContent = 'Send Message';
          submitButton.disabled = false;
        }, 1000);
      });
    }
  }
});
