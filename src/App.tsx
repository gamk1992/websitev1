/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Coffee, 
  Users, 
  Zap, 
  MapPin, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  ArrowRight,
  CheckCircle2,
  Plus,
  X,
  Lock,
  LogIn,
  Eye,
  EyeOff,
  TrendingUp,
  BarChart3,
  PieChart,
  ArrowLeft
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// --- Types ---

type View = 'home' | 'catering' | 'story' | 'menu' | 'locations' | 'licensing' | 'private';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  customizations: Record<string, string[]>;
}

// --- Data ---

const MENU_DATA: MenuItem[] = [
  {
    id: "americano",
    name: "Americano",
    category: "Core Coffee",
    description: "Our signature bold espresso softened with hot water. Pure energy in a cup.",
    image: "https://images.unsplash.com/photo-1551030173-122adabc44f9?q=80&w=600&auto=format&fit=crop",
    customizations: {
      milk: ["None", "Full Cream", "Oat Milk (+RM3)"],
      sugar: ["No Sugar", "Less Sugar", "Normal Sugar"],
      temp: ["Hot", "Iced"]
    }
  },
  {
    id: "latte",
    name: "Latte",
    category: "Core Coffee",
    description: "Rich espresso balanced with steamed milk and a light layer of foam.",
    image: "https://images.unsplash.com/photo-1593914624529-d40f8249427d?q=80&w=600&auto=format&fit=crop",
    customizations: {
      milk: ["Full Cream", "Oat Milk (+RM3)", "Soy Milk (+RM2)"],
      sugar: ["No Sugar", "Less Sugar", "Normal Sugar"],
      temp: ["Hot", "Iced"]
    }
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    category: "Core Coffee",
    description: "A creamy, slightly sweeter latte made with condensed milk for a silky finish.",
    image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600&auto=format&fit=crop",
    customizations: {
      milk: ["Full Cream", "Oat Milk (+RM3)"],
      sugar: ["Normal", "Less Sweet"],
      temp: ["Hot", "Iced"]
    }
  },
  {
    id: "sparkling-americano",
    name: "Sparkling Americano",
    category: "Signature Drinks",
    description: "A refreshing twist. Espresso meets chilled sparkling water and a hint of citrus.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop",
    customizations: {
      sugar: ["No Sugar", "Less Sugar", "Normal Sugar"],
      ice: ["Normal Ice", "Less Ice"]
    }
  },
  {
    id: "gula-melaka-latte",
    name: "Gula Melaka Latte",
    category: "Signature Drinks",
    description: "A local favorite. Espresso infused with authentic Malaysian palm sugar.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop",
    customizations: {
      milk: ["Full Cream", "Oat Milk (+RM3)"],
      sugar: ["Normal", "Less Sweet"],
      temp: ["Hot", "Iced"]
    }
  },
  {
    id: "coconut-cold-brew",
    name: "Coconut Cold Brew",
    category: "Seasonal Specials",
    description: "Smooth 12-hour cold brew topped with creamy coconut milk. Tropical energy.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
    customizations: {
      sugar: ["No Sugar", "Less Sugar"],
      ice: ["Normal Ice", "Less Ice"]
    }
  }
];

const LOCATIONS_DATA = [
  { name: "Monti Keopi HQ", address: "Bandar Puteri Bangi, Selangor" },
  { name: "Monti Keopi TNB Dua Sentral", address: "Dua Sentral, Kuala Lumpur" },
  { name: "Monti Keopi Wisma BSN", address: "Shah Alam, Selangor" },
  { name: "Monti Keopi KPJ Muar", address: "Muar, Johor" },
  { name: "Monti Keopi Seksyen 4", address: "Bandar Baru Bangi, Selangor" },
  { name: "Monti Keopi Nova Building", address: "Uniten, Selangor" },
  { name: "Monti Keopi TM R&D", address: "Cyberjaya, Selangor" },
  { name: "Monti Keopi IIUM Gombak", address: "Gombak, Kuala Lumpur" },
  { name: "Monti Keopi Inasis YAB", address: "UUM, Sintok, Kedah" },
  { name: "Monti Keopi Inasis Yayasan TNB", address: "UUM, Sintok, Kedah" }
];

const CATEGORIES = ["Core Coffee", "Signature Drinks", "Seasonal Specials"];

