import React from "react";
import Link from "next/link";
import { LayoutDashboard, PlusCircle, User } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: PlusCircle, label: "New", href: "/new" },
  { icon: User, label: "Account", href: "/account" },
];

const Sidebar = () => {
  return (
    <aside className="bg-primary text-white w-64 min-h-screen hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-light transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
