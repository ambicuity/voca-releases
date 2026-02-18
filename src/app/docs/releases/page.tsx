"use client";

import { motion } from "framer-motion";

export default function ReleasesPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Release History</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Track the evolution of Voca through our release notes.
            </p>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-slate-900">v1.0.0</h2>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Latest</span>
                </div>
                <div className="text-sm font-mono text-slate-400 mb-6 border-b border-slate-100 pb-4">Released: February 2026</div>

                <p className="text-slate-700 mb-6 font-medium">
                    The First Public Release. Voca v1.0.0 brings the speed and reliability of modern downloading to the command line.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider">Highlights</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li>🚀 <strong>Stable Core:</strong> Production-ready HTTP/S and FTP engine.</li>
                            <li>📂 <strong>Recursive Mode:</strong> Full site mirroring capabilities.</li>
                            <li>🔒 <strong>Security:</strong> Strict SSL verification and HSTS support.</li>
                            <li>🍪 <strong>Cookies:</strong> Netscape cookie file support.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider">Artifacts</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            Binaries available for Linux (x86_64, ARM64) and macOS (ARM64). Windows support is experimental.
                        </p>
                        <a href="https://github.com/ambicuity/voca-releases/releases" target="_blank" className="text-blue-600 hover:underline text-sm font-medium">
                            View on GitHub &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
