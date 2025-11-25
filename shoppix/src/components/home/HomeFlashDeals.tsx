"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { Clock } from "lucide-react";

const flashDeals = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    price: 25000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    rating: 4.5,
    reviews: 1253,
    onSale: true,
    vendor: "TechGear",
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    price: 98000,
    originalPrice: 165000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: 4.8,
    reviews: 876,
    onSale: true,
    vendor: "TimeZone",
  },
  {
    id: "3",
    name: "Premium Leather Jacket",
    price: 65000,
    originalPrice: 125000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    rating: 4.9,
    reviews: 687,
    onSale: true,
    vendor: "StyleHub",
  },
  {
    id: "4",
    name: "4K Action Camera",
    price: 75000,
    originalPrice: 145000,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    rating: 4.7,
    reviews: 432,
    onSale: true,
    vendor: "PhotoHub",
  },
  {
    id: "5",
    name: "Gaming Keyboard RGB",
    price: 42000,
    originalPrice: 78000,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    rating: 4.8,
    reviews: 923,
    onSale: true,
    vendor: "GamersHub",
  },
  {
    id: "6",
    name: "Designer Sneakers",
    price: 48000,
    originalPrice: 88000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: 4.9,
    reviews: 1456,
    onSale: true,
    vendor: "FootStyle",
  },
  {
    id: "7",
    name: "Skincare Gift Set",
    price: 35000,
    originalPrice: 62000,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500",
    rating: 4.7,
    reviews: 534,
    onSale: true,
    vendor: "GlowLab",
  },
  {
    id: "8",
    name: "Bluetooth Speaker Pro",
    price: 28000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    rating: 4.6,
    reviews: 789,
    onSale: true,
    vendor: "AudioMax",
  },
];

export default function HomeFlashDeals () {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">⚡ Flash Deals</h2>
            <p className="text-muted-foreground">Limited time offers - up to 50% off!</p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-xl">
            <Clock className="h-5 w-5 text-secondary" />
            <div className="flex gap-2 text-2xl font-bold">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-muted-foreground">:</span>
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-muted-foreground">:</span>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};