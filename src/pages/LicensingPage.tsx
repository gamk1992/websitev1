import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Layers, 
  Zap,
  Award,
  Settings,
  BookOpen,
  UserCheck,
  Megaphone,
  Rocket,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { Navbar, Footer } from '../App';

const LicensingPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whyMontiData = [
    {
      pillar: "Proven Ecosystem",
      means: "9 outlets, strong presence in universities",
      matters: "Built-in repeat customer behavior"
    },
    {
      pillar: "Culture-Driven Brand",
      means: "Korean-inspired campaigns and activations",
      matters: "Drives engagement beyond product"
    },
    {
      pillar: "Scalable Formats",
      means: "Cart and kiosk models",
      matters: "Flexible entry and expansion"
    },
    {
      pillar: "Community Engine",
      means: "Events, games, collaborations",
      matters: "Builds loyalty and repeat visits"
    }
  ];

  const setupCosts = [
    { label: "Licensing Fee (3 Years)", cost: "RM 30,000" },
    { label: "Coffee Machines & Equipment", cost: "RM 22,000" },
    { label: "Lawyer & Processing Fee", cost: "RM 5,000" },
    { label: "Stocks & Raw Materials", cost: "RM 8,000" },
    { label: "Monti Cart + Wiring & Piping", cost: "RM 12,000" }
  ];

  const whatYouGet = [
    { icon: <Award className="w-6 h-6" />, text: "Branding & visual identity system" },
    { icon: <Settings className="w-6 h-6" />, text: "Equipment setup guidance" },
    { icon: <BookOpen className="w-6 h-6" />, text: "SOP & drink recipes" },
    { icon: <UserCheck className="w-6 h-6" />, text: "Staff training" },
    { icon: <Megaphone className="w-6 h-6" />, text: "Marketing campaigns & assets" },
    { icon: <Rocket className="w-6 h-6" />, text: "Launch support" }
  ];

  const whoThisIsFor = [
    "First-time entrepreneurs who want a structured start",
    "Side income seekers ready to scale",
    "Brand-driven operators (not just product sellers)",
    "Community-focused business builders",
    "Business owners with ~150 sqft extra space to utilise"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-matte-black selection:bg-khaki/30">
      <Navbar onLoginClick={onLoginClick} />

      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-0 right-0 z-50 px-6 pointer-events-none"
          >
            <div className="max-w-7xl mx-auto flex justify-center">
              <Link to="/licensing/apply" className="btn-khaki shadow-2xl px-10 py-4 text-lg flex items-center gap-3 pointer-events-auto">
                Get Licensing Kit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-khaki/10 text-khaki rounded-full text-sm font-bold tracking-wider uppercase mb-8">
                <Zap className="w-4 h-4 fill-current" />
                Join the Movement
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter uppercase">
                Start Your Coffee Business With a <span className="text-khaki">Brand That Connects.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                More than coffee. Build a space people return to—every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/licensing/apply" className="btn-khaki px-10 py-5 text-lg flex items-center justify-center gap-3">
                  Get Licensing Kit <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://wa.me/601113353551" target="_blank" rel="noopener noreferrer" className="px-10 py-5 text-lg border-2 border-matte-black rounded-full font-bold hover:bg-matte-black hover:text-white transition-all flex items-center justify-center gap-3">
                  Talk to Us <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-500 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm md:text-base">
                  9 outlets across Klang Valley • Built for campus & community markets
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                  alt="Monti Keopi Outlet" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-khaki/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-beige rounded-full blur-3xl -z-10" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-khaki/10 rounded-full flex items-center justify-center text-khaki">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Growth</p>
                    <p className="text-xl font-bold">150+ Outlets Goal</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. WHY MONTI WORKS */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Why Monti Works</h2>
              <div className="w-20 h-1.5 bg-khaki mx-auto" />
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-matte-black text-white">
                      <th className="px-10 py-6 font-bold uppercase tracking-wider text-sm">Pillar</th>
                      <th className="px-10 py-6 font-bold uppercase tracking-wider text-sm">What It Means</th>
                      <th className="px-10 py-6 font-bold uppercase tracking-wider text-sm">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {whyMontiData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-10 py-8 font-bold text-khaki text-lg">{item.pillar}</td>
                        <td className="px-10 py-8 text-gray-600 font-medium">{item.means}</td>
                        <td className="px-10 py-8 text-matte-black font-bold">{item.matters}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <p className="text-center mt-12 text-xl font-bold text-gray-500 italic">
              "You’re not starting from zero. You’re building on a system that already connects."
            </p>
          </div>
        </section>

        {/* 3. LICENSING SETUP COST */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Start With a Clear, Structured Setup</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Transparent, practical, and built for execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {setupCosts.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{item.label}</p>
                  <p className="text-3xl font-bold text-matte-black">{item.cost}</p>
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-khaki text-matte-black shadow-xl lg:col-span-1 flex flex-col justify-center"
              >
                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Total Estimated Basic Setup</p>
                <p className="text-5xl font-bold tracking-tighter">RM 77,000</p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-400 mb-8 text-sm">
                * Renovation cost is not included. Setup is ready to install if location is in good condition.
              </p>
              <div className="inline-block px-8 py-4 bg-matte-black text-white rounded-2xl font-bold text-lg">
                Low barrier entry. Fast setup. Built to start generating quickly.
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT YOU GET */}
        <section className="py-24 bg-khaki/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                  You’re Not Doing <br /> <span className="text-khaki">This Alone</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {whatYouGet.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-khaki shrink-0">
                        {item.icon}
                      </div>
                      <p className="font-bold text-lg leading-snug pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-12 text-xl font-bold text-khaki">
                  From setup to opening, we guide you through every step.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                    alt="Training" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Staff" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                    <p className="font-bold">Full Launch Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-matte-black text-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-khaki/10 skew-x-12 translate-x-20" />
              
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Built For The <br /> Right Operators</h2>
                <div className="space-y-6 mb-12">
                  {whoThisIsFor.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full border-2 border-khaki flex items-center justify-center group-hover:bg-khaki transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-khaki group-hover:text-matte-black transition-colors" />
                      </div>
                      <p className="text-xl md:text-2xl font-medium opacity-90">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-khaki font-bold text-lg">
                  Turn underutilised space into a daily revenue-generating coffee spot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA SECTION */}
        <section className="py-32 bg-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10">
                Let’s Build Your First <br /> (or Next) Outlet
              </h2>
              <div className="flex flex-col items-center gap-6">
                <Link to="/licensing/apply" className="btn-khaki px-16 py-6 text-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Apply Now
                </Link>
                <p className="text-khaki font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-khaki rounded-full animate-pulse" />
                  Limited locations available in Klang Valley
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LicensingPage;
