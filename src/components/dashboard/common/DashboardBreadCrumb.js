import Link from 'next/link';
import React from 'react';

/**
 * @typedef {Object} BreadcrumbSegment
 * @property {string} label - The text to display for the breadcrumb
 * @property {string} [href] - The optional URL for the breadcrumb link
 */

/**
 * @param {Object} props
 * @param {BreadcrumbSegment[]} props.segments - Array of breadcrumb segments
 */
export default function DashboardBreadcrumb({ segments }) {
  return (
    <nav className="bg-blue-50 p-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        {segments.map((segment, index) => (
          <React.Fragment key={segment.label}>
            {segment.href ? (
              <Link href={segment.href} className="hover:text-blue-500 transition-colors">
                {segment.label}
              </Link>
            ) : (
              <span>{segment.label}</span>
            )}
            {index < segments.length - 1 && <span className="text-gray-400"> • </span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}