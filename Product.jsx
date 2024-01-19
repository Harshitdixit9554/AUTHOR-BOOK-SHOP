import React from 'react'

function Product({ addtocart }) {
  let product = [
    {
      id: 1,
      name: "JEEVAN RAHASHYA",
      Url: "https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "GOPAL DAS",
      price: "700",
      description: "Life's Amazing Secrets (Hindi): Jeevan Ke Adbhut Rahasy...",

    },

    {
      id: 2,
      name: "MOTIVATION",
      Url: " https://m.media-amazon.com/images/I/61VAtRuPgYL._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "ACHARYA PRASANT",
      price: "600",
      description: "Motivation(Paperback, Acharya Prashant.)",

    },
    {
      id: 3,
      name: "THE GHOST STORIES",
      Url: " https://m.media-amazon.com/images/I/61WVRpAeALL._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "CHARLES DICKENS",
      price: "500",
      description: "The Queer Chair & Other Ghost Stories.",

    },
    {
      id: 4,
      name: "RELATIVITY",
      Url: " https://m.media-amazon.com/images/I/71yQBUcNMRL._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "RAMAN SHUKLA",
      price: "1400",
      description: "A really great book for me.",

    },

    {
      id: 5,
      name: "PYTHON PROGRAMMING",
      Url: " https://m.media-amazon.com/images/I/61mAEfOZNvL._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "SHEETAL TANEEJA",
      price: "600",
      description: "Python Programming - A Modular Approach with Graphics,...",

    },

    {
      id: 6,
      name: "PYTHON PROGRAMMING",
      Url: "https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "SHEETAL TANEEJA",
      price: "600",
      description: "Python Programming - A Modular Approach with Graphics,...",

    },

    {
      id: 7,
      name: "PYTHON PROGRAMMING",
      Url: "https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UY327_FMwebp_QL65_.jpg",
      AuthorName: "SHEETAL TANEEJA",
      price: "600",
      description: "Python Programming - A Modular Approach with Graphics,...",

    },
    {
      id: 8,
      name: "CODING QUESTION",
      Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZHV_X7Phk8QAioiNeaUkPXI8oe_4EKPpeg&usqp=CAU",
      AuthorName: "NARSHIMA KARUNACHI",
      price: "800",
      description: "serives provide this programming request.",


    }]
  return (
    <>
      <h1 className='text-bold text-4xl 
  flex justify-center'> Collection Itmes</h1>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

        {product.map((product, index) => {
          return (
            <div key={index} className='rounded-r-2xl'>
              <img src={product.Url} alt="" className='w-80 h-80 m-auto rounded-lg border-6' />

              <div className="p-6">
                <h1 className="text-ellipsis text-2xl items-center  text-wrap hover:text-balance ">
                  {product.name}
                </h1>
                <p className="mt-2 text-2xl text-gray-600">
                  {product.AuthorName}
                </p>

                <p className="mt-2 text-2xl text-gray-600">
                  {product.description}
                </p>
                <p className='text-center max-w-3 items-center text-2xl'>₹{product.price}</p>
                <div className='item-center'>
                  <button
                    type="button" onClick={() => addtocart(product)}
                    class=" rounded-md bg-green-600 ml-10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >

                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          )

        })}

      </div>
    </>
  )
}

export default Product
