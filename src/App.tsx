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

  return (
 const SpecialPortal = () => {
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
       {/* ... (The rest of the UI code I provided earlier) ... */}
    </div>
  );
};
