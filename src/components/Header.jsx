import { Building2, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white grid place-items-center shadow-sm">
            <Building2 size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold">Kota Pekalongan</p>
            <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">PTSP — Pelayanan Terpadu Satu Pintu</h1>
          </div>
        </div>
        <a
          href="#kontak"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700 hover:bg-emerald-100 transition"
        >
          <Phone size={18} />
          <span className="font-medium text-sm">Kontak</span>
        </a>
      </div>
    </header>
  );
}
