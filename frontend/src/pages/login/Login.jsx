import { Link, Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { authUser } = useAuthContext();
  const { loading, login } = useLogin();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  if (authUser) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(loginData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base text-gray-400 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base text-gray-400 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-xs text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don&#39;t have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
