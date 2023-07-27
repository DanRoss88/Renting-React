import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const useCookieManagement = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const logOut = () => {
    removeCookie("token");
    navigate("/register");
  };

  return { cookies, setCookie, removeCookie, navigate, logOut };
};