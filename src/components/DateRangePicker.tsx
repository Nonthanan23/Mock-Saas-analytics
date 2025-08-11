import dayjs from "dayjs";

type Props = { value: { from: string; to: string }; onChange: (v: { from: string; to: string }) => void };
export function DateRangePicker({ value, onChange }: Props) {
  function set(days: number) {
    const to = dayjs().format("YYYY-MM-DD");
    const from = dayjs().subtract(days, "day").format("YYYY-MM-DD");
    onChange({ from, to });
  }
  return (
    <div className="flex gap-2">
      <button className="rounded-lg border px-3 py-1 text-sm" onClick={() => set(7)}>7d</button>
      <button className="rounded-lg border px-3 py-1 text-sm" onClick={() => set(30)}>30d</button>
      <button className="rounded-lg border px-3 py-1 text-sm" onClick={() => set(90)}>90d</button>
      <div className="text-xs text-zinc-500 self-center">{value.from} → {value.to}</div>
    </div>
  );
}