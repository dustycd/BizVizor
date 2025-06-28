import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle, ArrowRight, Info, DollarSign, FileText, Users, Building2 } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

interface CalculatorState {
  businessType: string;
  jurisdiction: string;
  activities: string[];
  visaCount: number;
  officeType: string;
  additionalServices: string[];
  packageType: string;
}

interface CostBreakdown {
  governmentFees: number;
  serviceFees: number;
  visaFees: number;
  officeFees: number;
  additionalFees: number;
  total: number;
}

const CostCalculator = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  
  const [calculatorData, setCalculatorData] = useState<CalculatorState>({
    businessType: '',
    jurisdiction: '',
    activities: [],
    visaCount: 1,
    officeType: '',
    additionalServices: [],
    packageType: 'standard'
  });

  const [costBreakdown, setCostBreakdown] = useState<CostBreakdown>({
    governmentFees: 0,
    serviceFees: 0,
    visaFees: 0,
    officeFees: 0,
    additionalFees: 0,
    total: 0
  });

  const [showBreakdown, setShowBreakdown] = useState(false);

  const businessTypes = [
    { id: 'llc', name: 'Limited Liability Company (LLC)', description: 'Most popular choice for mainland business' },
    { id: 'freezone', name: 'Free Zone Company', description: '100% foreign ownership with tax benefits' },
    { id: 'offshore', name: 'Offshore Company', description: 'Asset protection and international business' },
    { id: 'branch', name: 'Branch Office', description: 'Extension of foreign company' }
  ];

  const jurisdictions = {
    llc: [
      { id: 'dubai-mainland', name: 'Dubai Mainland', baseFee: 15000 },
      { id: 'abu-dhabi', name: 'Abu Dhabi', baseFee: 14000 },
      { id: 'sharjah', name: 'Sharjah', baseFee: 12000 }
    ],
    freezone: [
      { id: 'dubai-south', name: 'Dubai South Free Zone', baseFee: 18000 },
      { id: 'sharjah-fz', name: 'Sharjah Free Zone', baseFee: 12000 },
      { id: 'ajman-fz', name: 'Ajman Free Zone', baseFee: 10000 },
      { id: 'rak-fz', name: 'RAK Free Zone', baseFee: 11000 },
      { id: 'fujairah-fz', name: 'Fujairah Free Zone', baseFee: 13000 }
    ],
    offshore: [
      { id: 'ajman-offshore', name: 'Ajman Offshore', baseFee: 8000 },
      { id: 'jafza-offshore', name: 'Jafza Offshore', baseFee: 12000 },
      { id: 'rak-offshore', name: 'RAK Offshore', baseFee: 10000 }
    ],
    branch: [
      { id: 'dubai-branch', name: 'Dubai Branch Office', baseFee: 20000 },
      { id: 'abu-dhabi-branch', name: 'Abu Dhabi Branch Office', baseFee: 18000 }
    ]
  };

  const businessActivities = [
    { id: 'trading', name: 'General Trading', fee: 0 },
    { id: 'consulting', name: 'Business Consulting', fee: 0 },
    { id: 'it-services', name: 'IT Services', fee: 1000 },
    { id: 'manufacturing', name: 'Manufacturing', fee: 2000 },
    { id: 'real-estate', name: 'Real Estate', fee: 1500 },
    { id: 'food-beverage', name: 'Food & Beverage', fee: 2500 },
    { id: 'healthcare', name: 'Healthcare Services', fee: 3000 },
    { id: 'education', name: 'Education Services', fee: 2000 }
  ];

  const officeOptions = [
    { id: 'flexi-desk', name: 'Flexi Desk', fee: 3000, description: 'Shared workspace solution' },
    { id: 'dedicated-desk', name: 'Dedicated Desk', fee: 6000, description: 'Your own desk in shared office' },
    { id: 'private-office', name: 'Private Office', fee: 12000, description: 'Fully private office space' },
    { id: 'virtual-office', name: 'Virtual Office', fee: 2000, description: 'Business address only' }
  ];

  const additionalServices = [
    { id: 'bank-assistance', name: 'Bank Account Opening Assistance', fee: 2500 },
    { id: 'vat-registration', name: 'VAT Registration', fee: 1500 },
    { id: 'trademark', name: 'Trademark Registration', fee: 3500 },
    { id: 'website-development', name: 'Website Development', fee: 5000 },
    { id: 'accounting-setup', name: 'Accounting Software Setup', fee: 2000 },
    { id: 'legal-consultation', name: 'Legal Consultation Package', fee: 3000 }
  ];

  const packageTypes = [
    { id: 'basic', name: 'Basic Package', multiplier: 1, description: 'Essential services only' },
    { id: 'standard', name: 'Standard Package', multiplier: 1.2, description: 'Most popular choice' },
    { id: 'premium', name: 'Premium Package', multiplier: 1.5, description: 'Comprehensive support' }
  ];

  const calculateCosts = () => {
    let governmentFees = 0;
    let serviceFees = 0;
    let visaFees = calculatorData.visaCount * 3500; // AED 3,500 per visa
    let officeFees = 0;
    let additionalFees = 0;

    // Get base fees from jurisdiction
    const selectedJurisdictions = jurisdictions[calculatorData.businessType as keyof typeof jurisdictions] || [];
    const selectedJurisdiction = selectedJurisdictions.find(j => j.id === calculatorData.jurisdiction);
    
    if (selectedJurisdiction) {
      governmentFees = selectedJurisdiction.baseFee * 0.4; // 40% government fees
      serviceFees = selectedJurisdiction.baseFee * 0.6; // 60% service fees
    }

    // Add activity fees
    calculatorData.activities.forEach(activityId => {
      const activity = businessActivities.find(a => a.id === activityId);
      if (activity) {
        additionalFees += activity.fee;
      }
    });

    // Add office fees
    const selectedOffice = officeOptions.find(o => o.id === calculatorData.officeType);
    if (selectedOffice) {
      officeFees = selectedOffice.fee;
    }

    // Add additional services
    calculatorData.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        additionalFees += service.fee;
      }
    });

    // Apply package multiplier
    const packageMultiplier = packageTypes.find(p => p.id === calculatorData.packageType)?.multiplier || 1;
    serviceFees *= packageMultiplier;

    const total = governmentFees + serviceFees + visaFees + officeFees + additionalFees;

    setCostBreakdown({
      governmentFees,
      serviceFees,
      visaFees,
      officeFees,
      additionalFees,
      total
    });

    setShowBreakdown(total > 0);
  };

  useEffect(() => {
    calculateCosts();
  }, [calculatorData]);

  const handleBusinessTypeChange = (type: string) => {
    setCalculatorData(prev => ({
      ...prev,
      businessType: type,
      jurisdiction: '',
      activities: []
    }));
  };

  const handleActivityToggle = (activityId: string) => {
    setCalculatorData(prev => ({
      ...prev,
      activities: prev.activities.includes(activityId)
        ? prev.activities.filter(id => id !== activityId)
        : [...prev.activities, activityId]
    }));
  };

  const handleAdditionalServiceToggle = (serviceId: string) => {
    setCalculatorData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Calculator className="w-4 h-4 inline mr-2" />
                Cost Calculator
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Calculate Your Business Setup Cost
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Get an instant estimate for your UAE business formation costs. Our calculator provides transparent pricing for all services and government fees.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-grey-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Calculator Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-heading-dark mb-8">
                    Business Setup Calculator
                  </h2>

                  {/* Step 1: Business Type */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                      <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                      Choose Business Type
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {businessTypes.map((type) => (
                        <div
                          key={type.id}
                          onClick={() => handleBusinessTypeChange(type.id)}
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                            calculatorData.businessType === type.id
                              ? 'border-primary-red bg-primary-red/5'
                              : 'border-grey-200 hover:border-primary-red/50'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 ${
                              calculatorData.businessType === type.id
                                ? 'border-primary-red bg-primary-red'
                                : 'border-grey-300'
                            }`}>
                              {calculatorData.businessType === type.id && (
                                <CheckCircle className="w-3 h-3 text-white m-0.5" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold text-heading-dark mb-1">{type.name}</h4>
                              <p className="text-sm text-grey-600">{type.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Jurisdiction */}
                  {calculatorData.businessType && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        Select Jurisdiction
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {(jurisdictions[calculatorData.businessType as keyof typeof jurisdictions] || []).map((jurisdiction) => (
                          <div
                            key={jurisdiction.id}
                            onClick={() => setCalculatorData(prev => ({ ...prev, jurisdiction: jurisdiction.id }))}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                              calculatorData.jurisdiction === jurisdiction.id
                                ? 'border-primary-red bg-primary-red/5'
                                : 'border-grey-200 hover:border-primary-red/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border-2 mr-3 ${
                                  calculatorData.jurisdiction === jurisdiction.id
                                    ? 'border-primary-red bg-primary-red'
                                    : 'border-grey-300'
                                }`}>
                                  {calculatorData.jurisdiction === jurisdiction.id && (
                                    <CheckCircle className="w-3 h-3 text-white m-0.5" />
                                  )}
                                </div>
                                <h4 className="font-semibold text-heading-dark">{jurisdiction.name}</h4>
                              </div>
                              <span className="text-sm text-primary-red font-medium">
                                From {formatCurrency(jurisdiction.baseFee)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Business Activities */}
                  {calculatorData.jurisdiction && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        Business Activities
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {businessActivities.map((activity) => (
                          <div
                            key={activity.id}
                            onClick={() => handleActivityToggle(activity.id)}
                            className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                              calculatorData.activities.includes(activity.id)
                                ? 'border-primary-red bg-primary-red/5'
                                : 'border-grey-200 hover:border-primary-red/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={calculatorData.activities.includes(activity.id)}
                                  onChange={() => {}}
                                  className="w-4 h-4 text-primary-red border-grey-300 rounded focus:ring-primary-red mr-3"
                                />
                                <span className="text-sm font-medium text-heading-dark">{activity.name}</span>
                              </div>
                              {activity.fee > 0 && (
                                <span className="text-xs text-primary-red">+{formatCurrency(activity.fee)}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Visa Count */}
                  {calculatorData.activities.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                        Number of Visas
                      </h3>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setCalculatorData(prev => ({ ...prev, visaCount: Math.max(1, prev.visaCount - 1) }))}
                          className="w-10 h-10 bg-grey-200 rounded-lg flex items-center justify-center hover:bg-grey-300 transition-colors"
                        >
                          -
                        </button>
                        <div className="px-6 py-2 bg-grey-50 rounded-lg">
                          <span className="text-lg font-semibold">{calculatorData.visaCount}</span>
                        </div>
                        <button
                          onClick={() => setCalculatorData(prev => ({ ...prev, visaCount: prev.visaCount + 1 }))}
                          className="w-10 h-10 bg-grey-200 rounded-lg flex items-center justify-center hover:bg-grey-300 transition-colors"
                        >
                          +
                        </button>
                        <span className="text-sm text-grey-600">AED 3,500 per visa</span>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Office Type */}
                  {calculatorData.visaCount > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                        Office Solution
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {officeOptions.map((office) => (
                          <div
                            key={office.id}
                            onClick={() => setCalculatorData(prev => ({ ...prev, officeType: office.id }))}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                              calculatorData.officeType === office.id
                                ? 'border-primary-red bg-primary-red/5'
                                : 'border-grey-200 hover:border-primary-red/50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start">
                                <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 ${
                                  calculatorData.officeType === office.id
                                    ? 'border-primary-red bg-primary-red'
                                    : 'border-grey-300'
                                }`}>
                                  {calculatorData.officeType === office.id && (
                                    <CheckCircle className="w-3 h-3 text-white m-0.5" />
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-heading-dark mb-1">{office.name}</h4>
                                  <p className="text-sm text-grey-600">{office.description}</p>
                                </div>
                              </div>
                              <span className="text-sm text-primary-red font-medium">
                                {formatCurrency(office.fee)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 6: Package Type */}
                  {calculatorData.officeType && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                        Service Package
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {packageTypes.map((pkg) => (
                          <div
                            key={pkg.id}
                            onClick={() => setCalculatorData(prev => ({ ...prev, packageType: pkg.id }))}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                              calculatorData.packageType === pkg.id
                                ? 'border-primary-red bg-primary-red/5'
                                : 'border-grey-200 hover:border-primary-red/50'
                            }`}
                          >
                            <div className="text-center">
                              <div className={`w-5 h-5 rounded-full border-2 mx-auto mb-3 ${
                                calculatorData.packageType === pkg.id
                                  ? 'border-primary-red bg-primary-red'
                                  : 'border-grey-300'
                              }`}>
                                {calculatorData.packageType === pkg.id && (
                                  <CheckCircle className="w-3 h-3 text-white m-0.5" />
                                )}
                              </div>
                              <h4 className="font-semibold text-heading-dark mb-1">{pkg.name}</h4>
                              <p className="text-sm text-grey-600">{pkg.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 7: Additional Services */}
                  {calculatorData.packageType && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                        Additional Services (Optional)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {additionalServices.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => handleAdditionalServiceToggle(service.id)}
                            className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                              calculatorData.additionalServices.includes(service.id)
                                ? 'border-primary-red bg-primary-red/5'
                                : 'border-grey-200 hover:border-primary-red/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={calculatorData.additionalServices.includes(service.id)}
                                  onChange={() => {}}
                                  className="w-4 h-4 text-primary-red border-grey-300 rounded focus:ring-primary-red mr-3"
                                />
                                <span className="text-sm font-medium text-heading-dark">{service.name}</span>
                              </div>
                              <span className="text-xs text-primary-red">+{formatCurrency(service.fee)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Cost Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
                  <h3 className="text-xl font-bold text-heading-dark mb-6 flex items-center">
                    <DollarSign className="w-6 h-6 text-primary-red mr-2" />
                    Cost Summary
                  </h3>

                  {showBreakdown ? (
                    <div className="space-y-4">
                      {/* Cost Breakdown */}
                      <div className="space-y-3">
                        {costBreakdown.governmentFees > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-grey-100">
                            <span className="text-grey-600">Government Fees</span>
                            <span className="font-medium">{formatCurrency(costBreakdown.governmentFees)}</span>
                          </div>
                        )}
                        {costBreakdown.serviceFees > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-grey-100">
                            <span className="text-grey-600">Service Fees</span>
                            <span className="font-medium">{formatCurrency(costBreakdown.serviceFees)}</span>
                          </div>
                        )}
                        {costBreakdown.visaFees > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-grey-100">
                            <span className="text-grey-600">Visa Fees ({calculatorData.visaCount}x)</span>
                            <span className="font-medium">{formatCurrency(costBreakdown.visaFees)}</span>
                          </div>
                        )}
                        {costBreakdown.officeFees > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-grey-100">
                            <span className="text-grey-600">Office Solution</span>
                            <span className="font-medium">{formatCurrency(costBreakdown.officeFees)}</span>
                          </div>
                        )}
                        {costBreakdown.additionalFees > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-grey-100">
                            <span className="text-grey-600">Additional Services</span>
                            <span className="font-medium">{formatCurrency(costBreakdown.additionalFees)}</span>
                          </div>
                        )}
                      </div>

                      {/* Total */}
                      <div className="bg-primary-red/10 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-heading-dark">Total Cost</span>
                          <span className="text-2xl font-bold text-primary-red">
                            {formatCurrency(costBreakdown.total)}
                          </span>
                        </div>
                      </div>

                      {/* Disclaimer */}
                      <div className="bg-grey-50 rounded-lg p-4">
                        <div className="flex items-start">
                          <Info className="w-5 h-5 text-primary-navy mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-grey-600">
                              This is an estimated cost. Final pricing may vary based on specific requirements and current government fees.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <button 
                          onClick={openCalendly}
                          className="w-full bg-primary-red text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                        >
                          Get Detailed Quote
                        </button>
                        <button 
                          onClick={openCalendly}
                          className="w-full border-2 border-primary-navy text-primary-navy py-3 rounded-lg hover:bg-primary-navy hover:text-white transition-colors font-semibold"
                        >
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calculator className="w-16 h-16 text-grey-300 mx-auto mb-4" />
                      <p className="text-grey-500">
                        Complete the form to see your estimated costs
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
                Why Use Our Calculator?
              </h2>
              <p className="text-lg text-grey-600 max-w-3xl mx-auto">
                Get accurate, transparent pricing for your UAE business setup with our comprehensive cost calculator.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  Instant Estimates
                </h3>
                <p className="text-grey-600">
                  Get immediate cost estimates for your business setup requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-primary-navy" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  Transparent Pricing
                </h3>
                <p className="text-grey-600">
                  Clear breakdown of all costs including government and service fees
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-alert-success" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  Accurate Calculations
                </h3>
                <p className="text-grey-600">
                  Based on current government fees and market rates
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-grey-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-grey-700" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  Expert Support
                </h3>
                <p className="text-grey-600">
                  Get personalized consultation based on your calculated requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a detailed quote based on your requirements and start your UAE business formation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
              >
                Get Detailed Quote
              </button>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/bizvisor/consultation"
      />
    </>
  );
};

export default CostCalculator;