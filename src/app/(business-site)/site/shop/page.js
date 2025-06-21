
'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { Trash2, X, ChevronDown, Star, LayoutGrid, List as ListIcon, LayoutPanelLeft  } from 'lucide-react';
import ProductListItem from '@/components/site-sections/shared-sections/ProductListItem';
import ProductCard from '@/components/site-sections/home/ProductCard';
import CTASection from '@/components/site-sections/shared-sections/CTASection';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  // Data & filters state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : []);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sortOption, setSortOption] = useState('default');
  const [layoutMode, setLayoutMode] = useState('grid-3');
  const [currentPage, setCurrentPage] = useState(1);

  // Slider state
  const trackRef = useRef(null);
  const [activeThumb, setActiveThumb] = useState(null);

  // Fetch products
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:4000/allproducts')
      .then(res => {
        const all = res.data;
        setProducts(all);
        const maxP = Math.max(...all.map(p => p.price));
        setPriceRange([0, maxP]);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Reset current page when filters or layout change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedRating, priceRange, sortOption, layoutMode]);

  // Filter options
  const categories = Array.from(new Set(products.map(p => p.category)));
  const maxPrice = Math.max(...products.map(p => p.price));
  const ratingOptions = [5, 4, 3, 2, 1];

  // Handlers
  const toggleCategory = cat => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };
  const toggleRating = r => setSelectedRating(prev => (prev === r ? null : r));
  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setPriceRange([0, maxPrice]);
  };

  // Slider dragging logic
  useEffect(() => {
    const onMove = e => {
      if (!activeThumb || !trackRef.current) return;
      const { left, width } = trackRef.current.getBoundingClientRect();
      let pct = (e.clientX - left) / width;
      pct = Math.max(0, Math.min(1, pct));
      const val = Math.round(pct * maxPrice);
      setPriceRange(([min, max]) =>
        activeThumb === 'min' ? [Math.min(val, max), max] : [min, Math.max(val, min)]
      );
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', () => setActiveThumb(null));
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', () => setActiveThumb(null));
    };
  }, [activeThumb, maxPrice]);

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500">Loading products…</p>
    </div>
  );

  // Filter & sort
  const filtered = products.filter(p =>
    (!selectedCategories.length || selectedCategories.includes(p.category)) &&
    (!selectedRating || p.rating >= selectedRating) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );
  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case 'top-rated':   return b.rating - a.rating;
      case 'best-selling':return b.salesCount - a.salesCount;
      case 'latest':      return new Date(b.releaseDate) - new Date(a.releaseDate);
      case 'on-discount': return (b.salePercent||0) - (a.salePercent||0);
      default:            return 0;
    }
  });

  // Calculate products per page based on 3 rows
  const getProductsPerPage = () => {
    switch (layoutMode) {
      case 'grid-3':
        return 9; // 4 cols (2xl) x 3 rows
      case 'grid-2':
        return 6;  // 3 cols (2xl) x 3 rows
      case 'list':
        return 4;  // 1 col x 3 rows
      default:
        return 12;
    }
  };

  const productsPerPage = getProductsPerPage();
  const totalPages = Math.ceil(sorted.length / productsPerPage);
  const currentProducts = sorted.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Generate page numbers with ellipses for large numbers
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [1];
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  const gridClass = layoutMode === 'list'
    ? 'flex flex-col'
    : `grid ${layoutMode === 'grid-2' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3' : ' grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'} gap-5`;

  return (
    <>
    <div className="flex flex-col md:flex-row mt-20 bg-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-5 lg:px-8 bg-white border-b md:border-b-0 md:border-r border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold !text-secondary uppercase">Filter By</h2>
          <button onClick={clearAll} className="text-xs text-gray-600 cursor-pointer hover:text-primary flex items-center">
            <Trash2 className="w-4 h-4 mr-1" /> Clear
          </button>
        </div>

        {/* Selected Tags */}
        {(selectedCategories.length || selectedRating) > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCategories.map(cat => (
              <span key={cat} className="flex items-center bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-xs">
                {cat}
                <button onClick={() => toggleCategory(cat)} className="ml-1 cursor-pointer text-primary focus:outline-none">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedRating && (
              <span className="flex items-center bg-yellow-50 text-yellow-800 px-2 py-1 rounded-full text-xs">
                <b className='text-secondary'>{selectedRating}+ Stars</b>
                <button onClick={() => toggleRating(selectedRating)} className="ml-1 text-primary cursor-pointer focus:outline-none">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Ratings Dropdown */}
         <details className="mb-6">
           <summary className="flex justify-between items-center cursor-pointer text-sm font-semibold">
             <span className="flex items-center space-x-1"><Star className="w-4 h-4 text-yellow-500"/><span>Rating</span></span>
             <ChevronDown className="w-4 h-4" />
           </summary>
           <ul className="mt-2 ml-4 space-y-2 text-xs">
             {ratingOptions.map(r => (
               <li key={r} className="flex items-center">
                 <input
                   type="radio"
                   id={`rate-${r}`}
                   name="rating-filter"
                   checked={selectedRating === r}
                   onChange={() => toggleRating(r)}
                   className="form-radio h-4 w-4 text-yellow-500"
                 />
                 <label htmlFor={`rate-${r}`} className="ml-2 cursor-pointer">
                   {r}+ Stars
                 </label>
               </li>
             ))}
           </ul>
         </details>

        {/* Categories Dropdown */}
        <details className="mb-6" open>
          <summary className="flex justify-between items-center cursor-pointer text-sm font-semibold">
            <span>Categories</span>
            <ChevronDown className="w-4 h-4" />
          </summary>
          <div className="mt-2 ml-4 space-y-2 text-xs">
            {categories.map(cat => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="form-checkbox h-4 w-4 text-primary"
                />
                <span>{cat} ({products.filter(p => p.category === cat).length})</span>
              </label>
            ))}
          </div>
        </details>

        {/* Price Slider */}
        <section>
          <h3 className="text-sm ml-2 font-semibold mb-2">Price</h3>
          <div ref={trackRef} className="relative h-2 mx-4 bg-gray-200 rounded-md mb-4">
            <div
              className="absolute h-2 bg-primary rounded-md"
              style={{ left: `${(priceRange[0]/maxPrice)*100}%`, width: `${((priceRange[1]-priceRange[0])/maxPrice)*100}%` }}
            />
            {['min','max'].map(type => {
              const val = type === 'min' ? priceRange[0] : priceRange[1];
              const pct = (val/maxPrice)*100;
              return (
                <div
                  key={type}
                  onMouseDown={() => setActiveThumb(type)}
                  className="absolute -top-1 w-5 h-5 bg-white border-2 border-primary rounded-full cursor-pointer shadow-md flex items-center justify-center"
                  style={{ left: `calc(${pct}% - 10px)` }}
                >
                  <span className="text-xs font-semibold absolute -bottom-5">${val}</span>
                </div>
              );
            })}
          </div>
        </section>
      </aside>

      {/* Main content */}
      <main className="w-full md:w-3/4 p-5 lg:px-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5 space-y-2 sm:space-y-0">
          <div className="flex space-x-2">
            {/* Layout toggle buttons with icons */}
            <button
              onClick={() => setLayoutMode('grid-3')}
              className={`p-2 border rounded transition-colors ${layoutMode==='grid-3' ? 'bg-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLayoutMode('grid-2')}
              className={`p-2 border rounded transition-colors ${layoutMode==='grid-2' ? 'bg-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
            >
              <LayoutPanelLeft  className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLayoutMode('list')}
              className={`p-2 border rounded transition-colors ${layoutMode==='list' ? 'bg-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">
              {sorted.length > 0
                ? `Showing ${(currentPage - 1) * productsPerPage + 1} - ${Math.min(currentPage * productsPerPage, sorted.length)} of ${sorted.length} items`
                : 'No products found'}
            </span>
            <select
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
              className="border border-primary text-sm p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="default">Default</option>
              <option value="top-rated">Top Rated</option>
              <option value="best-selling">Best Selling</option>
              <option value="latest">Latest</option>
              <option value="on-discount">On Discount</option>
            </select>
          </div>
        </div>

        {/* Products and Pagination */}
        {sorted.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No products found</p>
        ) : (
          <>
            <div className={gridClass}>
              {currentProducts.map(prod =>
                layoutMode === 'list'
                  ? <ProductListItem key={prod.id} product={prod} />
                  : <ProductCard key={prod.id} product={prod} />
              )}
            </div>
            {sorted.length > productsPerPage && totalPages > 1 && (
              <div className="flex justify-center mt-5 gap-1 flex-wrap">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 border rounded-l ${
                    currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  Previous
                </button>
                {getPageNumbers().map((page, index) =>
                  page === '...' ? (
                    <span key={index} className="px-3 py-1 text-gray-600">...</span>
                  ) : (
                    <button
                      key={page}
                      onClick={page !== currentPage ? () => setCurrentPage(page) : undefined}
                      className={`px-3 py-1 border ${
                        currentPage === page
                          ? 'bg-primary text-white cursor-default'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 border rounded-r ${
                    currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
    <CTASection />
    </>
  );
}