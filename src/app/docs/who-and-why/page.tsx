"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function WhoAndWhyPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Who and Why</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Voca isn't just another downloader. It's a response to the evolving needs of the modern web.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Voca?</h2>
            <p className="text-slate-600 mb-4">
                While tools like <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">wget</code> and <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">curl</code> are legendary, they show their age. <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">wget</code> struggles with modern SSL/TLS configurations and dynamic sites. <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">curl</code> is a transfer tool, not a recursive downloader.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 italic text-slate-700 mb-8">
                Voca fills the gap: a <strong>recursive downloader</strong> built on a <strong>modern network stack</strong>.
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Voca vs Wget</h2>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-medium">Feature</th>
                            <th className="px-6 py-4 font-bold text-blue-600">Voca</th>
                            <th className="px-6 py-4 font-medium text-slate-900">Wget</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium text-slate-900">Binary Size</td>
                            <td className="px-6 py-4 text-slate-600"><strong>~200KB</strong> (Static)</td>
                            <td className="px-6 py-4 text-slate-500">~4MB (Dynamic)</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium text-slate-900">Dependencies</td>
                            <td className="px-6 py-4 text-slate-600"><span className="inline-flex items-center gap-1 text-green-600 font-medium"><Check size={14} /> Zero</span></td>
                            <td className="px-6 py-4 text-slate-500">OpenSSL, LibIDN, libc</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium text-slate-900">Efficiency</td>
                            <td className="px-6 py-4 text-slate-600"><strong>Low CPU/Mem</strong></td>
                            <td className="px-6 py-4 text-slate-500">Standard</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-medium text-slate-900">SSL/TLS</td>
                            <td className="px-6 py-4 text-slate-600"><strong>Seamless</strong></td>
                            <td className="px-6 py-4 text-slate-500">Config heavy</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Who is Voca for?</h2>
            <ul className="space-y-4">
                {[
                    { role: "Developers", desc: "Who want a single binary to drop into CI/CD pipelines." },
                    { role: "Sysadmins", desc: "Who need to mirror internal sites or archive documentation." },
                    { role: "Power Users", desc: "Who want to download files efficiently without memorizing 50 flags." },
                ].map(item => (
                    <li key={item.role} className="flex gap-3">
                        <div className="mt-1"><Check size={20} className="text-blue-500" /></div>
                        <div>
                            <strong className="text-slate-900">{item.role}:</strong> <span className="text-slate-600">{item.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
