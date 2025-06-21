
'use client';

import CTASection from '@/components/site-sections/shared-sections/CTASection';
import ProductTable from '@/components/site-sections/shared-sections/ProductTable';
import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import { useCartWishlist } from '@/context/CartWishListProvider';
import React from 'react';

const notificationBreadCrumb = {
  sectionTitle: 'My Cart',
  links: [
    { name: 'Home', href: '/site' },
    { name: 'Cart', href: '/site/add-to-cart' },
  ],
}

const productBag = {
  emptyTitle : "Hey, it feels so light!",
  emptySubTitle : "Your Cart is currently empty",
  emptyImage : "/images/MenuNavbar/notification-cart.png",
}

function page() {
  const { cart, updateCartQuantity, removeFromCart } = useCartWishlist();

  const handleQuantityChange = (id, newQuantity) => {
    updateCartQuantity(id, newQuantity);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <SiteBreadCrumb breadCrumb={notificationBreadCrumb} />
      <ProductTable
        products={cart}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
        showQuantity={true}
        showAddToCart={false}
        emptyProduct={productBag}
      />
      <CTASection />
    </div>
  )
}

export default page
