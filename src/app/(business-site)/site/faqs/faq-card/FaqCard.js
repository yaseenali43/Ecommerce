// 'use client'

// import React from 'react'
// import {
//   Truck,
//   Box,
//   Lock,
//   Smartphone
// } from 'lucide-react'

// export default function FaqCard({ Icon, title }) {
//   return (
//     <div
//       className="
//         bg-[#F5F5F5]
//         rounded-[16px]
//         w-[280px]
//         h-[240px]
//         p-[24px]
//         flex
//         flex-col
//         items-center
//         justify-center
//       "
//     >
//       <Icon size={64} className="mb-[16px]" />
//       <span
//         className="
//           text-[16px]
//           font-medium
//           text-[#333333]
//         "
//       >
//         {title}
//       </span>
//     </div>
//   )
// }

// // Sample usage within the same file (or import FaqCard elsewhere):
// export function FaqCardGrid() {
//   const cards = [
//     { Icon: Truck, title: 'Delivery Policy' },
//     { Icon: Box, title: 'Return & Refund' },
//     { Icon: Lock, title: 'Privacy Policy' },
//     { Icon: Smartphone, title: 'How To Order' }
//   ]

//   return (
//     <div className="flex gap-[24px] py-10 flex-wrap justify-center">
//       {cards.map((c) => (
//         <FaqCard key={c.title} Icon={c.Icon} title={c.title} />
//       ))}
//     </div>
//   )
// }


'use client'

import React from 'react'
import {
  Truck,
  Box,
  Lock,
  Smartphone
} from 'lucide-react'

export default function FaqCard({ Icon, title }) {
  return (
    <div className="
      group relative
      bg-gradient-to-br from-white to-[#f9f9ff]
      rounded-2xl
      w-full max-w-[300px]
      h-[155px] sm:h-[175px]
      p-6
      flex
      flex-col
      items-center
      justify-center
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      border border-[#f0f0ff]
      transition-all duration-300
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]
      hover:-translate-y-1.5
      overflow-hidden
    ">
      {/* Animated gradient border */}
      <div className="
        absolute inset-0
        rounded-2xl
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
        -z-[1]
      " />
      
      {/* Gradient circle background */}
      <div className="
        relative
        w-15 h-15
        rounded-full
        bg-gradient-to-br from-secondary to-secondary
        flex items-center justify-center
        mb-5
        group-hover:scale-110
        transition-transform duration-300
      ">
        <Icon 
          size={28} 
          className="text-white" 
        />
        
        {/* Pulsing animation */}
        <div className="
          absolute -inset-2
          rounded-full
          bg-secondary/30
          opacity-0
          group-hover:opacity-40
          group-hover:animate-pulse
          transition-opacity duration-300
          -z-10
        " />
      </div>
      
      <span className="
        text-lg font-semibold text-gray-800
        group-hover:text-gray-900
        transition-colors duration-300
        text-center
        px-2
      ">
        {title}
      </span>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-15 h-15 rounded-full bg-primary  opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full bg-secondary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
    </div>
  )
}

export function FaqCardGrid() {
  const cards = [
    { Icon: Truck, title: 'Delivery Policy' },
    { Icon: Box, title: 'Return & Refund' },
    { Icon: Lock, title: 'Privacy Policy' },
    { Icon: Smartphone, title: 'How To Order' }
  ]

  return (
    <div className="
      w-full
      py-15 sm:py-16 lg:py-20
      px-4 sm:px-6 lg:px-10
      bg-gradient-to-b from-[#fafaff] to-white
    ">
      <div className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6 sm:gap-8
      ">
        {cards.map((c) => (
          <FaqCard key={c.title} Icon={c.Icon} title={c.title} />
        ))}
      </div>
      
      {/* Section decoration */}
      <div className="absolute left-0 right-0 -mt-20 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  )
}