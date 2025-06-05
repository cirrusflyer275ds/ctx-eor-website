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
{/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Build your US team — without the risk
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our revolutionary try-before-you-hire model lets you test candidates
                before committing, while our Job Object technology ensures perfect matches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="w-8 h-8 bg-orange-100 rounded mb-4 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Try-Before-Hire EOR</h3>
                  <p className="text-sm text-gray-600">Test candidates with our innovative "test drive" program</p>
                  <svg className="w-4 h-4 mt-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <div className="w-8 h-8 bg-orange-100 rounded mb-4 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Job Object Technology</h3>
                  <p className="text-sm text-gray-600">AI-powered job matching using O*Net, SOC codes, and census data</p>
                  <svg className="w-4 h-4 mt-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right side - Image/Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96">
                <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full" />
                    <div>
                      <div className="h-3 w-20 bg-gray-200 rounded" />
                      <div className="h-2 w-16 bg-gray-100 rounded mt-1" />
                    </div>
                    <div className="ml-auto">
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Test Drive</div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-gray-600 mt-8">
                  <p className="font-medium">Job Object Creation Interface</p>
                  <p className="text-sm">Interactive demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Process demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 h-96">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Video Screening Dashboard</h4>
                    <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Live</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className="text-sm">Technical Skills: 95%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className="text-sm">Cultural Fit: 88%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l7-5-7-5z"/>
                        </svg>
                      </div>
                      <span className="text-sm">Interview Summary Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Streamlined screening for faster decisions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our screening matrix eliminates unsuitable candidates faster while our video
                interviews surface the best talent. Every interview is recorded and summarized
                for your review.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h3 className="font-semibold text-gray-900">Smart Screening Process</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Faster eliminations, accelerated candidate progression, and recorded interviews
                  with AI-generated summaries for informed decision-making.
                </p>
                <svg className="w-4 h-4 mt-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to revolutionize your US hiring?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join innovative companies using CTX-EOR's try-before-you-hire platform.
            Experience the future of US employment today.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
