
// Sample product data - In a real app, this would be fetched from the API
const allProducts = [
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

// Categories
const categories = [
  "Motivational Stickers",
  "Bookmarks",
  "Planner Stickers",
  "Reward Stickers",
  "Organization Stickers"
];

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const categoryFilters = document.getElementById('category-filters');
  const priceRangeMin = document.getElementById('price-range-min');
  const priceRangeMax = document.getElementById('price-range-max');
  const priceMinDisplay = document.getElementById('price-min-display');
  const priceMaxDisplay = document.getElementById('price-max-display');
  const productsGrid = document.getElementById('products-grid');
  const productsCount = document.getElementById('products-count');
  const noProductsMessage = document.getElementById('no-products-message');
  
  let selectedCategories = [];
  let priceRange = [0, 10];
  let searchTerm = '';
  
  // Get URL parameters for initial category filter
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  
  // Initialize filters
  function initializeFilters() {
    // Create category checkboxes
    categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'flex items-center space-x-2';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = category;
      checkbox.className = 'h-4 w-4 rounded-sm border border-primary';
      
      if (initialCategory && category.toLowerCase().includes(initialCategory.toLowerCase())) {
        checkbox.checked = true;
        selectedCategories.push(category);
      }
      
      const label = document.createElement('label');
      label.htmlFor = category;
      label.className = 'text-sm cursor-pointer';
      label.textContent = category;
      
      categoryDiv.appendChild(checkbox);
      categoryDiv.appendChild(label);
      
      categoryFilters.appendChild(categoryDiv);
      
      // Add event listener to checkbox
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          selectedCategories.push(category);
        } else {
          selectedCategories = selectedCategories.filter(c => c !== category);
        }
        filterProducts();
      });
    });
    
    // Set up search input
    searchInput.addEventListener('input', function() {
      searchTerm = this.value;
      filterProducts();
    });
    
    // Set up price range sliders
    priceRangeMin.addEventListener('input', function() {
      if (parseFloat(this.value) > parseFloat(priceRangeMax.value)) {
        this.value = priceRangeMax.value;
      }
      priceRange[0] = parseFloat(this.value);
      priceMinDisplay.textContent = `$${formatPrice(priceRange[0])}`;
      filterProducts();
    });
    
    priceRangeMax.addEventListener('input', function() {
      if (parseFloat(this.value) < parseFloat(priceRangeMin.value)) {
        this.value = priceRangeMin.value;
      }
      priceRange[1] = parseFloat(this.value);
      priceMaxDisplay.textContent = `$${formatPrice(priceRange[1])}`;
      filterProducts();
    });
  }
  
  // Filter products based on selected filters
  function filterProducts() {
    let filtered = allProducts;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Update products display
    productsGrid.innerHTML = '';
    
    if (filtered.length === 0) {
      productsGrid.style.display = 'none';
      noProductsMessage.style.display = 'block';
      productsCount.textContent = 'No products found';
    } else {
      productsGrid.style.display = 'grid';
      noProductsMessage.style.display = 'none';
      productsCount.textContent = `Showing ${filtered.length} products`;
      
      filtered.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
      });
    }
  }
  
  // Initialize and filter products
  initializeFilters();
  filterProducts();
});
