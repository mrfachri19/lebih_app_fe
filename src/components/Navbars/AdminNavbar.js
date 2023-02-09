import React from "react";
import { Link } from "react-router-dom";
import { People24Filled } from "@fluentui/react-icons";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  };
  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-20 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center mx-auto">
          <a href="/auth/login" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              LEBIHAPP
            </span> */}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto flex-1"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-green-20 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  to="/admin"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("role") === "merchant" ||
              localStorage.getItem("role") === "organization" ? (
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                    to="/admin/chat"
                  >
                    Live chat
                  </Link>
                </li>
              ) : (
                <></>
              )}

              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  to="/admin/livechat"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                {localStorage.getItem("role") === "merchant" ? (
                  <Link
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                    to="/admin/confirm-order"
                  >
                    Order
                  </Link>
                ) : localStorage.getItem("role") === "driver" ? (
                  <Link
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                    to="/admin/driver/delivery"
                  >
                    Delivery
                  </Link>
                ) : localStorage.getItem("role") === "costumer" ? (
                  <Link
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                    to="/admin/order"
                  >
                    Order
                  </Link>
                ) : (
                  <></>
                )}
              </li>
              <li>
                <Link
                  to="admin/artikel"
                  className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                >
                  Article
                </Link>
              </li>
              <li>
                {localStorage.getItem("role") === "merchant" ? (
                  <Link
                    to="/admin/sharing"
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  >
                    Sharing
                  </Link>
                ) : (
                  <></>
                )}
              </li>
              <li>
                {localStorage.getItem("role") === "merchant" ? (
                  <Link
                    to="/admin/sharing"
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  >
                    Recycle
                  </Link>
                ) : (
                  <></>
                )}
              </li>
              <li>
                {localStorage.getItem("role") === "admin" ? (
                  <Link
                    to="admin/approval"
                    className="block py-2 pl-3 pr-4 text-white text-xl font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  >
                    Approval
                  </Link>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
          <form className="md:flex hidden flex-row flex-wrap items-center mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          <div className="ml-auto z-30">
            {localStorage.getItem("token") ? (
              <div className="flex">
                <h1 className="mt-3 mr-3 font-semibold text-white">
                  {localStorage.getItem("role")}
                </h1>
                <div className="items-center flex mr-2">
                  <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
                    <People24Filled className="w-8 text-black " height="100%" />
                  </span>
                </div>
                <button
                  type="button"
                  className="text-white ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl m px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex">
                <Link
                  className="text-white ml-auto hover:bg-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2"
                  to="/auth/login"
                >
                  Login
                </Link>
                <Link
                  className="text-white ml-auto bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2"
                  to="/auth/login"
                >
                  Join now
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
