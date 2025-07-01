import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle, ArrowRight, Info, FileText, ChevronLeft, ChevronDown } from 'lucide-react';
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
  planToStart: string;
  livingInUAE: boolean;
  currentCountry: string;
  nationality: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
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
    packageType: 'standard',
    planToStart: '',
    livingInUAE: true,
    currentCountry: '',
    nationality: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const [costBreakdown, setCostBreakdown] = useState<CostBreakdown>({
    governmentFees: 0,
    serviceFees: 0,
    visaFees: 0,
    officeFees: 0,
    additionalFees: 0,
    total: 0
  });

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

  const planToStartOptions = [
    { id: 'this-month', label: 'This Month' },
    { id: 'next-month', label: 'Next Month' },
    { id: '3-months', label: '3 Months' },
    { id: '6-months', label: '6 Months' }
  ];

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
    'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
    'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos',
    'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova',
    'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
    'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau',
    'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
    'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
    'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea',
    'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan',
    'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const totalSteps = 13;

  const calculateCosts = () => {
    let governmentFees = 0;
    let serviceFees = 0;
    let visaFees = calculatorData.visaCount * 3500;
    let officeFees = 0;
    let additionalFees = 0;

    const selectedJurisdictions = jurisdictions[calculatorData.businessType as keyof typeof jurisdictions] || [];
    const selectedJurisdiction = selectedJurisdictions.find(j => j.id === calculatorData.jurisdiction);
    
    if (selectedJurisdiction) {
      governmentFees = selectedJurisdiction.baseFee * 0.4;
      serviceFees = selectedJurisdiction.baseFee * 0.6;
    }

    const selectedOffice = officeOptions.find(o => o.id === calculatorData.officeType);
    if (selectedOffice) {
      officeFees = selectedOffice.fee;
    }

    calculatorData.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        additionalFees += service.fee;
      }
    });

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
        return true;
      case 6:
        return calculatorData.businessType !== '';
      case 7:
        return calculatorData.jurisdiction !== '';
      case 8:
        return calculatorData.officeType !== '';
      case 9:
        return true;
      case 10:
        return calculatorData.planToStart !== '';
      case 11:
        return calculatorData.livingInUAE || calculatorData.currentCountry !== '';
      case 12:
        return calculatorData.nationality !== '';
      case 13:
        return calculatorData.firstName !== '' && calculatorData.lastName !== '' && calculatorData.email !== '';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const submissionData = {
        businessActivity: calculatorData.businessActivity,
        mainReason: calculatorData.mainReason,
        ownersCount: calculatorData.ownersCount,
        visaCount: calculatorData.visaCount,
        dependantsVisa: calculatorData.dependantsVisa,
        businessType: calculatorData.businessType,
        jurisdiction: calculatorData.jurisdiction,
        officeType: calculatorData.officeType,
        additionalServices: calculatorData.additionalServices,
        packageType: calculatorData.packageType,
        planToStart: calculatorData.planToStart,
        livingInUAE: calculatorData.livingInUAE,
        currentCountry: calculatorData.currentCountry,
        nationality: calculatorData.nationality,
        firstName: calculatorData.firstName,
        lastName: calculatorData.lastName,
        phoneNumber: calculatorData.phoneNumber,
        email: calculatorData.email,
        totalCost: costBreakdown.total,
        costBreakdown: costBreakdown,
        timestamp: new Date().toISOString()
      };

      const response = await fetch('/.netlify/functions/submit-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your business setup estimate is ready! We will contact you soon with detailed information.'
        });
        
        setTimeout(() => {
          openCalendly();
        }, 1000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'There was an error processing your request. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting calculator:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error processing your request. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
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
                className="w-full px-4 py-3 border-2 border-primary-red rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg appearance-none"
              >
                <option value="">Select Activity</option>
                {businessActivities.map((activity) => (
                  <option key={activity} value={activity}>
                    {activity}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-grey-400 pointer-events-none" />
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
                  type="button"
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
                  type="button"
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
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={calculatorData.additionalServices.includes(service.id)}
                      onChange={() => {}}
                      className="w-4 h-4 text-primary-red border-grey-300 rounded focus:ring-primary-red mr-3"
                    />
                    <span className="text-sm font-medium text-heading-dark">{service.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              When do you plan to start your business? *
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {planToStartOptions.map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center justify-center p-4 border-2 rounded-full cursor-pointer transition-all duration-200 ${
                    calculatorData.planToStart === option.id
                      ? 'border-primary-red bg-primary-red text-white'
                      : 'border-grey-300 text-grey-600 hover:border-primary-red hover:text-primary-red'
                  }`}
                >
                  <input
                    type="radio"
                    name="planToStart"
                    value={option.id}
                    checked={calculatorData.planToStart === option.id}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, planToStart: e.target.value }))}
                    className="sr-only"
                  />
                  <span className="font-medium">{option.label}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  isStepValid()
                    ? 'bg-primary-red text-white hover:bg-red-700'
                    : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                }`}
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              Are you currently living in the UAE? *
            </h2>
            
            <div className="space-y-4 mb-6">
              <label
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  calculatorData.livingInUAE === true
                    ? 'border-primary-red bg-primary-red/5'
                    : 'border-grey-200 hover:border-primary-red/50'
                }`}
              >
                <input
                  type="radio"
                  name="livingInUAE"
                  checked={calculatorData.livingInUAE === true}
                  onChange={() => setCalculatorData(prev => ({ ...prev, livingInUAE: true, currentCountry: '' }))}
                  className="w-5 h-5 text-primary-red border-grey-300 focus:ring-primary-red mr-4"
                />
                <span className="text-lg text-heading-dark">Yes</span>
              </label>
              
              <label
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  calculatorData.livingInUAE === false
                    ? 'border-primary-red bg-primary-red/5'
                    : 'border-grey-200 hover:border-primary-red/50'
                }`}
              >
                <input
                  type="radio"
                  name="livingInUAE"
                  checked={calculatorData.livingInUAE === false}
                  onChange={() => setCalculatorData(prev => ({ ...prev, livingInUAE: false }))}
                  className="w-5 h-5 text-primary-red border-grey-300 focus:ring-primary-red mr-4"
                />
                <span className="text-lg text-heading-dark">No</span>
              </label>
            </div>

            {!calculatorData.livingInUAE && (
              <div>
                <h3 className="text-lg font-semibold text-heading-dark mb-4">
                  Ok, if you're not in the UAE, where do you currently call home? *
                </h3>
                <div className="relative">
                  <select
                    value={calculatorData.currentCountry}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, currentCountry: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-primary-red rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg appearance-none"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-grey-400 pointer-events-none" />
                </div>
              </div>
            )}
          </div>
        );

      case 12:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              What's your nationality? *
            </h2>
            
            <div className="relative">
              <select
                value={calculatorData.nationality}
                onChange={(e) => setCalculatorData(prev => ({ ...prev, nationality: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-primary-red rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent text-lg appearance-none"
              >
                <option value="">Select Nationality</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-grey-400 pointer-events-none" />
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  isStepValid()
                    ? 'bg-primary-red text-white hover:bg-red-700'
                    : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                }`}
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-red">
            <h2 className="text-2xl font-bold text-heading-dark mb-4">
              Your business setup estimate is ready!
            </h2>
            <p className="text-grey-600 mb-6">
              Please share your details below so you can receive it right away.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-2">
                  First name *
                </label>
                <input
                  type="text"
                  value={calculatorData.firstName}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-2">
                  Last name *
                </label>
                <input
                  type="text"
                  value={calculatorData.lastName}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-grey-700 mb-2">
                Phone number *
              </label>
              <div className="flex">
                <div className="flex items-center px-3 border-2 border-r-0 border-grey-300 rounded-l-lg bg-grey-50">
                  <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="w-5 h-3 mr-2" />
                  <span className="text-sm text-grey-600">+971</span>
                </div>
                <input
                  type="tel"
                  value={calculatorData.phoneNumber}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  className="flex-1 px-4 py-3 border-2 border-grey-300 rounded-r-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-grey-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={calculatorData.email}
                onChange={(e) => setCalculatorData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border-2 border-grey-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                submitStatus.type === 'success' 
                  ? 'bg-alert-success/10 text-alert-success border border-alert-success/20' 
                  : 'bg-alert-mistake/10 text-alert-mistake border border-alert-mistake/20'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                ) : (
                  <Info className="w-5 h-5 mr-3 flex-shrink-0" />
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}
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

              <form onSubmit={handleSubmit}>
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
                      disabled={isSubmitting || !isStepValid()}
                      className="flex items-center px-8 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold disabled:bg-grey-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Estimate
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
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