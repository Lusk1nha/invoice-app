import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";

import { Home, Navbar, Invoice } from "./pages";

import { ModalProvider } from "./context/components/ModalProvider";
import { FormRender } from "./components/Forms";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="bg-ghostWhite-600 dark:bg-eerieBlack w-screen min-h-screen flex grow flex-col lg:flex-row transition-colors duration-200">
        <ModalProvider>
          <Navbar />

          <Router>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/invoice/:code" index element={<Invoice />} />
              <Route path="/new" element={<FormRender type="NewInvoice" />} />
            </Routes>
          </Router>
        </ModalProvider>
      </section>
    </QueryClientProvider>
  )
};
