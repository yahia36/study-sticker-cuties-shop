
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookmarkCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isFeatured?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({ product }: { product: ProductItem }) => {
  return (
    <div className={cn(
      "product-card rounded-2xl overflow-hidden bg-white border border-softpink/50",
      "flex flex-col h-full"
    )}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Badge indicators */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isFeatured && (
            <span className="rounded-full px-2 py-1 text-xs font-medium bg-softpurple text-primary-foreground">
              Featured
            </span>
          )}
          
          {product.isBestseller && (
            <span className="rounded-full px-2 py-1 text-xs font-medium bg-softyellow text-primary-foreground">
              Bestseller
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg line-clamp-2">{product.name}</h3>
          <span className="font-semibold text-primary-foreground bg-softpink rounded-full px-3 py-1 text-sm">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        {/* Category */}
        <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <Star className="h-4 w-4 fill-softorange text-softorange" />
          <span className="text-sm">{product.rating.toFixed(1)}</span>
        </div>
        
        {/* Buttons - using mt-auto to push them to bottom */}
        <div className="flex gap-2 mt-auto">
          <Button className="flex-1 bg-softpurple hover:bg-softpurple/80 text-primary-foreground">
            <BookmarkCheck className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            className="border-softpink text-softpink hover:bg-softpink/10" 
            asChild
          >
            <Link to={`/product/${product.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
