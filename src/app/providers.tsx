import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { useState } from "react";

export function Providers({ children }: PropsWithChildren) {
  const [client] = useState(() => new QueryClient());
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
}