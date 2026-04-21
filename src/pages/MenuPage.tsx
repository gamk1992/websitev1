import { motion } from 'motion/react';
import { Navbar, Footer } from '../components/Layout';

interface Product {
  name: string;
  category: string;
  description: string;
}

const MENU_DATA: { category: string; items: Product[] }[] = [
  {
    category: 'Core Coffee',
    items: [
      { name: 'Americano', category: 'Core Coffee', description: 'Pure, bold, and energizing. The perfect morning boost.' },
      { name: 'Classic Cafe Latte', category: 'Core Coffee', description: 'Smooth espresso with velvety steamed milk.' },
      { name: 'Cappucino', category: 'Core Coffee', description: 'Rich espresso topped with a deep layer of frothy milk.' },
      { name: 'Mocha', category: 'Core Coffee', description: 'A perfect blend of espresso, chocolate, and milk.' },
    ]
  },
  {
    category: 'Signature Drinks',
    items: [
      { name: 'Spanish Latte', category: 'Signature Drinks', description: 'Creamy sweetness meets strong espresso. A crowd favorite.' },
      { name: 'Gula Melaka Series', category: 'Signature Drinks', description: 'A Malaysian twist with rich, smoky palm sugar. Coffee or Matcha.' },
      { name: 'Banana Series', category: 'Signature Drinks', description: 'Unique fusion of banana sweetness. Coffee or Matcha.' },
      { name: 'Steoberee Series', category: 'Signature Drinks', description: 'Our signature strawberry blend. Coffee or Latte.' },
      { name: 'Avocado Series', category: 'Signature Drinks', description: 'Rich, creamy avocado goodness. Coffee or Latte.' },
      { name: 'Matcha Latte', category: 'Signature Drinks', description: 'Premium Japanese green tea with steamed milk.' },
      { name: 'Choco-latte', category: 'Signature Drinks', description: 'Indulgent, rich chocolate for the non-coffee lovers.' },
    ]
  },
  {
    category: 'Sparkling',
    items: [
      { name: 'Steoberee Sparkling', category: 'Sparkling', description: 'Refreshing strawberry fizz.' },
      { name: 'Lemonade Bliss', category: 'Sparkling', description: 'Zesty and bright citrus refreshment.' },
      { name: 'Sunset Fizz', category: 'Sparkling', description: 'Sweet peach with a sparkling kick.' },
      { name: 'Purple Breeze', category: 'Sparkling', description: 'Cool blackcurrant sparkling delight.' },
    ]
  },
  {
    category: 'Mont-tea',
    items: [
      { name: 'Hibiscus Hana', category: 'Mont-tea', description: 'Floral and refreshing hibiscus tea.' },
      { name: 'Calming Chamomile', category: 'Mont-tea', description: 'Soothing herbal tea for relaxation.' },
      { name: 'Steoberee Tea', category: 'Mont-tea', description: 'Fruit-infused strawberry tea.' },
      { name: 'Apple Tea', category: 'Mont-tea', description: 'Crisp and sweet apple tea.' },
      { name: 'Peach Tea', category: 'Mont-tea', description: 'Classic sweet peach tea.' },
    ]
  },
  {
    category: 'Montifrappe',
    items: [
      { name: 'Double ChocoChip', category: 'Montifrappe', description: 'Rich chocolate blended with chips.' },
      { name: 'Caramel Espresso', category: 'Montifrappe', description: 'Sweet caramel with a coffee punch.' },
      { name: 'Steoberee Frappe', category: 'Montifrappe', description: 'Creamy strawberry blended treat.' },
      { name: 'Peach Frappe', category: 'Montifrappe', description: 'Refreshing peach blended ice.' },
      { name: 'Blackcurrent Frappe', category: 'Montifrappe', description: 'Bold blackcurrant blended ice.' },
    ]
  }
];

const MenuPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
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
              Fuel Your Ambition
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Daily Coffee Lineup
            </h2>
            <div className="w-24 h-1 bg-matte-black mx-auto" />
          </motion.div>

          <div className="space-y-32">
            {MENU_DATA.map((section) => (
              <div key={section.category} className="space-y-12">
                <div className="flex items-center gap-6">
                  <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">{section.category}</h3>
                  <div className="h-[1px] flex-1 bg-gray-200" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                  {section.items.map((product, idx) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group relative"
                    >
                      <div className="flex justify-between items-baseline mb-3">
                        <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-khaki transition-colors duration-300">
                          {product.name}
                        </h4>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md font-medium">
                        {product.description}
                      </p>
                      <div className="absolute -left-4 top-0 w-1 h-0 bg-khaki group-hover:h-full transition-all duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
