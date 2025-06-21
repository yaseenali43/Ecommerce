import { X } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';

export default function OffCanvasSidebar({ isDrawerOpen, setIsDrawerOpen }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        isDrawerOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setIsDrawerOpen(false)}
      />
      <div className="fixed left-0 top-0 w-64 h-full bg-secondary">
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>
        <DashboardSidebar isCollapsed={false} />
      </div>
    </div>
  );
}