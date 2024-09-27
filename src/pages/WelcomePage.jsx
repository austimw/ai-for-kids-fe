import { useState } from "react";
import {
  WelcomeBg,
  Bgyellow,
  WelcomeGreetingOne,
  SpeakerYellow,
  WelcomeBack,
  WelcomeNext,
  WelcomeFlowers,
  HelpMeIdea,
} from "../assets";

import StoryCreator from "./StoryCreator";

function WelcomePage() {
  const [openHelpModal, setOpenHelpModal] = useState(false);

  const handleOpenHelpModal = () => {
    setOpenHelpModal(true);
  };

  const handleClose = () => {
    setOpenHelpModal(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="bg-cover bg-center h-full w-full align-middle"
        style={{ backgroundImage: `url(${WelcomeBg})` }}
      >
        <div className="h-full w-full flex items-center relative">
          <img src={Bgyellow} alt="yellow" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full flex justify-between py-16 px-8">
            <img src={WelcomeBack} alt="Back" />
            <img src={SpeakerYellow} alt="Speaker" />
          </div>
          <img
            src={WelcomeGreetingOne}
            alt="Welcome"
            className="absolute top-28 left-20"
          />
          <div className="absolute bottom-0 w-full flex justify-center items-center flex-col pb-12">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[20px]">My story is about</div>
              <textarea
                type="text"
                className="z-0 w-[350px] h-[120px] text-lg border-4 border-blue-300 rounded-lg p-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Story about a Princess who meets a Unicorn in the magical forest"
              />
            </div>
            <img
              src={HelpMeIdea}
              alt="Help"
              className=" w-72"
              onClick={handleOpenHelpModal}
            />
            <div className="h-16 flex items-center m-auto">
              <img src={WelcomeFlowers} alt="Flowers" className="w-28" />
            </div>
            <img
              src={WelcomeNext}
              alt="Next"
              className="cursor-pointer w-full px-16"
            />
          </div>
        </div>
      </div>
      {openHelpModal && (
        <StoryCreator
          className={`absolute bottom-0 w-full transition-transform duration-500 ${
            openHelpModal ? "translate-y-0" : "translate-y-full"
          }`}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default WelcomePage;
