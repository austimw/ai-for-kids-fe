import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import Item from "../assets/audio/bg-audio.mp4";

export const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const audioRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/landing-page");
    }
  }, [location, navigate]);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    // Attach event listener for user interaction to start audio
    document.addEventListener("click", playAudio);
    return () => document.removeEventListener("click", playAudio);
  }, []);

  return ( 
    <div className="h-[90%] w-[500px] flex justify-center rounded-lg overflow-hidden">
      <audio ref={audioRef} loop>
        {/* <source src={Item} type="audio/mp4" /> */}
      </audio>
      <Outlet />
    </div>
  );
};
