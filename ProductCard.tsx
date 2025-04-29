
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
    toast.success('تمت إضافة المنتج إلى السلة');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card flex flex-col h-full transform hover:scale-[1.02] transition-all duration-200"
    >
      <div className="relative pb-[100%] overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium line-clamp-2">{product.arabicName}</h3>
          <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span>{product.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">
          {product.arabicDescription.substring(0, 60)}
          {product.arabicDescription.length > 60 ? "..." : ""}
        </p>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-redSea-700">
            {product.price.toLocaleString()} ر.ي
          </span>
          <Button
            size="sm"
            variant="outline"
            className="flex items-center space-x-1 rtl:space-x-reverse"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>إضافة</span>
          </Button>
        </div>
      </div>
    </Link>
  );
}
