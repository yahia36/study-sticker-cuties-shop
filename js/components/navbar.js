
// Load the navbar component into the page
document.addEventListener('DOMContentLoaded', function() {
  const navbarElement = document.getElementById('navbar');
  if (navbarElement) {
    navbarElement.innerHTML = `
      <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-softpink">
        <div class="container flex items-center justify-between py-4">
          <!-- Logo & Name -->
          <a href="/" class="flex items-center gap-2 font-heading font-bold text-2xl text-softpink">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="4.5" y1="9" x2="4.5" y2="13"></line><line x1="8.5" y1="9" x2="8.5" y2="13"></line><line x1="12.5" y1="9" x2="12.5" y2="13"></line></svg>
            <span>StickyStudies</span>
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6">
            <div class="flex gap-6">
              <a href="/" class="font-medium hover:text-softpink transition-colors">Home</a>
              <a href="/products.html" class="font-medium hover:text-softpink transition-colors">Products</a>
              <a href="/about.html" class="font-medium hover:text-softpink transition-colors">About</a>
              <a href="/contact.html" class="font-medium hover:text-softpink transition-colors">Contact</a>
            </div>
            <a href="/products.html" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-softpurple hover:bg-softpurple/90 text-white h-10 px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Shop Now
            </a>
          </div>
          
          <!-- Mobile Menu Button -->
          <button 
            class="flex md:hidden p-2"
            id="mobile-menu-button"
            aria-label="Toggle menu"
          >
            <div class="space-y-1.5" id="hamburger-icon">
              <span class="block h-0.5 w-6 bg-foreground transition-transform"></span>
              <span class="block h-0.5 w-6 bg-foreground transition-opacity"></span>
              <span class="block h-0.5 w-6 bg-foreground transition-transform"></span>
            </div>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-softpink max-h-0">
          <div class="container py-4 flex flex-col gap-4">
            <a href="/" class="font-medium hover:text-softpink transition-colors">Home</a>
            <a href="/products.html" class="font-medium hover:text-softpink transition-colors">Products</a>
            <a href="/about.html" class="font-medium hover:text-softpink transition-colors">About</a>
            <a href="/contact.html" class="font-medium hover:text-softpink transition-colors">Contact</a>
            <a href="/products.html" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-softpurple hover:bg-softpurple/90 text-white h-10 px-4 py-2 w-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Shop Now
            </a>
          </div>
        </div>
      </nav>
    `;
    
    // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    if (mobileMenuButton && mobileMenu && hamburgerIcon) {
      let isMenuOpen = false;
      
      mobileMenuButton.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
          mobileMenu.style.maxHeight = '300px';
          hamburgerIcon.children[0].classList.add('translate-y-2', 'rotate-45');
          hamburgerIcon.children[1].classList.add('opacity-0');
          hamburgerIcon.children[2].classList.add('-translate-y-2', '-rotate-45');
        } else {
          mobileMenu.style.maxHeight = '0';
          hamburgerIcon.children[0].classList.remove('translate-y-2', 'rotate-45');
          hamburgerIcon.children[1].classList.remove('opacity-0');
          hamburgerIcon.children[2].classList.remove('-translate-y-2', '-rotate-45');
        }
      });
    }
  }
});
