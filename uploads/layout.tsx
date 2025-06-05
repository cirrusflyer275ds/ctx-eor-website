import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CTX-EOR | US Employer of Record with Try-Before-You-Hire",
  description: "Transform your US hiring with CTX-EOR's innovative try-before-you-hire model. Expert EOR services, advanced job matching technology, and streamlined video screening.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientBody>
        <body className={`${inter.className} antialiased`}>
          {/* Navigation Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="h-8 w-8 rounded bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CTX</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">CTX-EOR</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <div className="flex items-center space-x-6">
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                      <span>Services</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                      <span>Technology</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                      <span>Resources</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <a href="/company" className="text-gray-700 hover:text-gray-900 font-medium">
                    Company
                  </a>
                  <a href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
                    Pricing
                  </a>
                </div>
              </nav>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <button className="hidden md:block text-gray-700 hover:text-gray-900 font-medium">
                  Log in
                </button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
                  Book a demo
                </Button>
              </div>
              {/* Mobile menu button */}
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer Placeholder */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="container px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-8 w-8 rounded bg-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CTX</span>
                    </div>
                    <span className="text-xl font-bold">CTX-EOR</span>
                  </div>
                  <p className="text-gray-400">
                    US-focused Employer of Record with innovative try-before-you-hire solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="/services/try-before-hire" className="hover:text-white">Try-Before-Hire EOR</a></li>
                    <li><a href="/services/job-object" className="hover:text-white">Job Object Technology</a></li>
                    <li><a href="/services/video-screening" className="hover:text-white">Video Screening</a></li>
                    <li><a href="/services/compliance" className="hover:text-white">Compliance Management</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="/about" className="hover:text-white">About us</a></li>
                    <li><a href="/careers" className="hover:text-white">Careers</a></li>
                    <li><a href="/press" className="hover:text-white">Press</a></li>
                    <li><a href="/contact" className="hover:text-white">Contact us</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="/blog" className="hover:text-white">Blog</a></li>
                    <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
                    <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                    <li><a href="/support" className="hover:text-white">Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2025 CTX-EOR. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </ClientBody>
    </html>
  );
}
