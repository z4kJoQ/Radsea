
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "@/store/store";
import { Search, ShoppingCart, User, LogIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout, cart, setSearchQuery, searchQuery } = useStore();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    navigate(`/search?q=${localSearchQuery}`);
  };

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-redSea-700 text-2xl font-heading font-bold">البحر الأحمر</span>
            <span className="ml-2 text-gray-600 font-light">SOUK</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <form onSubmit={handleSearch} className="relative w-64">
            <Input
              type="text"
              placeholder={t('search')}
              className="pr-10 w-full"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              variant="ghost" 
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-redSea-600">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  {t('welcome')}, {user.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  {t('profile')}
                </DropdownMenuItem>
                {user.isAdmin && (
                  <DropdownMenuItem onClick={() => navigate('/admin')}>
                    {t('dashboard')}
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-redSea-600"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  {t('logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/login')}
            >
              <LogIn className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      <div className="container-custom md:hidden mt-4">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder={t('search')}
            className="pr-10 w-full"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
          <Button 
            type="submit" 
            size="icon" 
            variant="ghost" 
            className="absolute right-0 top-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </header>
  );
}
