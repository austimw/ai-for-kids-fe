import { useEffect, useState } from "react";
import {
  WelcomeBg,
  Bgyellow,
  WelcomeGreetingOne,
  SpeakerYellow,
  WelcomeBack,
  WelcomeNext,
  WelcomeFlowers,
  HelpMeIdea,
  GenerateVideo,
} from "../assets";

import StoryCreator from "./StoryCreator";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ideaParams } from "../atoms/ideaAtom";
import LanguageDropdown from "./LanguageDropDown";

function WelcomePage() {
  const navigate = useNavigate();
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [storyInput, setStoryInput] = useState("");
  const [selectedItem, setSelectedItem] = useRecoilState(ideaParams);

  const handleOpenHelpModal = () => {
    setOpenHelpModal(true);
  };

  const handleClose = () => {
    setOpenHelpModal(false);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleStoryInput = (e) => {
    setStoryInput(e.target.value);
  };

  console.log({ selectedItem });

  useEffect(() => {
    if (
      selectedItem.Characters &&
      selectedItem.Setting &&
      selectedItem.Morals
    ) {
      setStoryInput(
        `Story about a ${selectedItem.Characters} in a ${selectedItem.Setting} in the ${selectedItem.Morals}`
      );
    }
  }, [selectedItem]);

  console.log({ storyInput });

  return (
    <div className="relative w-[500px]">
      <div
        className="bg-cover bg-center h-full w-full align-middle"
        style={{ backgroundImage: `url(${WelcomeBg})` }}
      >
        <div className="h-full w-full flex items-center relative">
          <img src={Bgyellow} alt="yellow" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full flex justify-between py-16 px-8">
            <img
              src={WelcomeBack}
              alt="Back"
              className="cursor-pointer"
              onClick={handleNavigateBack}
            />
            <img src={SpeakerYellow} alt="Speaker" className="cursor-pointer" />
          </div>
          <img
            src={WelcomeGreetingOne}
            alt="Welcome"
            className="absolute top-28 left-20"
          />
          <div className="absolute bottom-0 w-full flex justify-center items-center flex-col pb-12">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="text-[20px]">My story is about</div>
              <textarea
                type="text"
                className="z-0 w-[350px] h-[120px] text-lg border-4 border-blue-300 rounded-lg p-4 text-gray-500 focus:outline-none resize-none"
                placeholder="Story about a Princess who meets a Unicorn in the magical forest"
                value={storyInput}
                onChange={handleStoryInput}
              />
            </div>
            <img
              src="src/assets/common/Bulb.gif"
              className="absolute w-[54px] h-[60px] top-[180px] right-[120px] transform rotate-[30deg] z-5 rounded-full"
            />
            <img
              src={HelpMeIdea}
              alt="Help"
              className="w-72 h-14 cursor-pointer"
              onClick={handleOpenHelpModal}
            />
            <div className="flex items-center m-auto flex-col py-8">
              <span>Select language</span>
              <LanguageDropdown />
            </div>
            <img
              src="src/assets/common/Video.gif"
              className="absolute w-[48px] h-[45px] bottom-[130px] left-[100px] transform rotate-[-30deg] z-5 rounded-2xl"
            />
            <img
              src={GenerateVideo}
              alt="Generate"
              className="cursor-pointer w-full px-16 pt-4"
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
