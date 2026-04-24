"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }


  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Clients", href: "/dashboard/customer" },
    { name: "Tickets", href: "/tickets" },
    { name: "Auditory", href: "/auditory" },
  ];

  const baseClass =
    "relative text-blue-500 font-medium hover:text-blue-700 duration-200 pb-1";

  const activeClass =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500";

  return (
    <Container>
      <header className="w-full my-4 p-3 flex gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-2 border-b-2 transition-all duration-300 font-medium
                ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-500"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </header>
    </Container>
  );
}