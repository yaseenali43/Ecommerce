'use client';
import { useState } from 'react';
import { Bell, X } from 'lucide-react';

export default function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [
    { id: 1, customer: 'fenipel492 Thakur', amount: '$119 USD', date: 'Apr 10, 2025 12:13 AM' },
    { id: 2, customer: 'Demo demo', amount: '$1059 USD', date: 'Feb 17, 2025 6:07 PM' },
    { id: 3, customer: 'Naim Ahmed', amount: '$301.06 USD', date: 'Dec 9, 2024 1:46 PM' },
  ];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <Bell className="h-6 w-6 mt-2 text-gray-600" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {notifications.length}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-md shadow-lg p-4 z-10">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex items-start space-x-2">
                <div className="flex-1">
                  <p className="font-bold text-black">
                    {notif.customer} - {notif.amount}
                  </p>
                  <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-md mt-1">
                    New Order!
                  </span>
                  <p className="text-gray-600 text-sm mt-1">{notif.date}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}