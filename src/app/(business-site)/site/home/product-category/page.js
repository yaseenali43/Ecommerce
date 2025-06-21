'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function ProductCategory() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchCategories() {
      try {
        const { data } = await axios.get('http://localhost:4000/categories')
        // support both {categories: [...]} and bare array
        const list = Array.isArray(data) ? data : data.categories
        if (isMounted) setCategories(list || [])
      } catch (err) {
        if (isMounted) setError(err.message || 'Unknown error')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchCategories()
    return () => { isMounted = false }
  }, [])

  if (loading) {
    return (
      <div className="w-full py-12 flex justify-center">
        <span className="text-lg text-gray-500">Loading categories…</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full py-12 flex justify-center">
        <span className="text-lg text-red-500">
          Failed to load categories: {error}
        </span>
      </div>
    )
  }

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-12">
      <h2 className="text-2xl font-bold !text-secondary flex flex-col justify-center items-center !mb-5">
        Choose PC Category
        <div className="w-14 h-1 bg-primary mt-2" />
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        spaceBetween={16}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          512: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {categories.map(cat => (
          <SwiperSlide key={cat.id} className='py-3'>
            <Link
              href={`/site/shop?category=${encodeURIComponent(cat.name)}`}
              className=" bg-secondary rounded-2xl shadow-md p-6 flex flex-col items-center transition hover:scale-[1.02]"
            >
              <div className="w-32 h-20 relative mb-4">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-white hover:text-primary">
                {cat.name}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
