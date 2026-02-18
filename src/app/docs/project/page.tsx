"use client";

import { motion } from "framer-motion";

export default function ProjectPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Project Philosophy</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Voca was born from a simple frustration: modern downloading tools were either too simple (<code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">curl</code>) or too old (<code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">wget</code>). We wanted a tool that combined the best of both worlds—modern network stack, smart defaults, and a single binary.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Core Principles</h2>

            <div className="space-y-12">
                <section>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-mono">01</span>
                        Speed First
                    </h3>
                    <p className="text-slate-600 pl-10 border-l-2 border-slate-100 ml-4">
                        Voca is optimized for high-throughput networks. Unlike legacy tools that were designed for dial-up, Voca aggressively manages connections to saturate available bandwidth without hogging resources.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-mono">02</span>
                        Zero Dependencies
                    </h3>
                    <p className="text-slate-600 pl-10 border-l-2 border-slate-100 ml-4">
                        We believe in portability. Voca compiles down to a single, static binary. No shared libraries, no Python runtime, no OpenSSL version mismatches. You can drop the binary on a server and be confident it will run.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-mono">03</span>
                        Secure by Default
                    </h3>
                    <p className="text-slate-600 pl-10 border-l-2 border-slate-100 ml-4">
                        Security isn't an option; it's a requirement. Voca validates SSL certificates strictly by default and respects modern security headers like HSTS. We use the OS native certificate store, ensuring you don't need to manage separate CA bundles.
                    </p>
                </section>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-16">Architecture</h2>
            <p className="text-slate-600 leading-relaxed">
                Voca is built on a modern, asynchronous network engine. It uses an event-driven architecture to handle multiple connections efficiently, making it ideal for recursive downloads where thousands of small files rely on low-latency request handling.
            </p>
        </motion.div>
    );
}
