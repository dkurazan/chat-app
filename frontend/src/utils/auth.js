import toast from "react-hot-toast";

export function validateSignupData({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  };

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

export function validateLoginData({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  };

  return true;
}
