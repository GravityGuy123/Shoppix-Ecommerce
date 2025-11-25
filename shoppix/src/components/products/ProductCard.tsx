"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  onSale?: boolean;
  vendor?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  onSale,
  vendor,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow hover-lift transition-smooth">
      <Link href={`/products/${id}`} className="relative block aspect-square overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-smooth"
        />
        {onSale && discount > 0 && (
          <Badge className="absolute top-3 left-3 badge-sale">
            -{discount}%
          </Badge>
        )}
        {isNew && (
          <Badge className="absolute top-3 right-3 badge-new">
            NEW
          </Badge>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 ${isNew ? 'right-16' : 'right-3'} h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition-smooth ${
            isWishlisted ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </Link>

      <div className="p-4 space-y-3">
        <Link href={`/products/${id}`}>
          <h3 className="font-semibold line-clamp-2 hover:text-primary transition-smooth">
            {name}
          </h3>
        </Link>

        {vendor && (
          <p className="text-xs text-muted-foreground">by {vendor}</p>
        )}

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">
              ₦{price.toLocaleString()}
            </div>
            {originalPrice && originalPrice > price && (
              <div className="text-sm text-muted-foreground line-through">
                ₦{originalPrice.toLocaleString()}
              </div>
            )}
          </div>

          <Button size="sm" className="gradient-primary" asChild>
            <Link href={`/products/${id}`}>
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};