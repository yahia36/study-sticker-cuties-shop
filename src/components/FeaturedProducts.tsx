
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { ProductItem } from "./ProductCard";

// Sample product data
const products: ProductItem[] = [
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

const FeaturedProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>(products);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else if (activeCategory === "bestsellers") {
      setFilteredProducts(products.filter(product => product.isBestseller));
    } else if (activeCategory === "featured") {
      setFilteredProducts(products.filter(product => product.isFeatured));
    } else {
      setFilteredProducts(products.filter(product => 
        product.category.toLowerCase().includes(activeCategory)
      ));
    }
  }, [activeCategory]);

  return (
    <section className="py-16 bg-softgray/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Popular Stickers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of handcrafted stickers and stationery designed to make your study sessions more productive and fun.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="flex flex-wrap justify-center h-auto bg-transparent space-x-2 space-y-2 sm:space-y-0">
            <TabsTrigger 
              value="all"
              onClick={() => setActiveCategory("all")}
              className="bg-white data-[state=active]:bg-softpink data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              All Products
            </TabsTrigger>
            <TabsTrigger 
              value="bestsellers"
              onClick={() => setActiveCategory("bestsellers")}
              className="bg-white data-[state=active]:bg-softpink data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              Bestsellers
            </TabsTrigger>
            <TabsTrigger 
              value="featured"
              onClick={() => setActiveCategory("featured")}
              className="bg-white data-[state=active]:bg-softpink data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger 
              value="motivational"
              onClick={() => setActiveCategory("motivational")}
              className="bg-white data-[state=active]:bg-softpink data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              Motivational
            </TabsTrigger>
            <TabsTrigger 
              value="bookmarks"
              onClick={() => setActiveCategory("bookmarks")}
              className="bg-white data-[state=active]:bg-softpink data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              Bookmarks
            </TabsTrigger>
            <TabsTrigger 
              value="planner"
              onClick={() => setActiveCategory("planner")}
              className="bg-white data-[state=active]:bg-softpink data-[state=active]:text-white px-4 py-2 rounded-full"
            >
              Planner Stickers
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
