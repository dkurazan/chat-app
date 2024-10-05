import AuthContextProvider from "./context/AuthContext";
import { SocketContextProvider } from "./context/SocketContext";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";

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
