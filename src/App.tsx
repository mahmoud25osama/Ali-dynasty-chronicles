import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import LandingPage from "./pages/LandingPage";
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import Family from "./pages/Family";
import NotFound from "./pages/NotFound";
import { Layout } from "./pages/Layout";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <LandingPage /> },
      { path: '/landing', element: <LandingPage /> },
      { path: '/biography', element: <Biography /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/timeline', element: <Timeline /> },
      { path: '/family', element: <Family /> },
      // {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      { path: '*', element: <NotFound /> },
    ]
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
          <ScrollToTopButton />
          <RouterProvider router={router}/>
  </QueryClientProvider>
);

export default App;
