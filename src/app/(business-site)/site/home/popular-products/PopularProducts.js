// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import ProductCard from "@/components/site-sections/home/ProductCard";

// // filter/sort utils
// const getTopRated = (prods) =>
//   prods
//     .filter((p) => p.tabs?.includes("top-rated"))
//     .sort((a, b) => b.rating - a.rating);
// const getBestSelling = (prods) =>
//   prods
//     .filter((p) => p.tabs?.includes("best-selling"))
//     .sort((a, b) => b.salesCount - a.salesCount);
// const getLatest = (prods) =>
//   prods
//     .filter((p) => p.tabs?.includes("latest-product"))
//     .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
// const getBestDiscount = (prods) =>
//   prods
//     .filter((p) => p.tabs?.includes("on-discount"))
//     .sort((a, b) => b.salePercent - a.salePercent);

// export default function PopularProducts() {
//   const tabs = ["Top Rated", "Best Selling", "Latest Product", "On Discount"];
//   const [activeTab, setActiveTab] = useState("Top Rated");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/allproducts");
//         // normalize to an array
//         const items = response.data.allproducts ?? response.data ?? [];
//         setProducts(items);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const productsByTab = useMemo(
//     () => ({
//       "Top Rated": getTopRated(products),
//       "Best Selling": getBestSelling(products),
//       "Latest Product": getLatest(products),
//       "On Discount": getBestDiscount(products),
//     }),
//     [products]
//   );

//   // guard against undefined
//   const itemsForActiveTab = productsByTab[activeTab] || [];

//   return (
//     <div className=" mx-auto px-5 py-8">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold !text-black flex items-center">
//           <span className="w-1 h-6 bg-primary mr-2" />
//           Popular Products
//         </h2>
//         <div className="flex space-x-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`
//                 ${
//                   activeTab === tab
//                     ? "text-primary font-medium"
//                     : "text-gray-600"
//                 }
//                 hover:text-gray-900
//               `}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {itemsForActiveTab.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import ProductCard from "@/components/site-sections/home/ProductCard";

// filter/sort utils
const getTopRated = (prods) =>
  prods
    .filter((p) => p.tabs?.includes("top-rated"))
    .sort((a, b) => b.rating - a.rating);
const getBestSelling = (prods) =>
  prods
    .filter((p) => p.tabs?.includes("best-selling"))
    .sort((a, b) => b.salesCount - a.salesCount);
const getLatest = (prods) =>
  prods
    .filter((p) => p.tabs?.includes("latest-product"))
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
const getBestDiscount = (prods) =>
  prods
    .filter((p) => p.tabs?.includes("on-discount"))
    .sort((a, b) => b.salePercent - a.salePercent);

export default function PopularProducts() {
  const tabs = ["Top Rated", "Best Selling", "Latest Product", "On Discount"];
  const [activeTab, setActiveTab] = useState("Top Rated");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Current page for horizontal scroll
  const gridRef = useRef(null); // Ref to the grid container for scroll

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/allproducts");
        // normalize to an array
        const items = response.data.allproducts ?? response.data ?? [];
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Reset currentPage when activeTab changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  const productsByTab = useMemo(
    () => ({
      "Top Rated": getTopRated(products),
      "Best Selling": getBestSelling(products),
      "Latest Product": getLatest(products),
      "On Discount": getBestDiscount(products),
    }),
    [products]
  );

  // guard against undefined
  const itemsForActiveTab = productsByTab[activeTab] || [];

  // Determine cards per page for horizontal scrolling (assuming 4 cards per row for 2 rows)
  const cardsPerPage = 8; // 2 rows * 4 columns = 8 cards

  // Calculate total pages needed
  const totalPages = Math.ceil(itemsForActiveTab.length / cardsPerPage);

  // Get products for the current page
  const displayedProducts = useMemo(() => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return itemsForActiveTab.slice(startIndex, endIndex);
  }, [itemsForActiveTab, currentPage, cardsPerPage]);

  const showPagination = itemsForActiveTab.length > cardsPerPage;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    // Optionally scroll to top of the grid when page changes
    if (gridRef.current) {
      gridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto px-10 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold !text-black flex items-center">
          <span className="w-1 h-6 bg-primary mr-2" />
          Popular Products
        </h2>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`
                ${
                  activeTab === tab
                    ? "text-primary font-medium"
                    : "text-gray-600"
                }
                hover:text-gray-900 transition-colors duration-200
              `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={gridRef}
        className={`
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
          ${showPagination ? "overflow-x-auto pb-4 custom-scrollbar" : ""}
        `}
      >
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {showPagination && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`
                w-3 h-3 rounded-full cursor-pointer
                ${
                  currentPage === index ? "bg-primary" : "bg-gray-300"
                }
                hover:bg-primary-dark transition-colors duration-200
              `}
              onClick={() => handlePageChange(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Custom Scrollbar Styles (Add this to your global CSS or a dedicated CSS file) */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}