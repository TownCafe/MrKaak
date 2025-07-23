import { MenuItem, Category } from '../types';

export const categories: Category[] = [
  { id: 'kaak', nameEn: 'Kaak', nameAr: 'كعك' },
  { id: 'desserts', nameEn: 'Desserts', nameAr: 'حلويات' },
  { id: 'beverages', nameEn: 'Beverages', nameAr: 'مشروبات' },
];

export const menuItems: MenuItem[] = [

  { id: 'kaak-plane', nameEn: 'Kaake Plane', nameAr: 'كعك سادة', price: 0.7, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-picon', nameEn: 'Kaake Picon', nameAr: 'كعك بيكون', price: 2.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-picon-kashkawan', nameEn: 'Kaake Picon & Kashkawan', nameAr: 'كعك بيكون و قشقوان', price: 4, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-picon-zaatar', nameEn: 'Kaake Picon & Zaatar', nameAr: 'كعك بيكون و زعتر', price: 2.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-accawi-cheese', nameEn: 'Kaake Accawi Cheese', nameAr: 'كعك جبنة عكاوي', price: 2.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-mix-cheese', nameEn: 'Kaake Mix Cheese', nameAr: 'كعك جبنة مشكلة', price: 3, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-special-4-cheese', nameEn: 'Kaake Special 4 Cheese', nameAr: 'كعك جبنة ٤ انواع', price: 4.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-halloum', nameEn: 'Kaake Halloum', nameAr: 'كعك حلوم', price: 3.25, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-halloum-kashkawan', nameEn: 'Kaake Halloum & Kashkawan', nameAr: 'كعك حلوم و قشقوان', price: 4.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-halloum-pesto', nameEn: 'Kaake Halloum Pesto', nameAr: 'كعك حلوم بيستو', price: 3.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-bulghare', nameEn: 'Kaake Bulghare', nameAr: 'كعك بلغاري', price: 3.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-fetta', nameEn: 'Kaake Fetta', nameAr: 'كعك فيتا', price: 2.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-ham-cheese', nameEn: 'Kaake Ham & Cheese', nameAr: 'كعك جبنة و لحم', price: 3.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-labneh', nameEn: 'Kaake Labneh', nameAr: 'كعك لبنة', price: 2.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-zaatar', nameEn: 'Kaake Zaatar', nameAr: 'كعك زعتر', price: 1.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-cheese-har', nameEn: 'Kaake Cheese w Har', nameAr: 'كعك جبنة و حر', price: 2.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-fajita', nameEn: 'Kaake Fajita', nameAr: 'كعك فاهيتا', price: 5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-pizza', nameEn: 'Kaake Pizza', nameAr: 'كعك بيتزا', price: 5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaak-hotdog', nameEn: 'Kaake Hot Dog', nameAr: 'كعك هوت دوغ', price: 5.5, category: 'kaak', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  // Desserts
  { id: 'kaake-nutella', nameEn: 'Kaake Nutella', nameAr: 'كعك نوتيلا', price: 3, category: 'desserts', descriptionEn: 'Nutella chocolate, banana', descriptionAr: 'نوتيلا شوكولا، موز', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaake-peanut-nutella', nameEn: 'Kaake Peanut Butter & Nutella', nameAr: 'كعك زبدة الفول السوداني و نوتيلا', price: 3, category: 'desserts', descriptionEn: 'Home made peanut butter, chocolate', descriptionAr: 'زبدة الفول السوداني منزلية، شوكولا', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'kaake-mozzarella-chocolate', nameEn: 'Kaake Mozzarella Chocolate', nameAr: 'كعك موزاريلا شوكولا', price: 4, category: 'desserts', descriptionEn: 'Chocolate & Mozzarella', descriptionAr: 'شوكولا و موزاريلا', ingredients: { en: [], ar: [] }, image: '' },
  // Beverages
  { id: 'soft-drink', nameEn: 'Soft Drink', nameAr: 'مشروب غازي', price: 1.11, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'iced-tea', nameEn: 'Iced Tea', nameAr: 'شاي مثلج', price: 1.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'xtra-juice', nameEn: 'Xtra Juice', nameAr: 'عصير اكسترا', price: 0.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'bon-juice-pyramid', nameEn: 'Bon Juice Pyramid', nameAr: 'عصير بون بيراميد', price: 0.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'mr-juice', nameEn: 'Mr Juice', nameAr: 'عصير مستر', price: 0.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'dark-blue', nameEn: 'Dark Blue', nameAr: 'دارك بلو', price: 1, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'luna-iced-coffee', nameEn: 'Luna Iced Coffee', nameAr: 'قهوة مثلجة لونا', price: 1, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'espresso', nameEn: 'Espresso', nameAr: 'اسبريسو', price: 1, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'nescafe-3in1', nameEn: 'Nescafe 3in1', nameAr: 'نسكافيه ٣ في ١', price: 0.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'nescafe-2in1', nameEn: 'Nescafe 2in1', nameAr: 'نسكافيه ٢ في ١', price: 0.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'cappuccino', nameEn: 'Cappuccino', nameAr: 'كابتشينو', price: 1, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'pepsi-glass', nameEn: 'Pepsi Glass', nameAr: 'بيبسي كلاس', price: 0.5, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'fresh-orange-juice', nameEn: 'Fresh Orange Juice', nameAr: 'عصير برتقال طازج', price: 1.66, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
  { id: 'small-water', nameEn: 'Small Water', nameAr: 'مياه صغيرة', price: 0.33, category: 'beverages', descriptionEn: '', descriptionAr: '', ingredients: { en: [], ar: [] }, image: '' },
   
];