"use client";

import { motion } from "framer-motion";

export default function ToolPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Tool Reference</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Voca provides a rich command-line interface for controlling every aspect of your download. Below is a comprehensive guide to its usage and options.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Basic Usage</h2>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm shadow-lg overflow-x-auto mb-8">
                voca [options] &lt;url&gt;
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Common Options</h2>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden font-mono text-sm">
                <div className="grid grid-cols-[1fr,2fr] gap-4 p-4 border-b border-slate-100 bg-slate-50 font-bold text-slate-700">
                    <div>Option</div>
                    <div>Description</div>
                </div>
                <div className="divide-y divide-slate-100">
                    {[
                        { opt: "--output, -o <file>", desc: "Write output to <file> instead of default." },
                        { opt: "--recursive, -r", desc: "Turn on recursive retrieving." },
                        { opt: "--level, -l <number>", desc: "Maximum recursion depth (default: 5)." },
                        { opt: "--no-clobber, -nc", desc: "Skip downloads that would download to existing files." },
                        { opt: "--continue, -c", desc: "Resume getting a partially-downloaded file." },
                        { opt: "--user-agent", desc: "Identify as <agent-string> to the HTTP server." },
                        { opt: "--header", desc: "Add a custom header to the request." },
                    ].map((item) => (
                        <div key={item.opt} className="grid grid-cols-[1fr,2fr] gap-4 p-4 hover:bg-slate-50 transition-colors">
                            <div className="text-blue-600">{item.opt}</div>
                            <div className="text-slate-600">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-16">Examples</h2>

            <div className="space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Recursive Mirror (Depth 1)</h3>
                    <p className="text-slate-600 mb-3 text-sm">Download a page and all its immediate assets (images, scripts, styles).</p>
                    <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <code>voca --recursive --level=1 https://example.com</code>
                    </pre>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Authenticated Download</h3>
                    <p className="text-slate-600 mb-3 text-sm">Use a cookies file exported from your browser to access protected content.</p>
                    <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <code>voca --load-cookies=cookies.txt https://example.com/secure-file.zip</code>
                    </pre>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Ignore SSL Errors</h3>
                    <p className="text-slate-600 mb-3 text-sm">Useful for testing against local development servers with self-signed certificates.</p>
                    <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <code>voca --no-check-certificate https://localhost:8080</code>
                    </pre>
                </section>
            </div>
        </motion.div>
    );
}
