import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative w-full bg-white rounded-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img
                src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-[30px] h-[30px] rounded-full"
              />
            </span>
            <span className="font-bold text-2xl">Ancient Bharat</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <Link
                  to="/home"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/home/allblog"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  All Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/home/my-blog"
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  My Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <Link to="post-blog">
              <button
                type="button"
                className="rounded-lg text-black px-3 py-2 text-sm font-semibold border-2 border-black shadow-sm hover:bg-black hover:text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                PostBlog
              </button>
            </Link>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
      {/* outlet */}
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Home;
