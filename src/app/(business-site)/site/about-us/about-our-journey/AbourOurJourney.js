// 'use client'

// import { Diamond, Smartphone, MessageSquare, ArrowUpRight } from 'lucide-react'

// const stats = [
//   {
//     Icon: Diamond,
//     value: '10k',
//     label: 'Listed Products',
//   },
//   {
//     Icon: Smartphone,
//     value: '5k',
//     label: 'Lovely Customer',
//   },
//   {
//     Icon: MessageSquare,
//     value: '24h',
//     label: 'Support',
//   },
// ]

// export default function AboutOurJourney() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       {/* Two‑column intro */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mb-12">
//         <h2
//           className="font-bold text-4xl md:text-5xl leading-tight"
//           style={{ lineHeight: '1.2' /* ~48px on desktop */ }}
//         >
//           It started with a<br/>bang now we are here.
//         </h2>
//         <div className="space-y-6 text-gray-700 text-base leading-relaxed">
//           <p>
//             Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque
//             habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
//             Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi. Vestibulum mattis
//             diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam
//             consequat mi, quis tincidunt ligula
//           </p>
//           <p>
//             Nam nibh diam, varius quis lectus eget, laoreet cursus metus. Morbi augue lectus,
//             dapibus eget justo nec, consectetur auctor nis luctus neque.!
//           </p>
//         </div>
//       </div>

//       {/* Stats cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {stats.map(({ Icon, value, label }, i) => (
//           <div
//             key={i}
//             className="relative border border-gray-200 p-6"
//             style={{
//               // exact from design: 24px padding all around
//               padding: '24px',
//             }}
//           >
//             {/* top‑right arrow */}
//             <div
//               className="absolute top-6 right-6"
//               style={{ width: '20px', height: '20px' }}
//             >
//               <ArrowUpRight size={20} />
//             </div>

//             {/* icon */}
//             <div className="mb-4" style={{ width: '40px', height: '40px' }}>
//               <Icon size={40} />
//             </div>

//             {/* value */}
//             <div
//               className="text-gray-500 font-medium"
//               style={{ fontSize: '14px', marginBottom: '4px' }}
//             >
//               {value}
//             </div>

//             {/* label */}
//             <h3
//               className="font-bold"
//               style={{ fontSize: '24px', lineHeight: '1.2' }}
//             >
//               {label}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
'use client'

import { Diamond, Smartphone, MessageSquare, ArrowUpRight } from 'lucide-react'

const stats = [
  {
    Icon: Diamond,
    value: '10k',
    label: 'Listed Products',
  },
  {
    Icon: Smartphone,
    value: '5k',
    label: 'Lovely Customer',
  },
  {
    Icon: MessageSquare,
    value: '24h',
    label: 'Support',
  },
]

export default function AboutOurJourney() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-10 py-16 md:py-15 bg-gradient-to-b from-white to-[#fafaff] relative overflow-hidden">
      
      {/* Two-column intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-10 md:mb-15 relative z-10">
        <div className='self-center '>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-[3.5rem] leading-tight  !text-secondary">
            It started with a<br className="hidden md:block" /> bang now .
          </h2>
          
          {/* Decorative line */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full my-8" />
        </div>
        
        <div className="space-y-4 text-gray-600 text-md leading-relaxed">
          <p className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
            Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi. Vestibulum mattis
            diam non luctus elementum.
          </p>
          <p className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
            Nam nibh diam, varius quis lectus eget, laoreet cursus metus. Morbi augue lectus,
            dapibus eget justo nec, consectetur auctor nis luctus neque.!
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {stats.map(({ Icon, value, label }, i) => (
          <div
            key={i}
            className="group relative bg-gradient-to-br from-white to-[#f9f9ff] rounded-2xl p-8 border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-hero/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover border effect */}
            <div className="absolute inset-0 rounded-2xl border-1 border-transparent group-hover:border-secondary/15     transition-all duration-500 pointer-events-none" />
            
            {/* Top-right arrow */}
            <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-secondary transition-colors duration-300">
              <ArrowUpRight 
                size={18} 
                className="text-gray-500 group-hover:text-white transition-colors duration-300" 
              />
            </div>

            {/* Icon with gradient background */}
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
              <Icon 
                size={26} 
                className="text-white" 
              />
            </div>

            {/* Value */}
            <div className="text-gray-500 font-medium text-sm tracking-wider mb-1">
              {value}
            </div>

            {/* Label */}
            <h3 className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              {label}
            </h3>
            
            {/* Decorative corner */}
            <div className="absolute -bottom-6 -right-6 w-18 h-18 rounded-full bg-secondary/10 group-hover:bg-secondary/50 transition-all duration-500" />
          </div>
        ))}
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />
    </section>
  )
}