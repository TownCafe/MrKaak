import React from 'react';
import { categoryIcons } from './categoryIcons';
import { Category, Language } from '../types';

interface CategoryNavigationProps {
  categories: Category[];
  activeCategory: string;
  language: Language;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  activeCategory,
  language,
  onCategoryClick,
}) => {
  return (
    <div className="sticky bottom-0 bg-[#FCFCF9] border-t border-[#BFC23F]/30 shadow-lg z-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-around">
          {[{ id: 'kaak', nameEn: 'Kaak', nameAr: 'كعك' }, { id: 'desserts', nameEn: 'Desserts', nameAr: 'حلويات' }, { id: 'beverages', nameEn: 'Beverages', nameAr: 'مشروبات' }].map(category => {
            const categoryName = language === 'ar' ? category.nameAr : category.nameEn;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className={`flex flex-col items-center flex-shrink-0 px-3 py-2 rounded-full font-medium text-sm transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#BFC23F] text-[#523E20] shadow-lg transform scale-105'
                    : 'bg-[#FCFCF9] text-[#231E21] hover:bg-[#BFC23F]/10 hover:text-[#BFC23F]'
                }`}
              >
                {categoryIcons[category.id]}
                <span>{categoryName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;