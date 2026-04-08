import React from 'react';
import { motion } from 'motion/react';
import { Navbar, Footer } from '../App';
import { Coffee, CheckCircle2, Users, MapPin, Phone, Mail } from 'lucide-react';

const CLIENTS = [
  "Bank negara malaysia (Sasana Kijang)",
  "Dell Malaysia",
  "Heitech Padu Berhad",
  "RHB BANK",
  "Universities",
  "Mosques",
  "Private Events",
  "Private Weddings"
];

const CateringPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={onLoginClick} />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-beige text-khaki font-bold text-xs tracking-[0.3em] uppercase mb-6 rounded-full">
                Premium Catering
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 uppercase tracking-tighter">
                Coffee For <br />
                <span className="text-khaki text-outline">Your Events</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elevate your event with the signature Monti Keopi experience. Whether it's a corporate gathering, a wedding, or a private party, we bring the high-energy fuel your guests deserve.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-matte-black font-medium">
                  <CheckCircle2 className="text-khaki w-6 h-6" />
                  <span>Flexible Setup: Our booth or yours</span>
                </div>
                <div className="flex items-center gap-3 text-matte-black font-medium">
                  <CheckCircle2 className="text-khaki w-6 h-6" />
                  <span>Professional Baristas</span>
                </div>
                <div className="flex items-center gap-3 text-matte-black font-medium">
                  <CheckCircle2 className="text-khaki w-6 h-6" />
                  <span>Full Menu Customization</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/monti-eventcart.jpg" 
                  alt="Coffee Catering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-khaki text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold italic">"Kopi dulu, then kita event."</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-gray-50 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Trusted By Leaders</h2>
              <p className="text-gray-500">We've energized events for some of Malaysia's most prestigious organizations.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {CLIENTS.map((client, idx) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-8 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 font-bold text-matte-black uppercase tracking-wider text-sm hover:border-khaki transition-colors"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry" className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter">Get a Quote</h2>
              <p className="text-lg text-gray-600 mb-10">
                Ready to bring Monti Keopi to your next event? Fill out the form and our events team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-khaki">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us at</p>
                    <p className="font-bold">marketing.montikeopi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-khaki">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us at</p>
                    <a href="tel:+601113353551" className="font-bold hover:text-khaki transition-colors">+6011 1335 3551</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden"
              >
                <div className="relative w-full" style={{ height: '800px' }}>
                  <iframe 
                    src="https://forms.gle/n5dateu38C4WrBp97" 
                    className="absolute inset-0 w-full h-full border-0"
                    title="Monti Keopi Event Inquiry Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CateringPage;
