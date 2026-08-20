"use client";
import { useState } from "react";
import { Bot, Target, Zap, ArrowRight, CheckCircle2, Plus } from "lucide-react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question: "What's the catch?",
      answer:
        "AI visibility is an emerging channel most brands are ignoring. I offer 5 free audits weekly to demonstrate the opportunity cost. You get an AI-powered report with human-verified insights showing exactly where you're losing AI-driven traffic. No strings attached.",
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
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans antialiased selection:bg-black selection:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Cited</h1>
          </div>
          <span className="text-sm font-medium text-neutral-500">
            AI Visibility for Shopify Brands
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-semibold tracking-wide text-neutral-600 uppercase bg-white border border-neutral-200 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Accepting 5 Shopify brands this week
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto text-neutral-900">
          Your competitors are getting recommended by AI.
          <br className="hidden md:block" />
          <span className="text-neutral-400">You aren't.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Most Shopify brands lose 20-40% of potential traffic to AI search. We run your brand through 4 AI engines and deliver a custom report with 3 exact fixes.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-neutral-800 text-white font-semibold rounded-full shadow-xl shadow-black/10 transition-all duration-300 hover:scale-105 mb-20"
        >
          Get my free audit
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          <div className="group p-8 bg-white border border-neutral-200 rounded-3xl hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
            <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">See which AI engines ignore you</h3>
            <p className="text-neutral-600 leading-relaxed">
              Find out exactly which AI models are failing to recommend your brand to high-intent buyers.
            </p>
          </div>
          
          <div className="group p-8 bg-white border border-neutral-200 rounded-3xl hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
            <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">Discover searches sending customers to rivals</h3>
            <p className="text-neutral-600 leading-relaxed">
              See the exact queries where AI recommends your competitors instead of you.
            </p>
          </div>

          <div className="group p-8 bg-white border border-neutral-200 rounded-3xl hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
            <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">Reclaim your AI traffic in 7 days</h3>
            <p className="text-neutral-600 leading-relaxed">
              Get a step-by-step playbook to force AI to recommend your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="audit-form" className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-2xl shadow-black/5 overflow-hidden">
          <div className="p-8 md:p-12 text-center border-b border-neutral-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-neutral-900">Get your custom AI Visibility Report</h3>
            <p className="text-neutral-600">AI-powered analysis, expert-reviewed within 24 hours.</p>
          </div>
          
          <div className="p-2">
            <iframe
              src="https://tally.so/embed/1AQvzb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&hideFooter=1"
              loading="lazy"
              width="100%"
              height="550"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Get Your Free AI Visibility Audit"
              className="rounded-xl bg-white"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm font-medium text-neutral-500">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            100% free
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Expert-reviewed
          </span>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-2xl mx-auto px-6 pb-32">
        <h3 className="text-3xl font-bold mb-10 text-center text-neutral-900">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center"
              >
                <span className="font-semibold text-neutral-900 text-lg">
                  {faq.question}
                </span>
                <Plus className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Cited. Built for Shopify DTC brands.
      </footer>
    </main>
  );
}