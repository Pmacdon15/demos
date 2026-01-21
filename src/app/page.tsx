import Background from "@/components/background";
import { ArrowRight, Database, Github, Mail, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500/30">
      {/* Background decoration */}
      <Background/>

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-4xl space-y-12">
          {/* Hero Section */}
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Demo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Showcase
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              A collection of modern web experiments demonstrating speed,
              responsiveness, and advanced rendering strategies.
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/optimistic"
              className="group relative block p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                    Optimistic UI
                    <ArrowRight
                      size={18}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </h2>
                  <p className="text-zinc-400">
                    Experience lightning-fast feedback with immediate UI updates
                    using React's useOptimistic hook.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/cache-components"
              className="group relative block p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Database size={24} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                    Cache Strategies
                    <ArrowRight
                      size={18}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </h2>
                  <p className="text-zinc-400">
                    Deep dive into Next.js rendering patterns including PPR,
                    Suspense, and various caching methods.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-zinc-900 relative z-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>
            © 2026 Demo Showcase. Crafted for performance.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/pmacon15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github size={16} />
              pmacon15
            </Link>
            <Link
              href="mailto:patrick@patmac.ca"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              patrick@patmac.ca
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
