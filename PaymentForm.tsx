
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface PaymentFormProps {
  totalAmount: number;
  customerInfo: {
    name: string;
    phone: string;
    address: string;
  };
  onPaymentComplete: () => void;
}

export function PaymentForm({ totalAmount, customerInfo, onPaymentComplete }: PaymentFormProps) {
  const [loading, setLoading] = useState(false);

  const handleWhatsAppPayment = () => {
    try {
      const message = `
طلب جديد:
الاسم: ${customerInfo.name}
الهاتف: ${customerInfo.phone}
العنوان: ${customerInfo.address}
المبلغ الإجمالي: ${totalAmount} ر.ي
      `.trim();

      const whatsappLink = `https://wa.me/775216955?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
      
      toast.success("تم فتح المحادثة في الواتساب");
      onPaymentComplete();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error("حدث خطأ أثناء محاولة الدفع");
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600">سيتم تحويلك إلى الواتساب لإكمال عملية الدفع</p>
      </div>

      <Button
        onClick={handleWhatsAppPayment}
        className="w-full bg-green-600 hover:bg-green-700"
        disabled={loading}
      >
        {loading ? "جاري المعالجة..." : "الدفع عبر الواتساب"}
      </Button>
    </div>
  );
}
