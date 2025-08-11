import { fmt } from "../../../lib/utils/format";

type Props = { label: string; value: number; delta?: number; suffix?: "currency" | "number" };
export function KpiCard({ label, value, delta, suffix = "number" }: Props) {
  const formatted = suffix === "currency" ? fmt.currency(value) : fmt.number(value);
  const trend = delta === undefined ? null : (
    <span className={`text-xs ${delta >= 0 ? "text-emerald-600" : "text-rose-600"}`}>{fmt.percent(delta)}</span>
  );
  return (
    <div className="card p-4">
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{formatted}</div>
        {trend}
      </div>
    </div>
  );
}