
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductPromoBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-hero py-20 px-4 sm:px-6 lg:px-10">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-secondary rounded-full mix-blend-multiply opacity-20 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary rounded-full mix-blend-screen opacity-30 filter blur-2xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0 z-10">
        <h2 className=" text-sm lg:text-xl font-bold uppercase  tracking-widest !text-white flex justify-start items-center !mb-5">
          <span className="w-1 h-6 !bg-primary mr-2 " />  Apple iPhone 12 Pro
        </h2>
          <h2 className="mt-4 text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
            The wait is on: <br className="hidden sm:inline" />iPhone 12 Max Pro
          </h2>
          <p className="mt-6 text-lg text-white/85 max-w-md mx-auto lg:mx-0">
            Last call for up to&nbsp;
            <span className="font-bold text-white">32% off!</span>
          </p>
          <Link href='/site/shop?category=Phones'>
            <button
              className="inline-block mt-8 btn-primary !text-white shadow-2xl transform hover:scale-105 transition"
            >
              Buy Now
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center z-10">
          <div className="relative w-80 h-auto transform rotate-6 hover:rotate-0 transition">
            <Link href='/site/shop?category=Phones'>
              <Image
                src="/images/home/pcCategory/appleiphone.png"
                alt="iPhone 12 Max Pro"
                width={720}
                height={700}
                className="object-contain "
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
