import React from 'react';
import { Shield, Eye, Lock, FileText, Users, Globe, CheckCircle, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'consent',
      title: 'Consent',
      icon: CheckCircle,
      content: 'By using our website, you, as a result of this, agree to the Privacy Policy and its terms.'
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FileText,
      content: 'The personal information you are asked to provide and the reasons why will be made clear to you at the point we ask you to provide your personal info. If you contact us, we may receive additional data about you, such as phone number, name, email address, and message content and you may send to us, and any provided information. We may request certain contact details from you when you create an account, containing your phone number, email address, company name, and name.'
    },
    {
      id: 'information-usage',
      title: 'How We Use Your Information',
      icon: Users,
      content: 'We employ the data we gather in a number of ways, such as: Provide, manage, and uphold our site; Enhance, customize, and broaden our website; Understand and analyze how you use our site; Create new features, services, goods, and interfaces; Speak with you directly or through one of our partners about anything from customer service to updates and other information on the website, along with marketing and promotional initiatives; Send you emails; Find and prevent fraud.'
    },
    {
      id: 'log-files',
      title: 'Log Files',
      icon: FileText,
      content: 'Bizvisor adheres to the custom of using log files. When people visit websites, these files record their visits. Every hosting company participates in hosting services analytics by doing this. Internet protocol (IP) addresses, browser types, Internet Service Providers (ISPs), date and time stamps, referring/exit pages, and potential click counts are among the data gathered by log files. There is no connection between these and any personally identifiable data. The report\'s objectives include trend analysis, website administration, user movement tracking, and demographic data collection.'
    },
    {
      id: 'cookies',
      title: 'Cookies and Web Beacons',
      icon: Globe,
      content: 'Like any other website, Bizvisor employs "cookies." These cookies keep track of the pages that users access or browse on the website, as well as the preferences of the visitors. By customizing the information on our web pages to the specific browser type and other information of our visitors, the data is used to maximize their experience.'
    },
    {
      id: 'advertising',
      title: 'Advertising Partners Privacy Policies',
      icon: Eye,
      content: 'You can look through this list to see each company\'s privacy policy or Bizvisor\'s advertising partners. Ad networks and third-party ad clouds use technologies such as Web Beacons, JavaScript, and cookies in their links and advertisements. Bizvisor, which are directed to users\' browsers. When this happens, they automatically get your IP address. By using these technologies, they can track how well their advertising campaigns are working and target the ads you see on websites you visit. Note that Bizvisor has no access to or control over third-party advertisers\' cookies.'
    },
    {
      id: 'third-party',
      title: 'Third-Party Privacy Policies',
      icon: Shield,
      content: 'Bizvisor\'s This privacy statement does not apply to other websites or advertisers. For more specific information, we thus advise to observe the specific Privacy Policies of these outside ad servers. It might contain information about their procedures and how to choose not to accept particular choices. You can decide to turn off cookies in your browser. Visit the websites of the individual web browsers for more specific information about controlling cookies.'
    },
    {
      id: 'gdpr-rights',
      title: 'GDPR Data Protection Rights',
      icon: Lock,
      content: 'We want to make sure that you understand all of your rights regarding data protection. Each and every user has the following rights: The right to access: You can ask for your information copies. We might bill you a small amount for this service. The right to rectify: If you think any info is incorrect, you can ask us to fix it. Additionally, you are free to ask that any information you believe is lacking be completed. The right to erasure: You can request, under specific circumstances, that we delete your data. The right to restrict processing: You have the right to ask that we, in certain circumstances, limit how we process your info. The right to object to processing: The right to object to our processing of your data is attainable in certain situations. The right to data portability: It is possible to ask for the transfer of the data gathered and either sent directly to you or, in some cases, to another organization. We will reply to requests within a month of their submission. If you would like to use any of these rights, kindly get in touch with us.'
    },
    {
      id: 'children',
      title: 'Children\'s Information',
      icon: Users,
      content: 'Our goal also includes providing additional security for kids when they use the internet. Parents and guardians are urged to watch, participate in, monitor, and guide their online activity. Bizvisor knows not to intentionally gather any personally identifiable information from minors younger than thirteen. If you think your child provided this information on our website, we kindly ask that you get in touch with us right away. We\'ll try our best to have the offending information promptly removed from our data.'
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Privacy Policy',
      icon: FileText,
      content: 'We might occasionally make changes to our privacy statement. As a result, we suggest that you check this page from time to time for any updates. This page will be used to preview updates, where you can find the updated Privacy Policy. As soon as these modifications are published on this page, they become operative.'
    }
  ];

  const dataRights = [
    {
      title: 'Right to Access',
      description: 'You can request copies of your personal information. We may charge a small fee for this service.',
      icon: Eye
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of any information you believe is inaccurate or incomplete.',
      icon: FileText
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.',
      icon: Shield
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can request limitation of how we process your information in certain situations.',
      icon: Lock
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to our processing of your personal data in certain situations.',
      icon: Users
    },
    {
      title: 'Right to Data Portability',
      description: 'You can request transfer of your data to you or another organization.',
      icon: Globe
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 inline mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy for Bizvisor
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              At Bizvisor, accessible from https://www.bizvisor.ae/, one of our major priorities is visitors' privacy. This Policy document contains types of information collected and recorded by Bizvisor and how we use it.
            </p>
            <p className="text-lg opacity-80">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-grey-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-heading-dark mb-4">Important Notice</h2>
              <p className="text-grey-700 leading-relaxed mb-4">
                If you have additional questions about our Privacy Policy, contact us.
              </p>
              <p className="text-grey-700 leading-relaxed">
                This Privacy Policy applies to online activities for visitors to our site with respect to the information they share and collect in Bizvisor. This policy does not apply to any information collected offline or other channels other than this site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={section.id} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-heading-dark mb-4">
                        {section.title}
                      </h3>
                      <div className="text-grey-700 leading-relaxed">
                        {section.content.split(';').map((sentence, sentenceIndex) => (
                          <p key={sentenceIndex} className="mb-3">
                            {sentence.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GDPR Rights Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
                Your Data Protection Rights
              </h2>
              <p className="text-lg text-grey-600 max-w-3xl mx-auto">
                Under GDPR, you have several rights regarding your personal data. We are committed to helping you exercise these rights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataRights.map((right, index) => (
                <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-xl flex items-center justify-center mb-4">
                    <right.icon className="w-6 h-6 text-primary-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading-dark mb-3">
                    {right.title}
                  </h3>
                  <p className="text-grey-600 text-sm">
                    {right.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary-red/10 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Exercise Your Rights
              </h3>
              <p className="text-grey-700 mb-6">
                We will reply to requests within a month of their submission. If you would like to use any of these rights, kindly get in touch with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@bizvisor.com"
                  className="bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
                <a
                  href="tel:+971564960040"
                  className="border-2 border-primary-red text-primary-red px-6 py-3 rounded-lg hover:bg-primary-red hover:text-white transition-colors font-semibold flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection Summary */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
                What Information We Collect
              </h2>
              <p className="text-lg text-grey-600">
                We collect information to provide better services to our users and improve our website functionality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                  <Users className="w-5 h-5 text-primary-red mr-3" />
                  Personal Information
                </h3>
                <ul className="space-y-2 text-grey-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Name and contact details
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Email address
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Phone number
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Company information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Message content
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-heading-dark mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-primary-navy mr-3" />
                  Technical Information
                </h3>
                <ul className="space-y-2 text-grey-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    IP addresses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Browser type and version
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Device information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Pages visited
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-alert-success mr-2" />
                    Time and date stamps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't hesitate to contact us with any questions or suggestions about our Privacy Policy. We're here to help and ensure your privacy is protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@bizvisor.com"
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: hello@bizvisor.com
            </a>
            <a
              href="tel:+971564960040"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +971 56 496 0040
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;