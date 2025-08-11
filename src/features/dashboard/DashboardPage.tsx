import { useEffect, useState } from "react";
import { DateRangePicker } from "../../components/DateRangePicker";
import { useDashboard } from "../../lib/api/hooks";
import { KpiCard } from "./components/KpiCard";
import { ChartCard } from "./components/ChartCard";
import { TimeseriesChart } from "./components/TimeseriesChart";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";

export function DashboardPage() {
  const [range, setRange] = useState(() => {
    const to = new Date().toISOString().slice(0, 10);
    const from = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
    return { from, to };
  });
  const { data, isLoading, isError } = useDashboard(range);

  useEffect(() => {
    if (import.meta.env.DEV) {
      import("../../lib/api/mock").then(m => m.installMockApi());
    }
  }, []);

  if (isLoading) return <div>Loading…</div>;
  if (isError || !data) return <div>Something went wrong.</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <DateRangePicker value={range} onChange={setRange} />
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="MRR" value={data.kpis[0].value} delta={data.kpis[0].delta} suffix="currency" />
        <KpiCard label="Active Users" value={data.kpis[1].value} delta={data.kpis[1].delta} />
        <KpiCard label="ARPU" value={data.kpis[2].value} delta={data.kpis[2].delta} />
        <KpiCard label="Churn" value={data.kpis[3].value} delta={data.kpis[3].delta} />
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <ChartCard title="Daily Active Users">
          <TimeseriesChart data={data.timeseries} />
        </ChartCard>
        <ChartCard title="Revenue by Plan">
          <BarChart data={data.revenueByPlan} />
        </ChartCard>
        <ChartCard title="Top Countries (%)">
          <PieChart data={data.topCountries} />
        </ChartCard>
      </section>
    </div>
  );
}