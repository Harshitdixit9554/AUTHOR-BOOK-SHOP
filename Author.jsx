
import { useEffect } from 'react'
import Glide from '@glidejs/glide'

function Author() {
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
      <div className="glide-04 relative w-full bg-[url('/src/assets/bg-2.jpg')]">
        <h2 className='text-center text-white  p-4 text-4xl font-bold'>Author</h2>
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">

          <ul className="mt-10 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>

              <img
                src="https://images.saymedia-content.com/.image/t_share/MTc0NDc1NTEyNDkwNTY3MzAy/an-interview-from-beyond-with-albert-einstein.jpg"
                className="w-96 h-96 m-auto rounded-lg border-4"

              />
              <p className='text-center text-white font-semibold text-lg p-1'>Albert Eisten</p>
            </li>
            <li>

              <img
                src="https://n4.sdlcdn.com/imgs/f/1/c/Large-Print-Rabindranath-Tagore-SDL531333113-1-250a7.jpg"
                className="w-96 h-96 m-auto rounded-lg "
              />
              <p className='text-center text-white font-semibold text-lg p-1'>Rabindranath Tagore</p>
            </li>
            <li>

              <img
                src="https://media.wired.com/photos/59327f13a312645844995630/master/w_1920,c_limit/ritchie_HP.jpg"
                className="w-96 h-96 m-auto rounded-lg border-4"
              />
              <p className='text-center text-white font-semibold text-lg p-1'>Ritchie</p>
            </li>
            <li>

              <img
                src="https://dri.es/files/cache/blog/james-gosling-640w.jpg"
                className="w-96 h-96 m-auto rounded-lg border-4"

              />
              <p className='text-center text-white font-semibold text-lg p-1'>james Goselling</p>
            </li>
            <li>

              <img
                src="https://1.bp.blogspot.com/-ZAVHsQOicB0/XpqcvVG066I/AAAAAAAAAHU/XwtsSMCUy6kAcoqd5qwzs6xgl6WUbx8KwCLcBGAsYHQ/s1600/aryabhata-5%2B%25281%2529.jpg"
                className="h-96 w-96 m-auto rounded-lg border-4"
              />
              <p className='text-center text-white font-semibold text-lg p-1'>Aryabhatra</p>

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
    </>
  )
}
export default Author