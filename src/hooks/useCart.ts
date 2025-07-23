import { useState, useEffect } from 'react';
import { CartItem, MenuItem } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('mrkaak-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mrkaak-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const generateWhatsAppMessage = (language: 'en' | 'ar') => {
    const greeting = language === 'ar' 
      ? 'مرحبا مستر كعك، أريد أن أطلب:'
      : 'Hello Mr. Kaak, I would like to order:';
    
    const itemsList = cartItems.map(item => {
      const name = language === 'ar' ? item.nameAr : item.nameEn;
      return `${item.quantity}x ${name} - $${(item.price * item.quantity).toFixed(2)}`;
    }).join('\n');

    const total = language === 'ar' 
      ? `\nالمجموع: $${getTotalPrice().toFixed(2)}`
      : `\nTotal: $${getTotalPrice().toFixed(2)}`;

    return `${greeting}\n\n${itemsList}${total}`;
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    generateWhatsAppMessage,
  };
};