const handleSignIn = async () => {
    setError('');
    if (role === 'Team') {
      try {
        const response = await fetch('https://monti-keopi-backend.marketing-montikeopi.workers.dev/api/partner/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: username, password }) // Using username field as email
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
// ... (The code you shared ends here)
    }
  }; 
    const [cups, setCups] = useState(90);
  const [price, setPrice] = useState(15);
  const [rent, setRent] = useState(2500);
  const [labor, setLabor] = useState(3500);
  
  const days = 26;
  const cogsPct = 0.35;
  const royaltyPct = 0.05;
  const setupCost = 85000;

  const monthlyRev = cups * price * days;
  const totalCOGS = monthlyRev * cogsPct;
  const totalRoyalty = monthlyRev * royaltyPct;
  const monthlyProfit = monthlyRev - (rent + labor + totalCOGS + totalRoyalty);
  const margin = monthlyRev > 0 ? (monthlyProfit / monthlyRev) * 100 : 0;
  const beCups = Math.ceil((rent + labor) / (price * (1 - cogsPct - royaltyPct) * days));
  const payback = monthlyProfit > 0 ? (setupCost / monthlyProfit).toFixed(1) : "∞";

  return (
    <div className="min-h-screen bg-stone-50 p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-stone-200 pb-6">
          <h1 className="text-3xl font-bold text-matte-black uppercase tracking-tighter">
            Monti Partner <span className="text-khaki">Dashboard</span>
          </h1>
          <p className="text-xs uppercase tracking-widest opacity-50 mt-2">6th Year Intelligence</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
              <h2 className="text-xs font-bold uppercase mb-6 opacity-40 tracking-widest">Revenue Drivers</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4 text-sm font-medium">
                    <span>Daily Volume</span>
                    <span className="text-khaki font-bold">{cups} cups</span>
                  </div>
                  <input type="range" min="30" max="300" value={cups} onChange={(e) => setCups(parseInt(e.target.value))} className="w-full accent-khaki cursor-pointer" />
                </div>
                <div>
                  <div className="flex justify-between mb-4 text-sm font-medium">
                    <span>Price (RM)</span>
                    <span className="text-khaki font-bold">RM {price.toFixed(2)}</span>
                  </div>
                  <input type="range" min="8" max="25" step="0.5" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="w-full accent-khaki cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-matte-black text-white p-8 rounded-[2.5rem]">
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">Net Monthly Profit</p>
              <h3 className={`text-5xl font-bold ${monthlyProfit < 0 ? 'text-red-400' : 'text-khaki'}`}>
                RM {Math.round(monthlyProfit).toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
