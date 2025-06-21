import SiteBreadCrumb from "@/components/site-sections/shared-sections/SiteBreadCrumb";
import React from "react";
const termofuseBreadCrumb = {
    sectionTitle: "Terms of Use",
    links: [
        { name: "Home", href: "/site" },
    ],
}
const page = () => {
  return (
    <>
      <SiteBreadCrumb breadCrumb={termofuseBreadCrumb} />
      <div className=" lg:max-w-5xl w-full mx-auto px-10 py-8  min-h-screen">
        <div className="prose max-w-none bg-white p-6 rounded-lg shadow-md">

          {/* Table of Contents */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold !text-secondary">
              Table of Contents
            </h2>
            <ul className="list-disc pl-5 mt-2">
              <li>
                <a
                  href="#introduction"
                  className="text-blue-600 hover:underline"
                >
                   Introduction
                </a>
              </li>
              <li>
                <a
                  href="#user-account"
                  className="text-blue-600 hover:underline"
                >
                   User Account, Password, and Security
                </a>
              </li>
              <li>
                <a
                  href="#services-offered"
                  className="text-blue-600 hover:underline"
                >
                   Services Offered
                </a>
              </li>
              <li>
                <a
                  href="#platform-transaction"
                  className="text-blue-600 hover:underline"
                >
                   Platform for Transaction and Communication
                </a>
              </li>
              <li>
                <a
                  href="#user-conduct"
                  className="text-blue-600 hover:underline"
                >
                   User Conduct and Rules
                </a>
              </li>
              <li>
                <a
                  href="#contents-posted"
                  className="text-blue-600 hover:underline"
                >
                   Contents Posted on Platform
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer-warranties"
                  className="text-blue-600 hover:underline"
                >
                   Disclaimer of Warranties and Liability
                </a>
              </li>
              <li>
                <a href="#payment" className="text-blue-600 hover:underline">
                   Payment
                </a>
              </li>
              <li>
                <a href="#e-platform" className="text-blue-600 hover:underline">
                   E-Platform for Communication
                </a>
              </li>
              <li>
                <a href="#indemnity" className="text-blue-600 hover:underline">
                   Indemnity
                </a>
              </li>
              <li>
                <a
                  href="#trademark-copyright"
                  className="text-blue-600 hover:underline"
                >
                   Trademark, Copyright, and Restriction
                </a>
              </li>
              <li>
                <a
                  href="#limitation-liability"
                  className="text-blue-600 hover:underline"
                >
                   Limitation of Liability
                </a>
              </li>
              <li>
                <a
                  href="#termination"
                  className="text-blue-600 hover:underline"
                >
                   Termination
                </a>
              </li>
              <li>
                <a
                  href="#jurisdictional-issues"
                  className="text-blue-600 hover:underline"
                >
                   Jurisdictional Issues
                </a>
              </li>
              <li>
                <a
                  href="#contacting-seller"
                  className="text-blue-600 hover:underline"
                >
                   Contacting the Seller
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-blue-600 hover:underline">
                   Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="#cart-notification"
                  className="text-blue-600 hover:underline"
                >
                   Cart Notification
                </a>
              </li>
              <li>
                <a
                  href="#multiple-sellers"
                  className="text-blue-600 hover:underline"
                >
                   Multiple Sellers
                </a>
              </li>
              <li>
                <a href="#charges" className="text-blue-600 hover:underline">
                   Charges
                </a>
              </li>
              <li>
                <a
                  href="#grievance-officer"
                  className="text-blue-600 hover:underline"
                >
                   Grievance Officer
                </a>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <h2 className="!text-secondary font-semibold !my-4" id="introduction">1. Introduction</h2>
          <p>
            Welcome to Digit Kart. This document, compliant with the Information
            Technology Act, 2000, outlines the terms and conditions ("Terms of
            Use") for using our e-commerce platform, www.digitkart.com
            ("Platform"). By accessing or using the Platform, you agree to these
            Terms of Use.
          </p>
          <p>
            The Platform is owned by Digit Kart Pvt Ltd, with its registered
            office at [Address]. Your use constitutes a binding agreement with
            Digit Kart Pvt Ltd. We may revise these Terms without notice, and
            your continued use signifies acceptance of updates.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="user-account">2. User Account, Password, and Security</h2>
          <p>
            You are responsible for keeping your account credentials
            confidential and for all activities under your account. Digit Kart
            may suspend or terminate your access if you provide inaccurate
            information or if we suspect a security breach. Keep your contact
            details current and notify us of any unauthorized use.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="services-offered">3. Services Offered</h2>
          <p>
            Digit Kart offers an online marketplace for purchasing products like
            electronics, fashion, and home goods from various sellers.
            Transactions are governed by policies such as cancellation and
            returns, accessible on the Platform.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="platform-transaction">
            4. Platform for Transaction and Communication
          </h2>
          <p>
            Digit Kart facilitates interactions between buyers and sellers but
            is not a party to these transactions. We do not guarantee product
            quality, safety, or delivery, which are the responsibility of
            sellers.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="user-conduct">5. User Conduct and Rules</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Share harmful, illegal, or infringing content.</li>
            <li>Engage in fraudulent or disruptive activities.</li>
            <li>Attempt unauthorized access to the Platform.</li>
            <li>Violate applicable laws.</li>
          </ul>
          <p>Digit Kart may cancel suspicious or bulk orders.</p>

          <h2 className="!text-secondary font-semibold !my-4" id="contents-posted">6. Contents Posted on Platform</h2>
          <p>
            User-generated content becomes Digit Kart’s property, usable for
            promotional purposes. You confirm that your content does not
            infringe third-party rights.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="disclaimer-warranties">
            7. Disclaimer of Warranties and Liability
          </h2>
          <p>
            The Platform is provided "as is" without warranties. Digit Kart does
            not guarantee the accuracy or reliability of Platform content or
            services.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="payment">8. Payment</h2>
          <p>
            Payments are processed securely, but Digit Kart is not liable for
            issues due to user errors or bank policies. Refunds follow our
            outlined policies.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="e-platform">9. E-Platform for Communication</h2>
          <p>
            Digit Kart is a facilitator, not a party to transactions, and does
            not control or endorse seller offerings.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="indemnity">10. Indemnity</h2>
          <p>
            You agree to indemnify Digit Kart against claims arising from your
            breach of these Terms or legal violations.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="trademark-copyright">
            11. Trademark, Copyright, and Restriction
          </h2>
          <p>
            All Platform content is protected by intellectual property laws.
            Unauthorized reproduction or distribution is prohibited.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="limitation-liability">12. Limitation of Liability</h2>
          <p>
            Digit Kart’s liability is limited to the purchase value of products.
            We are not responsible for indirect or consequential damages.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="termination">13. Termination</h2>
          <p>
            We may terminate your account for violating these Terms, retaining
            transaction data for legal purposes.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="jurisdictional-issues">14. Jurisdictional Issues</h2>
          <p>
            These Terms are governed by Indian law, with disputes resolved in
            courts at [City, State].
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="contacting-seller">15. Contacting the Seller</h2>
          <p>
            For seller-related issues, contact them via the Platform or our
            support at [contact details].
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="disclaimer">16. Disclaimer</h2>
          <p>
            Use the Platform at your own risk. Digit Kart is not liable for
            seller actions or product quality.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="cart-notification">17. Cart Notification</h2>
          <p>
            If a product in your cart is unavailable, alternatives from other
            sellers may be offered, possibly at different prices.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="multiple-sellers">18. Multiple Sellers</h2>
          <p>
            Products may be offered by multiple sellers with varying prices, not
            always reflecting the lowest available.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="charges">19. Charges</h2>
          <p>
            Digit Kart may apply fees for certain orders or services, detailed
            on the Platform.
          </p>

          <h2 className="!text-secondary font-semibold !my-4" id="grievance-officer">20. Grievance Officer</h2>
          <p>Contact our Grievance Officer at [details] for any concerns.</p>
        </div>
      </div>
    </>
  );
};

export default page;
