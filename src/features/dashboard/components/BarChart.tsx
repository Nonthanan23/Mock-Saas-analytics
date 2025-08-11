import { BarChart as RCBarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export function BarChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RCBarChart data={data} margin={{ left: 12, right: 12, top: 12, bottom: 12 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="value" radius={[8, 8, 0, 0]} />
      </RCBarChart>
    </ResponsiveContainer>
  );
}