import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { SearchBooks } from "./SearchBooks";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate();

  async function handleLogout() {
    console.log('here');
    
    setError('');

    try {
      await logout();
      navigate('/login')

    } catch {
      setError('Failed to log out')
    }

  }

  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="relative container px-6 py-4 mx-auto">
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
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center"
              >
                <img
                  className="h-9 w-9 rounded-full"
                  src="src/assets/user.jpg"
                  alt=""
                />
                <svg
                  className={`${
                    isOpen ? "transform rotate-180" : ""
                  } w-6 h-6 ml-2`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 top-14 z-10 w-40 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <p className=" border-b  block px-4 py-2 text-sm text-gray-700 ">
                      Signed in as {currentUser.email}
                    </p>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <p
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Log out
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
