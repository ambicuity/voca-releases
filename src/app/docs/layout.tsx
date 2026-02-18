"use client";

import Link from "next/link";
import { DocsSidebar } from "@/components/docs-sidebar";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-white relative z-10">
            {/* Docs Navbar */}
            <nav className="w-full border-b border-black/5 bg-white/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="p-2 -ml-2 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </Link>
                        <div className="font-mono text-sm tracking-widest text-blue-600 font-bold">
                            VOCA <span className="text-slate-400 font-normal">/ DOCS</span>
                        </div>
                    </div>

                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div className="container mx-auto px-4 flex items-start pt-8 pb-24">
                {/* Desktop Sidebar */}
                <DocsSidebar />

                {/* Mobile Sidebar Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-40 md:hidden">
                        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl p-6 overflow-y-auto">
                            {/* Mobile Sidebar Content - Reusing logic or components would be ideal, referencing simplified list here */}
                            <div className="space-y-8 font-mono">
                                {/* Reuse mapping for simplicity in maintenance */}
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Getting Started</h3>
                                    <div className="space-y-2">
                                        <Link href="/docs" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Overview</Link>
                                        <Link href="/docs/project" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Project</Link>
                                        <Link href="/docs/tool" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Tool</Link>
                                        <Link href="/docs/who-and-why" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Who and Why</Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Reference</h3>
                                    <div className="space-y-2">
                                        <Link href="/docs/protocols" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Protocols</Link>
                                        <Link href="/docs/ssl-certificates" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">SSL Certificates</Link>
                                        <Link href="/docs/releases" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Releases</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 w-full max-w-3xl min-w-0 prose prose-slate prose-headings:font-bold prose-h1:text-3xl prose-h1:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500">
                    {children}
                    <footer className="mt-20 pt-10 border-t border-slate-100 font-mono text-xs">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-sm font-mono text-slate-400">
                                <p>© 2026 VOCA</p>
                                <p>DESIGNED FOR VELOCITY</p>
                            </div>

                            <div className="flex flex-col items-center md:items-end gap-2">
                                <div className="flex gap-3 text-slate-400">
                                    <a href="https://www.linkedin.com/in/riteshengineer/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><span className="sr-only">LinkedIn</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                                    <a href="mailto:ritesh19@bu.edu" className="hover:text-blue-600 transition-colors"><span className="sr-only">Email</span><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></a>
                                    <a href="https://github.com/ambicuity" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><span className="sr-only">GitHub</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg></a>
                                </div>
                                <a href="https://buymeacoffee.com/ritesh.rana" target="_blank" className="block hover:opacity-90 transition-opacity mt-1">
                                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="h-8 w-auto" />
                                </a>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
