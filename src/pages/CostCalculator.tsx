import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle, ArrowRight, Info, DollarSign, FileText, Users, Building2, ChevronLeft } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

interface CalculatorState {
  businessActivity: string;
  mainReason: string;
  ownersCount: number;
  visaCount: number;
  dependantsVisa: boolean;
  businessType: string;
  jurisdiction: string;
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
  
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState<CalculatorState>({
    businessActivity: '',
    mainReason: '',
    ownersCount: 0,
    visaCount: 0,
    dependantsVisa: false,
    businessType: '',
    jurisdiction: '',
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

  const businessActivities = [
    'Consulting',
    'Technology',
    'Food and Beverage',
    'Retail',
    'Marketing',
    'E-commerce',
    'Manufacturing',
    'Real Estate',
    'Healthcare',
    'Education',
    'Trading',
    'Import/Export',
    'Construction',
    'Tourism',
    'Financial Services'
  ];

  const mainReasons = [
    { id: 'new-company', label: 'New company formation' },
    { id: 'expansion', label: 'Expansion plan (ie. new branch or franchise)' },
    { id: 'relocation', label: 'Company relocation' },
    { id: 'visa-only', label: 'Visa purposes only' }
  ];

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

  const totalSteps = 9;

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

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return calculatorData.businessActivity !== '';
      case 2:
        return calculatorData.mainReason !== '';
      case 3:
        return calculatorData.ownersCount >= 0;
      case 4:
        return calculatorData.visaCount >= 0;
      case 5:
        return true; // dependantsVisa can be true or false
      case 6:
        return calculatorData.businessType !== '';
      case 7:
        return calculatorData.jurisdiction !== '';
      case 8:
        return calculatorData.officeType !== '';
      case 9:
        return true; // Final step
      default:
        return false;
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData for Netlify Forms
    const formData = new FormData();
    formData.append('form-name', 'cost-calculator');
    formData.append('businessActivity', calculatorData.businessActivity);
    formData.append('mainReason', calculatorData.mainReason);
    formData.append('ownersCount', calculatorData.ownersCount.toString());
    formData.append('visaCount', calculatorData.visaCount.toString());
    formData.append('dependantsVisa', calculatorData.dependantsVisa.toString());
    formData.append('businessType', calculatorData.businessType);
    formData.append('jurisdiction', calculatorData.jurisdiction);
    formData.append('officeType', calculatorData.officeType);
    formData.append('additionalServices', calculatorData.additionalServices.join(', '));
    formData.append('packageType', calculatorData.packageType);
    formData.append('totalCost', costBreakdown.total.toString());
    formData.append('timestamp', new Date().toISOString());

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        alert('Your calculation has been saved! We will contact you soon with a detailed quote.');
        openCalendly();
      } else {
        alert('There was an error saving your calculation. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error saving your calculation. Please try again.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              Choose your business activity to start your business setup cost estimate *
            </h2>
            <p className="text-grey-600 mb-6">
              Choose the business activity that you would like to carry out in the UAE. Aside from helping you identify the location and licence that best suits your company, this will also help you get a better estimate of the cost of your company setup.
            </p>
            
            <div className="relative">
              <select
                value={calculatorData.businessActivity}
                onChange={(e) => setCalculatorData(prev => ({ ...prev, businessActivity: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-primary-red rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg"
              >
                <option value="">Select Activity</option>
                {businessActivities.map((activity) => (
                  <option key={activity} value={activity}>
                    {activity}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              What is your main reason for setting up a company in the UAE? *
            </h2>
            <p className="text-grey-600 mb-6">
              This will help us determine the potential type of company structure you will need for your company.
            </p>
            
            <div className="space-y-4">
              {mainReasons.map((reason) => (
                <label
                  key={reason.id}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    calculatorData.mainReason === reason.id
                      ? 'border-primary-red bg-primary-red/5'
                      : 'border-grey-200 hover:border-primary-red/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="mainReason"
                    value={reason.id}
                    checked={calculatorData.mainReason === reason.id}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, mainReason: e.target.value }))}
                    className="w-5 h-5 text-primary-red border-grey-300 focus:ring-primary-red mr-4"
                  />
                  <span className="text-lg text-heading-dark">{reason.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              How many owners/shareholders will your company have? *
            </h2>
            <p className="text-grey-600 mb-6">
              The number of owners/shareholders your company will have can help in identifying the most suitable legal structure for your company, as well as the number of residence visas you will require.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                <button
                  key={count}
                  onClick={() => setCalculatorData(prev => ({ ...prev, ownersCount: count }))}
                  className={`w-16 h-16 rounded-full border-2 text-xl font-semibold transition-all duration-200 ${
                    calculatorData.ownersCount === count
                      ? 'border-primary-red bg-primary-red text-white'
                      : 'border-grey-300 text-grey-600 hover:border-primary-red hover:text-primary-red'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              How many residence visas will you need? *
            </h2>
            <p className="text-grey-600 mb-6">
              In addition to residence visas for your shareholders, you can apply for residence visas for your employees and family members.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((count) => (
                <button
                  key={count}
                  onClick={() => setCalculatorData(prev => ({ ...prev, visaCount: count }))}
                  className={`w-16 h-16 rounded-full border-2 text-xl font-semibold transition-all duration-200 ${
                    calculatorData.visaCount === count
                      ? 'border-primary-red bg-primary-red text-white'
                      : 'border-grey-300 text-grey-600 hover:border-primary-red hover:text-primary-red'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              Will you also require visas for your dependants? *
            </h2>
            <p className="text-grey-600 mb-6">
              Dependants include your family members, nanny or other household staff you may personally employ.
            </p>
            
            <div className="space-y-4">
              <label
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  calculatorData.dependantsVisa === true
                    ? 'border-primary-red bg-primary-red/5'
                    : 'border-grey-200 hover:border-primary-red/50'
                }`}
              >
                <input
                  type="radio"
                  name="dependantsVisa"
                  checked={calculatorData.dependantsVisa === true}
                  onChange={() => setCalculatorData(prev => ({ ...prev, dependantsVisa: true }))}
                  className="w-5 h-5 text-primary-red border-grey-300 focus:ring-primary-red mr-4"
                />
                <span className="text-lg text-heading-dark">Yes</span>
              </label>
              
              <label
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  calculatorData.dependantsVisa === false
                    ? 'border-primary-red bg-primary-red/5'
                    : 'border-grey-200 hover:border-primary-red/50'
                }`}
              >
                <input
                  type="radio"
                  name="dependantsVisa"
                  checked={calculatorData.dependantsVisa === false}
                  onChange={() => setCalculatorData(prev => ({ ...prev, dependantsVisa: false }))}
                  className="w-5 h-5 text-primary-red border-grey-300 focus:ring-primary-red mr-4"
                />
                <span className="text-lg text-heading-dark">No</span>
              </label>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-heading-dark mb-6">
              Choose Business Type
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {businessTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setCalculatorData(prev => ({ ...prev, businessType: type.id, jurisdiction: '' }))}
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
        );

      case 7:
        return (
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-heading-dark mb-6">
              Select Jurisdiction
            </h2>
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
        );

      case 8:
        return (
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-heading-dark mb-6">
              Office Solution
            </h2>
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
        );

      case 9:
        return (
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-heading-dark mb-6">
              Additional Services (Optional)
            </h2>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
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

            {/* Final Summary */}
            <div className="bg-primary-red/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-heading-dark mb-4">Your Business Setup Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-grey-600">Business Activity:</span>
                  <span className="font-medium">{calculatorData.businessActivity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Main Reason:</span>
                  <span className="font-medium">{mainReasons.find(r => r.id === calculatorData.mainReason)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Owners/Shareholders:</span>
                  <span className="font-medium">{calculatorData.ownersCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Residence Visas:</span>
                  <span className="font-medium">{calculatorData.visaCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Dependant Visas:</span>
                  <span className="font-medium">{calculatorData.dependantsVisa ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Business Type:</span>
                  <span className="font-medium">{businessTypes.find(t => t.id === calculatorData.businessType)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Jurisdiction:</span>
                  <span className="font-medium">
                    {(jurisdictions[calculatorData.businessType as keyof typeof jurisdictions] || [])
                      .find(j => j.id === calculatorData.jurisdiction)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-600">Office Type:</span>
                  <span className="font-medium">{officeOptions.find(o => o.id === calculatorData.officeType)?.name}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
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
                How Much Does It Cost to Start a Business in Dubai or the UAE?
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                That depends — are you registering a company in a Dubai Free Zone, or opting for a Mainland license? Will you need investor or employee visas? Are you looking for an ecommerce license in Dubai, or a more traditional setup?
              </p>
              <p className="text-lg opacity-80">
                Several factors influence the business setup cost in the UAE. That's why we've created a hassle-free Business Setup Cost Calculator to give you an instant, personalised estimate. Whether you're starting a business in Dubai as a foreigner or comparing Dubai company registration fees, this tool helps you make smart, informed decisions from the start.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-grey-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-grey-600">
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span className="text-sm font-medium text-grey-600">
                    {Math.round((currentStep / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-grey-200 rounded-full h-2">
                  <div 
                    className="bg-primary-red h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form 
                name="cost-calculator" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Hidden field for Netlify Forms */}
                <input type="hidden" name="form-name" value="cost-calculator" />
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-heading-dark mb-4">
                    Calculate your business setup cost in less than 5 minutes.
                  </h2>
                </div>

                {/* Step Content */}
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      currentStep === 1
                        ? 'bg-grey-200 text-grey-400 cursor-not-allowed'
                        : 'bg-grey-600 text-white hover:bg-grey-700'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={`flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        isStepValid()
                          ? 'bg-primary-red text-white hover:bg-red-700'
                          : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                      }`}
                    >
                      Next
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center px-8 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                    >
                      Get My Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Cost Summary Sidebar */}
            {currentStep === totalSteps && showBreakdown && (
              <div className="max-w-4xl mx-auto mt-12">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-heading-dark mb-6 flex items-center">
                    <DollarSign className="w-6 h-6 text-primary-red mr-2" />
                    Cost Summary
                  </h3>

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
                        <span className="text-lg font-semibold text-heading-dark">Estimated Total Cost</span>
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
                            This is an estimated cost based on your selections. Final pricing may vary based on specific requirements and current government fees. Our team will provide you with a detailed quote.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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