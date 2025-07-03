import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${theme}`}>
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-black rounded shadow"
        >
          Dark mode
        </button>
      </div>
    </Router>
  );
}
