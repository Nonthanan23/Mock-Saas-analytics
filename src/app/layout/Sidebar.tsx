import { NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Dashboard" },
  { to: "/users", label: "Users" },
  { to: "/billing", label: "Billing" },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-dvh border-r bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-zinc-900/70 dark:border-white/10">
      <div className="p-4">
        <div className="text-xl font-semibold">SaaSlytics</div>
      </div>
      <nav className="space-y-1 p-2">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) =>
              `block rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive ? "bg-brand-100 text-brand-800" : "hover:bg-zinc-100 dark:hover:bg-white/5"
              }`
            }
            end
          >
            {n.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}