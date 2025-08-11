import { z } from "zod";

export const KpiSchema = z.object({
    label: z.string(),
    value: z.number(),
    delta: z.number().optional(),
});
export type Kpi = z.infer<typeof KpiSchema>;

export const SeriesPointSchema = z.object({ t: z.string(), v: z.number() });
export type SeriesPoint = z.infer<typeof SeriesPointSchema>;

export const DashboardResponseSchema = z.object({
    kpis: z.array(KpiSchema),
    timeseries: z.array(SeriesPointSchema),
    revenueByPlan: z.array(z.object({ name: z.string(), value: z.number() })),
    topCountries: z.array(z.object({ name: z.string(), value: z.number() })),
});
export type DashboardResponse = z.infer<typeof DashboardResponseSchema>;