import { MessageCircle, AppWindow, Globe } from "lucide-react";

const iconMap = {
  whatsapp: MessageCircle,
  app: AppWindow,
  portal: Globe,
};

export default function MenuCard({ type = "app", title, description, href }) {
  const Icon = iconMap[type] || AppWindow;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-xl bg-emerald-600/10 text-emerald-700 grid place-items-center">
          <Icon size={22} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-gray-600 text-sm leading-relaxed">{description}</p>
          )}
          <p className="mt-3 text-sm font-medium text-emerald-700">Buka tautan →</p>
        </div>
      </div>
    </a>
  );
}
