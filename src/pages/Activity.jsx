import { useNavigate } from "react-router-dom";
import { Bgyellow } from "../assets";
import ButtonIcon from "../assets/activity/button.svg";
import SharingImage from "../assets/activity/sharing.svg";
import OwlIcon from "../assets/video/owl-icon.svg";
import Comment from "../assets/activity/comment.svg";

function WelcomePage() {
  const navigate = useNavigate();

  const handleActivityComplete = () => {
    navigate("/game");
  };

  return (
    <div className="relative w-full">
      <div className="bg-cover bg-center h-full w-full align-middle bg-[#FFFBE9]">
        <div className="h-full w-full flex items-center relative">
          <img src={Bgyellow} alt="yellow" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full flex justify-between pb-16 pt-10 px-8">
            <div className="flex  w-full mt-14">
              <img
                src={OwlIcon}
                alt="Owl character"
                className="w-24 h-24 mt-14"
              />
              <img src={Comment} />
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center items-center flex-col pb-12">
            <img
              src={SharingImage}
              className="px-auto py-4 cursor-pointer"
            />
            <img src={ButtonIcon} onClick={handleActivityComplete} className="cursor-pointer" />
            <button className="text-gray-400 mt-10 text-xl font-summary-notes">
              Skip & Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
