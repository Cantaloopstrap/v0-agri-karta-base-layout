export default function Page() {
  return (
    <div className="min-h-screen bg-background font-mono">
      {/* NAVBAR */}
      <nav className="border-b-2 border-foreground bg-background shadow-none">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo - Kiri */}
          <div className="text-2xl font-bold tracking-widest uppercase text-foreground">
            AGRI-KARTA
          </div>

          {/* Menu - Kanan */}
          <div className="flex items-center gap-0">
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Beranda
            </a>
            <div className="w-px h-6 bg-foreground"></div>
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Dashboard Pengepul
            </a>
            <div className="w-px h-6 bg-foreground"></div>
            <a
              href="#"
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Login Admin
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-background p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="border-2 border-foreground rounded-none p-12">
            <h1 className="text-5xl font-bold uppercase tracking-widest text-foreground leading-tight">
              Data-Driven
            </h1>
            <h2 className="text-5xl font-bold uppercase tracking-widest text-foreground leading-tight">
              Agriculture for All
            </h2>
          </div>

          {/* Deskripsi */}
          <p className="text-lg font-medium uppercase tracking-wide text-foreground max-w-2xl leading-relaxed">
            Platform pertanian berbasis data yang menghubungkan petani, pengepul, dan pasar.
          </p>

          {/* CTA Button */}
          <div>
            <button
              className="px-8 py-4 bg-accent text-foreground font-bold uppercase tracking-wide text-sm rounded-sm hover:bg-foreground hover:text-accent transition-colors border-none"
            >
              Mulai Setor Hasil Bumi
            </button>
          </div>
        </div>
      </section>

      {/* REAL-TIME FACTORY STOCK SECTION */}
      <section className="bg-background p-12 gap-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="border-2 border-foreground rounded-none p-8">
            <h3 className="text-3xl font-bold uppercase tracking-widest text-foreground mb-8">
              Real-Time Factory Stock
            </h3>

            {/* Stock Grid */}
            <div className="space-y-8">
              {/* Beras - 80% */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold uppercase tracking-wide text-foreground">
                    Beras
                  </span>
                  <span className="text-lg font-semibold uppercase tracking-wide text-foreground">
                    80%
                  </span>
                </div>
                <div className="border-2 border-foreground rounded-none bg-background p-1">
                  <div
                    className="h-6 bg-accent transition-all"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>

              {/* Cabai Merah - 30% */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold uppercase tracking-wide text-foreground">
                    Cabai Merah
                  </span>
                  <span className="text-lg font-semibold uppercase tracking-wide text-foreground">
                    30%
                  </span>
                </div>
                <div className="border-2 border-foreground rounded-none bg-background p-1">
                  <div
                    className="h-6 bg-destructive transition-all"
                    style={{ width: '30%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE & 7-DAY PREDICTION SECTION */}
      <section className="bg-background p-12 gap-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="border-2 border-foreground rounded-none p-8">
            <h3 className="text-3xl font-bold uppercase tracking-widest text-foreground mb-8">
              Price & 7-Day Prediction
            </h3>

            {/* SVG Chart */}
            <div className="border-2 border-foreground rounded-none bg-background p-8">
              <svg
                viewBox="0 0 600 300"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid lines */}
                <line x1="50" y1="250" x2="550" y2="250" stroke="#1c1917" strokeWidth="2" />
                <line x1="50" y1="50" x2="50" y2="250" stroke="#1c1917" strokeWidth="2" />

                {/* Y-axis labels */}
                <text x="20" y="260" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  0K
                </text>
                <text x="15" y="160" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  50K
                </text>
                <text x="10" y="60" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  100K
                </text>

                {/* X-axis labels */}
                <text x="50" y="280" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  D1
                </text>
                <text x="150" y="280" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  D2
                </text>
                <text x="250" y="280" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  D3
                </text>
                <text x="350" y="280" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  D4
                </text>
                <text x="450" y="280" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  D5
                </text>
                <text x="540" y="280" fontSize="12" fill="#1c1917" fontFamily="monospace" fontWeight="bold">
                  D6
                </text>

                {/* Moving average zigzag line (ascending) */}
                <polyline
                  points="50,220 100,200 150,180 200,160 250,140 300,130 350,120 400,100 450,90 500,70 550,50"
                  fill="none"
                  stroke="#4d7c0f"
                  strokeWidth="3"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />

                {/* Data points */}
                <circle cx="50" cy="220" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="100" cy="200" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="150" cy="180" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="200" cy="160" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="250" cy="140" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="300" cy="130" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="350" cy="120" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="400" cy="100" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="450" cy="90" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="500" cy="70" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
                <circle cx="550" cy="50" r="4" fill="#4d7c0f" stroke="#1c1917" strokeWidth="2" />
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-accent rounded-none"></div>
                <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  7-Day Moving Average
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE LOGISTICS FEED SECTION */}
      <section className="bg-background p-12 gap-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="border-2 border-foreground rounded-none p-8">
            <h3 className="text-3xl font-bold uppercase tracking-widest text-foreground mb-8">
              Live Logistics Feed
            </h3>

            {/* Feed List */}
            <div className="divide-y-2 divide-foreground">
              {/* Item 1 */}
              <div className="py-6">
                <p className="text-base font-medium uppercase tracking-wide text-foreground">
                  14:02 - Pengepul Zona 3 mengirimkan 250kg Beras
                </p>
              </div>

              {/* Item 2 */}
              <div className="py-6">
                <p className="text-base font-medium uppercase tracking-wide text-foreground">
                  13:45 - Pengepul Zona 1 mengirimkan 50kg Jagung
                </p>
              </div>

              {/* Item 3 */}
              <div className="py-6">
                <p className="text-base font-medium uppercase tracking-wide text-foreground">
                  13:12 - Pengepul Zona 2 mengirimkan 180kg Cabai Merah
                </p>
              </div>

              {/* Item 4 */}
              <div className="py-6">
                <p className="text-base font-medium uppercase tracking-wide text-foreground">
                  12:38 - Pengepul Zona 4 mengirimkan 320kg Padi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B COLLABORATION SECTION */}
      <section className="bg-background p-12 gap-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="border-2 border-foreground rounded-none bg-foreground p-12">
            <h3 className="text-3xl font-bold uppercase tracking-widest text-background mb-6">
              B2B Collaboration
            </h3>

            <p className="text-lg font-semibold uppercase tracking-wide text-background mb-8">
              Pusat Logistik Jawa
            </p>

            <button
              className="px-8 py-4 bg-accent text-foreground font-bold uppercase tracking-wide text-sm rounded-sm hover:bg-background hover:text-accent hover:border-2 hover:border-foreground transition-colors border-none"
            >
              Hubungi Kolaborasi Kemitraan
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
