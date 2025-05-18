
// Testimonials data
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

// Load the testimonial section component into the page
document.addEventListener('DOMContentLoaded', function() {
  const testimonialSectionElement = document.getElementById('testimonial-section');
  if (testimonialSectionElement) {
    testimonialSectionElement.innerHTML = `
      <section class="py-16 bg-softpink/10">
        <div class="container">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-3">
              What Our Customers Say
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Join our community of stationery lovers who have added a touch of joy to their study sessions.
            </p>
          </div>

          <div class="relative max-w-4xl mx-auto">
            <!-- Main Testimonial -->
            <div class="bg-white p-8 rounded-2xl shadow-md border border-softpink/30">
              <div class="flex flex-col items-center text-center">
                <div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-softpink" id="testimonial-avatar">
                  <img 
                    src="${testimonials[0].avatar}"
                    alt="${testimonials[0].name}"
                    class="w-full h-full object-cover"
                  />
                </div>
                
                <div class="flex mb-3" id="testimonial-rating">
                  <!-- Rating stars will be generated here -->
                </div>
                
                <blockquote class="mb-6 text-lg italic" id="testimonial-content">
                  "${testimonials[0].content}"
                </blockquote>
                
                <cite class="font-medium text-softpink not-italic" id="testimonial-name">
                  - ${testimonials[0].name}
                </cite>
              </div>
            </div>
            
            <!-- Navigation Controls -->
            <div class="flex justify-center mt-6 gap-3" id="testimonial-dots">
              <!-- Dots will be generated here -->
            </div>
            
            <div class="absolute -left-4 top-1/2 -translate-y-1/2">
              <button 
                class="rounded-full border border-softpink hover:bg-softpink/10 hover:text-softpink h-8 w-8 inline-flex items-center justify-center"
                id="prev-testimonial"
              >
                ←
              </button>
            </div>
            <div class="absolute -right-4 top-1/2 -translate-y-1/2">
              <button 
                class="rounded-full border border-softpink hover:bg-softpink/10 hover:text-softpink h-8 w-8 inline-flex items-center justify-center"
                id="next-testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
    
    let activeIndex = 0;
    const testimonialAvatar = document.getElementById('testimonial-avatar').querySelector('img');
    const testimonialRating = document.getElementById('testimonial-rating');
    const testimonialContent = document.getElementById('testimonial-content');
    const testimonialName = document.getElementById('testimonial-name');
    const testimonialDots = document.getElementById('testimonial-dots');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    // Generate dots
    testimonials.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = index === 0 
        ? 'w-3 h-3 rounded-full transition-all duration-300 bg-softpink scale-125'
        : 'w-3 h-3 rounded-full transition-all duration-300 bg-softpink/30';
      dot.setAttribute('aria-label', `View testimonial ${index + 1}`);
      dot.dataset.index = index;
      testimonialDots.appendChild(dot);
    });
    
    // Update testimonial content
    function updateTestimonial() {
      const testimonial = testimonials[activeIndex];
      
      // Update avatar
      testimonialAvatar.src = testimonial.avatar;
      testimonialAvatar.alt = testimonial.name;
      
      // Update rating stars
      testimonialRating.innerHTML = '';
      for (let i = 0; i < testimonial.rating; i++) {
        const star = document.createElement('span');
        star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FEC6A1" stroke="#FEC6A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        testimonialRating.appendChild(star);
      }
      
      // Update content and name
      testimonialContent.textContent = `"${testimonial.content}"`;
      testimonialName.textContent = `- ${testimonial.name}`;
      
      // Update active dot
      const dots = testimonialDots.querySelectorAll('button');
      dots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('bg-softpink', 'scale-125');
          dot.classList.remove('bg-softpink/30');
        } else {
          dot.classList.remove('bg-softpink', 'scale-125');
          dot.classList.add('bg-softpink/30');
        }
      });
    }
    
    // Event listeners for navigation
    nextButton.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % testimonials.length;
      updateTestimonial();
    });
    
    prevButton.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial();
    });
    
    // Event listeners for dots
    testimonialDots.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        activeIndex = parseInt(e.target.dataset.index, 10);
        updateTestimonial();
      }
    });
  }
});
