
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useStore } from "@/store/store";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoriesPage = () => {
  const { categories } = useStore();
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout hideCategories>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-heading font-bold mb-6 text-center">
          {t('browseCategories')}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden h-64 shadow-md transition-all duration-300 group-hover:shadow-xl">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-white text-2xl font-bold">
                    {language === 'ar' ? category.arabicName : category.name}
                  </h2>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {t('exploreProducts')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CategoriesPage;
