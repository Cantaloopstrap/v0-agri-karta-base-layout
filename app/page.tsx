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
    </div>
  )
}
