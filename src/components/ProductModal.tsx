import React from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { MenuItem, Language } from '../types';

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  item,
  isOpen,
  language,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!item || !isOpen) return null;

  const name = language === 'ar' ? item.nameAr : item.nameEn;
  const description = language === 'ar' ? item.descriptionAr : item.descriptionEn;
  const ingredients = language === 'ar' ? item.ingredients.ar : item.ingredients.en;

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#231E21]/80 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-[#FCFCF9] rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
          {/* Header with Image */}
          <div className="relative">
            <img 
              src={item.image} 
              alt={name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-[#FCFCF9]/90"></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-[#BFC23F]/20 rounded-full flex items-center justify-center text-[#523E20] hover:text-[#231E21] hover:bg-[#BFC23F]/40 transition-all duration-200 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Price Badge */}
            <div className="absolute bottom-4 left-4 bg-[#BFC23F] text-[#523E20] px-4 py-2 rounded-full font-bold text-lg shadow-lg">
              ${item.price.toFixed(2)}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#231E21] mb-2">{name}</h2>
              {description && (
                <p className="text-[#272428] leading-relaxed">{description}</p>
              )}
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#523E20] mb-3 flex items-center">
                <div className="w-2 h-2 bg-[#BFC23F] rounded-full mr-2"></div>
                {language === 'ar' ? 'المكونات' : 'Ingredients'}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-[#BFC23F]/10 rounded-xl">
                    <div className="w-1.5 h-1.5 bg-[#BFC23F] rounded-full flex-shrink-0"></div>
                    <span className="text-[#231E21] text-sm">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#523E20] mb-3">
                {language === 'ar' ? 'الكمية' : 'Quantity'}
              </h3>
              <div className="flex items-center justify-center space-x-4 bg-[#BFC23F]/10 rounded-2xl p-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 bg-[#FCFCF9] text-[#BFC23F] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-bold text-[#231E21] min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 bg-[#FCFCF9] text-[#BFC23F] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#BFC23F] hover:bg-[#523E20] text-[#FCFCF9] py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:shadow-[#BFC23F]/20"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>
                {language === 'ar' 
                  ? `أضف ${quantity} للسلة - $${(item.price * quantity).toFixed(2)}`
                  : `Add ${quantity} to Cart - $${(item.price * quantity).toFixed(2)}`
                }
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;