// --- Components ---

const Navbar: React.FC<{ 
  onViewChange: (view: View) => void;
}> = ({ onViewChange }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 md:px-12 flex justify-between items-center">
    <button onClick={() => onViewChange('home')} className="text-xl font-bold tracking-tighter hover:text-khaki transition-colors whitespace-nowrap">MONTI KEOPI</button>
    <div className="hidden md:flex space-x-8 text-sm font-medium">
      <button onClick={() => onViewChange('story')} className="hover:text-khaki transition-colors whitespace-nowrap">Our Story</button>
      <button onClick={() => onViewChange('menu')} className="hover:text-khaki transition-colors">Menu</button>
      <button onClick={() => onViewChange('locations')} className="hover:text-khaki transition-colors">Locations</button>
    </div>
    <div className="flex items-center space-x-3">
      <button onClick={() => onViewChange('catering')} className="btn-outline py-1.5 px-4 text-xs border-khaki text-matte-black hover:bg-khaki hover:text-white">Coffee for Event</button>
      <button onClick={() => onViewChange('licensing')} className="btn-primary py-1.5 px-4 text-xs font-bold uppercase tracking-wider">Open Outlet</button>
      <button onClick={() => onViewChange('private')} className="ml-1 p-2 text-gray-400 hover:text-khaki transition-colors group relative" title="Partner Portal">
        <LogIn size={18} />
        <span className="absolute -bottom-10 right-0 bg-matte-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest shadow-xl">Partner Portal</span>
      </button>
    </div>
  </nav>
);

const Hero: React.FC<{ onViewChange: (view: View) => void }> = ({ onViewChange }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="section-padding grid md:grid-cols-2 gap-12 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Your Everyday Coffee, <br />
          <span className="text-khaki">With High Energy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
          Monti Keopi is built for your daily routine — from morning boost to afternoon recharge.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => onViewChange('locations')} className="btn-primary px-8">Find Nearest Monti Outlet</button>
          <button 
            onClick={() => onViewChange('catering')} 
            className="btn-outline border-khaki text-matte-black hover:bg-khaki hover:text-white px-8"
          >
            Coffee for Event
          </button>
          <button onClick={() => onViewChange('licensing')} className="btn-outline px-8">Open Monti Outlet</button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="aspect-square bg-khaki/10 rounded-full absolute -z-10 w-[120%] -top-[10%] -right-[10%] blur-3xl" />
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop" 
          alt="Coffee Cup" 
          className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
          <p className="font-bold text-khaki text-xl">Energy On.</p>
          <p className="text-sm text-gray-500">Kopi dulu, then kita jalan.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const CateringPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qty: "100"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email via a backend service
    console.log("Catering Inquiry:", formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <section className="min-h-screen pt-32 section-padding flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-khaki/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-khaki" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Inquiry Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your interest in Monti Keopi Catering. An automated confirmation has been sent to your email, and our team will attend to your inquiry shortly.
          </p>
          <button onClick={onBack} className="btn-primary w-full">Back to Home</button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-khaki transition-colors mb-8 group"
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          <span>Back to Home</span>
        </button>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Coffee Catering</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bring the Monti Keopi experience to your event. Whether it's a corporate gathering, wedding, or community event, our mobile booth serves high-energy coffee to your guests.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-khaki/10 rounded-lg"><Coffee className="w-5 h-5 text-khaki" /></div>
                <div>
                  <h4 className="font-bold">Full Menu Access</h4>
                  <p className="text-sm text-gray-500">Choose from our core coffee and signature series.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-khaki/10 rounded-lg"><Users className="w-5 h-5 text-khaki" /></div>
                <div>
                  <h4 className="font-bold">Professional Baristas</h4>
                  <p className="text-sm text-gray-500">Friendly staff trained to deliver high energy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-khaki focus:ring-1 focus:ring-khaki outline-none transition-all"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-khaki focus:ring-1 focus:ring-khaki outline-none transition-all"
                  placeholder="+60..."
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-khaki focus:ring-1 focus:ring-khaki outline-none transition-all"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Estimated Quantity (Cups)</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-khaki focus:ring-1 focus:ring-khaki outline-none transition-all bg-white"
                  value={formData.qty}
                  onChange={e => setFormData({...formData, qty: e.target.value})}
                >
                  <option value="100">100 Cups</option>
                  <option value="300">300 Cups</option>
                  <option value="500">500 Cups</option>
                  <option value="more">More than 500 Cups</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full py-4 mt-4">Submit Inquiry</button>
              <p className="text-[10px] text-gray-400 text-center mt-4">
                By submitting, you agree to be contacted by our marketing team at marketing.montikeopi@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="story" className="section-padding bg-gray-50">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div {...fadeIn}>
        <h2 className="text-3xl md:text-4xl mb-8">Our Story</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Founded in 2020, Monti Keopi started as a simple coffee idea and has grown into a brand built around everyday moments. What began in universities is now expanding into corporate spaces, hospitals, and communities.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6">
          Today, Monti is evolving to become a coffee companion in people’s daily routines — delivering not just coffee, but energy to get through the day.
        </p>
      </motion.div>
    </div>
  </section>
);

