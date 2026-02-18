"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  const sections = [
    {
      title: "Getting Started",
      items: [
        { title: "Overview", href: "/docs" },
        { title: "Project", href: "/docs/project" },
        { title: "Tool", href: "/docs/tool" },
        { title: "Who and Why", href: "/docs/who-and-why" },
      ],
    },
    {
      title: "Reference",
      items: [
        { title: "Protocols", href: "/docs/protocols" },
        { title: "SSL Certificates", href: "/docs/ssl-certificates" },
        { title: "Releases", href: "/docs/releases" },
      ],
    },
  ];

  return (
    <aside className="hidden md:block w-64 shrink-0 border-r border-slate-200 pr-6 mr-12 py-6 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto font-mono">
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4 px-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-2 py-1.5 text-sm rounded-md transition-colors",
                      isActive
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
