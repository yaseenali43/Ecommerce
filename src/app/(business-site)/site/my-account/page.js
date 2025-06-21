

'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import { Settings, ShoppingCart, Home, User, LogOut, RefreshCcw } from 'lucide-react';
import Orders from '../[orderId]/page';
import Addresses from '@/components/site-sections/addresses/Addresses';
import MyProfile from '@/components/site-sections/my-profile/MyProfile';

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { currentUser, logout } = useContext(AuthContext);
  const router = useRouter();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <Settings /> },
    { id: 'orders', name: 'Orders', icon: <ShoppingCart /> },
    { id: 'orders-returns', name: 'Order & Returns', icon: <RefreshCcw /> },
    { id: 'addresses', name: 'Addresses', icon: <Home /> },
    { id: 'profile', name: 'Profile', icon: <User /> },
    { id: 'logout', name: 'Log out', icon: <LogOut /> },
  ];

  const handleMenuClick = (id) => {
    if (id === 'logout') {
      logout();
      router.push('/auth/site-auth');
    } else {
      setActiveTab(id);
    }
  };

  return (
    <div className="mx-auto pt-30 py-15 p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Left Column: Vertical Scroll-Spy Menu */}
        <div className="md:w-64 h-fit bg-gray-50 p-4 rounded-lg">
          <h2 className="text-base font-bold !text-secondary mb-4">MY ACCOUNT</h2>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center py-3 px-4 cursor-pointer ${
                  activeTab === item.id ? 'text-[#E91E63]' : 'text-gray-500'
                }`}
                onClick={() => handleMenuClick(item.id)}
              >
                {React.cloneElement(item.icon, { size: 20 })}
                <span className="ml-3">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Content Area */}
        <div className="flex-1 p-4 md:p-6 bg-white border border-gray-200 rounded-lg mt-4 md:mt-0">
          {activeTab === 'dashboard' && <DashboardContent />}
          {activeTab === 'orders' && <Orders />}
          {activeTab === 'orders-returns' && <Orders isOrdersAndReturns={true} />}
          {activeTab === 'addresses' && <Addresses />}
          {activeTab === 'profile' && <MyProfile />}
        </div>
      </div>
    </div>
  );
}

function DashboardContent() {
  const { currentUser, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth/site-auth');
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <span className="bg-[#E91E63] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">
          1
        </span>
        <h2 className="text-lg font-bold !text-secondary">
          Hello, {currentUser?.name}{' '}
          <span className="text-[#E91E63]">
            (not {currentUser?.name}?{' '}
            <button className="underline cursor-pointer" onClick={handleLogout}>
              Log out
            </button>
            )
          </span>
        </h2>
      </div>
      <p className="text-xs md:text-sm text-gray-600">
        From your account dashboard you can view your recent orders, manage your shipping and
        billing addresses, and edit your password and account details.
      </p>
    </div>
  );
}

