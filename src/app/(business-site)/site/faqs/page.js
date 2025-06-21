import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import React from 'react'
import { FaqCardGrid } from './faq-card/FaqCard'
import FaqAccordion from './faq-accordian/FaqAccordian'
import CTASection from '@/components/site-sections/shared-sections/CTASection'

const faqbreadcrumb = {
  sectionTitle: 'Frequently Asked Questions',
  links: [
    { name: 'Home', href: '/site' },
    { name: 'Frequently Asked Questions', href: '/site/faqs' },
  ],
}
const page = () => {
  return (
    <>
      <SiteBreadCrumb breadCrumb={faqbreadcrumb} />
      <FaqCardGrid />
      <FaqAccordion />
      <CTASection />
    </>
  )
}

export default page