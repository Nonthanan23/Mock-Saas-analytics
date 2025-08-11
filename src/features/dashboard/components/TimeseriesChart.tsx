import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { SeriesPoint } from "../../../lib/types/analytics";

export function TimeseriesChart({ data }: { data: SeriesPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ left: 12, right: 12, top: 12, bottom: 12 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="t" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Line type="monotone" dataKey="v" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}