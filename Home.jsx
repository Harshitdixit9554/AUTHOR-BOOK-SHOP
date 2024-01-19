import { Link } from 'react-router-dom';
import React from 'react'

function Home() {
  return (
    <>
      <div className="relative bg-cover bg-no-repeat px-6 pt-80 lg:px-8 bg-[url('https://w.forfun.com/fetch/95/954803891413d8a6f207cbf07070e0aa.jpeg')]  ">
        <div className="relative mx-auto max-w-8xl py-60 ">

          {/* <div className="text-center">
            <h1 className="text-4xl font-bold mt-8 tracking-tight text-gray-100 sm:text-2xl">
            
            </h1> */}
            <p className="mt-6 font-bold text-2xl leading-8 text-yellow-50">
             
            </p>
            <div className= "mt-50 flex items-center justify-center gap-x-8">
              <Link to='/Product'>
                <button type="button" className="rounded-md bg-black px-5 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Shop Now</button>
              </Link>

            </div>
          </div>
        </div>
      {/* </div> */}

    </>

  )
}

export default Home