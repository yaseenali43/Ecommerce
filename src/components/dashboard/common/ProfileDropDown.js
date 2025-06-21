'use client';
import { useState } from 'react';
import { User, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const user = { id: '1', email: 'admin@gmail.com' };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="h-5 w-5 text-gray-600" />
        </div>
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg p-4 z-10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-black">{user.id}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/account-settings"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
              >
                <Settings className="h-4 w-4" />
                <span>Account Settings</span>
              </Link>
            </li>
            <li>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}