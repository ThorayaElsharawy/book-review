import { useState } from "react";
import { SearchBooks } from "./SearchBooks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center ">
              <svg
              className="text-blue-800"
                viewBox="0 0 64 64"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={4}
                  d="M63 3v50l-4 8-4-8V3zM55 7h-4v10M4 3h40v58H4zM34 3v57M8 16H0M8 8H0M8 24H0M8 32H0M8 40H0M8 48H0M8 56H0"
                />
              </svg>
              <h2 className="text-xl mx-1 " style={{ color: "#4a5563" }}>
                Qalamy
              </h2>
            </div>
            <div className="w-1/3">
              <SearchBooks />
            </div>
            <div className="flex">
              <button
                type="button"
                className="mx-5 rounded-full text-blue-800 px-1 "
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex rounded-full bg-gray-200 text-sm"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="h-9 w-9 rounded-full"
                  src="src/assets/user.jpg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
