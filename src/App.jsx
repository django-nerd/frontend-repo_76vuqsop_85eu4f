import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipToContent from "./components/SkipToContent";
import LiteHero from "./components/LiteHero";

// Lazy-load grid section for performance on mobile
const MenuGrid = lazy(() => import("./components/MenuGrid"));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SkipToContent />
      <Header />
      <main id="main">
        <LiteHero />
        <Suspense
          fallback={
            <section className="py-10 sm:py-14">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="h-6 w-56 bg-emerald-100 rounded animate-pulse" />
                <div className="mt-2 h-4 w-80 bg-emerald-50 rounded animate-pulse" />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-28 rounded-2xl border border-gray-200 bg-white shadow-sm p-5"
                    >
                      <div className="h-4 w-40 bg-gray-100 rounded animate-pulse" />
                      <div className="mt-3 h-3 w-56 bg-gray-100 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <MenuGrid />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
