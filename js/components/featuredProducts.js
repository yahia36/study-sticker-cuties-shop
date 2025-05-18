
// Sample product data - In a real app, this would be fetched from the API
const products = [
  {
    id: "sticker-motivation-1",
    name: "Motivation Study Sticker Pack",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Motivational Stickers",
    rating: 4.8,
    isFeatured: true
  },
  {
    id: "sticker-motivation-2",
    name: "Focus Mode Sticker Set",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Motivational Stickers",
    rating: 4.6
  },
  {
    id: "bookmark-cute-1",
    name: "Cute Animal Bookmark Pack",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "Bookmarks",
    rating: 5.0,
    isBestseller: true
  },
  {
    id: "planner-weekly-1",
    name: "Weekly Study Planner Stickers",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Planner Stickers",
    rating: 4.9,
    isFeatured: true
  },
  {
    id: "sticker-rewards-1",
    name: "Study Rewards Sticker Set",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "Reward Stickers",
    rating: 4.7
  },
  {
    id: "bookmark-quotes-1",
    name: "Inspirational Quotes Bookmarks",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Bookmarks",
    rating: 4.5,
    isBestseller: true
  },
  {
    id: "planner-monthly-1",
    name: "Monthly Goal Tracker Stickers",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Planner Stickers",
    rating: 4.8
  },
  {
    id: "sticker-subject-1",
    name: "Subject Divider Sticker Pack",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "Organization Stickers",
    rating: 4.6
  }
];

// Load the featured products section component into the page
document.addEventListener('DOMContentLoaded', function() {
  const featuredProductsElement = document.getElementById('featured-products');
  if (featuredProductsElement) {
    // Create the section structure
    featuredProductsElement.innerHTML = `
      <section class="py-16 bg-softgray/30">
        <div class="container">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-3">
              Our Popular Stickers
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of handcrafted stickers and stationery designed to make your study sessions more productive and fun.
            </p>
          </div>

          <div class="mb-8">
            <div class="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0 mb-8" id="product-tabs">
              <button 
                class="bg-softpink text-white px-4 py-2 rounded-full text-sm"
                data-category="all"
              >All Products</button>
              <button 
                class="bg-white hover:bg-softpink hover:text-white px-4 py-2 rounded-full text-sm"
                data-category="bestsellers"
              >Bestsellers</button>
              <button 
                class="bg-white hover:bg-softpink hover:text-white px-4 py-2 rounded-full text-sm"
                data-category="featured"
              >Featured</button>
              <button 
                class="bg-white hover:bg-softpink hover:text-white px-4 py-2 rounded-full text-sm"
                data-category="motivational"
              >Motivational</button>
              <button 
                class="bg-white hover:bg-softpink hover:text-white px-4 py-2 rounded-full text-sm"
                data-category="bookmarks"
              >Bookmarks</button>
              <button 
                class="bg-white hover:bg-softpink hover:text-white px-4 py-2 rounded-full text-sm"
                data-category="planner"
              >Planner Stickers</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-container">
              <!-- Products will be loaded here -->
            </div>
          </div>
        </div>
      </section>
    `;
    
    const productsContainer = document.getElementById('products-container');
    const productTabs = document.getElementById('product-tabs');
    
    // Function to filter products
    function filterProducts(category) {
      let filteredProducts = products;
      
      if (category === 'bestsellers') {
        filteredProducts = products.filter(product => product.isBestseller);
      } else if (category === 'featured') {
        filteredProducts = products.filter(product => product.isFeatured);
      } else if (category !== 'all') {
        filteredProducts = products.filter(product => 
          product.category.toLowerCase().includes(category)
        );
      }
      
      // Clear container
      productsContainer.innerHTML = '';
      
      // Add filtered products
      filteredProducts.forEach(product => {
        productsContainer.appendChild(createProductCard(product));
      });
    }
    
    // Initial load - show all products
    filterProducts('all');
    
    // Add event listeners to tabs
    if (productTabs) {
      productTabs.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
          // Update active tab styles
          document.querySelectorAll('#product-tabs button').forEach(btn => {
            btn.classList.remove('bg-softpink', 'text-white');
            btn.classList.add('bg-white', 'hover:bg-softpink', 'hover:text-white');
          });
          
          e.target.classList.remove('bg-white', 'hover:bg-softpink', 'hover:text-white');
          e.target.classList.add('bg-softpink', 'text-white');
          
          // Filter products based on selected category
          filterProducts(e.target.dataset.category);
        }
      });
    }
  }
});
