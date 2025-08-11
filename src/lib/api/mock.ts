export function installMockApi() {
  const realFetch = window.fetch;

  window.fetch = (async (...args: Parameters<typeof fetch>) => {
    const [input, init] = args;
    const url = input instanceof Request ? input.url : input instanceof URL ? input.href : String(input);

    if (url.includes("/api/dashboard")) {
      const days = 30;
      const today = new Date();

      // Schema expects { t: string; v: number }
      const timeseries = Array.from({ length: days }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() - (days - 1 - i));
        return { t: d.toISOString().slice(0, 10), v: Math.round(500 + Math.random() * 300) };
      });

      // Schema expects { label, value, delta? }
      const kpis = [
        { label: "MRR",           value: 32800, delta: 5.2 },
        { label: "Active Users",  value: 18420, delta: 2.1 },
        { label: "ARPU",          value: 17.8,  delta: -0.6 },
        { label: "Churn",         value: 2.4,   delta: -0.3 },
      ];

      const revenueByPlan = [
        { name: "Free",       value: 4200 },
        { name: "Pro",        value: 9800 },
        { name: "Team",       value: 14200 },
        { name: "Enterprise", value: 4600 },
      ];

      const topCountries = [
        { name: "US", value: 52 },
        { name: "DE", value: 14 },
        { name: "IN", value: 11 },
        { name: "GB", value: 9 },
        { name: "BR", value: 7 },
      ];

      return new Response(
        JSON.stringify({ kpis, timeseries, revenueByPlan, topCountries }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return realFetch(input as any, init);
  }) as typeof fetch;
}
