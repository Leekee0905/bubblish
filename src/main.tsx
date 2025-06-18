import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./shared/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "./components/atoms/loading/Loading.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>
);
