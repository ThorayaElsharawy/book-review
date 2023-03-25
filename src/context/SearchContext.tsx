import { createContext, useState } from "react";
import { Item, VolumeInfo } from "../types/Book";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type SearchValuesStates = {
  searchValue: Item[];
  setSearchValue: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const SearchContext = createContext<SearchValuesStates>(
  {} as SearchValuesStates
);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [searchValue, setSearchValue] = useState<Item[]>([]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
