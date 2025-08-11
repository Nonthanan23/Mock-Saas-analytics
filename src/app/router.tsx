import { Route, Routes, Navigate } from "react-router-dom";
import { Providers } from "./providers";
import { AppLayout } from "./layout/AppLayout";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { BillingPage } from "../features/billing/BillingPage";
import { UsersPage } from "../features/users/UsersPage";

export function AppRouter() {
  return (
    <Providers>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Providers>
  );
}