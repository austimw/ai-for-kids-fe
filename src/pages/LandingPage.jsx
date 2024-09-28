import { useNavigate } from "react-router-dom";
import {
  LandingBg,
  LandingIcon,
  LandingBell,
  Egg1,
  Egg2,
  Egg3,
} from "../assets";

export function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/walkthrough");
  };

  return (
    <div
      className="h-full w-full relative flex flex-col items-center bg-white"
      onClick={handleClick}
    >
      <img
        src={LandingBell}
        alt="Landing Bell"
        className="w-[44px] h-[44px] z-20 absolute right-6 top-6"
      />
      <img
        src={LandingBg}
        alt="Landing Page"
        className="w-full absolute top-0 h-[730px] object-cover"
      />
      <img
        src={LandingIcon}
        alt="Landing Icon"
        className="w-[230px] h-[230px] z-20 mt-[240px]"
      />
      <div className="text-[90px] font-normal z-20">Joy Journeys</div>
      <div className="flex absolute bottom-16 gap-8">
        <img src={Egg1} alt="Egg 1" className="w-[24px] h-[31px]" />
        <img src={Egg2} alt="Egg 2" className="w-[24px] h-[31px]" />
        <img src={Egg3} alt="Egg 3" className="w-[24px] h-[31px]" />
      </div>
    </div>
  );
}
