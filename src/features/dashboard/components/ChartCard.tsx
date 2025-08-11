import type { PropsWithChildren } from "react";

export function ChartCard({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-600">{title}</h3>
      </div>
      <div className="h-72">{children}</div>
    </section>
  );
}