import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import Pagination from "./Pagination";
import Reveal from "./Reveal";

const ITEMS_PER_PAGE = 3; // small and mobile-friendly by default

export default function MenuGrid() {
  // Data can grow later; we paginate and lazy-render pages
  const items = [
    {
      type: "whatsapp",
      title: "Chat WhatsApp PTSP",
      description:
        "Hubungi petugas PTSP untuk konsultasi perizinan dan informasi layanan.",
      href: "https://wa.me/6281122233344",
    },
    {
      type: "app",
      title: "Aplikasi Perizinan New Sakpore",
      description:
        "Ajukan dan pantau perizinan Anda secara online melalui New Sakpore.",
      href: "https://sakpore.pekalongankota.go.id/",
    },
    {
      type: "portal",
      title: "Portal DPMPTSP Kota Pekalongan",
      description:
        "Informasi kebijakan, layanan, dan berita DPMPTSP Kota Pekalongan.",
      href: "https://dpmptsp.pekalongankota.go.id/",
    },
  ];

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));

  const pagedItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, page]);

  return (
    <section id="layanan" className="relative py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Akses Layanan Cepat
          </h2>
          <p className="mt-2 text-gray-600">
            Pilih layanan yang Anda butuhkan. Semua tautan adalah layanan resmi
            Pemerintah Kota Pekalongan.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pagedItems.map((item, idx) => (
            <Reveal key={item.title} delay={0.05 * idx}>
              <MenuCard {...item} />
            </Reveal>
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
