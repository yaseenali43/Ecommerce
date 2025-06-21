// 'use client';

// import React, { useEffect, useState } from 'react';

// const ExploreStatsData = [
//   { value: 1200, label: 'Premium Products', suffix: '+' },
//   { value: 60,   label: 'Curated Categories', suffix: '%' },
//   { value: 22000,label: 'Global Sales', suffix: '+' },
//   { value: 5000, label: 'Satisfied Clients', suffix: '+' },
// ];

// function CountUp({ end, suffix = '+', duration = 3000 }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTime = null;

//     function step(timestamp) {
//       if (startTime === null) {
//         startTime = timestamp;
//       }
//       const elapsed = timestamp - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       setCount(Math.floor(progress * end));

//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     }

//     window.requestAnimationFrame(step);
//   }, [end, duration]);

//   const formatted = count.toLocaleString('de-DE');

//   return (
//     <div className="group relative transform transition-transform duration-300 hover:scale-[1.02]">
//       <div className="absolute -inset-2 rounded-xl blur opacity-20 group-hover:opacity-30 transition-all duration-500" />
//       <span className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
//         {formatted}
//         <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-1">
//           {suffix}
//         </span>
//       </span>
//     </div>
//   );
// }

// export default function ExploreStats() {
//   return (
//     <section className="relative bg-secondary py-20 px-6 md:px-24  overflow-hidden">
//       <div className="max-w-8xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Left Content */}
//           <div className="lg:w-1/2 space-y-8 relative">
//             <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-800 leading-tight">
//               Digital Marketplace Excellence
//               <div className="w-24 h-1.5 bg-primary mt-4 rounded-full" />
//             </h2>
//             <p className="text-lg mt-2 text-white/70 leading-relaxed">
//               Immerse yourself in a curated shopping experience where quality meets innovation. 
//               Our platform combines cutting-edge technology with unparalleled product selection.
//             </p>
//           </div>

//           {/* ExploreStats Grid */}
//           <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-7 relative z-10">
//             {ExploreStatsData.map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="group p-7 bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-100/50 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-br from-white to-indigo-50/50 relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-[radial-gradient(200px_circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <CountUp end={stat.value} suffix={stat.suffix} />
//                 <p className="mt-4 text-sm font-semibold text-gray-600 uppercase tracking-wider animate-fade-in">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute -right-40 -top-40 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] opacity-30 animate-float" />
//         <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] opacity-30 animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/20 to-transparent rounded-full" />
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useState, useRef, useCallback } from 'react';

// Custom hook to detect when an element enters the viewport
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  const callback = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const node = ref.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [ref, options, callback]);

  return [ref, inView];
}

function CountUp({ end, suffix = '+', duration = 2000, start }) {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef(null);

  useEffect(() => {
    if (!start) return;

    const step = (timestamp) => {
      if (!startTimestamp.current) {
        startTimestamp.current = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  const formatted = count.toLocaleString('de-DE');

  return (
    <div className="group relative transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="absolute -inset-2 rounded-xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
      <span className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        {formatted}
        <span className="text-xl md:text-2xl font-medium ml-1 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          {suffix}
        </span>
      </span>
    </div>
  );
}

export default function ExploreStats() {
  const [containerRef, isVisible] = useInView({ rootMargin: '0px 0px -20% 0px' });

  const ExploreStats = [
    { value: 1200, label: 'Premium Products', suffix: '+' },
    { value: 60, label: 'Curated Categories', suffix: '%' },
    { value: 22000, label: 'Global Sales', suffix: '+' },
    { value: 5000, label: 'Satisfied Clients', suffix: '+' }
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-secondary py-15 px-6 md:px-9 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl font-bold !text-white flex justify-center items-center !mb-5">
          <span className="w-1 h-6 !bg-primary mr-2 " />Explore Our E-Commerce Store
        </h2>
        <div className="flex flex-col mt-2 lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 relative">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-800 leading-tight">
              Digital Marketplace Excellence
              <div className="w-24 h-1.5 bg-primary mt-4 rounded-full" />
            </h2>
            <p className="text-lg mt-2 !text-white/70 leading-relaxed">
              Immerse yourself in a curated shopping experience where quality meets innovation.
              Our platform combines cutting-edge technology with unparalleled product selection.
            </p>
          </div>

          <div className="sm:w-3/4 md:w-2/3  lg:w-1/2 w-full  grid grid-cols-1 sm:grid-cols-2 gap-7 relative z-10">
            {ExploreStats.map((stat, idx) => (
              <div
                key={idx}
                className="py-6 px-8 bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-100/50 transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:bg-gradient-to-br from-white to-indigo-50/50 relative overflow-hidden"
              >
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                  start={isVisible}
                />
                <p className="mt-4 text-sm font-semibold !text-gray-600 uppercase tracking-wider animate-fade-in">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] opacity-30 animate-float" />
        <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] opacity-30 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/20 to-transparent rounded-full" />
      </div>
    </section>
  );
}
