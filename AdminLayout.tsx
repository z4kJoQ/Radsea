
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/store";
import { Toaster } from "sonner";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/admin/login");
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [user, navigate]);

  if (!user || !user.isAdmin) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    {
      title: t("dashboard"),
      icon: <LayoutDashboard className="h-4 w-4" />,
      path: "/admin",
    },
    {
      title: t("products"),
      icon: <ShoppingBag className="h-4 w-4" />,
      path: "/admin/products",
    },
    {
      title: t("users"),
      icon: <Users className="h-4 w-4" />,
      path: "/admin/users",
    },
    {
      title: t("settings"),
      icon: <Settings className="h-4 w-4" />,
      path: "/admin/settings",
    },
  ];

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="min-h-screen w-full flex bg-gray-50">
        <Sidebar className="border-r border-border">
          <SidebarHeader className="text-xl font-semibold p-4 border-b">
            لوحة إدارة البحر الأحمر
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    tooltip={isMobile ? item.title : undefined}
                    isActive={location.pathname === item.path}
                  >
                    <a href={item.path} className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex justify-between items-center px-4 py-3 border-t">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>{t("logout")}</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <header className="bg-white border-b border-border p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{t("dashboard")}</h2>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
        <Toaster position="top-center" />
      </div>
    </SidebarProvider>
  );
}
