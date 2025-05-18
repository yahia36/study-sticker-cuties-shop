
// Load the hero section component into the page
document.addEventListener('DOMContentLoaded', function() {
  const heroSectionElement = document.getElementById('hero-section');
  if (heroSectionElement) {
    heroSectionElement.innerHTML = `
      <section class="relative overflow-hidden bg-gradient-to-b from-softpurple/20 to-softpink/20 py-20 md:py-32">
        <div class="container relative z-10">
          <div class="max-w-2xl">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span class="text-softpink">Cute Stickers</span> to Make 
              <span class="text-softpurple"> Studying</span> Fun!
            </h1>
            
            <p class="text-lg mb-8 text-foreground/80">
              Handcrafted motivational stationery, bookmarks, and planner stickers to brighten your study sessions and keep you inspired.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="/products.html"
                class="bg-softpink hover:bg-softpink/80 text-primary-foreground group inline-flex h-11 items-center justify-center rounded-md px-8 py-2 text-base font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 group-hover:animate-wiggle"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                Explore Collection
              </a>
              <a 
                href="/about.html"
                class="border-softpurple text-softpurple hover:bg-softpurple/10 inline-flex h-11 items-center justify-center rounded-md border px-8 py-2 text-base font-medium"
              >
                About the Creator
              </a>
            </div>
          </div>
        </div>
        
        <!-- Decorative Elements -->
        <div class="absolute -top-10 -right-10 w-48 h-48 bg-softyellow rounded-full opacity-40 animate-float"></div>
        <div class="absolute top-40 -right-10 w-32 h-32 bg-softgreen rounded-full opacity-50 animate-float" style="animation-delay: 1s"></div>
        <div class="absolute -bottom-20 -left-10 w-60 h-60 bg-softblue rounded-full opacity-30 animate-float" style="animation-delay: 2s"></div>
      </section>
    `;
  }
});
