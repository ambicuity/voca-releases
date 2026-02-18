"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProtocolsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Protocols</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Voca relies on a robust networking engine that supports the core protocols of the web.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">HTTP & HTTPS</h2>
            <p className="text-slate-600 mb-4">
                Support for HTTP/1.1 and HTTP/2 is built-in. Voca automatically handles:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                <li><strong>Gzip/Brotli Compression:</strong> Decompresses content transparently.</li>
                <li><strong>Keep-Alive:</strong> Reuses connections for efficiency.</li>
                <li><strong>Redirects:</strong> Follows redirects (up to 10 by default).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">FTP</h2>
            <p className="text-slate-600 mb-4">
                Voca supports downloading from FTP servers, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                <li><strong>Authentication:</strong> Basic user/pass auth.</li>
                <li><strong>Binary Mode:</strong> Ensures file integrity.</li>
                <li><strong>Passive Mode:</strong> Friendly to firewalls.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">SSL/TLS</h2>
            <p className="text-slate-600">
                For a deep dive into how Voca handles secure connections, see the <Link href="/docs/ssl-certificates" className="text-blue-600 hover:underline">SSL Certificates</Link> guide.
            </p>
        </motion.div>
    );
}
