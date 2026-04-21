import { motion } from 'motion/react';
import { MapPin, ChevronRight } from 'lucide-react';
import { Navbar, Footer } from '../components/Layout';

const STORES_LIST = [
  { 
    name: 'Headquarter', 
    location: 'Bandar Puteri Bangi, Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+Headquarter+Bandar+Puteri+Bangi'
  },
  { 
    name: 'TNB Dua Sentral', 
    location: 'Kuala Lumpur',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+TNB+Dua+Sentral'
  },
  { 
    name: 'Wisma BSN Shah Alam', 
    location: 'Shah Alam, Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+Wisma+BSN+Shah+Alam'
  },
  { 
    name: 'TM R&D', 
    location: 'Cyberjaya, Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+TM+R%26D+Cyberjaya'
  },
  { 
    name: 'KPJ Muar', 
    location: 'Johor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+KPJ+Muar'
  },
  { 
    name: 'Nova Building Uniten', 
    location: 'Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+Nova+Uniten'
  },
  { 
    name: 'Seksyen 4 Tambahan Bangi', 
    location: 'Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+Seksyen+4+Tambahan+Bangi'
  },
  { 
    name: 'UIA Gombak', 
    location: 'Selangor',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monti+Keopi+UIA+Gombak'
  },
  { 
    name: 'UUM (Yayasan Albukhary)', 
    location: 'Sintok, Kedah',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Inapan+Siswa+YAB+Yayasan+Albukhary'
  },
  { 
    name: 'UUM (Inasis TNB)', 
    location: 'Sintok, Kedah',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Inasis+TM'
  },
];

const StoresPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={onLoginClick} />

      <main className="pt-32 pb-20 bg-white text-matte-black min-h-[calc(100vh-88px)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1 bg-beige text-khaki font-bold text-xs tracking-[0.3em] uppercase mb-6 rounded-full">
              Find Your Energy
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Locations
            </h2>
            <div className="w-24 h-1 bg-matte-black mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORES_LIST.map((store, idx) => (
              <motion.a
                key={store.name + idx}
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="card group cursor-pointer border border-gray-100 hover:border-khaki transition-all duration-300 block"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-khaki transition-colors">
                      {store.name}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-2 font-medium">
                      <MapPin className="w-4 h-4 text-khaki" />
                      {store.location}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-khaki transition-colors transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default StoresPage;
