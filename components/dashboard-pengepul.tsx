'use client'

export default function DashboardPengepul() {
  return (
    <main className="min-h-screen bg-background p-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Panel Status Pengepul */}
        <div className="border-2 border-foreground bg-background">
          {/* Three-Column Layout with Vertical Dividers */}
          <div className="flex items-stretch divide-x-2 divide-foreground">
            {/* Left Section */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <p className="text-sm font-medium tracking-wide text-muted-foreground mb-2">
                GUDANG
              </p>
              <h2 className="text-2xl font-bold tracking-wider text-foreground">
                Gudang Berkah Tani
              </h2>
              <p className="text-sm font-medium tracking-wide text-muted-foreground mt-3">
                ZONA 3
              </p>
            </div>

            {/* Center Section */}
            <div className="flex-1 p-8 flex flex-col justify-center items-center">
              {/* Level Badge */}
              <div className="border-2 border-foreground bg-background px-6 py-3 mb-4">
                <p className="text-sm font-bold tracking-widest text-foreground">
                  LEVEL JUNIOR
                </p>
              </div>

              {/* Fast-Track Status Tag */}
              <div className="border-2 border-[#991B1B] bg-[#d97059] text-white px-4 py-2">
                <p className="text-xs font-bold tracking-wide">
                  Fast-Track Aktif: 18 Hari Lagi
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 p-8 flex flex-col justify-center items-end">
              <p className="text-xs font-medium tracking-wide text-muted-foreground mb-3">
                MARGIN SUBSIDI
              </p>
              <h3 className="text-3xl font-bold tracking-wider text-accent">
                Rp 450.000
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
