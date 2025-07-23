import { ChefHat, Utensils } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaBreadSlice, FaIceCream, FaCoffee } from 'react-icons/fa';

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    { en: 'Preparing fresh ingredients...', ar: 'تحضير المكونات الطازجة...' },
    { en: 'Kneading the perfect dough...', ar: 'عجن العجينة المثالية...' },
    { en: 'Heating the traditional oven...', ar: 'تسخين الفرن التقليدي...' },
    { en: 'Almost ready to serve...', ar: 'جاهز تقريباً للتقديم...' }
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    // Complete loading
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadComplete, 800); // Wait for fade out animation
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 bg-[#FCFCF9] flex items-center justify-center z-50 transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#BFC23F] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-[#523E20] rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-[#BFC23F] rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-[#231E21] rounded-full animate-pulse"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main Logo Container */}
        <div className="mb-8 relative">
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-40 h-40 mx-auto">
            <div className="w-full h-full border-4 border-transparent border-t-[#c7d333] border-r-[#523E20] rounded-full animate-spin"></div>
          </div>
          
          {/* Logo Circle */}
          <div className="relative w-32 h-32 mx-auto bg-[#BFC23F] rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform transition-all duration-1000 hover:scale-110">
            <img src="/image.png" alt="Mr Kaakes Logo" className="w-full h-full object-cover animate-float rounded-full" />
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#231E21] rounded-full flex items-center justify-center animate-bounce shadow-lg">
            <FaBreadSlice className="w-4 h-4" style={{ color: '#eeeeeeff' }} />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#c7d333] rounded-full flex items-center justify-center animate-bounce delay-300 shadow-lg">
            <Utensils className="w-4 h-4 text-[#523E20]" />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#523E20] rounded-full flex items-center justify-center animate-bounce delay-500 shadow-lg">
            <ChefHat className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-[#231E21] mb-2 animate-fade-in tracking-wide">
            Mr. Kaak
          </h1>
          <p className="text-[#BFC23F] text-xl animate-fade-in-delay font-medium">
            مستر كعك
          </p>
          <p className="text-[#523E20] text-sm animate-fade-in-delay-2 mt-2">
            Authentic Lebanese Flavors
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="mb-6 w-80 mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-[#BFC23F] rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span className="text-[#231E21]">0%</span>
            <span className="text-[#BFC23F] font-semibold">{progress}%</span>
            <span className="text-[#231E21]">100%</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-16 flex items-center justify-center">
          <div className="text-center transition-all duration-500 transform">
        <p className="text-[#231E21] text-lg font-medium mb-1 animate-pulse">
          {loadingTexts[currentText].en}
        </p>
            <p className="text-[#c7d333] text-base animate-pulse">
              {loadingTexts[currentText].ar}
            </p>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-3 h-3 bg-[#523E20] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#c7d333] rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-[#523E20] rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-noise pointer-events-none"></div>
    </div>
  );
};

export default Loader;