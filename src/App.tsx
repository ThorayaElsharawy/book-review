import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SearchContextProvider } from "./context/SearchContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <SearchContextProvider>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </SearchContextProvider>
  );
}

export default App;
