import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const go = (p) => () => onChange(Math.min(Math.max(1, p), totalPages));

  // Generate compact page list (1 ... current-1, current, current+1 ... total)
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) pages.push(i);
  }
  const pageList = [];
  pages.forEach((p, idx) => {
    pageList.push(p);
    if (idx < pages.length - 1 && pages[idx + 1] - p > 1) pageList.push("...");
  });

  return (
    <nav className="mt-6 flex items-center justify-between gap-3" aria-label="Pagination">
      <button
        onClick={go(page - 1)}
        disabled={page === 1}
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed border-gray-200 bg-white hover:bg-gray-50"
      >
        <ChevronLeft size={16} />
        <span>Prev</span>
      </button>
      <ul className="flex items-center gap-1">
        {pageList.map((p, i) => (
          <li key={`${p}-${i}`}>
            {p === "..." ? (
              <span className="px-2 text-gray-400">…</span>
            ) : (
              <button
                onClick={go(p)}
                aria-current={p === page ? "page" : undefined}
                className={`h-9 w-9 rounded-md text-sm font-medium transition border ${
                  p === page
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={go(page + 1)}
        disabled={page === totalPages}
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed border-gray-200 bg-white hover:bg-gray-50"
      >
        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
