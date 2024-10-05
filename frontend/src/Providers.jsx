import AuthContextProvider from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default function Providers() {
  return (
    <AuthContextProvider>
      <SocketContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </SocketContextProvider>
    </AuthContextProvider>
  );
}
