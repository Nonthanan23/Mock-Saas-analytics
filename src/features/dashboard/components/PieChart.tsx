import { PieChart as RCPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const palette = ["#2a74ff", "#84b7ff", "#123e9a", "#175af2", "#5294ff"];

export function PieChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RCPieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%">
          {data.map((_, i) => (
            <Cell key={i} fill={palette[i % palette.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RCPieChart>
    </ResponsiveContainer>
  );
}