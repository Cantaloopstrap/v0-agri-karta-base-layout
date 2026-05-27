'use client'

import { useState } from 'react'

export default function RegistrasiPengepul() {
  const [namaGudang, setNamaGudang] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    
    if (value.startsWith('62')) {
      setWhatsapp('+' + value)
    } else if (value.startsWith('0')) {
      setWhatsapp('+62' + value.slice(1))
    } else {
      setWhatsapp(value ? '+62' + value : '')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', { namaGudang, whatsapp })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-2xl">
        {/* Registration Card */}
        <div className="border-2 border-foreground bg-background">
          {/* Header */}
          <div className="border-b-2 border-foreground p-8">
            <h1 className="text-3xl font-bold tracking-wider font-mono">
              REGISTRASI PENGEPUL
            </h1>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Input 1: Nama Naungan Gudang */}
            <div className="space-y-3">
              <label
                htmlFor="nama-gudang"
                className="block text-sm font-mono font-medium"
              >
                Nama Naungan Gudang
              </label>
              <input
                id="nama-gudang"
                type="text"
                value={namaGudang}
                onChange={(e) => setNamaGudang(e.target.value)}
                className="w-full border-2 border-foreground bg-background px-4 py-3 font-mono text-base focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Input 2: Nomor WhatsApp */}
            <div className="space-y-3">
              <label
                htmlFor="whatsapp"
                className="block text-sm font-mono font-medium"
              >
                Nomor WhatsApp (+62)
              </label>
              <div className="space-y-1">
                <input
                  id="whatsapp"
                  type="tel"
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  placeholder="+62812..."
                  className="w-full border-2 border-foreground bg-background px-4 py-3 font-mono text-base focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <p className="text-xs text-muted-foreground font-mono">
                  Format otomatis diubah ke +62
                </p>
              </div>
            </div>

            {/* Mapbox Placeholder */}
            <div className="space-y-3">
              <label className="block text-sm font-mono font-medium">
                Lokasi Gudang
              </label>
              <div className="border-2 border-foreground bg-background p-8 flex flex-col items-center justify-center min-h-[200px]">
                <p className="font-mono text-base text-center">
                  Mapbox Placeholder - Koordinat GPS
                </p>
              </div>
              <button
                type="button"
                className="w-full border-2 border-foreground bg-background px-4 py-3 font-mono text-base font-medium hover:bg-foreground hover:text-background transition-colors rounded-sm"
              >
                Tandai Manual di Peta
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border-2 border-accent bg-accent text-accent-foreground px-6 py-4 font-mono text-base font-bold hover:bg-background hover:text-accent transition-colors rounded-sm"
            >
              Lanjut ke Langkah 2
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
