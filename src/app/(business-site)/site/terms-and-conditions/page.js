// pages/terms.js
import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb';
import { ShieldCheck, CreditCard, Truck, RefreshCw, AlertTriangle } from 'lucide-react';

const termsBreadcrumb = {
    sectionTitle: ' Terms & Conditions',
    links: [
        { name: 'Home', href: '/site' },
        // { name: 'Privacy Policy  ', href: '/site/privacy-policy' },
    ],
}

export default function TermsAndConditions() {
  const sections = [
    {
      icon: ShieldCheck,
      title: 'Acceptance of Terms',
      content: 'By accessing or using DigitKart’s services, you agree to these Terms & Conditions. If you do not agree, please do not use our website.'
    },
    {
      icon: CreditCard,
      title: 'Orders & Payments',
      content: 'When you place an order, you agree to pay all charges including taxes and delivery fees. We reserve the right to refuse or cancel any order for reasons including pricing errors.'
    },
    {
      icon: Truck,
      title: 'Shipping & Delivery',
      content: 'Shipping times are estimates. DigitKart is not liable for delays due to customs, weather, or third-party carriers. Risk of loss passes to you upon delivery.'
    },
    {
      icon: RefreshCw,
      title: 'Returns & Refunds',
      content: 'You may return items within 30 days of delivery. Products must be unused and in original packaging. Refunds are processed within 7 business days after receipt.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: 'DigitKart is not liable for indirect, incidental, or consequential damages arising from your use of the site, to the fullest extent permitted by law.'
    },
    {
      icon: ShieldCheck,
      title: 'Privacy & Data',
      content: 'Your use of the site is also governed by our Privacy Policy. We collect and use your data as described there. Please review the Privacy Policy for details.'
    },
    {
      icon: AlertTriangle,
      title: 'Modification of Terms',
      content: 'We may update these Terms at any time. The date at the bottom reflects the last revision. Continued use constitutes acceptance.'
    },
    {
      icon: ShieldCheck,
      title: 'Contact & Support',
      content: 'For any questions about these Terms, reach out to our support team via email at support@digitkart.com or call +1 (800) 123-4567.'
    }
  ];

  return (
    <>
      <SiteBreadCrumb breadCrumb={termsBreadcrumb} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">


          {/* Content Sections */}
          <div className="mt-8 divide-y divide-gray-200">
            {sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.title}
                  className={
                    `flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 lg:p-8 ` +
                    (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50')
                  }
                >
                  <div className="flex-shrink-0 bg-secondary/70 p-2 sm:p-3 rounded-full">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-4 flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold !text-secondary mb-1">{sec.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{sec.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 bg-gray-100 p-4 sm:p-6 text-center text-xs sm:text-sm md:text-base text-gray-600 rounded-b-2xl">
            <p>Last updated: June 17, 2025</p>
            <p>&copy; {new Date().getFullYear()} DigitKart. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
