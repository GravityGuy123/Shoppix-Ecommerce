"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi";

export default function HomeHero () {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-50/50 via-white to-pink-50/50">
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-300 text-cyan-600 rounded-full bg-cyan-50 text-sm font-medium">
            <HiOutlineSparkles className="h-4 w-4" />
            <span>AI-Powered Shopping Experience</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Discover Amazing Products from{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">
              Trusted Vendors
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Shop millions of products at unbeatable prices. Get fast delivery, secure payments, and personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/30" 
              asChild
            >
              <Link href="/products" className="flex items-center">
                Start Shopping
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-purple-500 hover:text-white" asChild>
              <Link href="/vendor">Become a Vendor</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-500">10M+</div>
              <div className="text-sm text-gray-500">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-500">50K+</div>
              <div className="text-sm text-gray-500">Vendors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-500">2M+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};