
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl text-gray-600">لا توجد منتجات متاحة</h2>
      </div>
    );
  }

  return (
    <div className="py-6">
      {title && (
        <h2 className="text-2xl font-heading font-bold mb-6 text-right">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
