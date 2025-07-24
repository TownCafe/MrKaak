import React from 'react';
import { ShoppingCart, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  language, 
  onToggleLanguage, 
  cartItemsCount, 
  onCartClick 
}) => {
  return (
    <header className="sticky top-0 bg-[#FCFCF9] shadow-lg z-40 border-b border-[#BFC23F]/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#BFC23F] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img src="/image.png" alt="Mr Kaakes Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#523E20]">Mr. Kaak</h1>
              {/* <p className="text-xs text-[#272428]">
                {language === 'ar' ? 'نكهات لبنانية أصيلة' : 'Authentic Lebanese Flavors'}
              </p> */}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={onToggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-[#FCFCF9] hover:bg-[#BFC23F]/10 transition-colors duration-200"
            >
              <Globe className="w-4 h-4 text-[#523E20]" />
              <span className="text-sm font-medium text-[#523E20]">
                {language === 'ar' ? 'EN' : 'عر'}
              </span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-3 bg-[#BFC23F] hover:bg-[#523E20] text-[#FCFCF9] rounded-full shadow-lg transition-all duration-200 hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#BFC23F] text-[#523E20] text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;