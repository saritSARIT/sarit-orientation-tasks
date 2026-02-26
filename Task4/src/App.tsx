import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "@components/Router/Router";
import type { FC } from "react";

const queryClient = new QueryClient();
//
// eslint-disable-next-line arrow-body-style
const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
