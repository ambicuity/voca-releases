"use client";

import { motion } from "framer-motion";

export default function DocsOverviewPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Documentation</h1>
            <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                Welcome to the Voca documentation. Voca is a next-generation network downloader engineered for performance, reliability, and simplicity. It aims to replace legacy tools like <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">wget</code> with a modern, zero-dependency alternative.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 text-blue-800 text-sm">
                <strong>Current Version:</strong> v1.0.0 (Stable)
            </div>

            <p className="mb-8">
                Voca is built for developers, sysadmins, and automation engineers who need a tool that just works—without complex configuration or dependency hell.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { title: "Zero Dependencies", desc: "A single, static binary that runs anywhere." },
                    { title: "Recursive Engine", desc: "Smart mirroring for backing up websites or assets." },
                    { title: "Resilient", desc: "Intelligent retry logic for unstable networks." },
                    { title: "Secure by Default", desc: "Enforced SSL/TLS and HSTS support." },
                ].map((feature) => (
                    <li key={feature.title} className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                        <strong className="block text-slate-900 mb-1">{feature.title}</strong>
                        <span className="text-slate-600 text-sm">{feature.desc}</span>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Quick Start</h2>
            <p className="text-slate-600 mb-4">Install Voca using the command line:</p>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm shadow-lg overflow-x-auto">
                <span className="text-blue-400">$</span> curl -fsSL voca.riteshrana.engineer/install.sh | sh
            </div>
        </motion.div>
    );
}
