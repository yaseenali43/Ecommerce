import CTASection from '@/components/site-sections/shared-sections/CTASection'
import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import OrderTracker from '@/components/site-sections/tracking/order-tracker/OrderTracker'
import React from 'react'
const wishlistBreadCrumb = {
  sectionTitle: 'Tracking Your Order',
  links: [
    { name: 'Home', href: '/site' },
    { name: 'Tracking', href: '/site/tracking' },
  ],
}
const page = () => {
  return (
    <>
        <SiteBreadCrumb breadCrumb={wishlistBreadCrumb} />
        <OrderTracker />
        <CTASection />
    </>
  )
}

export default page
