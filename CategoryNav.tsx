
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CategoryNav() {
  const { categories } = useStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="bg-gray-100 py-2 shadow-sm">
      <div className="container-custom">
        <div className="md:hidden mb-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="py-4">
                <h2 className="text-lg font-bold mb-4">الأقسام</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      {category.arabicName}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <ScrollArea className="w-full whitespace-nowrap hidden md:block">
          <div className="flex items-center space-x-4 rtl:space-x-reverse py-1">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.slug}`}>
                <Button 
                  variant="ghost" 
                  className="px-3 py-1.5 text-gray-700 hover:text-redSea-700 hover:bg-gray-200 rounded-md"
                >
                  {category.arabicName}
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
