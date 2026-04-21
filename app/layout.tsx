import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compyoot — Routing Intelligence for AI Agents",
  description: "Cut your AI compute bill by 90% without sacrificing quality. The intelligent layer that routes every request to the right model.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
              <span className="text-xl">⚡</span>
              <span>Compyoot</span>
            </a>
            <div className="flex items-center gap-8 text-sm">
              <a href="/how-it-works" className="text-zinc-400 hover:text-zinc-100 transition-colors">How it works</a>
              <a href="/pricing" className="text-zinc-400 hover:text-zinc-100 transition-colors">Pricing</a>
              <a href="/docs" className="text-zinc-400 hover:text-zinc-100 transition-colors">Docs</a>
              <a href="/status" className="text-zinc-400 hover:text-zinc-100 transition-colors">Status</a>
              <a href="/pricing" className="px-4 py-2 bg-white text-zinc-950 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                Start saving
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-zinc-800 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <span>© 2026 Compyoot. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-zinc-300 transition-colors">Terms</a>
              <a href="/docs" className="hover:text-zinc-300 transition-colors">Docs</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
