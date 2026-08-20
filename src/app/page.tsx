"use client";
import { useState } from "react";
import { Bot, Target, Zap, ArrowRight, CheckCircle2, AlertTriangle, Search } from "lucide-react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question: "What's the catch?",
      answer:
        "AI visibility is an emerging channel most brands are ignoring. I offer 5 free audits weekly to demonstrate the opportunity cost. You get a detailed report showing exactly where you're losing AI-driven traffic. No strings attached.",
    },
    {
      question: "How is this different from my current SEO?",
      answer:
        "SEO helps you rank on Google. But AI search engines like Perplexity and ChatGPT don't use Google's algorithm. They read the web like a human and pick the best brands to recommend. If your brand isn't in the sources they cite, you're invisible - even if you rank #1 on Google.",
    },
    {
      question: "What if my brand is already visible?",
      answer:
        "Great. I'll show you exactly how to defend your position and block competitors from stealing your AI-recommended traffic.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      {/* Mesh Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <header className="relative border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
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
      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Only 5 free audits left this week
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Your competitors are getting recommended by AI.
          </span>
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            You aren't.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Most Shopify brands lose 20-40% of potential traffic to AI search. Get a custom report showing exactly where you're invisible to Perplexity, ChatGPT, Claude, and Gemini - and the 3 steps to fix it.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 mb-16"
        >
          Get my free audit
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
            <Bot className="w-8 h-8 text-blue-400 mb-3" />
            <div className="text-blue-400 font-bold mb-2 text-lg">See which AI engines ignore you</div>
            <p className="text-sm text-slate-400">
              Find out exactly which AI models (Perplexity, ChatGPT, Claude, Gemini) are failing to recommend your brand.
            </p>
          </div>
          <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
            <Target className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-purple-400 font-bold mb-2 text-lg">
              Discover searches sending customers to rivals
            </div>
            <p className="text-sm text-slate-400">
              See the exact queries where AI recommends your competitors instead of you.
            </p>
          </div>
          <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
            <Zap className="w-8 h-8 text-pink-400 mb-3" />
            <div className="text-pink-400 font-bold mb-2 text-lg">Reclaim your AI traffic in 7 days</div>
            <p className="text-sm text-slate-400">
              Get a step-by-step playbook to force AI to recommend your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="audit-form" className="relative max-w-2xl mx-auto px-6 py-16">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 text-center border-b border-white/10">
              <h3 className="text-2xl font-bold mb-2">Get your custom AI Visibility Report</h3>
              <p className="text-slate-400">I'll send your personalized audit within 24 hours.</p>
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
        
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            100% free
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Manual audit
          </span>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative max-w-2xl mx-auto px-6 pb-24">
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
      <footer className="relative border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Cited. Built for Shopify DTC brands.
      </footer>
    </main>
  );
}