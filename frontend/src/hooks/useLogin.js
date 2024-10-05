import { useState } from "react";
import { validateLoginData } from "../utils/auth";
import toast from "react-hot-toast";
import useAuthContext from "./useAuthContext";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();


  const login = async ({ username, password }) => {
    const success = validateLoginData({ username, password });

    if (success) {
      setLoading(true);

      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        // Set user info in local storage
        localStorage.setItem("user-info", JSON.stringify(data));

        // Set user info in context
        setAuthUser(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return { loading, login }
}

