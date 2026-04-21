export default function Status() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// Status</p>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <h1 className="text-4xl font-semibold tracking-tight">All systems operational</h1>
          </div>
          <p className="text-zinc-400">Compyoot router running live. Last updated April 21, 2026.</p>
        </div>
      </section>
      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Service status</h2>
          {[
            { s: "Router API", u: "99.9%" },{ s: "Classifier", u: "99.9%" },
            { s: "Model Routing", u: "99.8%" },{ s: "Dashboard", u: "99.9%" },
          ].map(({ s, u }) => (
            <div key={s} className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 mb-3">
              <span className="font-medium">{s}</span>
              <span className="text-emerald-400 text-sm">{s !== "Model Routing" ? "operational" : "operational"} · {u}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Incident history</h2>
          <p className="text-zinc-500 text-sm">No incidents reported.</p>
        </div>
      </section>
    </main>
  );
}
