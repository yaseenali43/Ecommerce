
'use client';
import SiteBreadCrumb from '@/components/site-sections/shared-sections/SiteBreadCrumb'
import ProductTable from '@/components/site-sections/shared-sections/ProductTable';
import React from 'react';
import { useCartWishlist } from '@/context/CartWishListProvider';
import CTASection from '@/components/site-sections/shared-sections/CTASection';

const wishlistBreadCrumb = {
  sectionTitle: 'My Wishlist',
  links: [
    { name: 'Home', href: '/site' },
    { name: 'Wishlist', href: '/site/wishlist' },
  ],
}

const productBag = {
  emptyTitle : "Hey, it feels so light!",
  emptySubTitle : "Your wishlist is currently empty",
  emptyImage : "/images/MenuNavbar/notification-cart.png",
}

export default function Page() {
  const { wishlist, updateWishlistQuantity, removeFromWishlist, addToCart } = useCartWishlist();

  const handleQuantityChange = (id, newQuantity) => {
    updateWishlistQuantity(id, newQuantity);
  };

  const handleRemove = (id) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };


  return (
    <div>
      <SiteBreadCrumb breadCrumb={wishlistBreadCrumb} />
      {/* …rest of your page */}
      <ProductTable
        products={wishlist}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
        showQuantity={false}
        showAddToCart={true}
        onAddToCart={handleAddToCart}
        emptyProduct={productBag}
      />

      <CTASection />
    </div>
  )
}
