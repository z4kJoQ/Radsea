
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { products, categories } = useStore();

  const category = categories.find(c => c.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">الفئة غير موجودة</h1>
          <Button onClick={() => navigate("/categories")}>عرض جميع الفئات</Button>
        </div>
      </Layout>
    );
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id);

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">{category.arabicName}</h1>
          <p className="text-gray-600">استكشف مجموعتنا من {category.arabicName}</p>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">لا توجد منتجات في هذه الفئة حالياً</p>
            <Button onClick={() => navigate("/")}>العودة للرئيسية</Button>
          </div>
        ) : (
          <ProductGrid products={categoryProducts} />
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
