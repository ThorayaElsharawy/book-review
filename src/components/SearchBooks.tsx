import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchValue } = useContext(SearchContext);

  const baseURL = "https://www.googleapis.com/books/v1";
  const endpoint = "/volumes";

  const handleSearchBooks = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`${baseURL}${endpoint}?q=${searchInput}&maxResults=25`)
      .then((response) => {
        setSearchValue(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={(event) => handleSearchBooks(event)}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
            focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Books, Authors..."
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
