// 'use client'

// import { useState } from 'react'
// import { Play } from 'lucide-react'

// export default function AboutVideoFaqSection() {
//   const [openIndex, setOpenIndex] = useState(0)

//   const faqs = [
//     {
//       question: 'Can I cancel my account at any time?',
//       answer: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit
//       id autem velit aut iusto odio et deleniti quis et doloremque enim vel
//       consequuntur quos.`
//     },
//     {
//       question: 'What happens after the license expires?',
//       answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
//       Praesent libero. Sed cursus ante dapibus diam.`
//     },
//     {
//       question: 'Does Harry have any documentations?',
//       answer: `Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
//       Praesent mauris. Fusce nec tellus sed augue semper porta.`
//     }
//   ]

//   const toggle = (i) => {
//     setOpenIndex(openIndex === i ? null : i)
//   }

//   return (
//     <section className="max-w-7xl bg-hero/30 mx-auto px-4 py-16 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 items-start">
//       {/* Video / Image */}
//       <div className="relative self-center w-full h-64 md:h-[360px]">
//         <img
//           src="/images/aboutShopping.jpg"
//           alt="Team collaborating"
//           className="w-full h-full object-cover rounded-lg"
//         />
//         <div
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             //  diameter outer circle
//             width: '60px',
//             height: '60px',
//             margin: 'auto',
//             borderRadius: '50%',
//             border: '2px solid rgba(255,255,255,0.5)'
//           }}
//         >
//           <Play size={30} className="text-pink-500" />
//         </div>
//       </div>

//       {/* Text + Accordion */}
//       <div>
//         {/* Subheading */}

//         <h3 className="text-1xl font-bold !text-secondary flex justify-start items-center !mb-5">
//             <span className="w-1 h-6 !bg-primary mr-2 " />Get in touch with us to see how
//         </h3>

//         {/* Heading */}
//         <h2
//           className="font-bold text-3xl !text-secondary md:text-4xl leading-tight !mb-6"
//           style={{ lineHeight: '1.2' }}
//         >
//           Provide smart and<br />
//           flexible digital services
//         </h2>

//         {/* Divider */}
//         {/* <div className="border-t border-gray-200 mb-6" /> */}

//         {/* Accordion */}
//         <div className="border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
//           {faqs.map((faq, i) => {
//             const isOpen = openIndex === i
//             return (
//               <div key={i}>
//                 <button
//                   onClick={() => toggle(i)}
//                   className={`
//                     w-full flex items-center justify-between
//                     py-4 px-6
//                     text-left
//                     transition
//                     ${isOpen
//                       ? 'text-pink-600'
//                       : 'text-gray-800'}
//                   `}
//                 >
//                   <span className="font-medium text-base md:text-lg">
//                     {faq.question}
//                   </span>
//                   <span className="ml-4">
//                     {isOpen
//                       ? <svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z" fill="currentColor"/></svg>
//                       : <svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
//                     }
//                   </span>
//                 </button>

//                 {isOpen && (
//                   <div
//                     className="px-6 pb-6 text-gray-600 text-base leading-relaxed"
//                     style={{ animation: 'fadeIn 200ms ease-out' }}
//                   >
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-4px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   )
// }
'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export default function AboutVideoFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Developer can configure which video option to use:
  // type: 'upload' for a local video file, 'iframe' for an external embed link
  // src: URL or path to the video
  const videoOption = {
    type: 'upload',              // 'upload' or 'iframe'
    src: '/videos/about.mp4'     // e.g. '/videos/about.mp4' or 'https://www.youtube.com/embed/...'    
  }

  const faqs = [
    {
      question: 'Can I cancel my account at any time?',
      answer: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit
      id autem velit aut iusto odio et deleniti quis et doloremque enim vel
      consequuntur quos.`
    },
    {
      question: 'What happens after the license expires?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam.`
    },
    {
      question: 'Does Harry have any documentations?',
      answer: `Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      Praesent mauris. Fusce nec tellus sed augue semper porta.`
    }
  ]

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="max-w-7xl bg-hero/30 mx-auto px-4 py-16 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-start">
      {/* Video / Image */}
      <div className="relative self-center w-full h-64 md:h-[360px]">
        {isPlaying ? (
          videoOption.type === 'upload' ? (
            <video
              src={videoOption.src}
              controls
              autoPlay
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <iframe
              src={videoOption.src}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          )
        ) : (
          <>
            <img
              src="/images/aboutShopping.jpg"
              alt="Team collaborating"
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-16 h-16">
                {/* Ripple effect */}
                <span className="absolute inline-flex w-full h-full rounded-full bg-pink-500 opacity-50 animate-ping"></span>
                {/* Static outer circle */}
                <span className="absolute inline-flex w-16 h-16 rounded-full border-2 border-white"></span>
                <Play size={32} className="relative text-white" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Text + Accordion */}
      <div>
        {/* Subheading */}
        <h3 className="text-1xl font-bold !text-secondary flex justify-start items-center !mb-5">
          <span className="w-1 h-6 !bg-primary mr-2 " />Get in touch with us to see how
        </h3>

        {/* Heading */}
        <h2
          className="font-bold text-3xl !text-secondary md:text-4xl leading-tight !mb-6"
          style={{ lineHeight: '1.2' }}
        >
          Provide smart and<br />
          flexible digital services
        </h2>

        {/* Accordion */}
        <div className="border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className={`
                    w-full flex items-center justify-between
                    py-4 px-6
                    text-left
                    transition
                    ${isOpen
                      ? 'text-pink-600'
                      : 'text-gray-800'}
                  `}
                >
                  <span className="font-medium text-base md:text-lg">
                    {faq.question}
                  </span>
                  <span className="ml-4">
                    {isOpen
                      ? <svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z" fill="currentColor"/></svg>
                      : <svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
                    }
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 text-gray-600 text-base leading-relaxed"
                    style={{ animation: 'fadeIn 200ms ease-out' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
