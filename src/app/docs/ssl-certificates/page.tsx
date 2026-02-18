"use client";

import { motion } from "framer-motion";

export default function SSLCertificatesPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">SSL Certificates</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Managing secure connections and troubleshooting certificate errors.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Default Behavior</h2>
            <p className="text-slate-600 mb-4">
                By default, Voca validates server certificates against the system's root CA store. If a certificate is invalid, expired, or self-signed, Voca will refuse to connect to protect you from MITM attacks.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Ignoring Errors</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-amber-900 mb-6 text-sm">
                <strong>Warning:</strong> Disabling certificate verification makes your connection insecure. Only do this for trusted local testing.
            </div>
            <p className="text-slate-600 mb-3">
                To bypass verification (e.g., for local development), use the <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-slate-700">--no-check-certificate</code> flag:
            </p>
            <pre className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-8">
                <code>voca --no-check-certificate https://localhost:8080</code>
            </pre>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Client Certificates</h2>
            <p className="text-slate-600 mb-4">
                Voca supports mutual TLS (mTLS) for authenticated connections. You can provide a client certificate and private key.
            </p>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg font-mono text-sm text-slate-600">
                --certificate=&lt;file&gt;     Client certificate file
                <br />
                --private-key=&lt;file&gt;     Private key file
            </div>
        </motion.div>
    );
}
