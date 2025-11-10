import Reveal from "./Reveal";

export default function LiteHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
            Layanan Resmi • DPMPTSP Kota Pekalongan
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Satu pintu untuk semua layanan perizinan dan informasi
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed">
            Akses cepat ke WhatsApp PTSP, aplikasi perizinan New Sakpore, dan portal DPMPTSP Kota Pekalongan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
