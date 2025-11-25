"use client";

import HomeHero from "@/components/home/HomeHero";
import HomeCategories from "@/components/home/HomeCategrories";
import HomeFlashDeals from "@/components/home/HomeFlashDeals";
import HomeFeaturedProducts from "@/components/home/HomeFeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <HomeHero />

      {/* Categories Section */}
      <HomeCategories />
      
      {/* Flash Deals Section */}
      <HomeFlashDeals />
      
      {/* Home Featured Products Section */}
      <HomeFeaturedProducts />
    </main>
  );
}