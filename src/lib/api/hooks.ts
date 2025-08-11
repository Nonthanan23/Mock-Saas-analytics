import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";
import { DashboardResponseSchema } from "../types/analytics";
import type { DashboardResponse } from "../types/analytics";

export function useDashboard(range: { from: string; to: string }) {
  return useQuery<DashboardResponse>({
    queryKey: ["dashboard", range],
    queryFn: async () => {
      const params = new URLSearchParams(range as Record<string, string>).toString();
      const res = await fetch(`/api/dashboard?${params}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return DashboardResponseSchema.parse(data);
    },
  });
}