import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingCTA from "./components/shared/FloatingCTA";
import ScrollToTop from "./components/shared/ScrollToTop";
import CookieConsent from "./components/shared/CookieConsent";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceTransaction from "./pages/services/ServiceTransaction";
import ServiceRenovation from "./pages/services/ServiceRenovation";
import ServiceGestion from "./pages/services/ServiceGestion";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Tools from "./pages/properties/Tools";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotices from "./pages/LegalNotices";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/transaction"
              element={<ServiceTransaction />}
            />
            <Route
              path="/services/renovation"
              element={<ServiceRenovation />}
            />
            <Route path="/services/gestion" element={<ServiceGestion />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/projets/:id" element={<ProjectDetails />} />
            <Route path="/biens" element={<Properties />} />
            <Route path="/biens/:id" element={<PropertyDetails />} />
            <Route path="/biens/outils" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/politique-confidentialite"
              element={<PrivacyPolicy />}
            />
            <Route path="/mentions-legales" element={<LegalNotices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
