import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import MainlandFormation from './pages/MainlandFormation';
import SharjahFreeZone from './pages/SharjahFreeZone';
import AjmanFreeZone from './pages/AjmanFreeZone';
import RAKFreeZone from './pages/RAKFreeZone';
import UAQFreeZone from './pages/UAQFreeZone';
import DubaiFreeZone from './pages/DubaiFreeZone';
import FujairahFreeZone from './pages/FujairahFreeZone';
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
          <Route path="/dubai-mainland-company-formation" element={<MainlandFormation />} />
          <Route path="/sharjah-free-zone-business-set-up" element={<SharjahFreeZone />} />
          <Route path="/ajman-free-zones-company-formation-uae" element={<AjmanFreeZone />} />
          <Route path="/ras-al-khaimah-free-zone-business-setup" element={<RAKFreeZone />} />
          <Route path="/umm-al-quwain-free-zones-company-formation-uae" element={<UAQFreeZone />} />
          <Route path="/freezone-company-setup-in-dubai" element={<DubaiFreeZone />} />
          <Route path="/business-setup-fujairah-free-zone-uae" element={<FujairahFreeZone />} />
          <Route path="/pro-services-overview-dubai-uae" element={<ProServices />} />
          <Route path="/offshore-company-formation-dubai-overview" element={<OffshoreFormation />} />
          <Route path="/accounting-bookkeeping-services-dubai-uae" element={<AccountingServices />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <FloatingCTA />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;