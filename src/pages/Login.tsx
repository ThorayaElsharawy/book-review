import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setError('');
      await login(email,password)
      navigate('/')
    } catch(err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("The email address provided is already in use by another account.");
      } else if (err.code === "auth/invalid-email") {
        setError("The email address provided is not valid.");
      } else if (err.code === "auth/operation-not-allowed") {
        setError("Account creation is currently disabled.");
      } else if (err.code === "auth/network-request-failed") {
        setError("A network error occurred while attempting to create your account. Please try again later.");
      } else if(err.code === 'auth/wrong-password') {
        setError('Wrong password');
      } else {
        setError(err.code);
      }      
    }
  }

  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-900 flex justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(src/assets/blob-haikei.svg" }}
    >
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  m-auto">
          <div className="flex justify-center">
            <svg
              style={{ color: "#6c63ff" }}
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
            <h2
              className="text-3xl text-center mx-2"
              style={{ color: "#6c63ff" }}
            >
              Qalamy
            </h2>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Login for Qalamy
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
              {error && (
                  <div className=" bg-red-100 text-red-600 rounded-lg font-medium p-4 mb-5">{error}</div>
                )}
                <form onSubmit={handleSubmitForm}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Login</span>
                  </button>
                </form>
                <div className="mt-6  text-gray-600 text-center hover:text-indigo-500">
                  <Link to="/signup">Create Your account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(src/assets/login.svg" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
