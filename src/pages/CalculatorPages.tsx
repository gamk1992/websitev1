<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MK Business Simulation | Monti Keopi</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;1,600&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #FDFCFB; color: #2D2D2D; }
        .serif { font-family: 'Playfair Display', serif; }
        .bg-sand { background-color: #F4F1EE; }
        .text-oak { color: #634832; }
        .bg-oak { background-color: #634832; }
        input[type=range] { -webkit-appearance: none; background: #E5E1DD; height: 4px; border-radius: 2px; }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 20px; width: 20px; border-radius: 50%;
            background: #634832; cursor: pointer; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-blur { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(99, 72, 50, 0.1); }
    </style>
</head>
<body class="p-4 md:p-8">

    <nav class="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div>
            <h1 class="serif text-2xl text-oak italic">Monti Keopi</h1>
            <p class="text-[10px] tracking-widest uppercase opacity-50">Growth Intelligence Tool</p>
        </div>
        <div class="flex items-center gap-4">
            <span class="text-[11px] px-3 py-1 border border-oak/20 rounded-full text-oak/60">Partner Access</span>
            <button onclick="window.location.href='/partner/login.html'" class="text-xs underline opacity-50 hover:opacity-100">Sign Out</button>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-5 space-y-6">
            <section class="card-blur p-6 rounded-2xl">
                <h2 class="text-xs font-semibold uppercase tracking-widest mb-6 opacity-40">Revenue Drivers</h2>
                <div class="space-y-8">
                    <div>
                        <div class="flex justify-between mb-2"><label class="text-sm font-medium">Daily Cups</label><span class="text-oak font-semibold" id="val-cups">90</span></div>
                        <input type="range" id="in-cups" min="30" max="300" value="90" class="w-full" oninput="calculate()">
                    </div>
                    <div>
                        <div class="flex justify-between mb-2"><label class="text-sm font-medium">Price/Cup (RM)</label><span class="text-oak font-semibold" id="val-price">15.00</span></div>
                        <input type="range" id="in-price" min="8" max="25" step="0.5" value="15" class="w-full" oninput="calculate()">
                    </div>
                </div>
            </section>

            <section class="card-blur p-6 rounded-2xl">
                <h2 class="text-xs font-semibold uppercase tracking-widest mb-6 opacity-40">Operational Costs</h2>
                <div class="space-y-4">
                    <div class="flex justify-between items-center text-sm"><label>Rent (RM)</label><input type="number" id="in-rent" value="2500" class="bg-sand rounded px-2 py-1 w-20 text-right" oninput="calculate()"></div>
                    <div class="flex justify-between items-center text-sm"><label>Labor (RM)</label><input type="number" id="in-labor" value="3500" class="bg-sand rounded px-2 py-1 w-20 text-right" oninput="calculate()"></div>
                </div>
            </section>
        </div>

        <div class="lg:col-span-7 space-y-6">
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-oak text-white p-8 rounded-3xl col-span-2">
                    <p class="text-[10px] uppercase tracking-widest opacity-60 mb-2">Monthly Net Profit</p>
                    <h3 class="serif text-5xl mb-4" id="res-profit">RM 0,000</h3>
                </div>
                <div class="bg-sand p-6 rounded-3xl">
                    <p class="text-[10px] uppercase tracking-widest text-oak/60 mb-1">Net Margin</p>
                    <h3 class="serif text-3xl text-oak" id="res-margin">0%</h3>
                </div>
                <div class="bg-sand p-6 rounded-3xl">
                    <p class="text-[10px] uppercase tracking-widest text-oak/60 mb-1">Break-Even</p>
                    <h3 class="serif text-3xl text-oak" id="res-be">0</h3>
                    <p class="text-[10px] opacity-40">cups/day</p>
                </div>
            </div>

            <div class="bg-white border border-oak/10 p-6 rounded-2xl flex items-center justify-between">
                <div><h4 class="text-sm font-semibold">Setup Cost Recovery</h4><p class="text-xs opacity-50">Based on RM 85k investment</p></div>
                <div class="text-right"><span class="serif text-2xl text-oak" id="res-payback">0.0</span><span class="text-[10px] opacity-50 ml-1">Months</span></div>
            </div>
        </div>
    </main>

    <script>
        function calculate() {
            const cups = parseFloat(document.getElementById('in-cups').value);
            const price = parseFloat(document.getElementById('in-price').value);
            const rent = parseFloat(document.getElementById('in-rent').value);
            const labor = parseFloat(document.getElementById('in-labor').value);
            const days = 26; // Standard operating days
            const cogsPct = 0.35; 
            const royaltyPct = 0.05;

            document.getElementById('val-cups').innerText = cups;
            document.getElementById('val-price').innerText = price.toFixed(2);

            const monthlyRev = cups * price * days;
            const totalCOGS = monthlyRev * cogsPct;
            const totalRoyalty = monthlyRev * royaltyPct;
            const monthlyProfit = monthlyRev - (rent + labor + totalCOGS + totalRoyalty);
            const margin = (monthlyProfit / monthlyRev) * 100;
            const beCups = Math.ceil((rent + labor) / (price * (1 - cogsPct - royaltyPct) * days));
            const payback = monthlyProfit > 0 ? (85000 / monthlyProfit).toFixed(1) : "∞";

            document.getElementById('res-profit').innerText = `RM ${Math.round(monthlyProfit).toLocaleString()}`;
            document.getElementById('res-margin').innerText = `${Math.round(margin)}%`;
            document.getElementById('res-be').innerText = beCups;
            document.getElementById('res-payback').innerText = payback;
        }
        window.onload = calculate;
    </script>
</body>
</html>
