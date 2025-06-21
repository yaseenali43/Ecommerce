
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  PackageOpen,
  ShoppingBag,
  Ticket,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const navStructure = [
  { name: 'Dashboard', href: '/dashboard/admin/home/stats', icon: LayoutDashboard },
  {
    name: 'Products',
    icon: PackageOpen,
    children: [
      { name: 'All Products', href: '/dashboard/admin/product/all-products' },
      { name: 'All Categories', href: '/dashboard/admin/product/all-categories' },
      { name: 'All Subcategories', href: '/dashboard/admin/product/all-sub-categories' },
    ],
  },
  { name: 'Orders', href: '/dashboard/users', icon: ShoppingBag },
  { name: 'Coupons', href: '/dashboard/settings', icon: Ticket },
  { name: 'Users', href: '/dashboard/users', icon: Users },
];

export default function DashboardSidebar({ isCollapsed }) {
  const [openMenu, setOpenMenu] = useState(null);
  const pathname = usePathname();

  const toggleMenu = (name) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const renderLink = (item) => {
    const isActive = item.href && pathname === item.href;
    const Icon = item.icon;
    return (
      <Link
        href={item.href}
        className={`flex items-center p-2 rounded-md transition-colors duration-200 ${
          isCollapsed ? 'justify-center py-0' : ''
        } ${isActive ? 'bg-primary text-white' : '!hover:text-white hover:bg-primary'}`}
      >
        {Icon && <Icon className={`!text-white ${isCollapsed ? 'h-8 w-8 ' : 'h-5 w-5 mr-3'}`} />}
        {!isCollapsed && <span className='text-white'>{item.name}</span>}
      </Link>
    );
  };

  return (
    <div
      className={`bg-secondary transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } h-screen flex flex-col`}
    >
      <div className="p-4 flex items-center">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
        {!isCollapsed && <span className="ml-4 text-xl text-white font-bold">Admin Panel</span>}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navStructure.map((item) => (
            <li key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`w-full flex items-center p-2 rounded-md transition-colors duration-200 ${
                      isCollapsed ? 'justify-center py-0' : ''
                    } text-gray-600 hover:text-white hover:bg-primary`}
                  >
                    <item.icon className={`  ${isCollapsed ? 'h-8 w-8' : 'h-5 w-5 mr-3'}`} />
                    {!isCollapsed && <span className="flex-1 text-left">{item.name}</span>}
                    {!isCollapsed &&
                      (openMenu === item.name ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      ))}
                  </button>
                  {openMenu === item.name && !isCollapsed && (
                    <ul className="mt-1 ml-8 space-y-1">
                      {item.children.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className={`block p-2 rounded-md transition-colors duration-200 
                              ${pathname === sub.href
                                ? 'bg-blue-100 text-white'
                                : '!text-white/50'
                            }`}
                          >
                            <span className=''>{sub.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                renderLink(item)
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}