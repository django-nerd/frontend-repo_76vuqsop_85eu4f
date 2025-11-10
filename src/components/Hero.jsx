import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
              Layanan Resmi • DPMPTSP Kota Pekalongan
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Satu pintu untuk semua layanan perizinan dan informasi
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Akses cepat ke WhatsApp PTSP, aplikasi perizinan New Sakpore, dan portal DPMPTSP Kota Pekalongan. Praktis, transparan, dan mudah diakses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-lg shadow hover:bg-emerald-700 transition"
              >
                Jelajahi Layanan
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 border border-emerald-200 px-4 py-2.5 rounded-lg hover:bg-emerald-50 transition"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-emerald-200 via-white to-emerald-100 border border-emerald-100 shadow-inner" />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-emerald-100 shadow p-3 hidden sm:flex items-center gap-3">
              <ExternalLink size={18} className="text-emerald-600" />
              <span className="text-sm text-gray-700">Akses cepat ke layanan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
