import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BGYellow,
  NextButton,
  BackButton,
  LetsStart,
  SkipButton,
  SoundButton,
  FirstEgg,
  SecondEgg,
  ThirdEgg,
  StoryIdea,
  MoralIdea,
  ActivityIdea,
} from "../assets";

export default function WalkthroughPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Engaging Learning",
      description:
        "The app turns moral lessons into fun, captivating story videos that enhance children's understanding.",
    },
    {
      title: "Personalized Experiences",
      description:
        "AI tailors stories to individual interests, fostering deeper connections to moral concepts.",
    },
    {
      title: "Creative Expression",
      description:
        "Kids can participate in story creation, boosting imagination while reinforcing important values.",
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/login");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#F0F0F0] rounded-lg shadow-lg overflow-hidden">
      <div className="relative flex flex-col items-center w-full">
        <div className="flex justify-end w-full p-4 gap-4">
          <img src={SoundButton} className="w-[44px] h-[44px]" />
          <img src={SkipButton} className="w-[81px] h-[44px]" />
        </div>
        <h2 className="text-[30px] font-normal text-center pt-6">
          {steps[currentStep]?.title}
        </h2>
        <p className="text-xl font-normal text-center text-[#6F6F6F] mb-6 max-w-[330px]">
          {steps[currentStep]?.description}
        </p>
      </div>
      <div className="p-6">
        <div className="mb-32 image-div transition-all duration-500 ease-in-out">
          {currentStep === 0 && (
            <div className="w-full h-48 flex justify-center mb-12 transition-opacity duration-500 ease-in-out">
              <img
                src={StoryIdea}
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
          )}
          {currentStep === 1 && (
            <div className="w-full h-48 flex justify-center mb-12 transition-opacity duration-500 ease-in-out">
              <img
                src={MoralIdea}
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="w-full h-48 flex justify-center mb-12 transition-opacity duration-500 ease-in-out">
              <img
                src={ActivityIdea}
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
          )}
          <div className="flex justify-center items-center space-x-8 min-h-[70px]">
            <img
              src={FirstEgg}
              className={`transition-all duration-300 ease-in-out ${
                currentStep === 0 ? "w-[48px] h-[60px]" : "w-[24px] h-[30px]"
              }`}
            />
            <img
              src={SecondEgg}
              className={`transition-all duration-300 ease-in-out ${
                currentStep === 1 ? "w-[48px] h-[60px]" : "w-[24px] h-[30px]"
              }`}
            />
            <img
              src={ThirdEgg}
              className={`transition-all duration-300 ease-in-out ${
                currentStep === 2 ? "w-[48px] h-[60px]" : "w-[24px] h-[30px]"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img
          src={BGYellow}
          className="absolute bottom-0 w-[500px] h-[350px] left-0"
        />
        <div className="absolute px-6 py-4 bottom-10 flex flex-col items-center justify-center w-full space-y-2 buttons-div transition-all duration-500 ease-in-out">
          <img
            src={currentStep === steps.length - 1 ? LetsStart : NextButton}
            className={`w-full cursor-pointer h-[82px] transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 ${
              currentStep > 0 ? "mb-2" : "mb-[-60px]"
            }`}
            onClick={nextStep}
          />

          <img
            src={BackButton}
            className={`w-full h-[82px] cursor-pointer transition-all duration-500 ease-in-out transform ${
              currentStep > 0
                ? "opacity-100 translate-y-0 block"
                : "opacity-0 translate-y-4 invisible"
            } hover:scale-105 active:scale-95`}
            onClick={prevStep}
          />
        </div>
      </div>
    </div>
  );
}
