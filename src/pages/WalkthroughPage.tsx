"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BGYellow,
  NextButton,
  BackButton,
  LetsStart,
  SkipButton,
  SoundButton,
  FirstStar,
  SecondStar,
  ThirdStar,
  FirstEgg,
  SecondEgg,
  ThirdEgg,
  StoryIdea,
  MoralIdea,
  ActivityIdea,
} from "../assets";

const EggStep = ({ active, completed, onClick }) => (
  <motion.div
    className={`w-8 h-10 md:w-12 md:h-16 rounded-full flex items-center justify-center cursor-pointer ${
      active ? "bg-yellow-400" : completed ? "bg-yellow-200" : "bg-gray-200"
    }`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <div
      className={`w-6 h-8 md:w-10 md:h-14 rounded-full ${
        active ? "bg-white" : "bg-transparent"
      } flex items-center justify-center`}
    >
      {completed && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 md:h-6 md:w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  </motion.div>
);

export default function WalkthroughPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Describe your story's idea",
    "Tell about the moral of your story?",
    "Complete activity and gain Stars!",
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
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
        <div className="mb-32">
          {currentStep === 0 && (
            <div className="w-full h-48 flex justify-center mb-16">
              <img
                src={StoryIdea}
                className="w-[200px]  h-[200px] object-cover"
              />
            </div>
          )}
          {currentStep === 1 && (
            <div className="w-full h-48 flex justify-center mb-16">
              <img
                src={MoralIdea}
                className="w-[200px]  h-[200px] object-cover"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="w-full h-48 flex justify-center mb-16">
              <img
                src={ActivityIdea}
                className="w-[200px]  h-[200px] object-cover"
              />
            </div>
          )}
          <div className="flex justify-center items-center space-x-8">
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
        <div className="absolute px-6 py-4 bottom-10 flex flex-col items-center justify-center w-full space-y-2">
          <img
            src={currentStep === steps.length - 1 ? LetsStart : NextButton}
            className="w-full cursor-pointer h-[82px] transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={nextStep}
          />

          {currentStep > 0 && (
            <img
              src={BackButton}
              className={`w-full h-[82px] cursor-pointer transition-all duration-500 ease-in-out transform ${
                currentStep > 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } hover:scale-105 active:scale-95`}
              onClick={prevStep}
            />
          )}
        </div>
      </div>
    </div>
  );
}
