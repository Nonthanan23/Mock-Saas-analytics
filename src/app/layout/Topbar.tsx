export function Topbar() {
  return (
    <header className="flex items-center justify-between gap-3 border-b bg-white/70 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-zinc-900/70 dark:border-white/10">
      <div className="flex items-center gap-3">
        <input
          placeholder="Search…"
          className="w-64 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 dark:bg-zinc-950"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full border bg-white px-3 py-1 text-sm shadow-sm dark:bg-zinc-950">Sign in</button>
      </div>
    </header>
  );
}