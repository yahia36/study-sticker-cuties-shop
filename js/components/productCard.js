
// Create a product card component
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card rounded-2xl overflow-hidden bg-white border border-softpink/50 flex flex-col h-full';
  
  const imageSection = document.createElement('div');
  imageSection.className = 'relative overflow-hidden';
  
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  image.className = 'w-full h-48 object-cover transition-transform duration-500 hover:scale-110';
  
  const badgeContainer = document.createElement('div');
  badgeContainer.className = 'absolute top-3 left-3 flex gap-2';
  
  if (product.isFeatured) {
    const featuredBadge = document.createElement('span');
    featuredBadge.className = 'rounded-full px-2 py-1 text-xs font-medium bg-softpurple text-primary-foreground';
    featuredBadge.textContent = 'Featured';
    badgeContainer.appendChild(featuredBadge);
  }
  
  if (product.isBestseller) {
    const bestsellerBadge = document.createElement('span');
    bestsellerBadge.className = 'rounded-full px-2 py-1 text-xs font-medium bg-softyellow text-primary-foreground';
    bestsellerBadge.textContent = 'Bestseller';
    badgeContainer.appendChild(bestsellerBadge);
  }
  
  imageSection.appendChild(image);
  imageSection.appendChild(badgeContainer);
  
  const contentSection = document.createElement('div');
  contentSection.className = 'p-4 flex flex-col flex-grow';
  
  const headerSection = document.createElement('div');
  headerSection.className = 'flex justify-between items-start mb-2';
  
  const title = document.createElement('h3');
  title.className = 'font-medium text-lg line-clamp-2';
  title.textContent = product.name;
  
  const price = document.createElement('span');
  price.className = 'font-semibold text-primary-foreground bg-softpink rounded-full px-3 py-1 text-sm';
  price.textContent = `$${formatPrice(product.price)}`;
  
  headerSection.appendChild(title);
  headerSection.appendChild(price);
  
  const category = document.createElement('p');
  category.className = 'text-muted-foreground text-sm mb-2';
  category.textContent = product.category;
  
  const ratingSection = document.createElement('div');
  ratingSection.className = 'flex items-center gap-1 mb-4';
  
  const starIcon = document.createElement('span');
  starIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FEC6A1" stroke="#FEC6A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  
  const rating = document.createElement('span');
  rating.className = 'text-sm';
  rating.textContent = product.rating.toFixed(1);
  
  ratingSection.appendChild(starIcon);
  ratingSection.appendChild(rating);
  
  const buttonSection = document.createElement('div');
  buttonSection.className = 'flex gap-2 mt-auto';
  
  const addToCartBtn = document.createElement('button');
  addToCartBtn.className = 'flex-1 bg-softpurple hover:bg-softpurple/80 text-primary-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium';
  addToCartBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"></path><polyline points="9 15 12 12 9 9"></polyline><path d="M12 12h9"></path></svg> Add to Cart`;
  
  addToCartBtn.onclick = function() {
    addToCart(product);
  };
  
  const detailsBtn = document.createElement('a');
  detailsBtn.href = `/product.html?id=${product.id}`;
  detailsBtn.className = 'border-softpink text-softpink hover:bg-softpink/10 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium';
  detailsBtn.textContent = 'Details';
  
  buttonSection.appendChild(addToCartBtn);
  buttonSection.appendChild(detailsBtn);
  
  contentSection.appendChild(headerSection);
  contentSection.appendChild(category);
  contentSection.appendChild(ratingSection);
  contentSection.appendChild(buttonSection);
  
  card.appendChild(imageSection);
  card.appendChild(contentSection);
  
  return card;
}

// Add product to cart
function addToCart(product) {
  // Get existing cart items from localStorage
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Check if product already exists in cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingProductIndex !== -1) {
    // Increment quantity if product already in cart
    cart[existingProductIndex].quantity += 1;
  } else {
    // Add new product to cart with quantity of 1
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Show toast notification
  showToast('Added to cart', `${product.name} has been added to your cart.`);
}
