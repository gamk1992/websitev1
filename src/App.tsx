import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import StoresPage from './pages/StoresPage';
import CateringPage from './pages/CateringPage';
import LicensingPage from './pages/LicensingPage';
import LicensingFormPage from './pages/LicensingFormPage';
import ScrollToTop from './components/ScrollToTop';
import { User, Lock } from 'lucide-react';

    </span>
  </div>
);

export { Logo, Navbar, Footer } from './components/Layout';
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/"><Logo className="scale-90 md:scale-100 origin-left" /></Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/#about" className="hover:text-khaki transition-colors">Our Story</a>
          <Link to="/stores" className="hover:text-khaki transition-colors">Locations</Link>
          <Link to="/menu" className="hover:text-khaki transition-colors">Menu</Link>
          <Link to="/catering" className="hover:text-khaki transition-colors">Events</Link>
          <Link to="/licensing" className="hover:text-khaki transition-colors">Licensing</Link>
        </div>
        <button onClick={onLoginClick} className="p-2.5 rounded-full border border-beige text-matte-black hover:bg-beige transition-all"><User className="w-5 h-5" /></button>
      </div>
    </nav>
  );
};
