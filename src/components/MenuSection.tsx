import React from 'react';
import { MenuItem, Language, Category } from '../types';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  category: Category;
  items: MenuItem[];
  language: Language;
  onAddToCart: (item: MenuItem) => void;
  onItemClick: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ 
  category, 
  items, 
  language, 
  onAddToCart,
  onItemClick
}) => {
  const categoryName = language === 'ar' ? category.nameAr : category.nameEn;

  return (
    <section id={`category-${category.id}`} className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#4b2d1f] mb-2">
          {categoryName}
        </h2>
        <div className="w-24 h-1 bg-[#BFC23F] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <MenuCard
            key={item.id}
            item={item}
            language={language}
            onAddToCart={onAddToCart}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;