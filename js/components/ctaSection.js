
// Load the CTA section component into the page
document.addEventListener('DOMContentLoaded', function() {
  const ctaSectionElement = document.getElementById('cta-section');
  if (ctaSectionElement) {
    ctaSectionElement.innerHTML = `
      <section class="py-16 bg-gradient-to-r from-softpink/30 to-softpurple/30">
        <div class="container">
          <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-softpink/30 max-w-4xl mx-auto">
            <div class="flex flex-col items-center text-center">
              <div class="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-softpurple animate-float"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              </div>
              
              <h2 class="text-2xl md:text-3xl font-bold mb-3">
                Join Our Sticker Club
              </h2>
              
              <p class="text-muted-foreground mb-6 max-w-lg">
                Subscribe to our newsletter for new product announcements, exclusive discounts, and free printable study stickers every month!
              </p>
              
              <form id="newsletter-form" class="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  class="flex-1 border-softpink focus:ring-softpink flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                  id="newsletter-email"
                  required
                />
                <button 
                  type="submit"
                  class="bg-softpurple hover:bg-softpurple/80 text-white inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
              
              <p class="mt-4 text-xs text-muted-foreground">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
    
    // Handle newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    
    if (newsletterForm && emailInput) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          // In a real application, this would send data to the server
          postData('newsletter/subscribe', { email })
            .then(data => {
              if (data) {
                showToast("You're subscribed!", "Check your inbox for a special discount code.");
                emailInput.value = '';
              }
            });
        } else {
          showToast('Invalid Email', 'Please enter a valid email address.');
        }
      });
    }
  }
});
