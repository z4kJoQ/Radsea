
import { useState } from "react";
import { Star } from "lucide-react";
import { Product } from "@/types";
import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ProductReviewsProps {
  product: Product;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
  const { user, addReview } = useStore();
  const navigate = useNavigate();
  
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("يرجى تسجيل الدخول لإضافة تقييم");
      navigate("/login");
      return;
    }

    if (!comment.trim()) {
      toast.error("يرجى إضافة تعليق");
      return;
    }

    try {
      addReview(product.id, rating, comment);
      toast.success("تم إضافة التقييم بنجاح");
      setComment("");
      setRating(5);
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("حدث خطأ أثناء إضافة التقييم");
    }
  };

  // Only show review form for logged in users
  const reviewForm = user ? (
    <div className="bg-gray-50 p-4 rounded-lg mb-8">
      <h3 className="text-lg font-medium mb-4">أضف تقييمك</h3>
      <form onSubmit={handleSubmitReview}>
        <div className="flex items-center mb-4">
          <span className="ml-2">التقييم:</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1"
              >
                <Star
                  className={`h-6 w-6 ${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] mb-4"
          placeholder="اكتب تعليقك هنا..."
          required
        />
        <Button type="submit">إرسال التقييم</Button>
      </form>
    </div>
  ) : (
    <div className="text-center bg-gray-50 p-4 rounded-lg mb-8">
      <p className="mb-4">يجب تسجيل الدخول لإضافة تقييم</p>
      <Button onClick={() => navigate("/login")}>تسجيل الدخول</Button>
    </div>
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-heading font-bold mb-6">التقييمات والتعليقات</h2>

      {reviewForm}

      {product.reviews && product.reviews.length > 0 ? (
        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{review.userName}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString("ar-YE")}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          لا توجد تقييمات بعد. كن أول من يقيم هذا المنتج!
        </div>
      )}
    </div>
  );
}
