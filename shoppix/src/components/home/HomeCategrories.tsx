"use client";

import Link from "next/link";
import { Smartphone, Shirt, Home, Gamepad, Watch, Sparkles, Baby, Book } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "from-blue-500 to-cyan-500", link: "/products?category=electronics" },
  { name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-500", link: "/products?category=fashion" },
  { name: "Home & Living", icon: Home, color: "from-orange-500 to-amber-500", link: "/products?category=home" },
  { name: "Gaming", icon: Gamepad, color: "from-purple-500 to-indigo-500", link: "/products?category=gaming" },
  { name: "Watches", icon: Watch, color: "from-teal-500 to-emerald-500", link: "/products?category=watches" },
  { name: "Beauty", icon: Sparkles, color: "from-fuchsia-500 to-pink-500", link: "/products?category=beauty" },
  { name: "Baby & Kids", icon: Baby, color: "from-yellow-500 to-orange-500", link: "/products?category=baby" },
  { name: "Books", icon: Book, color: "from-green-500 to-teal-500", link: "/products?category=books" },
];

export default function HomeCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Explore millions of products across all categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.link}
                className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl hover-lift shadow-soft hover:shadow-glow transition-smooth"
              >
                <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-center group-hover:text-primary transition-smooth">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};