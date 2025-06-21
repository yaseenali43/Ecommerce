// 'use client'

// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import  { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import "swiper/css/autoplay";


// const slides = [
//   {
//     label: 'Best Ear\nHeadphones',
//     title: 'Music To\nFill Your Heart',
//     cta: 'Shop Now',
//     image: '/images/laptop/monitor.png',
//   },
//   {
//     label: 'Premium Sound',
//     title: 'Feel Every \nNote',
//     cta: 'Explore',
//     image: '/images/laptop/laptop-2.jpg',
//   },
//   {
//     label: 'Comfort Meets Style',
//     title: 'Wear All \nDay',
//     cta: 'Discover',
//     image: '/images/laptop/laptop-15-i3-6th-Generation-16-5.jpg',
//   },
// ]

// export default function HomePageHeroSection() {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={1}
//       loop
//       navigation={false}
//       // pagination={{ clickable: true }}
//       pagination={false}
//       autoplay={{ delay: 5000 }}
//       className="w-full "
//     >
//       {slides.map((slide, idx) => (
//         <SwiperSlide key={idx}>
//           <section className="relative overflow-hidden bg-hero">
//             <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center">
//               {/* Text block */}
//               <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//                 <div className="inline-flex items-start space-x-3">
//                   <span className="block w-1 bg-pink-600 rounded-full mt-1 h-6"></span>
//                   <div className="text-gray-700 font-medium whitespace-pre-line">
//                     {slide.label}
//                   </div>
//                 </div>

//                 <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold !text-black leading-tight whitespace-pre-line">
//                   {slide.title}
//                 </h1>

//                 <button className='btn-outline-primary'>
//                   {slide.cta}&nbsp;&rarr;
//                 </button>
//               </div>

//               {/* Image block */}
//               <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">

//                 <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
//                   <Image
//                     src={slide.image}
//                     alt={slide.title}
//                     fill
//                     className="object-contain"
//                     sizes="(max-width: 768px) 80vw, (max-width: 1280px) 50vw, 500px"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }


// 'use client'

// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/autoplay'

// const slides = [
//   {
//     label: 'Best Ear\nHeadphones',
//     title: 'Music To\nFill Your Heart',
//     cta: 'Shop Now',
//     image: '/images/laptop/monitor.png',
//   },
//   // ... other slides
// ]

// export default function HomePageHeroSection() {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={1}
//       loop
//       autoplay={{ delay: 5000 }}
//       className="w-full relative group"
//     >
//       {slides.map((slide, idx) => (
//         <SwiperSlide key={idx}>
//           <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-[90vh]">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
//               {/* Text Content */}
//               <div className="md:w-1/2 text-center md:text-left space-y-6 relative z-10">
//                 <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                   <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
//                   <p className="text-sm md:text-base font-medium text-white/90 whitespace-pre-line">
//                     {slide.label}
//                   </p>
//                 </div>

//                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight whitespace-pre-line drop-shadow-2xl">
//                   {slide.title}
//                 </h1>

//                 <button className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                   {slide.cta}
//                   <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
//                 </button>
//               </div>

//               {/* Enhanced Image Block */}
//               <div className="md:w-1/2 relative w-full max-w-2xl">
//                 <div className="relative aspect-square w-full">
//                   {/* Floating Layers */}
//                   <div className="absolute inset-0 -translate-x-6 translate-y-6 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-3xl blur-2xl animate-float"></div>
//                   <div className="absolute inset-0 translate-x-6 -translate-y-6 bg-gradient-to-tr from-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl animate-float-delay"></div>
                  
//                   {/* Main Image Container */}
//                   <div className="relative w-full h-full flex items-center justify-center isolate">
//                     <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl"></div>
//                     <div className="relative w-[85%] h-[85%] hover:rotate-[2deg] transition-transform duration-300 ease-out">
//                       <Image
//                         src={slide.image}
//                         alt={slide.title}
//                         fill
//                         className="object-contain scale-110 hover:scale-105 transition-all duration-300"
//                         sizes="(max-width: 768px) 90vw, 50vw"
//                         priority
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }




// 'use client'

// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/autoplay'

