import axios from "axios";
import { toast } from "react-toastify";

export const verifyUserCookie = async (cookies, navigate, removeCookie) => {
  if (!cookies.token) {
    navigate("/login");
    return false;
  }

  try {
    const { data } = await axios.post(
      "http://localhost:8000",
      {},
      { withCredentials: true }
    );
    const { status, user } = data;
    if (status) {
      toast(`Welcome ${user}`, { position: "top-right" });
      return true;
    } else {
      removeCookie("token");
      navigate("/");
      return false;
    }
  } catch (err) {
    console.log("Error verifying user cookie:", err);
    return false;
  }
};