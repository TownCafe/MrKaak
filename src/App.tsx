import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Loader from './components/Loader';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CategoryNavigation from './components/CategoryNavigation';
import { useCart } from './hooks/useCart';
import { useLanguage } from './hooks/useLanguage';
import { menuItems, categories } from './data/menuItems';
import { MenuItem } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
  const { language, toggleLanguage } = useLanguage();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    generateWhatsAppMessage,
  } = useCart();

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage(language);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCartFromModal = (item: MenuItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active category on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(`category-${cat.id}`)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSection) {
        setActiveCategory(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
      />

      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-4 flex flex-col items-center">
              <h2 className="text-3xl font-extrabold mb-2 text-[#523E20] drop-shadow-lg flex items-center">
                {language === 'ar' ? 'مرحباً بكم في مستر كعك' : 'Welcome to Mr. Kaak'}
              </h2>
              <img src="/moustache.png" alt="Moustache" className="my-2 animate-float w-16 h-auto" />
              
            </div>
       
            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'اكتشف أصالة النكهات اللبنانية مع مجموعة متنوعة من المناقيش والكعك الطازج'
                : 'Discover authentic Lebanese flavors with our fresh selection of manakish, kaak, and traditional delicacies'
              }
            </p> */}
          </div>

          {/* Menu Sections */}
          {categories.map(category => {
            const categoryItems = menuItems.filter(item => item.category === category.id);
            if (categoryItems.length === 0) return null;
            
            return (
              <MenuSection
                key={category.id}
                category={category}
                items={categoryItems}
                language={language}
                onAddToCart={addToCart}
                onItemClick={handleItemClick}
              />
            );
          })}
        </div>
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        language={language}
        onClose={handleCloseCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onWhatsAppOrder={handleWhatsAppOrder}
        totalPrice={getTotalPrice()}
      />

      {/* Product Details Modal */}
      <ProductModal
        item={selectedItem}
        isOpen={!!selectedItem}
        language={language}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCartFromModal}
      />

      {/* Category Navigation */}
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        language={language}
        onCategoryClick={handleCategoryClick}
      />

      {/* Floating Cart Button for Mobile - Only show when cart has items */}
      {getTotalItems() > 0 && (
        <button
          onClick={handleCartClick}
          className="fixed bottom-24 right-6 bg-gradient-to-r from-[#c7d333] to-[#4b2d1f] hover:from-[#c7d333]/90 hover:to-[#4b2d1f]/90 text-white p-4 rounded-full shadow-2xl transition-all duration-200 hover:scale-110 z-30 md:hidden animate-bounce hover:shadow-[#fff23e]/30"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-[#fff23e] text-[#4b2d1f] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {getTotalItems()}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}

export default App;
