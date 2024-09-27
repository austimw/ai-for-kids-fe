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
    "Describe your story's idea",
    "Tell about the moral of your story?",
    "Complete activity and gain Stars!",
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/home");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#F0F0F0] rounded-lg shadow-lg overflow-hidden">
      <div className="relative flex flex-col">
        <div className="flex justify-end w-full p-4 gap-4">
          <img src={SoundButton} className="w-[44px] h-[44px]" />
          <img src={SkipButton} className="w-[81px] h-[44px]" />
        </div>
        <h2 className="text-[30px] font-normal text-center py-6">
          {steps[currentStep]}
        </h2>
      </div>
      <div className="p-6">
        <div className="mb-32 image-div transition-all duration-500 ease-in-out">
          {currentStep === 0 && (
            <div className="w-full h-48 flex justify-center mb-16 transition-opacity duration-500 ease-in-out">
              <img
                src={StoryIdea}
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
          )}
          {currentStep === 1 && (
            <div className="w-full h-48 flex justify-center mb-16 transition-opacity duration-500 ease-in-out">
              <img
                src={MoralIdea}
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="w-full h-48 flex justify-center mb-16 transition-opacity duration-500 ease-in-out">
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
              currentStep > 0 ? "mb-0" : "mb-[-60px]"
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