const Values = () => {
  const pillars = [
    {
      icon: <Coffee className="w-8 h-8 text-khaki" />,
      title: "Everyday Routine",
      desc: "Coffee that fits naturally into your daily life."
    },
    {
      icon: <Users className="w-8 h-8 text-khaki" />,
      title: "Human Connection",
      desc: "Friendly service that makes every visit feel welcoming."
    },
    {
      icon: <Zap className="w-8 h-8 text-khaki" />,
      title: "High Energy",
      desc: "Uplifting drinks and experiences to keep your day going."
    }
  ];

  return (
    <section className="section-padding">
      <div className="grid md:grid-cols-3 gap-12">
        {pillars.map((pillar, idx) => (
          <motion.div 
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.2 }}
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-6">{pillar.icon}</div>
            <h3 className="text-xl mb-4">{pillar.title}</h3>
            <p className="text-gray-600">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem; onClick: () => void }> = ({ item, onClick }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="bg-white text-matte-black p-3 rounded-full shadow-lg">
          <Plus className="w-6 h-6" />
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
      <div className="mt-4 flex items-center text-khaki font-semibold text-sm">
        <span>Customize</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  </motion.div>
);

const CustomizationModal: React.FC<{ item: MenuItem; onClose: () => void }> = ({ item, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      onClick={e => e.stopPropagation()}
    >
      <div className="md:w-1/2 h-64 md:h-auto relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 bg-white/80 backdrop-blur p-2 rounded-full md:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="md:w-1/2 p-8 overflow-y-auto max-h-[70vh] md:max-h-none">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <button 
            onClick={onClose}
            className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-gray-600 mb-8">{item.description}</p>
        
        <div className="space-y-6">
          {(Object.entries(item.customizations) as [string, string[]][]).map(([key, options]) => (
            <div key={key}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">{key}</h4>
              <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                  <button 
                    key={opt}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:border-khaki hover:bg-khaki/5 transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <button className="btn-primary w-full mt-10">Add to Daily Routine</button>
      </div>
    </motion.div>
  </motion.div>
);

const Menu = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = MENU_DATA.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl mb-4">Your Daily Coffee Lineup</motion.h2>
          <motion.p {...fadeIn} className="text-gray-500 max-w-xl mx-auto">
            From your daily essentials to refreshing signatures. Handcrafted with high energy.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat 
                ? "bg-matte-black text-white shadow-lg" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <MenuCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <CustomizationModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Experience = () => (
  <section className="section-padding">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div {...fadeIn}>
        <h2 className="text-3xl md:text-4xl mb-6">More Than Just Coffee</h2>
        <p className="text-lg text-gray-600 mb-8">
          Monti is designed to bring small moments of energy into your day — whether it’s a quick coffee run, a short break, or a little game at the counter.
        </p>
        <ul className="space-y-4">
          {[
            "Fast and convenient",
            "Friendly interaction",
            "Small moments of fun"
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-3 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-khaki" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        {...fadeIn}
        className="grid grid-cols-2 gap-4"
      >
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
          alt="Cafe Vibe" 
          className="rounded-2xl w-full h-64 object-cover"
          referrerPolicy="no-referrer"
        />
        <img 
          src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1000&auto=format&fit=crop" 
          alt="Barista" 
          className="rounded-2xl w-full h-64 object-cover mt-8"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const Locations = () => (
  <section id="locations" className="section-padding bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div {...fadeIn}>
          <MapPin className="w-12 h-12 text-khaki mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-6">Find Monti Near You</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Monti Keopi is growing across Malaysia — from campuses to corporate buildings and community spaces.
          </p>
        </motion.div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS_DATA.map((loc, idx) => (
          <motion.div 
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-khaki transition-colors group"
          >
            <h4 className="font-bold text-lg mb-2 group-hover:text-khaki transition-colors">{loc.name}</h4>
            <p className="text-gray-500 text-sm mb-4">{loc.address}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name + " " + loc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-khaki flex items-center"
            >
              <span>View on Maps</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="btn-primary">View All Locations</button>
      </div>
    </div>
  </section>
);

const PrivateSpace: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  // Projection state
  const [cups, setCups] = useState(90);
  const [price, setPrice] = useState(17);
  const [days, setDays] = useState(22);
  const [cogs, setCogs] = useState(45);
  const [royalty, setRoyalty] = useState(5);
  const [rental, setRental] = useState(7);
  const [labour, setLabour] = useState(2000);
  const [investment, setInvestment] = useState(77000);
  const [scenario, setScenario] = useState('ideal');

  const correctPass = "MKOS2026!";

  const handleUnlock = () => {
    if (password === correctPass) {
      setIsUnlocked(true);
      setError("");
    } else {
      setShake(true);
      setError("Incorrect password. Please try again.");
      setPassword("");
      setTimeout(() => setShake(false), 400);
    }
  };

  const applyPreset = (c: number, lab: number, rent: number, type: string) => {
    setScenario(type);
    if (type === 'custom') return;
    setCups(c);
    setPrice(17);
    setDays(type === 'super' ? 30 : 22);
    setCogs(45);
    setRoyalty(5);
    setRental(rent);
    setLabour(lab);
  };

  // Calculations
  const dailyRev = cups * price;
  const monthlyRev = dailyRev * days;
  const cogsAmt = monthlyRev * (cogs / 100);
  const royalAmt = monthlyRev * (royalty / 100);
  const rentalAmt = monthlyRev * (rental / 100);
  const profit = monthlyRev - cogsAmt - royalAmt - rentalAmt - labour;
  const margin = monthlyRev > 0 ? profit / monthlyRev : 0;

  const varPct = (cogs + royalty + rental) / 100;
  const contribPerCup = price * (1 - varPct);
  const beDaily = contribPerCup > 0 ? Math.ceil(labour / (contribPerCup * days)) : 0;

  const paybackMonths = profit > 0 ? investment / profit : null;
  const tyRev = monthlyRev * 36;
  const tyProfit = profit * 36;
  const tyNet = tyProfit - investment;

  const formatRM = (n: number) => 'RM ' + Math.round(n).toLocaleString('en-MY');
  const formatPct = (n: number) => (n * 100).toFixed(1) + '%';

  const getVerdict = () => {
    if (profit < 0) return { label: 'Loss', color: 'text-red-500' };
    if (margin < 0.15) return { label: 'Tight margin', color: 'text-orange-500' };
    if (margin < 0.25) return { label: 'Acceptable', color: 'text-green-600' };
    if (margin > 0.30) return { label: 'Excellent', color: 'text-green-700 font-bold' };
    return { label: 'Solid', color: 'text-green-600' };
  };

  const verdict = getVerdict();

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-matte-black bg-gradient-to-br from-matte-black via-gray-900 to-matte-black p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, x: shake ? [0, -10, 10, -10, 10, 0] : 0 }}
          className="bg-white/5 backdrop-blur-2xl border border-khaki/30 p-10 rounded-3xl w-full max-w-md text-center shadow-2xl"
        >
          <div className="flex justify-center mb-6 text-khaki">
            <Lock className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Monti Keopi</h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-khaki/60 mb-8 font-light">Internal Portal</p>
          
          <div className="space-y-4">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full bg-white/10 border border-khaki/20 rounded-xl px-5 py-4 text-white outline-none focus:border-khaki/60 transition-all text-center tracking-widest"
                placeholder="ACCESS KEY"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            <button 
              onClick={handleUnlock}
              className="w-full btn-primary py-4 mt-2"
            >
              Authorise Entrance
            </button>
          </div>
          <p className="text-[10px] text-white/20 mt-10 uppercase tracking-widest">Restricted Access · MKOS-2026</p>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAF7F2] pb-20">
      <div className="bg-matte-black text-white px-6 md:px-12 h-16 flex items-center justify-between border-b border-khaki/20 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors mr-2">
            <ArrowLeft size={18} />
          </button>
          <span className="font-bold text-lg tracking-tight">MONTI KEOPI</span>
          <span className="text-[10px] uppercase tracking-widest text-khaki/60 border-l border-khaki/20 pl-3 hidden sm:block">Projection Tool</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-[10px] px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full hidden sm:block tracking-widest">INTERNAL ONLY</span>
          <button onClick={() => setIsUnlocked(false)} className="text-xs text-white/40 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-lg">Lock Portal</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-matte-black mb-2 px-1">Kiosk Profit Calculator</h1>
          <p className="text-gray-500 text-sm">Monthly projections based on variable inputs.</p>
        </header>

        {/* Scenarios */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2">Scenario:</span>
          {[
            { label: 'Minimum', type: 'min', cups: 45, lab: 1500, rent: 7 },
            { label: 'Ideal', type: 'ideal', cups: 90, lab: 4000, rent: 7 },
            { label: 'Super Best', type: 'super', cups: 90, lab: 6000, rent: 9 },
            { label: 'Custom', type: 'custom' }
          ].map((ps) => (
            <button 
              key={ps.label}
              onClick={() => applyPreset(ps.cups || 0, ps.lab || 0, ps.rent || 0, ps.type)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                scenario === ps.type 
                ? 'bg-matte-black text-white shadow-xl' 
                : 'bg-white border border-gray-200 text-gray-500 hover:border-khaki'
              }`}
            >
              {ps.label}
            </button>
          ))}
        </div>

        {/* Core Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-matte-black text-white p-6 rounded-3xl md:col-span-2 flex justify-between items-center overflow-hidden relative group">
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-khaki/60 mb-2 font-bold">Magic Number</p>
              <h3 className="text-4xl font-bold text-khaki">{beDaily} <span className="text-lg font-light text-white/40">cups/day</span></h3>
              <p className="text-xs text-white/40 mt-1">Needed to break even monthly</p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 scale-150 rotate-12 transition-transform group-hover:scale-[1.7]">
              <TrendingUp size={120} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Estimated Profit</p>
            <h3 className={`text-2xl font-bold ${profit < 0 ? 'text-red-500' : 'text-matte-black'}`}>{formatRM(profit)}</h3>
            <p className={`text-[10px] mt-1 uppercase font-bold ${verdict.color}`}>{verdict.label}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Net Margin</p>
            <h3 className="text-2xl font-bold">{formatPct(margin)}</h3>
            <p className="text-[10px] text-gray-400 mt-1">Post operational costs</p>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-2 mb-6 border-b border-gray-50 pb-4">
              <BarChart3 size={16} className="text-khaki" />
              <h4 className="text-xs font-bold uppercase tracking-widest">Revenue Drivers</h4>
            </div>
            <div className="space-y-8">
              {[
                { label: 'Cups per day', val: cups, set: setCups, min: 10, max: 200, unit: 'cups' },
                { label: 'Avg price / cup', val: price, set: setPrice, min: 8, max: 25, step: 0.5, unit: 'RM', mode: 'prefix' },
                { label: 'Operating days', val: days, set: setDays, min: 10, max: 30, unit: 'days' }
              ].map(sl => (
                <div key={sl.label}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">{sl.label}</span>
                    <span className="text-sm font-bold text-khaki">
                      {sl.mode === 'prefix' ? `RM ${sl.val.toFixed(2)}` : `${sl.val} ${sl.unit}`}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min={sl.min} max={sl.max} step={sl.step || 1} 
                    value={sl.val} 
                    onChange={(e) => { sl.set(+e.target.value); setScenario('custom'); }}
                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-2 mb-6 border-b border-gray-50 pb-4">
              <PieChart size={16} className="text-khaki" />
              <h4 className="text-xs font-bold uppercase tracking-widest">Cost Structure</h4>
            </div>
            <div className="space-y-6">
              {[
                { label: 'COGS %', val: cogs, set: setCogs, min: 20, max: 70 },
                { label: 'Royalty %', val: royalty, set: setRoyalty, min: 0, max: 15, step: 0.5 },
                { label: 'Rental %', val: rental, set: setRental, min: 0, max: 25 }
              ].map(sl => (
                <div key={sl.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-600">{sl.label}</span>
                    <span className="text-xs font-bold text-matte-black">{sl.val}%</span>
                  </div>
                  <input 
                    type="range" 
                    min={sl.min} max={sl.max} step={sl.step || 1} 
                    value={sl.val} 
                    onChange={(e) => { sl.set(+e.target.value); setScenario('custom'); }}
                    className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                  />
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Fixed Costs (Labour/Util)</span>
                  <span className="text-sm font-bold text-khaki">RM {labour.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min={500} max={6000} step={100} 
                  value={labour} 
                  onChange={(e) => { setLabour(+e.target.value); setScenario('custom'); }}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tables and Payback */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">P&L Breakdown</h4>
                <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-bold uppercase">
                  <span>Rev %</span>
                  <span className="w-24 text-right">Monthly (RM)</span>
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                <div className="px-6 py-4 flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Monthly Revenue</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-300">100%</span>
                    <span className="w-24 text-right font-bold text-matte-black">{Math.round(monthlyRev).toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-6 py-3 flex justify-between text-sm bg-gray-50/50">
                  <span className="text-gray-500">(-) COGS</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-400">{cogs}%</span>
                    <span className="w-24 text-right font-medium text-red-500/70">-{Math.round(cogsAmt).toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-6 py-3 flex justify-between text-sm">
                  <span className="text-gray-500">(-) Royalty</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-400">{royalty}%</span>
                    <span className="w-24 text-right font-medium text-red-500/70">-{Math.round(royalAmt).toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-6 py-3 flex justify-between text-sm bg-gray-50/50">
                  <span className="text-gray-500">(-) Rental</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-400">{rental}%</span>
                    <span className="w-24 text-right font-medium text-red-500/70">-{Math.round(rentalAmt).toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-6 py-3 flex justify-between text-sm">
                  <span className="text-gray-500">(-) Labour & utilities</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-400">{monthlyRev > 0 ? (labour/monthlyRev*100).toFixed(1) : 0}%</span>
                    <span className="w-24 text-right font-medium text-red-500/70">-{labour.toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-6 py-5 flex justify-between text-base bg-matte-black text-white">
                  <span className="font-bold">Estimated Profit</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{formatPct(margin)}</span>
                    <span className={`w-24 text-right font-bold ${profit < 0 ? 'text-red-400' : 'text-khaki'}`}>{Math.round(profit).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Year Contract */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 pb-4 border-b border-gray-50">3-Year Contract Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Total Revenue</p>
                  <p className="text-2xl font-bold text-matte-black">{formatRM(tyRev)}</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">36 Months Operation</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Total EBITDA</p>
                  <p className="text-2xl font-bold text-khaki">{formatRM(tyProfit)}</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">Cumulative Profit</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Net Capital Position</p>
                  <p className={`text-2xl font-bold ${tyNet >= 0 ? 'text-green-600' : 'text-red-500'}`}>{formatRM(tyNet)}</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">Surplus After Recovery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Investment & Payback</h4>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-8">
                  <p className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Capital Investment</p>
                  <div className="flex items-center">
                    <span className="text-gray-400 font-bold mr-2 text-sm">RM</span>
                    <input 
                      type="number" 
                      className="bg-transparent text-xl font-bold text-matte-black outline-none w-full"
                      value={investment}
                      onChange={(e) => setInvestment(+e.target.value)}
                    />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-gray-400 text-xs mb-1 uppercase tracking-widest">Payback Period</p>
                  <h3 className="text-4xl font-bold text-matte-black">
                    {profit > 0 ? (investment / profit).toFixed(1) : '∞'} <span className="text-lg font-light text-gray-300">Months</span>
                  </h3>
                </div>

                {/* Vertical Progress Bar for Payback */}
                <div className="h-64 bg-gray-50 rounded-full w-4 mx-auto relative overflow-hidden mb-6">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: profit > 0 ? Math.min(100, (36 / (investment/profit)) * 2) + '%' : '0%' }}
                    className={`absolute bottom-0 w-full rounded-full ${
                      paybackMonths && paybackMonths <= 12 ? 'bg-green-500' : paybackMonths && paybackMonths <= 24 ? 'bg-khaki' : 'bg-red-400'
                    }`}
                  />
                </div>
                
                <div className="flex justify-between text-[8px] text-gray-300 font-bold uppercase tracking-widest px-4">
                  <span>Target</span>
                  <span>End Contract (36m)</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-50">
                <p className={`text-xs text-center leading-relaxed h-12 flex items-center justify-center italic text-gray-500`}>
                  {profit <= 0 
                  ? "Currently not profitable at these settings." 
                  : paybackMonths && paybackMonths <= 12 
                    ? "Incredible payback. Highly recommended." 
                    : paybackMonths && paybackMonths <= 24 
                      ? "Standard payback period. Solid investment." 
                      : "High risk. Payback takes over 2 years."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-[10px] text-gray-300 uppercase tracking-[0.4em]">Monti Keopi · Projection Algorithm v.1.0</p>
        </footer>
      </div>
    </section>
  );
};

const Licensing = () => (
  <section id="licensing" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-khaki/5 -z-10 hidden lg:block" />
    <div className="max-w-4xl">
      <motion.div {...fadeIn}>
        <span className="text-khaki font-bold tracking-widest uppercase text-sm mb-4 block">Business Opportunity</span>
        <h2 className="text-4xl md:text-6xl mb-8">Start Your Own Monti</h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Join Monti Keopi and be part of a growing coffee brand built for everyday life. Our licensing model is designed to help you start and scale with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary flex items-center justify-center space-x-2">
            <span>Explore Licensing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-outline">Talk to Us</button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer: React.FC<{ onViewChange: (view: View) => void }> = ({ onViewChange }) => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 md:px-12 lg:px-24">
    <div className="grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-2">
        <div className="text-2xl font-bold mb-6">MONTI KEOPI</div>
        <p className="text-gray-500 max-w-xs mb-8">
          Monti Keopi — Your Everyday Coffee Companion. Delivering energy to your daily routine.
        </p>
        <div className="flex space-x-4">
          <a href="http://facebook.com/montikeopi" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-khaki transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="http://instagram.com/montikeopi" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-khaki transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="http://tiktok.com/@montikeopi" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-khaki transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.06 1.42.46 2.01.73 1.04 2.09 1.48 3.26 1.07 1.1-.38 1.84-1.53 1.83-2.7-.03-3.1-.01-6.2-.01-9.3z"/>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-gray-600">
          <li><button onClick={() => onViewChange('story')} className="hover:text-khaki transition-colors">Our Story</button></li>
          <li><button onClick={() => onViewChange('menu')} className="hover:text-khaki transition-colors">Menu</button></li>
          <li><button onClick={() => onViewChange('locations')} className="hover:text-khaki transition-colors">Locations</button></li>
          <li><button onClick={() => onViewChange('licensing')} className="hover:text-khaki transition-colors">Licensing</button></li>
          <li><button onClick={() => onViewChange('private')} className="text-gray-300 hover:text-khaki transition-colors text-xs">Partner Portal</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">Contact</h4>
        <ul className="space-y-4 text-gray-600">
          <li>montikeopi@gmail.com</li>
          <li>+6018 394 4438</li>
          <li>monti keopi HQ, CR-05, Kompleks Kubica Square, Bandar Puteri Bangi, Selangor, Malaysia</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-400 text-sm border-t border-gray-50 pt-10">
      &copy; {new Date().getFullYear()} Monti Keopi. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<View>('home');

  const handleViewChange = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-khaki/30">
      <Navbar onViewChange={handleViewChange} />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'home' && <Hero onViewChange={handleViewChange} />}
            {view === 'story' && (
              <>
                <About />
                <Values />
                <Experience />
              </>
            )}
            {view === 'menu' && <Menu />}
            {view === 'locations' && <Locations />}
            {view === 'licensing' && <Licensing />}
            {view === 'catering' && <CateringPage onBack={() => handleViewChange('home')} />}
            {view === 'private' && <PrivateSpace onBack={() => handleViewChange('home')} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}
