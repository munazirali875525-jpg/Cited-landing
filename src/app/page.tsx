"use client";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is this 100% free?",
      answer:
        "I'm building the automated version of Cited. I need 5 solid case studies to prove it works. You get a free audit; I get a testimonial.",
    },
    {
      question: "How is this different from my current SEO?",
      answer:
        "SEO optimizes for Google's crawlers. AI search (Perplexity, ChatGPT) uses Large Language Models. If your brand isn't in their training data or cited in their sources, you don't exist to them.",
    },
    {
      question: "What if my brand is already visible?",
      answer:
        "Great. I'll show you exactly how to defend your position and block competitors from stealing your AI-recommended traffic.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Cited</h1>
          </div>
          <span className="text-sm text-slate-400">
            AI Visibility for Shopify Brands
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Only 5 free audits left this week
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            You rank #1 on Google.
          </span>
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI doesn't know you exist.
          </span>
        </h2>

        {/* Subheadline */}
               <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          AI search is stealing your traffic. I'll manually audit how Perplexity,
          ChatGPT, Claude, and Gemini see your brand, and send you 3 exact steps to fix it.
        </p> 
    

        {/* Value Props - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🤖</div>
            <div className="text-blue-400 font-bold mb-2 text-lg">4 AI Models</div>
            <p className="text-sm text-slate-400">
              Exact visibility across Perplexity, ChatGPT, Claude, and Gemini.
            </p>
          </div>
          <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-purple-400 font-bold mb-2 text-lg">
              12 High-Intent Queries
            </div>
            <p className="text-sm text-slate-400">
              See how AI answers "best [category] brands" and "vs [competitor]".
            </p>
          </div>
          <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🚀</div>
            <div className="text-pink-400 font-bold mb-2 text-lg">3 Actionable Fixes</div>
            <p className="text-sm text-slate-400">
              A clear, manual playbook to force AI to recommend your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section - Glassmorphism */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 text-center border-b border-white/10">
              <h3 className="text-2xl font-bold mb-2">Get your free AI visibility audit</h3>
              <p className="text-slate-400">I'll send your custom audit in 48 hours.</p>
            </div>
            <div className="p-4">
              <iframe
                src="https://tally.so/embed/1AQvzb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="462"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Get Your Free AI Visibility Audit"
                className="rounded-xl bg-white"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% free
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Manual audit
          </span>
        </div>
      </section>

      {/* FAQ Section - Modern Accordion */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-semibold text-white">
                  {faq.question}
                </span>
                <span className={`text-2xl text-slate-400 ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-400 border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Cited. Built for Shopify DTC brands.
      </footer>
    </main>
  );
}