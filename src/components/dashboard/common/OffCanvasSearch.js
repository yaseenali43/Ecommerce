import { X, Search } from 'lucide-react';

export default function OffCanvasSearch({ isSearchOpen, setIsSearchOpen }) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${
        isSearchOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setIsSearchOpen(false)}
      />
      <div className="fixed top-0 left-0 right-0 bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Here..."
              className="pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-4 p-2 rounded-md hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}