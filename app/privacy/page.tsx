export default function Privacy() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-zinc-400 text-sm mb-8">Last updated: April 21, 2026</p>
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p>Compyoot ("we", "us", or "our") operates compyoot.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.</p>
            <h2 className="text-xl font-semibold text-zinc-200">Data we collect</h2>
            <p>We collect only what is necessary to provide routing services: API request content (task text), routing decisions, and usage metadata. We do not sell or share your data with third parties.</p>
            <h2 className="text-xl font-semibold text-zinc-200">How we use data</h2>
            <p>Data is used solely to execute routing, improve model selection, and provide the service. Feedback data is used to train routing quality. All data is processed in memory — logs are retained for 30 days.</p>
            <h2 className="text-xl font-semibold text-zinc-200">Contact</h2>
            <p>For privacy concerns: <a href="mailto:hello@compyoot.com" className="text-emerald-400 hover:underline">hello@compyoot.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
