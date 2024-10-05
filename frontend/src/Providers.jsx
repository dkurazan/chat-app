import AuthContextProvider from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import SignUpPage from "./pages/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
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
