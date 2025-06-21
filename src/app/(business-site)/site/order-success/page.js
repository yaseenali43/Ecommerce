
'use client';

import React, { useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import { CheckCircle } from 'lucide-react';

const page = ({ orderId = '12345' }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const address = searchParams.get('address') || (currentUser?.address || '');
  const name = searchParams.get('name')?.toUpperCase() || (currentUser?.name?.toUpperCase() || '');
  const mobile = searchParams.get('mobile') || (currentUser?.mobile || '');
  const paymentMethod = searchParams.get('paymentMethod') || 'Unknown';

  const handleContinueShopping = () => {
    router.push('/site/shop');
  };

  const handleViewOrder = () => {
    router.push(`/site/orders/${orderId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 pt-30 px-4 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xl w-full">
        <div className="flex flex-col items-center">
          {/* Order Confirmed Icon */}
          <div className="relative mb-4">
            <CheckCircle className="w-12 h-12 text-[#00A69C]" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold !text-secondary mb-2">Order confirmed</h1>

          {/* Descriptive Message */}
          <p className="text-[#4B5563] text-center mb-6">
            Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.
          </p>

          {/* Delivery Information (if logged in) */}
          {currentUser && (
            <div className="w-full mb-4 text-left">
              <p className="font-bold !text-secondary text-sm">Delivering to:</p>
              <p className="!text-secondary text-sm">
                {name} | {mobile}
              </p>
              <p className="text-[#4B5563] text-sm truncate">
                {address}
              </p>
              <p className="text-[#4B5563] text-sm mt-2">
                Payment Method: {paymentMethod}
              </p>
            </div>
          )}

          {/* Order Details Link */}
          <a
            href={`/site/orders/${orderId}`}
            className="text-[#E91E63] font-bold text-sm mb-4 flex items-center"
          >
            ORDER DETAILS <span className="ml-1"></span>
          </a>

          {/* Tracking Note */}
          <p className="text-[#4B5563] text-xs mb-6 flex items-center">
            <span className="text-[#00A69C] mr-1">✏️</span>
            You can Track/View/Modify order from orders page.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <button
              onClick={handleContinueShopping}
              className="flex-1 bg-white border border-[#D1D5DB] text-[#4B5563] px-6 py-2 rounded-lg text-sm font-medium"
            >
              CONTINUE SHOPPING
            </button>
            <button
              onClick={handleViewOrder}
              className="flex-1 bg-[#E91E63] text-white px-6 py-2 rounded-lg text-sm font-medium"
            >
              VIEW ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
