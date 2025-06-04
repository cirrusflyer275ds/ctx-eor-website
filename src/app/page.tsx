import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform your US hiring with{" "}
            <span className="text-orange-500">try-before-you-hire</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            CTX-EOR revolutionizes US employment with our innovative EOR platform.
            Test candidates through our unique "test drive" program, powered by advanced
            Job Object technology and data-driven screening.
          </p>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email*"
              className="flex-1 h-12 border-gray-300 rounded-full px-6"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium h-12 w-full sm:w-auto">
              Get started
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">G</span>
              </div>
              <span>Rated 4.9/5 by US companies</span>
            </div>
            <span>|</span>
            <span>No setup fees required</span>
          </div>
        </div>

        {/* Hero Image/Video placeholder */}
        <div className="container mx-auto mt-16 max-w-5xl">
          <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 md:p-16">
            <div className="absolute top-4 right-4">
              <Button variant="outline" className="bg-white/80 backdrop-blur border-white/20">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z"/>
                </svg>
                Watch demo
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg h-64 md:h-80 flex items-center justify-center">
              <div className="text-center text-gray-700">
                <svg className="w-16 h-16 mx-auto mb-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z"/>
                </svg>
                <p className="text-lg font-medium">See CTX-EOR in Action</p>
                <p className="text-sm">Interactive demo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-600 mb-8">Trusted by innovative US companies</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </section>
