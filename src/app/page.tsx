export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Cited</h1>
          <span className="text-sm text-neutral-500">AI Visibility for Shopify Brands</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Badge */}
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide text-red-700 uppercase bg-red-50 rounded-full border border-red-100">
          Only 5 free audits left this week
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          You rank #1 on Google. <br className="hidden md:block" />
          <span className="text-neutral-500">AI search engines don't know you exist.</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
          AI search is stealing your traffic. I’ll manually audit how Perplexity, ChatGPT, and Claude see your brand, and send you 3 exact steps to fix it.
        </p>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 text-left">
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <div className="text-blue-600 font-bold mb-1">4 AI Models</div>
            <p className="text-sm text-neutral-600">Exact visibility across Perplexity, ChatGPT, Claude, and Gemini.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <div className="text-blue-600 font-bold mb-1">12 High-Intent Queries</div>
            <p className="text-sm text-neutral-600">See how AI answers "best [category] brands" and "vs [competitor]".</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <div className="text-blue-600 font-bold mb-1">3 Actionable Fixes</div>
            <p className="text-sm text-neutral-600">A clear, manual playbook to force AI to recommend your brand.</p>
          </div>
        </div>
      </section>

      {/* Tally Form Embed Section */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-2">
          <div className="bg-neutral-50 rounded-xl p-6 mb-2 text-center border-b border-neutral-100">
          <h3 className="text-xl font-bold">Get your free AI visibility audit</h3>
            <p className="text-sm text-neutral-600 mt-1">I'll send your custom audit in 48 hours.</p>
          </div>
          <iframe
          src="https://tally.so/embed/1AQvzb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&darkMode=1"
            loading="lazy"
            width="100%"
            height="462"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Get Your Free AI Visibility Audit"
            className="rounded-xl"
          />
        </div>
        <p className="text-center text-sm text-neutral-500 mt-4">
          100% free manual audit. No credit card. No automated fluff.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">Why is this 100% free?</h4>
            <p className="text-neutral-600">I'm building the automated version of Cited. I need 5 solid case studies to prove it works. You get a free audit; I get a testimonial.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">How is this different from my current SEO?</h4>
            <p className="text-neutral-600">SEO optimizes for Google's crawlers. AI search (Perplexity, ChatGPT) uses Large Language Models. If your brand isn't in their training data or cited in their sources, you don't exist to them.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">What if my brand is already visible?</h4>
            <p className="text-neutral-600">Great. I'll show you exactly how to defend your position and block competitors from stealing your AI-recommended traffic.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Cited. Built for Shopify DTC brands.
      </footer>
    </main>
  );
}