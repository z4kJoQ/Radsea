import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { PaymentForm } from "@/components/cart/PaymentForm";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateCartItemQuantity, removeFromCart, clearCart, user } = useStore();
  const [customerName, setCustomerName] = useState(user?.name || "");
  const [customerPhone, setCustomerPhone] = useState(user?.phone || "");
  const [customerAddress, setCustomerAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("alkuraimi");
  const [transferSender, setTransferSender] = useState("");
  const [transferCode, setTransferCode] = useState("");

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartItemQuantity(productId, quantity);
  };

  const handleWhatsAppCheckout = () => {
    if (!customerName || !customerPhone || !customerAddress) {
      toast.error("يرجى ملء جميع البيانات المطلوبة");
      return;
    }

    const cartDetails = cart
      .map(
        (item) =>
          `${item.product.arabicName} - الكمية: ${item.quantity} - السعر: ${(
            item.product.price * item.quantity
          ).toLocaleString()} ر.ي`
      )
      .join("\n");

    const message = `
*طلب جديد من البحر الأحمر سوق*
---------------------------
*معلومات العميل:*
الاسم: ${customerName}
الهاتف: ${customerPhone}
العنوان: ${customerAddress}

*تفاصيل الطلب:*
${cartDetails}

*المجموع:* ${totalPrice.toLocaleString()} ر.ي
    `.trim();

    const whatsappLink = `https://wa.me/735867590?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    clearCart();
    toast.success("تم إرسال الطلب بنجاح!");
    navigate("/");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the payment submission logic here
    toast.success("تم إرسال بيانات الدفع بنجاح!");
  };

  if (!user) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">يجب تسجيل الدخول للوصول إلى سلة التسوق</h1>
          <Button onClick={() => navigate("/login")}>تسجيل الدخول</Button>
        </div>
      </Layout>
    );
  }

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h1>
          <Button onClick={() => navigate("/")}>العودة للتسوق</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-heading font-bold mb-8">سلة التسوق</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col md:flex-row items-center py-4 border-b last:border-0"
                >
                  <div className="flex-shrink-0 w-24 h-24 mb-4 md:mb-0">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-grow md:mr-4 text-center md:text-right">
                    <h3 className="font-medium">{item.product.arabicName}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.product.price.toLocaleString()} ر.ي
                    </p>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        handleUpdateQuantity(item.productId, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="mx-3 w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        handleUpdateQuantity(item.productId, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-4 text-red-500"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" onClick={() => clearCart()}>
              إفراغ السلة
            </Button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.product.arabicName} (x{item.quantity})
                    </span>
                    <span>
                      {(item.product.price * item.quantity).toLocaleString()} ر.ي
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>الإجمالي</span>
                  <span>{totalPrice.toLocaleString()} ر.ي</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="font-medium">معلومات التوصيل</h3>
                <div>
                  <label className="block text-sm mb-1">الاسم</label>
                  <Input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="الاسم الكامل"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">رقم الهاتف</label>
                  <Input
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="رقم الهاتف"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">العنوان</label>
                  <Input
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="العنوان التفصيلي"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="font-medium">معلومات الدفع</h3>
                <PaymentForm
                  totalAmount={totalPrice}
                  customerInfo={{
                    name: customerName,
                    phone: customerPhone,
                    address: customerAddress,
                  }}
                  onPaymentComplete={handleWhatsAppCheckout}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
