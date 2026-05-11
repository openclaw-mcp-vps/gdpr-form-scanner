export default function Page() {
  const faqs = [
    {
      q: 'What exactly does the scanner check?',
      a: 'It crawls every form on your site and checks for GDPR-required consent checkboxes, links to your privacy policy, data processing notices, and opt-in language — flagging anything missing or ambiguous.'
    },
    {
      q: 'Do I need technical knowledge to use it?',
      a: 'No. Just paste your website URL and hit scan. You get a plain-English report with specific issues and exactly what to fix on each form.'
    },
    {
      q: 'Does it cover all pages, not just the homepage?',
      a: 'Yes. The crawler follows internal links and scans every page it finds, so no form is missed — contact pages, checkout flows, newsletter signups, and more.'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Your Forms for{' '}
          <span className="text-[#58a6ff]">GDPR Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly crawl your entire website and find every form missing consent checkboxes, privacy links, or data processing notices — before regulators do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-base transition-colors duration-150"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No setup fees. Instant access.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Full-Site Crawl', desc: 'Follows every internal link to find all forms automatically.' },
            { icon: '⚠️', title: 'Violation Detection', desc: 'Flags missing consent boxes, privacy links, and opt-in language.' },
            { icon: '📋', title: 'Actionable Reports', desc: 'Plain-English fixes for each issue, ready to hand to your dev team.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#6e7681] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited URL scans',
              'Full-site crawler (all pages)',
              'GDPR consent checkbox detection',
              'Privacy policy link verification',
              'Data processing notice checks',
              'Downloadable PDF reports',
              'Email alerts for new violations'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR Form Scanner. Built for EU compliance teams.
      </footer>
    </main>
  )
}
