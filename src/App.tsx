import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
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
import FreeZoneOverview from './pages/FreeZoneOverview';
import ProServices from './pages/ProServices';
import OffshoreFormation from './pages/OffshoreFormation';
import AccountingServices from './pages/AccountingServices';
import VisaServices from './pages/VisaServices';
import CostCalculator from './pages/CostCalculator';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import EjariRegistration from './pages/EjariRegistration';
import FamilyResidence from './pages/FamilyResidence';
import MaidResidenceService from './pages/MaidResidenceService';
import ProResidenceServices from './pages/ProResidenceServices';
import AjmanOffshore from './pages/AjmanOffshore';
import JafzaOffshore from './pages/JafzaOffshore';
import RasAlKhaimahOffshore from './pages/RasAlKhaimahOffshore';
import AuditingFirm from './pages/AuditingFirm';
import CompanyLiquidation from './pages/CompanyLiquidation';
import BranchOfficeSetup from './pages/BranchOfficeSetup';
import CompanyRegistration from './pages/CompanyRegistration';
import ECommerceFormation from './pages/ECommerceFormation';
import LLCFormation from './pages/LLCFormation';
import WhyChooseUs from './pages/WhyChooseUs';

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
        <Breadcrumbs />
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
          <Route path="/uae-free-zone-company-formation" element={<FreeZoneOverview />} />
          <Route path="/pro-services-overview-dubai-uae" element={<ProServices />} />
          <Route path="/offshore-company-formation-dubai-overview" element={<OffshoreFormation />} />
          <Route path="/accounting-bookkeeping-services-dubai-uae" element={<AccountingServices />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/ejari-registration-dubai-uae" element={<EjariRegistration />} />
          <Route path="/family-residence-dubai-uae" element={<FamilyResidence />} />
          <Route path="/maid-residence-service-dubai-uae" element={<MaidResidenceService />} />
          <Route path="/pro-residence-services-dubai-uae" element={<ProResidenceServices />} />
          <Route path="/ajman-offshore-company-formation-dubai-uae" element={<AjmanOffshore />} />
          <Route path="/jafza-offshore-company-formation-dubai-uae" element={<JafzaOffshore />} />
          <Route path="/ras-al-khaimah-offshore-company-formation-dubai-uae" element={<RasAlKhaimahOffshore />} />
          <Route path="/auditing-firm-dubai" element={<AuditingFirm />} />
          <Route path="/company-liquidation-in-dubai-uae" element={<CompanyLiquidation />} />
          <Route path="/branch-office-of-a-foreign-company-uae" element={<BranchOfficeSetup />} />
          <Route path="/company-registration-dubai" element={<CompanyRegistration />} />
          <Route path="/ecommerce-company-setup-dubai-uae" element={<ECommerceFormation />} />
          <Route path="/llc-company-formation-dubai-uae" element={<LLCFormation />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
        </Routes>
        <Footer />
        <FloatingCTA />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;