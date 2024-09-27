import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Item from "../assets/audio/bg-audio.mp4";

export const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/landing-page");
    }
  }, [location, navigate]);

  const [isMuted, setIsMuted] = useState(false); // State to track if audio is muted
  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    const playAudio = (val) => {
      console.log(val?.target?.id);
      if (val?.target?.id === "mute-button") {
        audioRef.current.muted = !audioRef.current.muted;
      }
      if (audioRef.current && !isMuted) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    // Attach event listener for user interaction to start audio
    document.addEventListener("click", playAudio);
    return () => document.removeEventListener("click", playAudio);
  }, [isMuted]); // Re-run effect if isMuted changes

  // Toggle mute function
  const toggleMute = () => {
    setIsMuted((prevMute) => !prevMute);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Mute/Unmute audio element
    }
  };

  return (
    <div className="h-[90%] w-[500px] flex justify-center rounded-lg overflow-hidden">
      <audio ref={audioRef} loop onClick={toggleMute}>
        <source src={Item} type="audio/mp4" />
      </audio>
      <Outlet />
    </div>
  );
};
