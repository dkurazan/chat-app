import { useState } from "react";
import { validateSignupData } from "../utils/auth";
import toast from "react-hot-toast";
import useAuthContext from "./useAuthContext";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = validateSignupData({ fullName, username, password, confirmPassword, gender });

    if (success) {
      setLoading(true);

      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
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

  return {loading, signup}
}

