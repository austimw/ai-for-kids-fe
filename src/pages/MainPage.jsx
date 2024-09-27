import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/landing-page");
    }
  }, [location]);

  return (
    <div className="h-full w-full flex justify-center">
      <Outlet />
    </div>
  );
};