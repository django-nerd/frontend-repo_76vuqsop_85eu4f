import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <section id="layanan" className="relative py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Akses Layanan Cepat</h2>
              <p className="mt-2 text-gray-600">
                Pilih layanan yang Anda butuhkan. Semua tautan adalah layanan resmi Pemerintah Kota Pekalongan.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <MenuCard
                type="whatsapp"
                title="Chat WhatsApp PTSP"
                description="Hubungi petugas PTSP untuk konsultasi perizinan dan informasi layanan."
                href="https://wa.me/6281122233344"
              />
              <MenuCard
                type="app"
                title="Aplikasi Perizinan New Sakpore"
                description="Ajukan dan pantau perizinan Anda secara online melalui New Sakpore."
                href="https://sakpore.pekalongankota.go.id/"
              />
              <MenuCard
                type="portal"
                title="Portal DPMPTSP Kota Pekalongan"
                description="Informasi kebijakan, layanan, dan berita DPMPTSP Kota Pekalongan."
                href="https://dpmptsp.pekalongankota.go.id/"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
