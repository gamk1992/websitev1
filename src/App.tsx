import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import StoresPage from './pages/StoresPage';
import CateringPage from './pages/CateringPage';
import LicensingPage from './pages/LicensingPage';
import LicensingFormPage from './pages/LicensingFormPage';
import ScrollToTop from './components/ScrollToTop';
import { 
  Coffee, 
  MapPin, 
  ChevronRight, 
  User, 
  Lock, 
  ArrowLeft, 
  Instagram, 
  Facebook, 
  Music2,
  Menu as MenuIcon,
  X
} from 'lucide-react';

// --- Types ---
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

// --- Data ---
export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-2xl font-bold tracking-tighter text-matte-black uppercase">
      monti keopi
    </span>
  </div>
);

export const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <Logo className="scale-90 md:scale-100 origin-left" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/#about" className="hover:text-khaki transition-colors">Our Story</a>
          <Link to="/stores" className="hover:text-khaki transition-colors">Locations</Link>
          <Link to="/menu" className="hover:text-khaki transition-colors">Menu</Link>
          <Link to="/catering" className="hover:text-khaki transition-colors">Events</Link>
          <Link to="/licensing" className="hover:text-khaki transition-colors">Licensing</Link>
        </div>
        <button 
          onClick={onLoginClick}
          className="p-2.5 rounded-full border border-beige text-matte-black hover:bg-beige transition-all duration-300 active:scale-95 flex items-center justify-center"
          aria-label="Log In"
        >
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Your Everyday Coffee, <br />
          <span className="text-khaki">With High Energy</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Monti Keopi is built for your daily routine — from morning boost to afternoon recharge.
        </p>
        <div className="flex gap-4">
          <button className="btn-khaki">Order Now</button>
          <Link to="/catering" className="px-6 py-2 rounded-full border border-matte-black font-semibold hover:bg-matte-black hover:text-white transition-all flex items-center gap-2">
            Events & Catering
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="aspect-square bg-khaki/10 rounded-full absolute -z-10 w-[120%] -top-10 -right-10 blur-3xl" />
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
          alt="Coffee" 
          className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <img 
            src="/monti-TNBDS.jpg" 
            alt="Our Story" 
            className="rounded-3xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="section-title">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded in 2020, Monti Keopi emerged from a simple desire: to redefine the Malaysian coffee experience. We believe that coffee is more than just a beverage; it's the fuel for your ambitions.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            From our humble beginnings, we've focused on delivering not just coffee, but energy to get through the day. Our beans are sourced with care and roasted to perfection, ensuring every cup packs the punch you need.
          </p>
          <div className="italic text-khaki font-medium text-xl">
            "Keopi dulu, as always"
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const StoreLocator = () => {
  return (
    <section id="stores" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-beige p-12 md:p-20 rounded-[3rem] border border-gray-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Find Monti Near You</h2>
          <Link to="/stores" className="btn-khaki px-12 py-4 text-lg inline-block">
            View All Locations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Licensing = () => (
  <section id="licensing" className="py-24">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-khaki/5 p-12 md:p-16 rounded-[3rem] border border-khaki/20 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tighter">Start Your Own Monti</h2>
          <p className="text-lg text-gray-600 mb-10">
            Join our mission to energize the nation. We are scaling to 150 outlets across Malaysia and we want you to be part of the family.
          </p>
        </div>
        <Link to="/licensing" className="btn-khaki w-fit px-10 py-4 text-center">Explore Licensing</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-matte-black p-12 md:p-16 rounded-[3rem] text-white flex flex-col justify-between"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tighter">Coffee For Your Events</h2>
          <p className="text-lg text-gray-400 mb-10">
            Bring the signature Monti Keopi energy to your next gathering. From corporate events to private weddings, we've got you covered.
          </p>
        </div>
        <Link to="/catering" className="btn-khaki w-fit px-10 py-4 text-center">Book Catering</Link>
      </motion.div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <Logo className="scale-75 origin-center md:origin-left" />
      <div className="text-sm text-gray-500">
        © 2026 Monti Keopi. All rights reserved. Made with energy.
      </div>
      <div className="flex gap-6">
        <a href="https://www.instagram.com/montikeopi" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-khaki transition-colors" />
        </a>
        <a href="https://www.tiktok.com/@montikeopi" target="_blank" rel="noopener noreferrer">
          <Music2 className="w-5 h-5 cursor-pointer hover:text-khaki transition-colors" />
        </a>
        <a href="https://facebook.com/montikeopi" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-khaki transition-colors" />
        </a>
      </div>
    </div>
  </footer>
);

const LoginPortal = ({ onClose }: { onClose: () => void; key?: string }) => {
  const [role, setRole] = useState<'Staff' | 'Partner'>('Staff');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo className="scale-125" />
          </div>
          <h2 className="text-3xl font-bold mb-2">B2B Secure Portal</h2>
          <p className="text-gray-500">Welcome back! Please sign in to continue.</p>
        </div>

        <div className="card space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-khaki focus:ring-2 focus:ring-khaki/20 outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-khaki focus:ring-2 focus:ring-khaki/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex p-1 bg-gray-100 rounded-xl">
            {(['Staff', 'Partner'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${role === r ? 'bg-white shadow-sm text-matte-black' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {r}
              </button>
            ))}
          </div>

          <button className="w-full btn-khaki py-4 text-lg">
            Sign In
          </button>
        </div>

        <button 
          onClick={onClose}
          className="mt-8 flex items-center gap-2 text-gray-500 hover:text-matte-black transition-colors mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </motion.div>
    </motion.div>
  );
};

// --- Main App ---

const LandingPage = ({ onLoginClick }: { onLoginClick: () => void }) => (
  <>
    <Navbar onLoginClick={onLoginClick} />
    <main>
      <Hero />
      <About />
      <StoreLocator />
      <Licensing />
    </main>
    <Footer />
  </>
);

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Prevent scroll when login is open
  useEffect(() => {
    if (isLoginOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoginOpen]);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative">
        <AnimatePresence mode="wait">
          {isLoginOpen ? (
            <LoginPortal key="login" onClose={() => setIsLoginOpen(false)} />
          ) : (
            <Routes>
              <Route path="/" element={<LandingPage onLoginClick={() => setIsLoginOpen(true)} />} />
              <Route path="/menu" element={<MenuPage onLoginClick={() => setIsLoginOpen(true)} />} />
              <Route path="/stores" element={<StoresPage onLoginClick={() => setIsLoginOpen(true)} />} />
              <Route path="/catering" element={<CateringPage onLoginClick={() => setIsLoginOpen(true)} />} />
              <Route path="/licensing" element={<LicensingPage onLoginClick={() => setIsLoginOpen(true)} />} />
              <Route path="/licensing/apply" element={<LicensingFormPage onLoginClick={() => setIsLoginOpen(true)} />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
