export default function Docs() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// Docs</p>
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Documentation</h1>
          <p className="text-xl text-zinc-400">Connect to Compyoot via OpenAI-compatible API in under 5 minutes.</p>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Quickstart</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="font-semibold mb-3">1. Set your base URL</h3>
              <pre className="text-sm text-emerald-400 overflow-x-auto">{`const client = new OpenAI({
  apiKey: process.env.COMPYOOT_API_KEY,
  baseURL: "https://api.compyoot.com/v1"
});`}</pre>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="font-semibold mb-3">2. Route a task</h3>
              <pre className="text-sm text-emerald-400 overflow-x-auto">{`const response = await client.chat.completions.create({
  model: "auto",
  messages: [{ role: "user", content: "Extract all prices from this listing" }],
  task_hint: "extraction"
});
console.log(response.choices[0].message.content);`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">API Reference</h2>
          <div className="space-y-4">
            {[
              { m: "POST", p: "/v1/chat/completions", d: "Send a chat completion. Compyoot classifies and routes to the optimal model." },
              { m: "POST", p: "/v1/feedback", d: "Submit quality feedback for a completed run." },
              { m: "GET", p: "/v1/models", d: "List all available models and their current status." },
              { m: "GET", p: "/v1/stats", d: "Get router performance statistics." },
            ].map(({ m, p, d }) => (
              <div key={p} className="flex gap-4 items-start">
                <span className={`text-xs font-mono px-2 py-1 rounded ${m === "GET" ? "bg-zinc-800 text-zinc-300" : "bg-emerald-950 text-emerald-400 border border-emerald-900"}`}>{m}</span>
                <div><code className="text-sm text-zinc-200">{p}</code><p className="text-sm text-zinc-400 mt-1">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Available models</h2>
          <p className="text-zinc-400 mb-6">32 models across 8 providers.</p>
          <div className="rounded-xl border border-zinc-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-900 border-b border-zinc-800">
                <tr><th className="text-left p-4 font-semibold">Model</th><th className="text-left p-4 font-semibold">Provider</th><th className="text-left p-4 font-semibold">Best for</th></tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  ["cerebras-llama","Cerebras","Fast extraction"],["groq-llama","Groq","Low-latency"],["samba-llama","SambaNova","Balanced"],
                  ["samba-r1","SambaNova","Reasoning"],["cf-kimi","Fireworks","Analysis"],["gemini","Google","Long context"],
                  ["openrouter-qwen36","OpenRouter","Complex reasoning"],
                ].map(([m,p,b]) => <tr key={m}><td className="p-4 font-mono text-xs">{m}</td><td className="p-4 text-zinc-400">{p}</td><td className="p-4 text-zinc-400">{b}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
