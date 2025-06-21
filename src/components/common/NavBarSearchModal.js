"use client";
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NavBarSearchModal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white rounded-lg w-[500px] max-w-[90%] p-6 shadow-lg"
      >
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Items..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {/* <span className="text-sm font-medium">esc</span> */}
            <FontAwesomeIcon icon={faSearch} className='h-4 w-4' />
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Recent</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
              <span className="text-sm">Components / Application UI / Layout / Containers</span>
              <div className="flex space-x-2">

                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                </button>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
              <span className="text-sm">Styling with utility classes</span>
              <div className="flex space-x-2">

                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                </button>
              </div>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
              <span className="text-sm">gap</span>
              <div className="flex space-x-2">

                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <span className="text-xs text-gray-500">Search by <span className="text-primary font-semibold ">Elctornics Cart</span></span>
        </div>
      </div>
    </div>
  );
}