import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft
} from 'lucide-react';
import { Navbar, Footer } from '../App';

const LicensingFormPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={onLoginClick} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/licensing" className="inline-flex items-center gap-2 text-gray-500 hover:text-khaki transition-colors mb-12 font-bold uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Licensing
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Licensing Partnership Inquiry</h1>
            <p className="text-xl text-gray-500">Take the first step toward owning a high-energy coffee business. Complete this brief form to receive our comprehensive Licensing Kit.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="relative w-full" style={{ height: '1000px' }}>
              <iframe 
                src="https://forms.gle/UAJrk2YB8zQsvVER8" 
                className="absolute inset-0 w-full h-full border-0"
                title="Monti Keopi Licensing Partnership Inquiry Form"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LicensingFormPage;
