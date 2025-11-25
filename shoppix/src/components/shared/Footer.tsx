"use client";

import Link from "next/link";
import { LuFacebook, LuTwitter, LuInstagram, LuYoutube } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-cyan-500" /> 
              <span className="text-xl font-bold text-gray-900">
                Shoppix
              </span>
            </div>
            <p className="text-sm text-gray-500"> 
              Your trusted marketplace for quality products from verified vendors worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-cyan-500 transition-smooth">
                <LuFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-500 transition-smooth">
                <LuTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-500 transition-smooth">
                <LuInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-500 transition-smooth">
                <LuYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            {/* CHANGE 6: Adjust heading color to a solid dark color */}
            <h3 className="font-semibold mb-4 text-gray-800">Customer Service</h3>
            {/* CHANGE 7: Adjust text color and hover color for links */}
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/help" className="hover:text-cyan-500 transition-smooth">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-cyan-500 transition-smooth">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-cyan-500 transition-smooth">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-500 transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">About Shoppix</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/about" className="hover:text-cyan-500 transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vendor" className="hover:text-cyan-500 transition-smooth">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-500 transition-smooth">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-cyan-500 transition-smooth">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/terms" className="hover:text-cyan-500 transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-500 transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-cyan-500 transition-smooth">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-cyan-500 transition-smooth">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CHANGE 8: Adjust border-t and text color for the copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shoppix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};