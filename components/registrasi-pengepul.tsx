'use client'

import { useState } from 'react'

export default function RegistrasiPengepul() {
  const [step, setStep] = useState(2)
  const [namaGudang, setNamaGudang] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [pin, setPin] = useState(['', '', '', '', '', ''])

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

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return
    if (!/^\d*$/.test(value)) return
    
    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`pin-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handlePinKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Step 1 submitted:', { namaGudang, whatsapp })
    setStep(2)
  }

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault()
    const pinCode = pin.join('')
    console.log('[v0] Step 2 submitted:', { pin: pinCode })
  }

  if (step === 1) {
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
            <form onSubmit={handleStep1Submit} className="p-8 space-y-8">
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

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-2xl">
        {/* Registration Card - Step 2 */}
        <div className="border-2 border-foreground bg-background">
          {/* Header */}
          <div className="border-b-2 border-foreground p-8">
            <h1 className="text-3xl font-bold tracking-wider font-mono">
              BUAT PIN KEAMANAN 6-DIGIT
            </h1>
          </div>

          {/* Form Content */}
          <form onSubmit={handleStep2Submit} className="p-8 space-y-8">
            {/* Alert Warning */}
            <div className="border-2 border-[#a85644] bg-[#d97059] text-white p-6 font-mono text-sm leading-relaxed">
              PIN ini adalah kunci masuk utama Anda pengganti SMS OTP. Harap catat dengan baik.
            </div>

            {/* PIN Input Boxes */}
            <div className="space-y-4">
              <label className="block text-sm font-mono font-medium">
                PIN Keamanan
              </label>
              <div className="flex gap-3 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={pin[index]}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    onKeyDown={(e) => handlePinKeyDown(index, e)}
                    className="w-16 h-16 border-2 border-foreground bg-background text-center text-2xl font-mono font-bold focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border-2 border-accent bg-accent text-accent-foreground px-6 py-4 font-mono text-base font-bold hover:bg-background hover:text-accent transition-colors rounded-sm"
            >
              Selesaikan Pendaftaran
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
