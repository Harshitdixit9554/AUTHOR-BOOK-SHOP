
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from 'react-router-dom'


function Navbar({ count }) {
  function useToggle() {
    const [value, setValue] =
      useState(initialValue)
  }
  return (

    <div className="relative w-full  bg-violet-300">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex  items-center space-x-2">
          <img className="w-20 h-20 rounded-full" src="https://cdn.vectorstock.com/i/preview-1x/99/14/open-book-icon-gold-logo-vector-44279914.webp"></img>

          <span className="font-bold text-yellow-900 italic  ml text-2xl">Book Collection</span>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-8 inline-flex space-x-12">
            <li>
              <a
                href="#"
                className="inline-flex items-center text-2xl font-semibold text-white hover:text-red-600"
              >
                <Link to="/Home">Home</Link>

              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center  text-2xl font-semibold text-white hover:text-red-600"
              >
                <Link to="/Author">Author</Link>

              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center  text-2xl font-semibold text-white hover:text-red-600"
              >
                <Link to="/Items">Items</Link>

              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center mr-6 text-2xl font-semibold text-white hover:text-red-600">

                <Link to="/Contact">Contact</Link>

              </a>
            </li>
          </ul>
        </div>
        <div className="ml-2 mt-2 hidden lg:block">
          <span className="relative inline-block space-x-3 text-2xl text-white hover:text-cyan-600">
            <div className="
            h-9 w-9 ml-6 mt-4 rounded-full bg-red-700 pl-3"><span className="w-4 h-4">{count}</span></div>
            <Link to="/Cart" ><FontAwesomeIcon className="mr-8" icon={faCartShopping} /></Link> </span>
          <span className="relative inline-block space-x-3 text-2xl text-white hover:text-cyan-600">
            <Link to="/Signup"><FontAwesomeIcon icon={faUser} /></Link> </span>
        </div>


        <div className="ml-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>



  );
}

export default Navbar