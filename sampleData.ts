import { Product, Category } from '@/types';
export const categories: Category[] = [
  {
    id: 'food',
    name: 'Traditional Food',
    arabicName: 'المأكولات الشعبية',
    slug: 'traditional-food',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe'
  },
  {
    id: 'sweets',
    name: 'Sweets',
    arabicName: 'الحلويات',
    slug: 'sweets',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901'
  },
  {
    id: 'women',
    name: "Women's Clothing",
    arabicName: 'ملابس نسائية',
    slug: 'womens-clothing',
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
  },
  {
    id: 'men',
    name: "Men's Clothing",
    arabicName: 'ملابس رجالية',
    slug: 'mens-clothing',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    arabicName: 'الإكسسوارات',
    slug: 'accessories',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    arabicName: 'الإلكترونيات',
    slug: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
];

export const products: Product[] = [
  // Traditional Food
  {
    id: 'food-1',
    name: 'Fahsa',
    arabicName: 'الفحسة',
    description: 'Traditional Yemeni meat stew served bubbling hot in a stone bowl',
    arabicDescription: 'يخنة لحم يمنية تقليدية تقدم ساخنة في وعاء حجري',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1547928576-b822bc410bdf',
    categoryId: 'food',
    rating: 4.8,
    reviews: []
  },
 {
    id: 'food-2',
    name: 'Saltah',
    arabicName: 'مرق',
    description: "Yemen's national dish - a stew with meat, beans, and fenugreek foam",
    arabicDescription: 'حساء ساخن ',
    price: 500,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
    categoryId: 'food',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'food-3',
    name: 'Saltah',
    arabicName: 'السلتة',
    description: "Yemen's national dish - a stew with meat, beans, and fenugreek foam",
    arabicDescription: 'طبق اليمن الوطني - يخنة مع اللحم والفاصوليا ورغوة الحلبة',
    price: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
    categoryId: 'food',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'food-4',
    name: 'Shafout',
    arabicName: 'الشفوت',
    description: 'Bread soaked in herbs and yogurt, a refreshing Yemeni appetizer',
    arabicDescription: 'خبز منقوع في الأعشاب واللبن، مقبلات يمنية منعشة',
    price: 800,
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468',
    categoryId: 'food',
    rating: 4.5,
    reviews: []
  },

  // Sweets
  {
    id: 'sweets-1',
    name: 'Bint Al-Sahn',
    arabicName: 'بنت الصحن',
    description: 'Layered honey cake, a traditional Yemeni sweet bread with honey',
    arabicDescription: 'كعكة العسل المطبقة، خبز يمني حلو تقليدي مع العسل',
    price: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    categoryId: 'sweets',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'sweets-2',
    name: 'Sabaya',
    arabicName: 'السبايا',
    description: 'Thin layers of pastry with honey and butter',
    arabicDescription: 'طبقات رقيقة من المعجنات مع العسل والزبدة',
    price: 900,
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    categoryId: 'sweets',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'sweets-3',
    name: 'Basbousa',
    arabicName: 'البسبوسة',
    description: 'Sweet semolina cake with coconut, soaked in syrup',
    arabicDescription: 'كعكة سميد حلوة مع جوز الهند، منقوعة في الشراب',
    price: 700,
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    categoryId: 'sweets',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'sweets-4',
    name: 'Kunafa',
    arabicName: 'الكنافة',
    description: 'Sweet cheese pastry made with thin noodle-like pastry',
    arabicDescription: 'معجنات الجبن الحلوة مصنوعة من عجينة تشبه المعكرونة الرفيعة',
    price: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    categoryId: 'sweets',
    rating: 4.7,
    reviews: []
  },

  // Women's Clothing
  {
    id: 'women-1',
    name: 'Traditional Abaya',
    arabicName: 'عباية تقليدية',
    description: 'Elegant black abaya with traditional Yemeni embroidery',
    arabicDescription: 'عباية سوداء أنيقة مع تطريز يمني تقليدي',
    price: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    categoryId: 'women',
    rating: 4.8,
    reviews: [],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
        id: 'women-2',
        name: 'Satin Evening Dress',
        arabicName: 'فستان سهرة ساتان',
        description: 'Glamorous satin dress for unforgettable nights.',
        arabicDescription: 'فستان ساتان فاخر لليالي لا تُنسى.',
        price: 780,
        imageUrl: 'https://images.unsplash.com/photo-1602810313329-b326f6d8d8e9',
        categoryId: 'women',
        rating: 4.9,
        sizes: ['XS', 'S', 'M', 'L'],
        reviews: [],
    },
  {
    id: 'women-3',
    name: "Traditional Women's Dress",
    arabicName: 'فستان نسائي تقليدي',
    description: 'Colorful traditional Yemeni dress with intricate patterns',
    arabicDescription: 'فستان يمني تقليدي ملون بأنماط معقدة',
    price: 18000,
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    categoryId: 'women',
    rating: 4.9,
    reviews: [],
    sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 'women-4',
        name: 'Floral Maxi Dress',
        arabicName: 'فستان ماكسي مزهر',
        description: 'Elegant floral dress perfect for summer events.',
        arabicDescription: 'فستان مزهر أنيق مثالي للفعاليات الصيفية.',
        price: 350,
        imageUrl: 'https://images.unsplash.com/photo-1618354691386-53ff7e3c5c8e',
        categoryId: 'women',
        rating: 4.6,
        sizes: ['S', 'M', 'L', 'XL'],
        reviews: [],
    },
    {
        id: 'women-5',
        name: 'Satin Evening Dress',
        arabicName: 'فستان سهرة ساتان',
        description: 'Glamorous satin dress for unforgettable nights.',
        arabicDescription: 'فستان ساتان فاخر لليالي لا تُنسى.',
        price: 780,
        imageUrl: 'https://images.unsplash.com/photo-1602810313329-b326f6d8d8e9',
        categoryId: 'women',
        rating: 4.9,
        sizes: ['XS', 'S', 'M', 'L'],
        reviews: [],
    },

  // Men's Clothing
  {
    id: 'men-1',
    name: 'Traditional Thobe',
    arabicName: 'ثوب تقليدي',
    description: 'Traditional Yemeni thobe for men, comfortable and elegant',
    arabicDescription: 'ثوب يمني تقليدي للرجال، مريح وأنيق',
    price: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    categoryId: 'men',
    rating: 4.7,
    reviews: [],
    sizes: ['48', '50', '52', '54', '56', '58']
  },
  {
    id: 'men-2',
    name: "Ma'waz",
    arabicName: 'معوز',
    description: "Traditional Yemeni men's skirt, a staple in Yemeni wardrobes",
    arabicDescription: 'تنورة رجالية يمنية تقليدية، أساسية في خزائن ملابس اليمنيين',
    price: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    categoryId: 'men',
    rating: 4.6,
    reviews: [],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'men-3',
    name: 'Formal Suit',
    arabicName: 'بدلة رسمية',
    description: 'Elegant formal suit for special occasions',
    arabicDescription: 'بدلة رسمية أنيقة للمناسبات الخاصة',
    price: 25000,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    categoryId: 'men',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'men-4',
    name: 'Pajama Set',
    arabicName: 'طقم بيجاما',
    description: 'Comfortable pajama set for men',
    arabicDescription: 'طقم بيجاما مريح للرجال',
    price: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    categoryId: 'men',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'men-5',
    name: 'Sandals',
    arabicName: 'صندل',
    description: 'Traditional Yemeni leather sandals',
    arabicDescription: 'صندل جلدي يمني تقليدي',
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    categoryId: 'men',
    rating: 4.4,
    reviews: []
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'Agate Ring',
    arabicName: 'خاتم عقيق',
    description: 'Traditional Yemeni agate ring, handcrafted',
    arabicDescription: 'خاتم عقيق يمني تقليدي، مصنوع يدويًا',
    price: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    categoryId: 'accessories',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'acc-2',
    name: 'Traditional Watch',
    arabicName: 'ساعة تقليدية',
    description: 'Elegant watch with traditional Yemeni patterns',
    arabicDescription: 'ساعة أنيقة بأنماط يمنية تقليدية',
    price: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    categoryId: 'accessories',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'acc-3',
    name: 'Necklace',
    arabicName: 'قلادة',
    description: 'Beautiful necklace with traditional Yemeni design',
    arabicDescription: 'قلادة جميلة بتصميم يمني تقليدي',
    price: 7000,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    categoryId: 'accessories',
    rating: 4.8,
    reviews: []
  },

  // Electronics
  {
    id: 'elec-1',
    name: 'Smartphone',
    arabicName: 'هاتف ذكي',
    description: 'Latest smartphone with advanced features',
    arabicDescription: 'أحدث هاتف ذكي بميزات متقدمة',
    price: 150000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.7,
    reviews: []
  },
  {
    id: 'elec-2',
    name: 'Smart Watch',
    arabicName: 'ساعة ذكية',
    description: 'Smart watch with health tracking features',
    arabicDescription: 'ساعة ذكية مع ميزات تتبع الصحة',
    price: 35000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'elec-3',
    name: 'Wireless Headphones',
    arabicName: 'سماعات لاسلكية',
    description: 'High-quality wireless headphones with noise cancellation',
    arabicDescription: 'سماعات لاسلكية عالية الجودة مع إلغاء الضوضاء',
    price: 20000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.5,
    reviews: []
  },
  {
    id: 'elec-4',
    name: 'Tablet',
    arabicName: 'جهاز لوحي',
    description: 'Powerful tablet for work and entertainment',
    arabicDescription: 'جهاز لوحي قوي للعمل والترفيه',
    price: 120000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.8,
    reviews: []
  },
  {
    id: 'elec-5',
    name: 'TV',
    arabicName: 'تلفزيون',
    description: '4K Smart TV with excellent picture quality',
    arabicDescription: 'تلفزيون ذكي 4K مع جودة صورة ممتازة',
    price: 250000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.9,
    reviews: []
  },
  {
    id: 'elec-6',
    name: 'Vacuum Cleaner',
    arabicName: 'مكنسة كهربائية',
    description: 'Powerful vacuum cleaner for easy cleaning',
    arabicDescription: 'مكنسة كهربائية قوية للتنظيف السهل',
    price: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.6,
    reviews: []
  },
  {
    id: 'elec-7',
    name: 'PlayStation 5',
    arabicName: 'بلايستيشن ٥',
    description: 'Latest gaming console for the ultimate gaming experience',
    arabicDescription: 'أحدث وحدة ألعاب لتجربة ألعاب مثالية',
    price: 280000,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    categoryId: 'electronics',
    rating: 4.9,
    reviews: []
  },
];
