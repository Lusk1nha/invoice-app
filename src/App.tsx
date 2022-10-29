import { Home } from "./pages/Home";
import { Navbar } from './pages/Navbar/index';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";

export default function App() {
  return (
    <div className="bg-ghostWhite dark:bg-eerieBlack w-screen h-screen flex flex-col lg:flex-row transition duration-200">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
};
