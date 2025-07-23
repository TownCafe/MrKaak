import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { CartItem, Language } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  language: Language;
  onClose: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onWhatsAppOrder: () => void;
  totalPrice: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cartItems,
  language,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onWhatsAppOrder,
  totalPrice,
}) => {
  const isRTL = language === 'ar';

  if (cartItems.length === 0 && isOpen) {
    return (
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-[#231E21]/70 z-50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={onClose}
        />
        
        {/* Empty Cart Drawer */}
        <div className={`fixed bottom-0 left-0 right-0 bg-[#FCFCF9] rounded-t-3xl shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-[#BFC23F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-6 h-6 text-[#523E20]" />
            </div>
            <h3 className="text-lg font-semibold text-[#231E21] mb-2">
              {language === 'ar' ? 'السلة فارغة' : 'Your cart is empty'}
            </h3>
            <p className="text-[#272428] text-sm mb-6">
              {language === 'ar' 
                ? 'أضف بعض الأطباق اللذيذة'
                : 'Add some delicious items'
              }
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#BFC23F]/20 text-[#231E21] py-3 rounded-xl font-medium"
            >
              {language === 'ar' ? 'متابعة التسوق' : 'Continue Shopping'}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#231E21]/70 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#FCFCF9] rounded-t-3xl shadow-2xl z-50 transform transition-transform duration-300 max-h-[85vh] ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-[#BFC23F]/40 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#BFC23F] rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#523E20]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#231E21]">
                {language === 'ar' ? 'سلة التسوق' : 'Your Order'}
              </h2>
              <p className="text-sm text-[#272428]">
                {language === 'ar' 
                  ? `${cartItems.length} عنصر`
                  : `${cartItems.length} items`
                }
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[#BFC23F] hover:text-[#523E20] hover:bg-[#BFC23F]/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 max-h-[50vh]">
          <div className="space-y-4">
            {cartItems.map(item => {
              const name = language === 'ar' ? item.nameAr : item.nameEn;
              return (
                <div key={item.id} className="flex items-center space-x-4 p-3 bg-[#BFC23F]/10 rounded-2xl">
                  {/* Item Image Placeholder */}
                  <div className="w-12 h-12 bg-[#BFC23F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#523E20] font-bold text-sm">
                      {name.charAt(0)}
                    </span>
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#231E21] text-sm truncate">{name}</h4>
                    <p className="text-[#c7d333] font-bold text-sm">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center bg-white text-[#c7d333] rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center bg-white text-[#c7d333] rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="w-7 h-7 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          {/* Total */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-[#4b2d1f]">
              {language === 'ar' ? 'المجموع' : 'Total'}
            </span>
            <span className="text-2xl font-bold text-[#c7d333]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <button
            onClick={onWhatsAppOrder}
            className="w-full bg-[#BFC23F] hover:bg-[#523E20] text-[#FCFCF9] py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:shadow-[#BFC23F]/20"
          >
            <MessageCircle className="w-6 h-6" />
            <span>
              {language === 'ar' ? 'اطلب عبر واتساب' : 'Order on WhatsApp'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;