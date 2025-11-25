"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-gray-500">
            {`The page you're looking for doesn't exist or has been moved.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>

          <Link href="/products" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center"
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
