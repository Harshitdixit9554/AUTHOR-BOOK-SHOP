import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Cart({ cart, remove }) {
  const [List, setList] = useState([]);
  useEffect(() => {
    setList(cart);
  }, [cart]);

  return (
    <div className="mx-auto max-w-7xl  lg:px-0">
      <div className="mx-auto max-w-2xl py-6 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            {List?.map((data, index) => {
              return (
                <p key={index}>
                  <ul role="list" className="divide-y divide-gray-200">
                    <div className="">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="flex-shrink-0">
                          <img
                            src={data.Url}
                            alt=""
                            className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                {data.name}
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-2xl text-gray-500">
                                {data.description}
                              </p>
                            </div>

                            <div className="mt-1 flex items-end">
                              <p className="text-2xl font-medium text-gray-900">
                                Rs:{data.price * data.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button
                            className="h-9 w-9 rounded-md text-2xl font-md border-2"
                            type="button"
                            onClick={() => {

                              const _List = List.map((item, setindex) => {
                                return index === setindex
                                  ? {
                                    ...item,
                                    quantity:
                                      item.quantity > 1 ? item.quantity - 1 : 1,
                                  }
                                  : item;
                              });
                              setList(_List);
                            }}
                          >
                            -
                          </button>
                          <p className=" mx-1 h-9 w-9 rounded-md border  text-center ">
                            {data.quantity}
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              const _List = List.map((item, setindex) => {
                                
                                return index === setindex
                                  ? { ...item, quantity: item.quantity + 1 }
                                  : item;
                              });
                              setList(_List);
                            }}
                            className="flex items-center justify-center border-2 h-9 w-9 font-semibold text-2xl rounded-md "
                          >
                            +
                          </button>
                          <button type="button" className=" text-red-600" onClick={() => remove(index)}>
                            <FontAwesomeIcon className="mx-1 w-5 h-5 border-2 p-1.5 rounded-md" icon={faTrash} />
                          </button>
                        </div>
                      </div>

                    </div>
                  </ul>
                </p>
              );
            })}
          </section>
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-2xl text-gray-800">
                    Price (
                    {List.map((data) => data.quantity).reduce(
                      (total, value) => total + value,
                      0
                    )}
                    item)
                  </dt>
                  <dd className="text-2xl font-medium text-gray-900">
                    {List.map((data) => data.price * data.quantity).reduce(
                      (total, value) => total + value,
                      0
                    )}
                  </dd>
                </div>

                {/* tackel the existing product */}

                








                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-2xl text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-2xl font-medium text-green-700">
                    - ₹ 3,431
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-2xl text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-2xl font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    {List.map((data) => data.price * data.quantity).reduce(
                      (total, value) => total + value,
                      0
                    )}
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">

              </div>
            </div>
          </section>
        </form>
      </div>
    </div>

  );
}

export default Cart;