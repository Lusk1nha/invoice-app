import { Home } from "./pages/Home";
import { Navbar } from './pages/Navbar/index';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";

import { ModalProvider } from "./context/ModalProvider";
import { FormRender } from "./components/Forms";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="bg-ghostWhite-600 dark:bg-eerieBlack w-screen h-screen flex grow flex-col lg:flex-row transition duration-200">
        <ModalProvider>
          <Navbar />

          <Router>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/new" element={<FormRender type={"NewInvoice"} />} />
            </Routes>
          </Router>
        </ModalProvider>
      </section>
    </QueryClientProvider>
  )
};
