"use client";
import CTASection from "@/components/site-sections/shared-sections/CTASection";
import HomePageHeroSection from "./home/home-page-hero-section/HomePageHeroSection";
import PopularProducts from "./home/popular-products/PopularProducts";
import ProductCategory from "./home/product-category/page";
import ExploreStats from "./home/explore-stats/ExploreStats";
import ProductPromoBanner from "./home/product-promo-banner/ProductPromoBanner";
import ServiceBanner from "./home/service-banner/ServiceBanner";
export default function Home() {
  return (
    <div>
      <HomePageHeroSection />
      <ProductCategory />
      <PopularProducts />
      <ProductPromoBanner />
      <ServiceBanner/>
      <ExploreStats />
      <CTASection />
    </div>
  );
}
