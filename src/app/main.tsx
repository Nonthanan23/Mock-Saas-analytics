import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { AppRouter } from "./router";

async function bootstrap() {
  if (import.meta.env.DEV) {
    const m = await import("../lib/api/mock");
    m.installMockApi();
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

bootstrap();
