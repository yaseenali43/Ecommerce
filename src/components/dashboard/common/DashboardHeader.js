
// import { Menu, AlignRight, Search } from 'lucide-react';
// import NotificationsDropdown from './NotificationDropDown';
// import ProfileDropdown from './ProfileDropDown';

// export default function DashboardHeader({
//   isCollapsed,
//   setIsCollapsed,
//   setIsDrawerOpen,
//   setIsSearchOpen,
// }) {
//   return (
//     <header className="bg-hero p-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           {/* Toggle button for sidebar */}
//           <button
//             onClick={() => {
//               if (window.innerWidth < 1024) {
//                 setIsDrawerOpen((prev) => !prev);
//               } else {
//                 setIsCollapsed((prev) => !prev);
//               }
//             }}
//             className="p-2 rounded-md hover:bg-gray-100"
//           >
//             {isCollapsed || window.innerWidth < 1024 ? (
//               <Menu className="h-6 w-6" />
//             ) : (
//               <AlignRight className="h-6 w-6" />
//             )}
//           </button>
//           {/* Inline search bar for larger screens */}
//           <div className="hidden md:block relative">
//             <input
//               type="text"
//               placeholder="Search Here..."
//               className="pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
//             />
//             <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//           </div>
//           {/* Search icon for small screens */}
//           <button
//             onClick={() => setIsSearchOpen(true)}
//             className="md:hidden p-2 rounded-md hover:bg-gray-100"
//           >
//             <Search className="h-6 w-6" />
//           </button>
//         </div>
//         <div className="flex items-center space-x-4">
//           <NotificationsDropdown />
//           <ProfileDropdown />
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { Menu, AlignRight, Search } from 'lucide-react';
import NotificationsDropdown from './NotificationDropDown';
import ProfileDropdown from './ProfileDropDown';

export default function DashboardHeader({
  isCollapsed,
  setIsCollapsed,
  setIsDrawerOpen,
  setIsSearchOpen,
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="bg-hero p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Toggle button for sidebar */}
          <button
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsDrawerOpen((prev) => !prev);
              } else {
                setIsCollapsed((prev) => !prev);
              }
            }}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {isCollapsed || (isClient && window.innerWidth < 1024) ? (
              <Menu className="h-6 w-6" />
            ) : (
              <AlignRight className="h-6 w-6" />
            )}
          </button>
          {/* Inline search bar for larger screens */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search Here..."
              className="pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {/* Search icon for small screens */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <NotificationsDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}