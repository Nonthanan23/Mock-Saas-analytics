import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <div className="grid grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex min-h-dvh flex-col">
          <Topbar />
          <main className="mx-auto w-full max-w-7xl flex-1 p-6 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}