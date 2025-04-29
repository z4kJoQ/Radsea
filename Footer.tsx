import { Link } from "react-router-dom";
import { Phone, Mail, Home, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/735867590`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">البحر الأحمر</h3>
            <p className="text-gray-300 mb-4">
              متجر إلكتروني يمني يقدم أفضل المنتجات التقليدية والمعاصرة بأسعار مناسبة وجودة عالية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  عن المتجر
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">
                  التصنيفات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin size={18} className="text-redSea-500" />
                <span className="text-gray-300">صنعاء، اليمن</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone size={18} className="text-redSea-500" />
                <span className="text-gray-300">735867590</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail size={18} className="text-redSea-500" />
                <span className="text-gray-300">abod27ana@gmail.com</span>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppContact}
                  className="flex items-center mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  <MessageSquare className="mr-2" size={18} />
                  <span>تواصل عبر الواتساب</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} البحر الأحمر. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
