
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "sonner";
import CategoryNav from "./CategoryNav";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  hideCategories?: boolean;
}

export default function Layout({ children, hideCategories = false }: LayoutProps) {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <Header />}
      {!hideCategories && !isAdminPage && <CategoryNav />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdminPage && <Footer />}
      <Toaster position="top-center" />
    </div>
  );
}
