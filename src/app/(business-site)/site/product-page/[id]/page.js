  import React from 'react';
  import BreadcrumbProducts from '@/components/site-sections/common/BreadcrumbProducts';
  import ProductDetails from '@/components/site-sections/shared-sections/ProductDetails';
  import CTASection from '@/components/site-sections/shared-sections/CTASection';
  export const metadata = {
    title: 'Product Details',
  };

  export default async function ProductPage(props) {
    const { id } = await props.params;

    let raw;
    try {
      const res = await fetch('http://localhost:4000/allproducts', { cache: 'no-store' });
      if (!res.ok) throw new Error(`Fetch error ${res.status}`);
      raw = await res.json();
    } catch (err) {
      return (
        <div className="p-8 text-center text-red-600">
          Failed to load products: {err.message}
        </div>
      );
    }

    const productsArray = Array.isArray(raw.allproducts) ? raw.allproducts : Array.isArray(raw) ? raw : [];
    const product = productsArray.find(p => String(p.id) === String(id));
    if (!product) {
      return <div className="p-8 text-center">Product not found.</div>;
    }

    const breadcrumbs = [
      { name: 'Home', href: '/site' },
      { name: 'Products', href: '/site/shop' },
      { name: product.name, href: `/site/product-page/${id}` },
    ];

    return (
      <>
        <div className="py-8">
          <div className="w-full mt-20 mx-auto px-5">
            <BreadcrumbProducts items={breadcrumbs} />
            <ProductDetails product={product} />
          </div>
        </div>
        <CTASection />
      </>
    );
  }