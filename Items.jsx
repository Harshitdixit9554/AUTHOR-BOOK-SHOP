import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
// import Product from "./Product"

export default function CarouselControlsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full">
        {/*    <!-- Slides --> */}
        <h2 className="text-center p-4 text-4xl font-bold"> READ BOOKS</h2>
        <div className="overflow-hidden" data-glide-el="track">

          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://m.media-amazon.com/images/I/71l3BVfbrRL._AC_UL480_FMwebp_QL65_.jpg"
                className=" w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/713-hV5Oz8L._AC_UY327_FMwebp_QL65_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/81p4c2JmKgL._AC_UY327_FMwebp_QL65_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/81esDHNyRsL._AC_UY327_QL65_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/6137IbwpvvL._BG0,0,0,0_FMpng_AC_SY480_SX480_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/61iJM85hiTL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/71z3HvUJoPL._AC_UL480_FMwebp_QL65_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/618MxJbK1WS._AC_UY327_FMwebp_QL65_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/61QuEiITG0S._AC_UY327_FMwebp_QL65_.jpg"
                className="w-80 h-80 m-auto rounded-lg border-6"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <Product/> */}
      {/*<!-- End Carousel with controls outside --> */}
    </>
  )
}