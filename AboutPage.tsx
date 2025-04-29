
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container-custom py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-3xl font-heading font-bold mb-6">{t('aboutTitle') as string}</h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">{t('aboutWelcome') as string}</p>
              <p className="mb-4">{t('aboutDescription') as string}</p>
              <p className="mb-4">{t('aboutCommitment') as string}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
