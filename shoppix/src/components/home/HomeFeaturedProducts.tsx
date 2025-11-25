"use client";

import Image from "next/image";
import { ProductCard } from "@/components/products/ProductCard";

const featuredProducts = [
  {
    id: "9",
    name: "Luxury Automatic Watch",
    price: 295000,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    rating: 4.9,
    reviews: 456,
    isNew: true,
    vendor: "TimeKeeper",
  },
  {
    id: "10",
    name: "Noise Cancelling Headphones",
    price: 78000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.8,
    reviews: 1876,
    vendor: "AudioMax",
  },
  {
    id: "11",
    name: "Modern Table Lamp",
    price: 38000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    rating: 4.7,
    reviews: 234,
    isNew: true,
    vendor: "HomeLux",
  },
  {
    id: "12",
    name: "Gaming Headset Pro",
    price: 48000,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
    rating: 4.8,
    reviews: 789,
    vendor: "GamersHub",
  },
  {
    id: "13",
    name: "Slim Fit Jeans",
    price: 34000,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    rating: 4.6,
    reviews: 567,
    vendor: "DenimCo",
  },
  {
    id: "14",
    name: "Makeup Brush Set",
    price: 24000,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500",
    rating: 4.7,
    reviews: 891,
    vendor: "BeautyPro",
  },
  {
    id: "15",
    name: "Baby Stroller Pro",
    price: 145000,
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=500",
    rating: 4.9,
    reviews: 345,
    isNew: true,
    vendor: "BabyFirst",
  },
  {
    id: "16",
    name: "Bestseller Novel Collection",
    price: 22000,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    rating: 4.8,
    reviews: 1234,
    vendor: "BookHaven",
  },
  {
    id: "17",
    name: "Wireless Gaming Mouse",
    price: 38000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    rating: 4.7,
    reviews: 678,
    isNew: true,
    vendor: "GamersHub",
  },
  {
    id: "18",
    name: "Throw Pillow Set",
    price: 17000,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500",
    rating: 4.6,
    reviews: 432,
    vendor: "CozyHome",
  },
  {
    id: "19",
    name: "Sport Chronograph Watch",
    price: 122000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    rating: 4.8,
    reviews: 523,
    vendor: "TimeKeeper",
  },
  {
    id: "20",
    name: "Wooden Toy Set",
    price: 29000,
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500",
    rating: 4.7,
    reviews: 298,
    vendor: "ToyWorld",
  },
];

export default function HomeFeaturedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground">Hand-picked products for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};