import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselIndicatorsControlsInside() {
  const items = [
    {
      id: 1,
      name: 'MedEd Inicet',
      url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/book/l/u/m/physics-wallah-inicet-essentials-may-2023-questions-solutions-original-imagqs9gxkb2suby.jpeg?q=70',
      price: '780',
       author: 'Dr. Hara Prasad Mishra'
    },
    {
      id: 2,
      name: 'Easy English',
      url: 'https://rukminim2.flixcart.com/image/612/612/kpedle80/book/v/w/2/english-is-easy-original-imag3mxh9czby3rg.jpeg?q=70',
      price: '289',
      author: 'Charles Dickens'
    },
    {
      id: 3,
      name: 'The Discovery India',
      url: 'https://rukminim2.flixcart.com/image/612/612/krp94sw0/book/b/g/p/the-discovery-of-india-original-imag5fwxqgpwe5gh.jpeg?q=70',
       price: '658',
      author: 'Jawaharlal Nehru'
    },
    {
      id: 4,
      name: 'Unflattening',
      url: 'https://rukminim2.flixcart.com/image/612/612/k6l2vm80/book/9/5/2/vatika-bhag-3-original-imafpyegazbyfrme.jpeg?q=70',
       price: '450',
       author: 'Parnal'
    },
    {
      id: 5,
      name: 'Ghost Hunters',
      url: 'https://rukminim2.flixcart.com/image/612/612/ki6bgcw0-0/book/s/v/6/ghost-huntress-book-1-the-awakening-original-imafyyhzqxkyyvce.jpeg?q=70',
      price: '569',
       author: 'Gibson Marley'
    },
    {
      id: 6,
      name: 'The Trail Of Blood',
      url: 'https://rukminim2.flixcart.com/image/612/612/k8ddoy80/book/3/5/5/between-one-and-many-more-original-imafqepghwhxjxmz.jpeg?q=70',
      price: '569',
       author: 'Clark Stephen'
    },
  ]


  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
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
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-pre-wrap justify-center flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p- rounded-md border">
            {items.map((data, index) => {
              return (
                <li key={index} className="bg-white justify-center">
                  <img
                    src={data.url} class="w-60 h-60 m-auto rounded-lg border-4"

                  />
                  <p className="flex justify-center italic  text-2xl font-serif capitalize">{data.name}</p>
                  <p className="flex justify-center  text-black italic">{data.price}</p>
                  <p className="flex justify-center rounded bg-slate-600 italic">{data.author}</p>
                  <br>
                  </br>
                  
                </li>

              )

            })}




          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex justify-center h-0 w-full items-center px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-8 lg:w-12"
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
            className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-600 transition duration-400 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-10 lg:w-10"
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
    
    </>
  )
}