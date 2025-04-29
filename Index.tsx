
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { products, categories } = useStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  // Define productsByCategory - this was missing
  const productsByCategory = categories.map(category => {
    return {
      category,
      products: products
        .filter(product => product.categoryId === category.id)
        .slice(0, 4)
    };
  });

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "تسوق بسهولة من المنزل",
      description: "اكتشف تشكيلتنا الواسعة من المنتجات اليمنية الأصيلة"
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      title: "منتجات عالية الجودة",
      description: "نقدم لكم أفضل المنتجات المحلية والعالمية"
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "خدمة عملاء متميزة",
      description: "فريقنا جاهز لمساعدتك في أي وقت"
    }
  ];

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Hero Carousel Section */}
        <div className="mb-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 p-8 text-white">
                        <h2 className="text-3xl font-heading font-bold mb-2">{image.title}</h2>
                        <p className="text-lg">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Store Description */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">مرحباً بكم في متجر البحر الأحمر</h2>
          <p className="text-lg text-gray-600 mb-8">
            نحن نفخر بتقديم أفضل المنتجات اليمنية الأصيلة، من الملابس التقليدية إلى المنتجات العصرية.
            نسعى دائماً لتوفير تجربة تسوق مميزة لعملائنا الكرام مع ضمان أعلى معايير الجودة والخدمة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-redSea-50">
              <h3 className="text-xl font-bold mb-2">منتجات أصيلة</h3>
              <p>نقدم منتجات يمنية عالية الجودة</p>
            </div>
            <div className="p-6 rounded-lg bg-redSea-50">
              <h3 className="text-xl font-bold mb-2">شحن سريع</h3>
              <p>توصيل سريع لجميع مناطق اليمن</p>
            </div>
            <div className="p-6 rounded-lg bg-redSea-50">
              <h3 className="text-xl font-bold mb-2">دعم متواصل</h3>
              <p>فريق خدمة العملاء متاح دائماً</p>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-heading font-bold">
              المنتجات المميزة
            </h2>
            <Link to="/categories" className="text-redSea-700 hover:underline flex items-center">
              عرض المزيد <ArrowRight className="h-4 w-4 mr-1" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>

        {/* Products by Category */}
        {productsByCategory.map(
          ({ category, products }) =>
            products.length > 0 && (
              <section key={category.id} className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-heading font-bold">
                    {category.arabicName}
                  </h2>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-redSea-700 hover:underline flex items-center"
                  >
                    عرض المزيد <ArrowRight className="h-4 w-4 mr-1" />
                  </Link>
                </div>
                <ProductGrid products={products} />
              </section>
            )
        )}
      </div>
    </Layout>
  );
};

export default Index;
