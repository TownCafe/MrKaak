export interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  price: number;
  category: string;
  image: string;
  ingredients: {
    en: string[];
    ar: string[];
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  nameEn: string;
  nameAr: string;
}

export type Language = 'en' | 'ar';