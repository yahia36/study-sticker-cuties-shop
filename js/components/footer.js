
// Load the footer component into the page
document.addEventListener('DOMContentLoaded', function() {
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    footerElement.innerHTML = `
      <footer class="bg-softgray/40 pt-12 pb-6">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Brand Info -->
            <div class="flex flex-col gap-4 items-start">
              <a href="/" class="flex items-center gap-2 font-heading font-bold text-xl text-softpink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="4.5" y1="9" x2="4.5" y2="13"></line><line x1="8.5" y1="9" x2="8.5" y2="13"></line><line x1="12.5" y1="9" x2="12.5" y2="13"></line></svg>
                <span>StickyStudies</span>
              </a>
              <p class="text-sm text-muted-foreground">
                Cute motivational stationery stickers designed to make your study sessions more fun and productive!
              </p>
              <div class="flex gap-3">
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="p-2 rounded-full bg-softpink text-primary-foreground hover:bg-softpink/80 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="mailto:hello@stickystudies.com" 
                  class="p-2 rounded-full bg-softpink text-primary-foreground hover:bg-softpink/80 transition-colors"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="flex flex-col gap-4">
              <h3 class="font-medium text-base">Quick Links</h3>
              <div class="space-y-2">
                <a href="/products.html" class="block text-sm hover:text-softpink transition-colors">All Products</a>
                <a href="/products.html?category=motivation" class="block text-sm hover:text-softpink transition-colors">Motivational Stickers</a>
                <a href="/products.html?category=bookmarks" class="block text-sm hover:text-softpink transition-colors">Bookmarks</a>
                <a href="/products.html?category=planners" class="block text-sm hover:text-softpink transition-colors">Planner Sets</a>
                <a href="/about.html" class="block text-sm hover:text-softpink transition-colors">About the Creator</a>
                <a href="/contact.html" class="block text-sm hover:text-softpink transition-colors">Contact Us</a>
              </div>
            </div>
            
            <!-- Newsletter -->
            <div class="flex flex-col gap-4">
              <h3 class="font-medium text-base">Stay Updated</h3>
              <p class="text-sm text-muted-foreground">
                Subscribe to get updates on new sticker releases and special offers!
              </p>
              <div class="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  class="bg-white border-softpink flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                  id="footer-email-input"
                />
                <button 
                  class="bg-softpink hover:bg-softpink/80 text-primary-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium"
                  id="footer-subscribe-button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div class="mt-10 border-t border-border pt-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
            <p>© ${new Date().getFullYear()} StickyStudies. All rights reserved.</p>
            <div class="flex gap-6">
              <a href="/privacy.html" class="hover:text-softpink transition-colors">Privacy Policy</a>
              <a href="/terms.html" class="hover:text-softpink transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    
    // Handle newsletter subscription
    const subscribeButton = document.getElementById('footer-subscribe-button');
    const emailInput = document.getElementById('footer-email-input');
    
    if (subscribeButton && emailInput) {
      subscribeButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          // In a real application, this would send data to the server
          postData('newsletter/subscribe', { email })
            .then(data => {
              if (data) {
                showToast('Subscribed!', 'You have been added to our newsletter.');
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
