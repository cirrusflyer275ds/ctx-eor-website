import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
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
      <body className={`${inter.className} antialiased`}>
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="h-8 w-8 rounded bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">CTX</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CTX-EOR</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                    <span>Services</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Services Dropdown */}
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="p-4 space-y-3">
                      <Link href="/services#try-before-hire" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Try-Before-Hire EOR</h3>
                        <p className="text-sm text-gray-600">Test candidates before committing</p>
                      </Link>
                      <Link href="/services#job-object" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Job Object Technology</h3>
                        <p className="text-sm text-gray-600">AI-powered job matching</p>
                      </Link>
                      <Link href="/services#video-screening" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Video Screening</h3>
                        <p className="text-sm text-gray-600">Automated interview summaries</p>
                      </Link>
                      <Link href="/services#compliance" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Compliance Management</h3>
                        <p className="text-sm text-gray-600">Full US compliance coverage</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                    <span>Technology</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Technology Dropdown */}
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="p-4 space-y-3">
                      <Link href="/services#job-object" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Job Objects</h3>
                        <p className="text-sm text-gray-600">O*Net & SOC integration</p>
                      </Link>
                      <Link href="/services#video-screening" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Screening Matrix</h3>
                        <p className="text-sm text-gray-600">Intelligent candidate filtering</p>
                      </Link>
                      <Link href="/#job-object-demo" className="block p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                        <h3 className="font-semibold text-gray-900 mb-1">Interactive Demo</h3>
                        <p className="text-sm text-gray-600">Try our technology live</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                    <span>Resources</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Resources Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="p-2">
                      <Link href="/contact" className="block px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 text-gray-700 hover:text-orange-600">Get Demo</Link>
                      <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 text-gray-700 hover:text-orange-600">Case Studies</Link>
                      <Link href="/services" className="block px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 text-gray-700 hover:text-orange-600">Documentation</Link>
                      <Link href="/contact" className="block px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 text-gray-700 hover:text-orange-600">Support</Link>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                  Company
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                  Pricing
                </Link>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                Log in
              </button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                Book a demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 rounded bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
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
                  <li><Link href="/services/try-before-hire-eor" className="hover:text-white">Try-Before-Hire EOR</Link></li>
                  <li><Link href="/services/job-object-technology" className="hover:text-white">Job Object Technology</Link></li>
                  <li><Link href="/services/video-screening" className="hover:text-white">Video Screening</Link></li>
                  <li><Link href="/services/compliance-management" className="hover:text-white">Compliance Management</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About us</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/press" className="hover:text-white">Press</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                  <li><Link href="/documentation" className="hover:text-white">Documentation</Link></li>
                  <li><Link href="/support" className="hover:text-white">Support</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 CTX-EOR. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
