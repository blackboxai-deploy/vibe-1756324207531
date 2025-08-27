"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const handleGetStarted = () => {
    alert("Welcome to your Next.js application!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium">
            Welcome to your Next.js Application
          </p>
        </div>

        {/* Description Card */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                🚀 You&apos;re all set!
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                This is a modern Hello World page built with{" "}
                <span className="font-semibold text-blue-600">Next.js 15</span>,{" "}
                <span className="font-semibold text-cyan-600">Tailwind CSS</span>, and{" "}
                <span className="font-semibold text-purple-600">shadcn/ui</span> components.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">TypeScript Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Modern Components</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">App Router</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Production Ready</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-sm text-slate-500">
          Built with ❤️ using Next.js • Ready for your next big idea
        </div>
      </div>
    </div>
  );
}