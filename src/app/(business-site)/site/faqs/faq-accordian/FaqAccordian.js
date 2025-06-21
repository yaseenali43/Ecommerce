// components/FaqAccordion.jsx
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqAccordion() {
  // ——— Your FAQ data lives right here ———
  const faqs = [
    {
      question: 'What shipping methods are available?',
      answer: `Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.`,
    },
    {
      question: 'How to order?',
      answer: `Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat.`,
    },
    {
      question: 'How long will it take to get my package?',
      answer: `Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien.`,
    },
    {
      question: 'Where are your products sent from?',
      answer: `Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum.`,
    },
    {
      question: 'How to change or modify billing address?',
      answer: `Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum.`,
    },
    {
      question: `Why can’t I log into my account?`,
      answer: `Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut.`,
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pb-15 lg:px-10">
      {/* Intro text */}
      <div className="text-gray-700 text-base leading-relaxed mb-8">
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat
          ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est,
          eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae
        </p>
        <p>
          Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu
          id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut.
          Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac
          sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed
          mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum
          risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo
          at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta
          eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget
          faucibus sapien. Proin hendrerit lacus turpis.
        </p>
      </div>

      {/* Accordion */}
      <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
        {faqs.map((item, i) => {
          const isOpen = i === openIndex
          return (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className={`
                  w-full flex items-center justify-between
                  py-4 px-6           /* 16px vertical, 24px horizontal */
                  text-lg font-medium /* ~18px question font */
                  text-gray-800
                  ${isOpen ? 'border-b-1 border-secondary ' : ''}
                `}
              >
                <span>{item.question}</span>
                {isOpen
                  ? <ChevronUp size={20} />
                  : <ChevronDown size={20} />
                }
              </button>

              {isOpen && (
                <div
                  className="px-6 pb-6 pt-2 text-base leading-relaxed text-gray-600"
                  style={{ animation: 'fadeIn 200ms ease-out' }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
