import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import React from 'react'
import AboutOurJourney from './about-our-journey/AbourOurJourney'
import CTASection from '@/components/site-sections/shared-sections/CTASection'
import AboutVideoFaqSection from './about-video-faq-section/AboutVideoFaqSection'

const aboutusBreadcrumb = {
    sectionTitle: 'About Us',
    links: [
        { name: 'Home', href: '/site' },
        { name: 'About Us', href: '/site/about-us' },
    ],
}
const page = () => {
  return (
    <>
        <SiteBreadCrumb breadCrumb={aboutusBreadcrumb} />
        <AboutOurJourney />
        <AboutVideoFaqSection />
        <CTASection />
    </>
  )
}

export default page