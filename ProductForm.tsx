
import { useState, useEffect, useRef } from "react";
import { useStore } from "@/store/store";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ProductFormProps {
  product?: Product;
  onSubmit: () => void;
  mode: "add" | "edit";
}

export default function ProductForm({
  product,
  onSubmit,
  mode,
}: ProductFormProps) {
  const { categories, addProduct, updateProduct } = useStore();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    id: product?.id || `product-${Date.now()}`,
    name: product?.name || "",
    arabicName: product?.arabicName || "",
    description: product?.description || "",
    arabicDescription: product?.arabicDescription || "",
    price: product?.price || 0,
    imageUrl: product?.imageUrl || "",
    categoryId: product?.categoryId || categories[0]?.id,
    rating: product?.rating || 0,
    reviews: product?.reviews || [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      categoryId: value,
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Initialize progress
      setUploadProgress(0);

      // Upload file to Supabase
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });
      
      if (error) {
        throw error;
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      setFormData((prev) => ({
        ...prev,
        imageUrl: publicUrlData.publicUrl,
      }));

      // Simulate progress for better UX
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setUploadProgress(0);
            toast.success(t("imageUploadSuccess"));
          }, 500);
        }
      }, 100);

    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(t("imageUploadError"));
      setIsUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "add") {
        addProduct(formData);
        toast.success(t("productAddSuccess"));
      } else {
        updateProduct(formData.id, formData);
        toast.success(t("productUpdateSuccess"));
      }
      onSubmit();
    } catch (error) {
      console.error(error);
      toast.error(t("productSaveError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="arabicName">{t("productNameAr")}</Label>
          <Input
            id="arabicName"
            name="arabicName"
            value={formData.arabicName}
            onChange={handleChange}
            required
            placeholder={t("enterProductNameAr")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">{t("productNameEn")}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t("enterProductNameEn")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="arabicDescription">{t("productDescriptionAr")}</Label>
          <Textarea
            id="arabicDescription"
            name="arabicDescription"
            value={formData.arabicDescription}
            onChange={handleChange}
            rows={4}
            required
            placeholder={t("enterProductDescriptionAr")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">{t("productDescriptionEn")}</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            placeholder={t("enterProductDescriptionEn")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">{t("productPrice")}</Label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            min={0}
            required
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="categoryId">{t("productCategory")}</Label>
          <Select
            value={formData.categoryId}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("selectCategory")} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.arabicName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 col-span-1 md:col-span-2">
          <Label>{t("uploadImage")}</Label>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleImageClick}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              disabled={isUploading}
            />

            {formData.imageUrl ? (
              <div className="space-y-3">
                <img
                  src={formData.imageUrl}
                  alt="Product"
                  className="max-h-48 max-w-full mx-auto object-contain"
                />
                <Button type="button" variant="outline" size="sm">
                  {t("changeImage")}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2 py-4">
                <Upload className="h-8 w-8 text-gray-400" />
                <div className="text-sm text-gray-600 font-medium">
                  {t("clickToUpload")}
                </div>
                <div className="text-xs text-gray-400">
                  {t("supportedFormats")}
                </div>
              </div>
            )}

            {isUploading && (
              <div className="mt-4">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-redSea-600 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <div className="text-sm mt-1 text-gray-500">{uploadProgress}%</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 rtl:space-x-reverse">
        <Button type="button" variant="outline" onClick={onSubmit}>
          {t("cancel")}
        </Button>
        <Button type="submit" disabled={loading || isUploading}>
          {loading ? t("saving") : mode === "add" ? t("addProduct") : t("updateProduct")}
        </Button>
      </div>
    </form>
  );
}
