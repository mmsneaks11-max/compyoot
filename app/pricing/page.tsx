export default function Pricing() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// Pricing</p>
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Simple pricing. Real savings.</h1>
          <p className="text-xl text-zinc-400 mb-4">No per-model pricing. One flat rate covers all 32 models.</p>
          <p className="text-sm text-emerald-400">First 10,000 requests free. No credit card required.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col">
              <h2 className="text-lg font-semibold mb-2">Starter</h2>
              <p className="text-zinc-400 text-sm mb-6">For dev teams evaluating routing.</p>
              <div className="mb-6"><span className="text-4xl font-semibold">$0</span><span className="text-zinc-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-zinc-400 mb-8 flex-1">
                <li>✓ 10,000 requests/mo</li>
                <li>✓ 8 providers</li>
                <li>✓ Basic routing</li>
                <li>✓ OpenAI-compatible API</li>
              </ul>
              <a href="/docs" className="block text-center px-6 py-3 rounded-full border border-zinc-700 text-sm font-medium hover:border-zinc-500 transition-colors">Get started</a>
            </div>

            <div className="p-8 rounded-2xl border border-emerald-500/50 bg-emerald-950/20 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 text-xs font-semibold">Most popular</div>
              <h2 className="text-lg font-semibold mb-2">Pro</h2>
              <p className="text-zinc-400 text-sm mb-6">For production agent fleets.</p>
              <div className="mb-6"><span className="text-4xl font-semibold">$49</span><span className="text-zinc-500">/mo</span></div>
              <ul className="space-y-3 text-sm text-zinc-400 mb-8 flex-1">
                <li>✓ 500,000 requests/mo</li>
                <li>✓ All 32 models</li>
                <li>✓ Priority routing</li>
                <li>✓ Cost ceiling controls</li>
                <li>✓ Usage dashboard</li>
              </ul>
              <a href="mailto:hello@compyoot.com?subject=Pro plan" className="block text-center px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors">Get started →</a>
            </div>

            <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col">
              <h2 className="text-lg font-semibold mb-2">Enterprise</h2>
              <p className="text-zinc-400 text-sm mb-6">For large fleets with custom needs.</p>
              <div className="mb-6"><span className="text-4xl font-semibold">Custom</span></div>
              <ul className="space-y-3 text-sm text-zinc-400 mb-8 flex-1">
                <li>✓ Unlimited requests</li>
                <li>✓ Custom routing rules</li>
                <li>✓ Dedicated infrastructure</li>
                <li>✓ SLA guarantees</li>
                <li>✓ On-prem option</li>
              </ul>
              <a href="mailto:hello@compyoot.com?subject=Enterprise" className="block text-center px-6 py-3 rounded-full border border-zinc-700 text-sm font-medium hover:border-zinc-500 transition-colors">Contact sales</a>
            </div>
          </div>

          <div className="mt-20 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-center">
            <h2 className="text-xl font-semibold mb-2">Cost savings</h2>
            <p className="text-zinc-400 text-sm mb-8">Compyoot averages ~$0.0015/1K tokens vs $0.015 for Opus — 90% savings.</p>
            <p className="text-sm text-zinc-500">At 1M tokens/month, Compyoot saves ~$13,500/month vs Opus.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
