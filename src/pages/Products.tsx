
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { ProductItem } from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

// Sample product data (same as in FeaturedProducts.tsx)
const allProducts: ProductItem[] = [
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

const categories = [
  "Motivational Stickers",
  "Bookmarks",
  "Planner Stickers",
  "Reward Stickers",
  "Organization Stickers"
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [products, setProducts] = useState<ProductItem[]>(allProducts);
  
  // Filter products based on selected filters
  const filterProducts = () => {
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
    
    setProducts(filtered);
  };
  
  // Handle category checkbox change
  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev => {
      if (checked) {
        return [...prev, category];
      } else {
        return prev.filter(c => c !== category);
      }
    });
  };
  
  // Apply filters when dependencies change
  React.useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategories, priceRange]);
  
  // Set initial category from URL parameter
  React.useEffect(() => {
    if (initialCategory) {
      const matchingCategory = categories.find(
        cat => cat.toLowerCase().includes(initialCategory.toLowerCase())
      );
      if (matchingCategory) {
        setSelectedCategories([matchingCategory]);
      }
    }
  }, [initialCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Our Sticker Collection
            </h1>
            <p className="text-muted-foreground">
              Discover our handcrafted stickers, bookmarks, and planner accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-softpink/20 sticky top-24">
                <h2 className="font-medium text-lg mb-4">Filters</h2>
                
                {/* Search */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search stickers..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category, checked === true)
                          }
                        />
                        <Label 
                          htmlFor={category}
                          className="text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Price Range</h3>
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={0.5}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {products.length === 0 ? (
                <div className="bg-softgray/30 rounded-xl p-10 text-center">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search term
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Showing {products.length} products
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
