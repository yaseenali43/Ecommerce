
"use client";

import React from 'react';
import Link from 'next/link';
import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb';

const cancellationReturnBreadCrumb = {
  sectionTitle: 'Cancellation & Returns',
  links: [
    { name: 'Home', href: '/site' },
  ],
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 !text-secondary">{title}</h2>
    <div className="text-gray-700 space-y-4">{children}</div>
  </section>
);

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white transition-shadow hover:shadow-md">
      <button
        className="w-full flex justify-between items-center px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium !text-secondary">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 py-3' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

const FAQSection = ({ faqs }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold !mb-6 !text-secondary">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} title={faq.question} content={faq.answer} />
      ))}
    </div>
  </section>
);

const page = () => {
  const faqs = [
    {
      question: 'How do I cancel my order?',
      answer:
        'To cancel an order, please visit your orders page and click on the "Cancel" button next to the order you wish to cancel. Cancellations are only accepted within 24 hours of placing the order.',
    },
    {
      question: 'Can I return a product?',
      answer:
        'Yes, you can return any unused product within 15 days of delivery. The product must be in its original packaging with tags attached.',
    },
    {
      question: 'How long does a refund take?',
      answer:
        'Refunds are processed within 5-7 business days after we receive the returned item. You will receive an email confirmation once your refund has been issued.',
    },
    {
      question: 'Who pays for return shipping?',
      answer:
        'Return shipping is free if the reason for return is due to a defect or our error. Otherwise, the customer is responsible for return shipping costs.',
    },
  ];

  return (
    <>
      <SiteBreadCrumb breadCrumb={cancellationReturnBreadCrumb} />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
          <Section title="Order Cancellation">
            <p>
              You can cancel your order within <strong>24 hours</strong> of placing it. To cancel, go to your{' '}
              <Link href="/orders" className="text-blue-600 underline">
                Orders
              </Link>{' '}
              page and click "Cancel Order".
            </p>
          </Section>

          <Section title="Returns & Refunds">
            <p>
              If you are not satisfied with your purchase, you may return it within{' '}
              <strong>15 days</strong> of the delivery date. The product must be unused and in its original packaging.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Initiate a return from your Orders page.</li>
              <li>Pack the item securely with all accessories.</li>
              <li>Ship it to our returns center (address will be provided during return initiation).</li>
            </ul>
            <p className="mt-4">
              Once we receive the item, we will inspect it and process your refund within{' '}
              <strong>5-7 business days</strong>.
            </p>
          </Section>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </>
  );
};

export default page;
