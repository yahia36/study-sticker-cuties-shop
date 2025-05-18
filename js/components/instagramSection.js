
// Instagram posts data
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    likes: 245,
    caption: "New motivational sticker set just dropped! Perfect for your study planner 📚✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    likes: 189,
    caption: "Getting ready for finals with these cute bookmarks! Which one is your favorite? 🌈"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    likes: 312,
    caption: "Study session setup with our newest planner stickers 📝 #StudyWithMe"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    likes: 274,
    caption: "Restocking these bestsellers today at 3PM EST! Set your reminders 🔔"
  }
];

// Load the Instagram section component into the page
document.addEventListener('DOMContentLoaded', function() {
  const instagramSectionElement = document.getElementById('instagram-section');
  if (instagramSectionElement) {
    instagramSectionElement.innerHTML = `
      <section class="py-16">
        <div class="container">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
                <span>Follow Us On Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-softpink"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="4.5" y1="9" x2="4.5" y2="13"></line><line x1="8.5" y1="9" x2="8.5" y2="13"></line><line x1="12.5" y1="9" x2="12.5" y2="13"></line></svg>
              </h2>
              <p class="text-muted-foreground">
                @stickystudies • Join our community of 15K+ stationery lovers
              </p>
            </div>
            
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-gradient-to-r from-softpurple to-softpink text-white hover:opacity-90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium"
            >
              Follow Us
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="instagram-posts">
            <!-- Instagram posts will be generated here -->
          </div>
        </div>
      </section>
    `;
    
    const instagramPostsContainer = document.getElementById('instagram-posts');
    
    // Create Instagram posts
    instagramPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'group relative overflow-hidden rounded-lg aspect-square bg-gray-200';
      
      const image = document.createElement('img');
      image.src = post.image;
      image.alt = `Instagram post ${post.id}`;
      image.className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110';
      
      const overlay = document.createElement('div');
      overlay.className = 'absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white';
      
      const likes = document.createElement('p');
      likes.className = 'text-sm font-medium mb-2';
      likes.innerHTML = `❤️ ${post.likes} likes`;
      
      const caption = document.createElement('p');
      caption.className = 'text-sm line-clamp-3';
      caption.textContent = post.caption;
      
      overlay.appendChild(likes);
      overlay.appendChild(caption);
      
      postElement.appendChild(image);
      postElement.appendChild(overlay);
      
      instagramPostsContainer.appendChild(postElement);
    });
  }
});
