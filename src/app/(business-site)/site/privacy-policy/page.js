import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import React from 'react'

const privacyBreadCrumb = {
    sectionTitle: 'Privacy Policy',
    links: [
        { name: 'Home', href: '/site' },
    ],
}
const page = () => {
  return (
    <>
        <SiteBreadCrumb breadCrumb={privacyBreadCrumb} />
    <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {/* <h1 className="text-3xl font-bold !text-secondary mb-6">Privacy Policy</h1> */}

          <section className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Welcome to DigitKart! We value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains what information we collect, how we use it, and your rights.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold !text-secondary mb-2">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Create or update your account (e.g., name, email, phone)</li>
              <li>Place orders or interact with customer support</li>
              <li>Use features like wishlists or product reviews</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold !text-secondary mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Process and fulfill orders</li>
              <li>Send transactional and promotional emails (with your consent)</li>
              <li>Improve our site and personalize your experience</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold !text-secondary mb-2">3. Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Payment processors for transaction handling</li>
              <li>Logistics partners for shipping</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold !text-secondary mb-2">4. Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard measures to protect your data.
              However, no method of transmission over the Internet is completely secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold !text-secondary mb-2">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal information.
              Contact us via the details below to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold !text-secondary mb-2">6. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this policy periodically. The last revision date is listed at the top of the page.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold !text-secondary mb-4">Contact Customer Support</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              If you have any questions or concerns about this Privacy Policy, please reach out:
            </p>
            <ul className="list-none text-gray-700 leading-relaxed">
              <li><strong>Email:</strong> support@digitkart.com</li>
              <li><strong>Phone:</strong> +1 (800) 123-4567</li>
              <li><strong>Address:</strong> 123 E-Commerce St, Suite 100, City, Country</li>
            </ul>
          </section>
        </div>
    </div>
    </>
  )
}

export default page