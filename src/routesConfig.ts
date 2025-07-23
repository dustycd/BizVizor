export interface RouteConfig {
  path: string;
  name: string;
  parent?: string;
}

export const routesConfig: RouteConfig[] = [
  // Home
  { path: '/', name: 'Home' },
  
  // Main Pages
  { path: '/about', name: 'About Us' },
  { path: '/why-choose-us', name: 'Why Choose Us' },
  { path: '/why-dubai-uae', name: 'Why Dubai UAE' },
  { path: '/referral', name: 'Referral Program' },
  { path: '/blog', name: 'Blog' },
  { path: '/careers', name: 'Careers' },
  { path: '/contact', name: 'Contact' },
  { path: '/privacy-policy', name: 'Privacy Policy' },
  { path: '/cost-calculator', name: 'Cost Calculator' },
  { path: '/visa-services', name: 'Visa Services' },
  
  // Mainland Company Formation
  { path: '/dubai-mainland-company-formation', name: 'Dubai Mainland Company Formation' },
  { path: '/accounting-bookkeeping-services-dubai-uae', name: 'Accounting & Bookkeeping Services' },
  { path: '/auditing-firm-dubai', name: 'Auditing Firm Dubai' },
  { path: '/company-liquidation-in-dubai-uae', name: 'Company Liquidation' },
  { path: '/branch-office-of-a-foreign-company-uae', name: 'Branch Office Setup' },
  { path: '/company-registration-dubai', name: 'Company Registration' },
  { path: '/ecommerce-company-setup-dubai-uae', name: 'E-Commerce Company Setup' },
  { path: '/llc-company-formation-dubai-uae', name: 'LLC Company Formation' },
  
  // Free Zone Company Formation
  { path: '/uae-free-zone-company-formation', name: 'UAE Free Zone Company Formation' },
  { path: '/freezone-company-setup-in-dubai', name: 'Dubai Free Zone Company Setup' },
  { path: '/sharjah-free-zone-business-set-up', name: 'Sharjah Free Zone Business Setup' },
  { path: '/ajman-free-zones-company-formation-uae', name: 'Ajman Free Zone Company Formation' },
  { path: '/ras-al-khaimah-free-zone-business-setup', name: 'RAK Free Zone Business Setup' },
  { path: '/umm-al-quwain-free-zones-company-formation-uae', name: 'UAQ Free Zone Company Formation' },
  { path: '/business-setup-fujairah-free-zone-uae', name: 'Fujairah Free Zone Business Setup' },
  
  // PRO Services
  { path: '/pro-services-overview-dubai-uae', name: 'PRO Services Overview' },
  { path: '/ejari-registration-dubai-uae', name: 'Ejari Registration' },
  { path: '/family-residence-dubai-uae', name: 'Family Residence Visa' },
  { path: '/maid-residence-service-dubai-uae', name: 'Maid Residence Service' },
  { path: '/pro-residence-services-dubai-uae', name: 'PRO Residence Services' },
  
  // Offshore Company Formation
  { path: '/offshore-company-formation-dubai-overview', name: 'Offshore Company Formation' },
  { path: '/ajman-offshore-company-formation-dubai-uae', name: 'Ajman Offshore Company Formation' },
  { path: '/jafza-offshore-company-formation-dubai-uae', name: 'JAFZA Offshore Company Formation' },
  { path: '/ras-al-khaimah-offshore-company-formation-dubai-uae', name: 'RAK Offshore Company Formation' }
];

export const getRouteConfig = (path: string): RouteConfig | undefined => {
  return routesConfig.find(route => route.path === path);
};

export const getRouteName = (path: string): string => {
  const config = getRouteConfig(path);
  return config ? config.name : path;
};