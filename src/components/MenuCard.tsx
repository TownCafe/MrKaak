import React from 'react';
import { Plus } from 'lucide-react';
import { MenuItem, Language } from '../types';

interface MenuCardProps {
  item: MenuItem;
  language: Language;
  onAddToCart: (item: MenuItem) => void;
  onItemClick: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, language, onAddToCart, onItemClick }) => {
  const name = language === 'ar' ? item.nameAr : item.nameEn;
  const description = language === 'ar' ? item.descriptionAr : item.descriptionEn;

  return (
    <div 
      className="bg-[#FCFCF9] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] border border-[#BFC23F]/30 cursor-pointer"
      onClick={() => onItemClick(item)}
    >
      {/* Image placeholder */}
      <div className="h-48 relative overflow-hidden">
        <img 
          src={item.image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#FCFCF9]/80"></div>
        <div className="absolute top-3 right-3 bg-[#BFC23F] text-[#523E20] px-2 py-1 rounded-full text-sm font-bold shadow-lg">
          ${item.price.toFixed(2)}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-[#231E21] mb-1 group-hover:text-[#BFC23F] transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-[#272428] text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-[#1D181B]">
            {language === 'ar' ? 'انقر للتفاصيل' : 'Click for details'}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
            className="flex items-center space-x-2 bg-[#BFC23F] hover:bg-[#523E20] text-[#FCFCF9] px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#BFC23F]/20"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;