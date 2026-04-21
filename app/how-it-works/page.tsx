export default function HowItWorks() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// How it works</p>
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Routing intelligence<br />for AI agents.</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Compyoot sits between your agents and your models.
            Every request passes through the router — classifies the task, picks the optimal model, executes, logs the result.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Task classification</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="font-semibold mb-3">Task type</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {["extraction","analysis","generation","code","research","creative","simple","complex","reasoning"].map(t => (
                  <span key={t} className="px-2 py-1 rounded bg-zinc-800 text-zinc-300">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="font-semibold mb-3">Complexity score</h3>
              <p className="text-sm text-zinc-400">0.0 → 1.0 from input length, structure, context requirements.</p>
              <div className="flex gap-2 text-xs mt-3">
                <span className="px-2 py-1 rounded bg-emerald-900/50 text-emerald-400">low &lt; 0.3</span>
                <span className="px-2 py-1 rounded bg-amber-900/50 text-amber-400">mid 0.3–0.7</span>
                <span className="px-2 py-1 rounded bg-red-900/50 text-red-400">high &gt; 0.7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Routing table</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead className="bg-zinc-900 border-b border-zinc-800">
                <tr>
                  <th className="text-left p-4 font-semibold">Task type</th>
                  <th className="text-left p-4 font-semibold">Low</th>
                  <th className="text-left p-4 font-semibold">Mid</th>
                  <th className="text-left p-4 font-semibold">High</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  ["extraction","cerebras-llama","groq-llama","cf-kimi"],
                  ["analysis","groq-llama","samba-llama","samba-r1"],
                  ["code","cerebras-qwen","samba-v3","samba-r1"],
                  ["research","cerebras-llama","cf-kimi","gemini"],
                  ["reasoning","cerebras-qwen","openrouter-qwen36","openrouter-qwen36"],
                ].map(([t,low,mid,high]) => (
                  <tr key={t}><td className="p-4 font-medium">{t}</td><td className="p-4 text-zinc-400">{low}</td><td className="p-4 text-zinc-400">{mid}</td><td className="p-4 text-zinc-400">{high}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to route?</h2>
          <a href="/docs" className="inline-block px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
            Read the docs →
          </a>
        </div>
      </section>
    </main>
  );
}
