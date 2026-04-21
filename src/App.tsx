import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import StoresPage from './pages/StoresPage';
import CateringPage from './pages/CateringPage';
import LicensingPage from './pages/LicensingPage';
import LicensingFormPage from './pages/LicensingFormPage';
import ScrollToTop from './components/ScrollToTop';
import { 
  User, 
  Lock, 
  ArrowLeft, 
  Instagram, 
  Facebook, 
  Music2
} from 'lucide-react';

// --- Components ---
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

// --- Special Portal (Calculator) ---
const SpecialPortal = () => {
  const [cups, setCups] = useState(90);
  const [price, setPrice] = useState(15);
  const [rent, setRent] = useState(2500);
  const [labor, setLabor] = useState(3500);
  
  const days = 26;
  const cogsPct = 0.35;
  const royaltyPct = 0.05;
  const monthlyProfit = (cups * price * days) - (rent + labor + (cups * price * days * (cogsPct + royaltyPct)));

  return (
    <div className="min-h-screen bg-stone-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 serif italic text-[#634832]">Partner Simulation Tool</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Daily Cups: {cups}</label>
              <input type="range" min="30" max="300" value={cups} onChange={(e) => setCups(parseInt(e.target.value))} className="w-full accent-[#634832]" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Price per Cup: RM{price}</label>
              <input type="range" min="8" max="25" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} className="w-full accent-[#634832]" />
            </div>
          </div>
          <div className="bg-matte-black text-white p-8 rounded-3xl flex flex-col justify-center">
            <p className="text-xs uppercase opacity-60">Est. Monthly Profit</p>
            <h2 className="text-5xl font-bold text-khaki">RM {Math.round(monthlyProfit).toLocaleString()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Login Logic ---
const LoginPortal = ({ onClose, onLoginSuccess }: { onClose: () => void; onLoginSuccess: () => void }) => {
  const [role, setRole] = useState<'Team' | 'Chingu'>('Team');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setError('');
    if (role === 'Team') {
      try {
        const response = await fetch('https://monti-keopi-backend.marketing-montikeopi.workers.dev/api/partner/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: username, password })
        });
        const data = await response.json();
        
        if (data.success) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          onLoginSuccess();
          onClose();
          navigate('/special-portal');
        } else {
          setError(data.error || 'Invalid credentials.');
        }
      } catch (err) {
        setError('Connection to backend failed.');
      }
    } else {
      setError('Chingu access on our way.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-12"><Logo className="justify-center scale-125 mb-6" /><h2 className="text-3xl font-bold">B2B Secure Portal</h2></div>
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-khaki focus:ring-2 focus:ring-khaki/20" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSignIn()} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-khaki focus:ring-2 focus:ring-khaki/20" />
          </div>
          <div className="flex p-1 bg-gray-100 rounded-xl">
            {(['Team', 'Chingu'] as const).map((r) => (
              <button key={r} onClick={() => setRole(r)} className={`flex-1 py-2 text-sm font-semibold rounded-lg ${role === r ? 'bg-white shadow-sm text-matte-black' : 'text-gray-500'}`}>{r}</button>
            ))}
          </div>
          {error && <p className="text-red-500 text-center text-xs">{error}</p>}
          <button onClick={handleSignIn} className="w-full btn-khaki py-4 text-lg">Sign In</button>
          <button onClick={onClose} className="w-full text-gray-400 text-sm mt-4">Back to Home</button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Landing Page ---
const LandingPage = ({ onLoginClick }: { onLoginClick: () => void }) => (
  <><Navbar onLoginClick={onLoginClick} /><main><Hero /><About /><StoreLocator /><Licensing /></main><Footer /></>
);

const Hero = () => (<section className="min-h-screen flex items-center px-6 pt-20"><div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12"><div><h1 className="text-5xl md:text-7xl font-bold mb-6">Your Everyday Coffee, <span className="text-khaki">High Energy</span></h1><button className="btn-khaki">Order Now</button></div><div className="relative"><div className="aspect-square bg-khaki/10 rounded-full absolute -z-10 w-[120%] -top-10 -right-10 blur-3xl"></div><img src="/event-astro.jpg" className="rounded-3xl rotate-3 shadow-xl hover:rotate-0 transition-transform duration-500" /></div></div></section>);
const About = () => (<section id="about" className="py-24 bg-gray-50 px-6"><div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12"><img src="/monti-TNBDS.jpg" className="rounded-3xl shadow-lg" /><div><h2 className="text-4xl font-bold mb-6 italic">Our Story</h2><p className="text-lg text-gray-600">Founded in 2020, Monti Keopi emerged to redefine the coffee experience. "Keopi dulu, as always."</p></div></div></section>);
const StoreLocator = () => (<section className="py-24 text-center px-6"><div className="bg-beige p-20 rounded-[3rem] max-w-4xl mx-auto"><h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Find Monti Near You</h2><Link to="/stores" className="btn-khaki">View All Locations</Link></div></section>);
const Licensing = () => (<section className="py-24 px-6 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"><div className="bg-stone-100 p-12 rounded-[3rem]"><h2>Start Your Own Monti</h2><Link to="/licensing" className="btn-khaki mt-6 inline-block">Explore Licensing</Link></div><div className="bg-matte-black text-white p-12 rounded-[3rem]"><h2>Coffee For Your Events</h2><Link to="/catering" className="btn-khaki mt-6 inline-block">Book Catering</Link></div></section>);
export const Footer = () => (<footer className="py-12 border-t text-center px-6 text-sm text-gray-500">© 2026 Monti Keopi. All rights reserved. Made with high energy.</footer>);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      <AnimatePresence mode="wait">
        {isLoginOpen ? (
          <LoginPortal key="login" onClose={() => setIsLoginOpen(false)} onLoginSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage onLoginClick={() => setIsLoginOpen(true)} />} />
            <Route path="/menu" element={<MenuPage onLoginClick={() => setIsLoginOpen(true)} />} />
            <Route path="/stores" element={<StoresPage onLoginClick={() => setIsLoginOpen(true)} />} />
            <Route path="/catering" element={<CateringPage onLoginClick={() => setIsLoginOpen(true)} />} />
            <Route path="/licensing" element={<LicensingPage onLoginClick={() => setIsLoginOpen(true)} />} />
            <Route path="/licensing/apply" element={<LicensingFormPage onLoginClick={() => setIsLoginOpen(true)} />} />
            
            {/* The Protected Special Portal */}
            <Route path="/special-portal" element={isAuthenticated ? <SpecialPortal /> : <Navigate to="/" replace />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}