// // Slide data
// const slides = [
//   {
//     label: 'Best Ear\nHeadphones',
//     title: 'Music To\nFill Your Heart',
//     cta: 'Shop Now',
//     image: '/images/laptop/monitor.png',
//   },
//   {
//     label: 'Premium Sound',
//     title: 'Feel Every \nNote',
//     cta: 'Explore',
//     image: '/images/laptop/laptop-2.jpg',
//   },
//   {
//     label: 'Comfort Meets Style',
//     title: 'Wear All \nDay',
//     cta: 'Discover',
//     image: '/images/laptop/laptop-15-i3-6th-Generation-16-5.jpg',
//   },
// ]

// // Individual Slide Component
// function Slide({ slide }) {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
//       <div className="container mx-auto px-6 lg:px-24 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center">
//         {/* Text Block */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
//           <div className="inline-flex items-center space-x-3">
//             <span className="block w-1 bg-pink-600 rounded-full h-6"></span>
//             <p className="text-gray-700 font-medium whitespace-pre-line">
//               {slide.label}
//             </p>
//           </div>

//           <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight whitespace-pre-line">
//             {slide.title}
//           </h1>

//           <button className="mt-8 inline-block px-6 py-3 border-2 border-black rounded-full font-semibold text-black hover:bg-black hover:text-white transition-all duration-300">
//             {slide.cta}&nbsp;&rarr;
//           </button>
//         </div>

//         {/* Image Block with Circle Wave Effect */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
//           <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
//             {/* Circle Waves */}
//             <span className="absolute inset-0 flex items-center justify-center">
//               <span className="absolute block w-40 h-40 rounded-full border-2 border-pink-400 opacity-75 animate-ping"></span>
//               <span className="absolute block w-56 h-56 rounded-full border-2 border-purple-400 opacity-50 animate-ping delay-200"></span>
//               <span className="absolute block w-72 h-72 rounded-full border-2 border-indigo-400 opacity-25 animate-ping delay-400"></span>
//             </span>

//             {/* Image Container */}
//             <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
//               <Image
//                 src={slide.image}
//                 alt={slide.title.replace(/\\n/g, ' ')}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 80vw, (max-width: 1280px) 50vw, 500px"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // Main Hero Section
// export default function HomePageHeroSection() {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={1}
//       loop={true}
//       navigation={false}
//       pagination={false}
//       autoplay={{ delay: 5000 }}
//       className="w-full"
//     >
//       {slides.map((slide, idx) => (
//         <SwiperSlide key={idx}>
//           <Slide slide={slide} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }







'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const slides = [
  {
    label: 'Apple iPhone 16 Pro',
    title: 'Next-Level\nPerformance',
    cta: 'Shop Now',
    image: '/images/home/pcCategory/appleiphone.png',
  },
  {
    label: 'Capture The Moment',
    title: 'Professional Grade Camera',
    cta: 'View Camera',
    image: '/images/home/pcCategory/camera.png',
  },
  {
    label: 'Ultimate Clarity',
    title: '4K Ultra HD\nSmart Monitor',
    cta: 'Buy Now',
    image: '/images/laptop/monitor.png',
  },
]

export default function HomePageHeroSection() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000 }}
      className="w-full relative overflow-hidden"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <section className="relative min-h-[90vh] pt-15  bg-hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
                <div className="inline-flex  items-center gap-2 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <p className="text-sm md:text-base font-medium text-secondary whitespace-pre-line">
                    {slide.label}
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !text-secondary leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>

                <button className="btn-outline-primary mt-2 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {slide.cta} →
                </button>
              </div>

              {/* Animated Image Block with Circle Waves */}
              <div className="md:w-1/2 relative w-full  max-w-2xl flex items-center justify-center">
                {/* Circle Waves */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute block w-40 h-40 rounded-full border-2 border-gray-200 opacity-75 animate-ping"></span>
                  <span className="absolute block w-56 h-56 rounded-full border-2 border-gray-400 opacity-50 animate-ping delay-400"></span>
                  <span className="absolute block w-72 h-72 rounded-full border-2 border-gray-400 opacity-25 animate-ping delay-400"></span>
                </span>

                {/* Main Image Container */}
                <div className="relative w-64 bg-hero h-64 sm:w-80 sm:h-80 md:w-90 md:h-90 rounded-full overflow-hidden border-3 border-hero/20 backdrop-blur-lg  transform hover:scale-105 transition-transform duration-300">
                
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 80vw, 40vw"
                    priority
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute top-2 left-1/4 w-4 h-4 bg-primary rounded-full animate-float"></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-secondary rounded-full animate-float"></div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}