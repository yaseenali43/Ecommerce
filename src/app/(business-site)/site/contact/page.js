import ContactForm from '@/components/site-sections/contact/ContactForm/ContactForm'
import ContactLocation from '@/components/site-sections/contact/ContactLocation/ContactLocation'
import ContactService from '@/components/site-sections/contact/ContactService/ContactService'
import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import React from 'react'
const wishlistBreadCrumb = {
  sectionTitle: 'Contact Us',
  links: [
    { name: 'Home', href: '/site' },
    { name: 'Contact', href: '/site/contact' },
  ],
}


const page = () => {
  return (
    <>
        <SiteBreadCrumb breadCrumb={wishlistBreadCrumb} />
        <ContactService />
        <ContactForm />
        <ContactLocation />
    </>
  )
}

export default page