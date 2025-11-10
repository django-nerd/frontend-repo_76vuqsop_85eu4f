export default function Footer() {
  return (
    <footer id="kontak" className="mt-20 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} DPMPTSP Kota Pekalongan. Semua hak dilindungi.</p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-gray-600">
            Alamat: Jl. Majapahit No. 1, Kota Pekalongan • Email: dpmptsp@pekalongankota.go.id
          </p>
        </div>
      </div>
    </footer>
  );
}
