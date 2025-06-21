
"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faPinterestP,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
const footerLinkData = [
  {
    title: "CONSUMER POLICY",
    slug: "/site",
    links: [
      { label: "Privacy", href: "/site/privacy-policy" },
      { label: "Terms & Conditions", href: "/site/terms-and-conditions" },
      { label: "Terms of Use", href: "/site/terms-of-use" },
    ],
  },
  {
    title: "HELP & SUPPORT",
    slug: "/help-support",
    links: [
      // { label: "Shipping Info", href: "/help-support/shipping" },
      { label: "Cancellation & Returns", href: "/site/cancellation-returns" },
      { label: "How To Order", href: "/help-support/how-to-order" },
      { label: "Track Orders", href: "/site/tracking" },
      // { label: "Size Guide", href: "/help-support/size-guide" },
    ],
  },
  {
    title: "ABOUT",
    slug: "/company-info",
    links: [
      { label: "About Us", href: "/site/about-us" },
      { label: "Contact Us", href: "/site/contact" },
      { label: "FAQs", href: "/site/faqs" },
    ],
  },
  {
    title: "OUR SHOP",
    slug: "/our-shop",
    links: [
      { label: "Laptops", href: "/site/shop?category=Laptops" },
      { label: "Tabs", href: "/site/shop?category=Tabs" },
      { label: "Audio", href: "/site/shop?category=Audio" },
      { label: "Smartphone", href: "/site/shop?category=Phones" },
    ],
  },
  {
    title: "MY ACCOUNT",
    slug: "/my-account",
    links: [
      { label: "Wishlist", href: "/site/wishlist" },
      { label: "Cart", href: "/site/add-to-cart" },
      { label: "Checkout", href: "/site/checkout" },
    ],
  },
  {
    title: "TOP BRANDS",
    slug: "/top-brands",
    links: [
      { label: "Apple", href: "/site/shop?category=Phones" },
      { label: "Gaming Laptops", href: "/site/shop?category=Monitor" },
      { label: "Watches", href: "/site/shop?category=Watch" },
      { label: "Camera", href: "/site/shop?category=Camera" },
    ],
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <footer className="bg-secondary lg:px-4 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:pt-20 md:pt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Left block */}
        <div className="space-y-6 pb-2 lg:pb-12 sm:col-span-2 lg:col-span-1 lg:border-r border-gray-700 pr-0 lg:pr-6">
          <div>
            <h3 className="!text-white font-bold text-lg sm:text-xl">OUR LOCATIONS</h3>
            <ul className="mt-4 space-y-3 text-sm sm:text-base">
              <li className="flex items-center justify-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary  h-3" />
                <span>
                  <span className="text-primary font-semibold">Hyderabad:</span> Madhapur Jaihind colony , 50081
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="!text-white font-bold text-lg sm:text-xl">NEWSLETTER</h3>
            <p className="mt-2 text-sm sm:text-14px">
              Get 15% off your first purchase! Plus, be the first to know about sales, new product launches.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="px-4 py-2 rounded-md border-2 bg-white border-gray-900 text-muted focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto sm:flex-1"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 py-2 px-5 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/footer/support.svg"
              alt="Support logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority={false}
            />
            
            <div>
              <p className="!text-white font-bold text-sm sm:text-base">
                Call Us Now <span className="text-primary">+123-456-789</span>
              </p>
              <p className="text-sm">Email: info@example.com</p>
            </div>
          </div>
        </div>

        {/* GRID for medium and large screens */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:col-span-2 pb-12">
          {footerLinkData.map((col) => (
            <div key={col.title}>
              <div>
                <h3 className="!text-white font-bold text-md sm:text-md hover:text-primary transition">{col.title}</h3>
              </div>
              <ul className="mt-4 space-y-1 text-12px sm:text-md">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                    >
                      <span className="text-gray-400 hover:text-primary transition"> {l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ACCORDION for small screens */}
        <div className="sm:hidden">
          {footerLinkData.map((col, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={col.title} className="border-b border-gray-700">
                <button
                  className="flex justify-between items-center py-4 w-full text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${i}`}
                >
                  <div
                    className="font-bold text-base sm:text-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="!text-white font-bold text-14px  hover:text-primary transition"> {col.title}</h3>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <ul
                    id={`accordion-panel-${i}`}
                    className="pb-4 pl-4 space-y-2 text-sm transition-all duration-300 ease-in-out"
                  >
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-gray-400 hover:!text-white transition"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t mx-4 border-gray-700  ">
              </div>
        <div className="mx-auto max-w-7xl px-4 py-5  lg:py-45px flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            Copyright © 2025 <span className="text-primary font-medium">Electro Cart</span> All Rights Reserved.
          </p>

          {/* Social media icons - Premium version */}
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="group">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="h-6 w-6 text-gray-400 transition-all duration-300 
                        group-hover:text-[#1877F2] group-hover:scale-125"
              />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="group">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="h-6 w-6 text-gray-400 transition-all duration-300 
                        group-hover:text-[#25D366] group-hover:scale-125"
              />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="group">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 w-6 text-gray-400 transition-all duration-300 
                        group-hover:text-[#E4405F] group-hover:scale-125"
              />
            </a>

            <a href="https://twitter.com" aria-label="Twitter" className="group">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-6 w-6 text-gray-400 transition-all duration-300 
                        group-hover:text-[#1DA1F2] group-hover:scale-125"
              />
            </a>
          </div>
        </div>
    </footer>
  );
}