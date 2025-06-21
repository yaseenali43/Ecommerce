"use client";

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Search, Filter, Star, X, CheckCircle, Package } from "lucide-react";

const Orders = ({ isOrdersAndReturns = false }) => {
  const { currentUser } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [isCancellationConfirmed, setIsCancellationConfirmed] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelReason, setCancelReason] = useState("");
  const [cancelComments, setCancelComments] = useState("");
  const [selectedDetailOrder, setSelectedDetailOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Mock orders data (should come from checkout process via context/API)
  const orders = [
    {
      id: "1",
      status: "Confirmed",
      arrivalDate: "Arriving by Tue, 24 Jun",
      placedDate: "Wed, 18 Jun",
      product: {
        brand: "Apple",
        name: "Apple iPhone 16 Pro 256GB Black Titanium",
        size: "L",
        image: "/images/home/pcCategory/appleiphone.png",
        price: 339,
        originalPrice: 1999,
      },
    },
    {
      id: "2",
      status: "Refund Credited",
      arrivalDate:
        "Refund of ₹24,008.00 for the return has been processed successfully on Mon, 2 Jun",
      placedDate: "Wed, 18 Jun",
      product: {
        brand: "Taavi",
        name: "Camera ILCE-6100L/BQ IN5",
        size: "M",
        image: "/images/home/pcCategory/camera.png",
        price: 24008,
      },
      refundDetails: true,
    },
    {
      id: "3",
      status: "Cancelled",
      arrivalDate: "Cancelled on Wed, 18 Jun as per your request",
      placedDate: "Wed, 18 Jun",
      product: {
        brand: "H&M",
        name: "Dell Inspiron 3530 Laptop 15.6-inch FHD Touchscreen",
        size: "L",
        image: "/images/home/pcCategory/demo.png",
        price: 6939,
      },
    },
    {
      id: "4",
      status: "Delivered",
      arrivalDate: "On Mon, 21 Apr",
      placedDate: "Fri, 10 Apr",
      product: {
        brand: "Zara",
        name: "Sony MDR-ZX310AP Wired Headphones with Mic",
        size: "42",
        image: "/images/home/pcCategory/audio.png",
        price: 1499,
      },
      exchangeWindow: "Exchange/Return window closed on Mon, 5 May",
      rating: 0,
    },
    {
      id: "5",
      status: "Returned",
      arrivalDate: "Returned on Fri, 10 Jun",
      placedDate: "Mon, 5 Jun",
      product: {
        brand: "Nike",
        name: "MSI PRO MP225 21.5 FHD IPS Monitor",
        size: "10",
        image: "/images/laptop/monitor.png",
        price: 4999,
      },
    },
  ];

  // Filter orders based on tab and search query
  const filteredOrders = isOrdersAndReturns
    ? orders.filter((order) =>
        ["Cancelled", "Returned", "Refund Credited"].includes(order.status)
      )
    : orders.filter((order) =>
        order.product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCancel = (order) => {
    setSelectedOrder(order);
    setIsCancelOpen(true);
  };

  const handleTrack = (order) => {
    setSelectedOrder(order);
    setIsTrackOpen(true);
  };

  const handleViewDetails = (order) => {
    setSelectedDetailOrder(order);
  };

  const handleCancelSubmit = () => {
    if (!cancelReason) return;
    setIsCancelOpen(false);
    setIsCancellationConfirmed(true);
    setCancelReason("");
    setCancelComments("");
  };

  if (selectedDetailOrder) {
    return (
      <OrderDetailView
        order={selectedDetailOrder}
        onBack={() => setSelectedDetailOrder(null)}
        isOrdersAndReturns={isOrdersAndReturns}
      />
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold !text-secondary">
            All orders
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">from anytime</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search in orders"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-[300px] h-10 pl-10 pr-4 text-sm border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63] placeholder-[#999999]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999999] w-5 h-5" />
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-1 h-10 px-4 text-sm font-bold text-black border border-[#D1D5DB] rounded-lg hover:bg-gray-100"
          >
            <Filter className="w-4 h-4" />
            <span>FILTER</span>
          </button>
        </div>
      </div>

      {/* Order List */}
      <div className="space-y-2">
        {paginatedOrders.length === 0 ? (
          <p className="text-sm text-[#666666] text-center">No orders found.</p>
        ) : (
          paginatedOrders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col sm:flex-row items-start p-4 border border-[#D1D5DB] rounded-lg bg-white cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleViewDetails(order)}
            >
              <img
                src={order.product.image}
                alt={order.product.name}
                className="w-15 h-15 object-cover rounded mr-0 sm:mr-4 mb-4 sm:mb-0"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-xs font-bold flex items-center ${
                      order.status === "Confirmed" ||
                      order.status === "Delivered"
                        ? "text-[#00A69C]"
                        : order.status === "Refund Credited"
                        ? "text-[#F5A623]"
                        : "text-[#E91E63]"
                    }`}
                  >
                    {order.status === "Confirmed" ||
                    order.status === "Delivered" ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : order.status === "Refund Credited" ? (
                      <span className="w-4 h-4 mr-1">↺</span>
                    ) : (
                      <X className="w-4 h-4 mr-1" />
                    )}
                    {order.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-[#666666] mt-1">
                  {order.arrivalDate}
                </p>
                {order.refundDetails && (
                  <a
                    href="#"
                    className="text-xs text-[#E91E63] mt-1 block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Refund details
                  </a>
                )}
                <h3 className="text-sm font-bold text-black mt-2">
                  {order.product.name}
                </h3>
                <p className="text-xs text-[#666666]">
                  {order.product.category}
                </p>
                {order.status === "Delivered" && (
                  <div className="mt-2">
                    <p className="text-xs text-black">
                      Rate & Review to earn Digit Kart
                    </p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#D1D5DB] fill-current"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 ml-0 sm:ml-4 mt-4 sm:mt-0">
                {order.status !== "Cancelled" &&
                  order.status !== "Returned" &&
                  order.status !== "Refund Credited" && (
                    <>
                      {order.status !== "Delivered" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCancel(order);
                          }}
                          className="px-4 py-2 text-sm text-[#E91E63] border border-[#E91E63] rounded-lg hover:bg-red-50"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTrack(order);
                        }}
                        className="px-4 py-2 text-sm text-black border border-[#D1D5DB] rounded-lg hover:bg-gray-100"
                      >
                        Track
                      </button>
                    </>
                  )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 text-sm rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#E91E63] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Filter Popup */}
      {isFilterOpen && <FilterPopup onClose={() => setIsFilterOpen(false)} />}

      {/* Cancel Popup */}
      {isCancelOpen && selectedOrder && (
        <CancelPopup
          order={selectedOrder}
          onClose={() => setIsCancelOpen(false)}
          cancelReason={cancelReason}
          setCancelReason={setCancelReason}
          cancelComments={cancelComments}
          setCancelComments={setCancelComments}
          onSubmit={handleCancelSubmit}
        />
      )}

      {/* Cancellation Confirmed Popup */}
      {isCancellationConfirmed && (
        <CancellationConfirmedPopup
          onClose={() => setIsCancellationConfirmed(false)}
          order={selectedOrder}
        />
      )}

      {/* Track Popup */}
      {isTrackOpen && selectedOrder && (
        <TrackPopup
          order={selectedOrder}
          onClose={() => setIsTrackOpen(false)}
        />
      )}
    </div>
  );
};

// Filter Popup
const FilterPopup = ({ onClose }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("Anytime");

  const handleApply = () => {
    onClose();
  };

  const handleClear = () => {
    setStatusFilter("All");
    setTimeFilter("Anytime");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Filter Orders</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">
            Status
          </h4>
          {["All", "On the way", "Delivered", "Cancelled", "Returned"].map(
            (status) => (
              <label key={status} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={statusFilter === status}
                  onChange={() => setStatusFilter(status)}
                  className="mr-2 text-[#E91E63] border-gray-300 focus:ring-[#E91E63]"
                />
                <span className="text-sm text-gray-600">{status}</span>
              </label>
            )
          )}
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">
            Time
          </h4>
          {["Anytime", "Last 30 days", "Last 6 months", "Last year"].map(
            (time) => (
              <label key={time} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="time"
                  value={time}
                  checked={timeFilter === time}
                  onChange={() => setTimeFilter(time)}
                  className="mr-2 text-[#E91E63] border-gray-300 focus:ring-[#E91E63]"
                />
                <span className="text-sm text-gray-600">{time}</span>
              </label>
            )
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleClear}
            className="flex-1 bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-gray-100"
          >
            Clear Filters
          </button>
          <button
            onClick={handleApply}
            className="flex-1 bg-[#E91E63] text-white px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-[#D81B60]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

// Cancel Popup
const CancelPopup = ({
  order,
  onClose,
  cancelReason,
  setCancelReason,
  onSubmit,
}) => {
  return (
  <div className="fixed inset-0 bg-black bg-opacity-50] flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#1F2A44]">Cancel Order</h3>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="flex items-start mb-4">
        <img
          src={order.product.image}
          alt={order.product.name}
          className="w-16 h-20 object-contain mr-4"
        />
        <div>
          <h4 className="text-base font-semibold text-[#1F2A44]">
            {order.status}
          </h4>
          <p className="text-sm text-[#1F2A44]">{status.status}</p>
          <p className="text-sm text-[#1F2A44]">
            ₹{order.product.price.toFixed(2)}{" "}
            {order.product.originalPrice && (
              <>
                <span className="text-gray-500 line-through">
                  ₹{order.product.originalPrice.toFixed(2)}
                </span>{" "}
                <span className="text-[#00A69C]">
                  Saved ₹
                  {(order.product.originalPrice - order.product.price).toFixed(
                    2
                  )}
                </span>
              </>
            )}
          </p>
          <div className="flex items-center mt-1">
            <span className="w-4 h-4 bg-[#00A69C] rounded-full flex items-center justify-center mr-1">
              <span className="text-white text-xs">✓</span>
            </span>
            <span className="text-xs text-[#00A69C]">
              Eligible for cancellation
            </span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-base font-semibold text-[#1F2A44] uppercase mb-1">
          Reason for Cancellation
        </h4>
        <p className="text-sm text-gray-500 mb-2">
          Please tell us correct reason for cancellation. This information is
          only used to improve our service
        </p>
        <label className="text-sm text-[#1F2A44] mb-2 block">
          Select Reason<span className="text-red-500">*</span>
        </label>
        {[
          "Incorrect size ordered",
            "Product not required anymore",
            "Cash issue",
            "Ordered by mistake",
            "Wants to change style/color",
            "Delayed delivery cancellation",
            "Duplicate order",
        ].map((item) => (
          <label key={item} className="flex items-center mb-2">
            <input
              type="radio"
              name="item"
              value={item}
              checked={cancelReason === item}
              onChange={(e) => setCancelReason(e.target.value)}
              className="mr-2 text-[#E91E63] focus:ring-[#e91E63]"
            />
            <span className="text-sm text-[#1F2A44]">{item}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-[#1F2E44]">
          "REFUNDED DETAILS ₹0"
        </span>
        <button
          onClick={onSubmit}
          disabled={!cancelReason}
          className="flex items-center px-6 py-2 bg-[#E91E63] text-white rounded-lg text-sm font-semibold hover:bg-[#D81B60] disabled:bg-gray-300"
        >
          CANCEL <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  </div>
  );
};

// Cancellation Confirmed Popup
const CancellationConfirmedPopup = ({ onClose, order }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <CheckCircle className="w-10 h-10 text-[#00A69C] mb-4" />
          <h3 className="text-xl font-semibold text-[#4B5563] mb-4">
            Order Cancelled
          </h3>
          <p className="text-sm font-bold text-[#4B5563] mb-4">
            1 ITEM IS CANCELLED
          </p>
          <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg w-full mb-4">
            <img
              src={order.product.image}
              alt={order.product.name}
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-sm font-semibold text-[#4B5563]">
                {order.product.brand}
              </p>
              <p className="text-sm text-[#4B5563]">{order.product.name}</p>
            </div>
          </div>
          <div className="space-y-2 w-full text-left">
            <p className="text-sm text-[#4B5563] flex items-start">
              <CheckCircle className="w-5 h-5 text-[#00A69C] mr-2 mt-0.5" />
              <span>
                A refund is not applicable on this order as it is a Pay on
                delivery order.
              </span>
            </p>
            <p className="text-sm text-[#4B5563] flex items-start">
              <CheckCircle className="w-5 h-5 text-[#00A69C] mr-2 mt-0.5" />
              <span>
                You will receive an email/SMS confirming the cancellation of
                order shortly.
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full mt-6 bg-[#E91E63] text-white py-3 rounded-lg font-bold uppercase hover:bg-[#D81B60]"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

// Track Popup
const TrackPopup = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Track Item</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 bg-[#00A69C] rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-6 h-12 w-0.5 border-l-2 border-dashed border-[#00A69C]"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-bold text-gray-800">Order Placed</p>
              <p className="text-sm text-gray-800">on {order.placedDate}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
              <div className="absolute top-6 h-12 w-0.5 border-l-2 border-dashed border-gray-400"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Shipped tomorrow</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">
                Arriving by {order.arrivalDate.split(" by ")[1]}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <Package className="w-4 h-4 text-gray-500 mr-2" />
          <p className="text-xs text-gray-500">Replacement is available</p>
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            NEW
          </span>
        </div>
      </div>
    </div>
  );
};

// Order Detail View
const OrderDetailView = ({ order, onBack ,isOrdersAndReturns }) => {
  const { currentUser } = useContext(AuthContext);
  const [rating, setRating] = useState(order.rating || 0);

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="text-[#E91E63] underline flex items-center mb-4 text-sm sm:text-base"
      >
        ← Back to {isOrdersAndReturns ? "Orders & Returns" : "Orders"}
      </button>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative">
        <button className="absolute top-4 right-4 flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
          <span>Help</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        </button>
        <img
          src={order.product.image}
          alt={order.product.name}
          className="w-full sm:w-1/2 h-40 sm:h-48 object-contain mx-auto rounded"
          style={{
            filter: order.status === "Cancelled" ? "grayscale(100%)" : "none",
          }}
        />
        <div className="text-center mt-4 space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            {order.product.brand}
          </h3>
          <p className="text-sm text-[#4B5563]">{order.product.name}</p>
          <p className="text-sm text-[#4B5563]">Color: NA</p>
          <p className="text-sm text-[#4B5563]">Size: {order.product.size}</p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="flex items-center justify-center w-6 h-6 border border-[#D1D5DB] rounded-full">
            {order.status === "Confirmed" || order.status === "Delivered" ? (
              <CheckCircle size={16} className="text-[#00A69C]" />
            ) : order.status === "Refund Credited" ? (
              <span className="text-[#F5A623] text-xs">↺</span>
            ) : (
              <X size={16} className="text-[#E91E63]" />
            )}
          </span>
          <div>
            <p className="text-sm font-semibold text-[#4B5563]">
              {order.status}
            </p>
            <p className="text-xs text-[#6B7280]">
              {order.arrivalDate.includes(" on ")
                ? order.arrivalDate.split(" on ")[1]
                : order.arrivalDate}
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h4 className="text-sm font-medium text-[#4B5563] mb-2">
            Rate Your Experience
          </h4>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                onClick={() => setRating(i + 1)}
                className="focus:outline-none"
              >
                <Star
                  size={20}
                  className={
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }
                />
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm font-medium text-[#4B5563]">
            Total Order Price:{" "}
            <span className="text-[#E91E63]">
              ₹{order.product.price.toFixed(2)}
            </span>
          </p>
          <p className="text-sm text-[#4B5563]">Name: {currentUser?.name}</p>
          <p className="text-sm text-[#4B5563]">Email: {currentUser?.email}</p>
          <p className="text-sm text-[#4B5563]">
            Mobile: {currentUser?.mobile || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
