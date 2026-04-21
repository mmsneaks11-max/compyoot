export default function Home() {
  return (
    <main className="pt-16">
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 mb-8">
            <span className="text-emerald-400">●</span>
            Router live — 32 models routing
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Route every request<br />
            <span className="text-zinc-400">to the right model.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Compyoot is an intelligent routing layer for AI agents.
            Send any task — it classifies, picks the optimal model, executes, and learns.
            Cut your AI compute bill by 90% without sacrificing quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
              Start saving →
            </a>
            <a href="/how-it-works" className="px-8 py-4 border border-zinc-700 rounded-full text-zinc-300 hover:border-zinc-500 transition-colors">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// How it works</p>
          <h2 className="text-3xl font-semibold mb-16">Three steps. Infinite savings.</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Send your request", desc: "POST to a single endpoint. Compyoot receives the task — no need to pick a model." },
              { step: "02", title: "Compyoot classifies", desc: "Your task is categorized by type and complexity. The router selects the best available model." },
              { step: "03", title: "Optimal model executes", desc: "Your request hits the chosen model. Results come back through Compyoot. Every routing decision learns." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                <span className="text-xs font-mono text-emerald-400 mb-4 block">{step}</span>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// Why Compyoot</p>
          <h2 className="text-3xl font-semibold mb-16">Built for agent systems.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Right model, every time", desc: "Automatically selects the best model for each task type." },
              { icon: "🗺️", title: "Cross-machine routing", desc: "Routes tasks across your entire infrastructure." },
              { icon: "📈", title: "Gets smarter over time", desc: "Tracks outcomes per route. Learns which paths produce the best results." },
              { icon: "💸", title: "Cost-aware by design", desc: "Every routing decision is budget-aware." },
              { icon: "🔁", title: "Fallback built in", desc: "If a model fails, Compyoot reroutes automatically." },
              { icon: "🌐", title: "32+ models, one endpoint", desc: "GPT, Claude, Gemini, Groq, Cerebras, and more." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                <span className="text-2xl mb-4 block">{icon}</span>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-7xl font-semibold tracking-tight mb-4">32</div>
          <p className="text-xl text-zinc-400">models routing live across 8 providers</p>
          <p className="text-sm text-zinc-600 mt-2">Groq · Cerebras · SambaNova · Fireworks · OpenRouter · Gemini · OpenAI · Anthropic</p>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to cut your AI bill?</h2>
          <p className="text-zinc-400 mb-10 text-lg">Start routing through Compyoot today. First 10,000 requests free.</p>
          <a href="/pricing" className="inline-block px-10 py-4 bg-white text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
            View pricing →
          </a>
        </div>
      </section>
    </main>
  );
}
