import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import MainlandFormation from './pages/MainlandFormation';
import FreeZoneSetup from './pages/FreeZoneSetup';
import ProServices from './pages/ProServices';
import OffshoreFormation from './pages/OffshoreFormation';
import AccountingServices from './pages/AccountingServices';
import VisaServices from './pages/VisaServices';
import CostCalculator from './pages/CostCalculator';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/mainland-formation" element={<MainlandFormation />} />
          <Route path="/freezone-setup" element={<FreeZoneSetup />} />
          <Route path="/pro-services" element={<ProServices />} />
          <Route path="/offshore-formation" element={<OffshoreFormation />} />
          <Route path="/accounting-services" element={<AccountingServices />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;