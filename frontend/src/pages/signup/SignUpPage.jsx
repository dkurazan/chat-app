import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import GenderPicker from "../../components/GenderPicker";
import useSignUp from "../../hooks/useSignup";
import useAuthContext from "../../hooks/useAuthContext";

export default function SignUpPage() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignUp();
  const { authUser } = useAuthContext();

  if (authUser) {
    return <Navigate to="/" replace />;
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-fit sm:min-w-96 mx-auto">
      <div className="w-fit sm:w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base text-gray-400 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base text-gray-400 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
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
              placeholder="Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base text-gray-400 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderPicker
            onRadioChange={(gender) => setInputs({ ...inputs, gender })}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-xs text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
