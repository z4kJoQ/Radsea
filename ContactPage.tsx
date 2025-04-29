
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import ContactMap from "@/components/contact/ContactMap";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email functionality would go here
      toast({
        title: t('messageSent'),
        description: t('messageSentDesc'),
      });

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: t('messageError'),
        description: t('messageErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-heading font-bold mb-6">{t('contactUs')}</h2>
              <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                <MapPin className="mt-1 h-5 w-5 text-redSea-600" />
                <div>
                  <p className="font-bold">{t('address')}</p>
                  <p>{t('addressValue')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <Mail className="mt-1 h-5 w-5 text-redSea-600" />
                <div>
                  <p className="font-bold">{t('email')}</p>
                  <a href="mailto:abod27ana@gmail.com" className="text-redSea-600 hover:underline">
                    abod27ana@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-heading font-bold mb-6">{t('sendMessage')}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t('name')}
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('sending') : t('send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <ContactMap />
        </div>
      </div>
    </Layout>
  );
}
