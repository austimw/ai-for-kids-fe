"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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

const Star = () => (
  <svg
    width="107"
    height="107"
    viewBox="0 0 107 107"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 md:w-24 md:h-24"
  >
    <g filter="url(#filter0_d_89_4885)">
      <path
        d="M40.4036 24.4946C45.6996 8.19526 48.3476 0.0455732 53.2362 0.0455732C58.1248 0.0455732 60.7728 8.19526 66.0688 24.4946C67.5316 28.9968 68.2631 31.248 70.0318 32.533C71.8005 33.8181 74.1675 33.8181 78.9014 33.8181C96.0396 33.8181 104.609 33.8181 106.119 38.4674C107.63 43.1167 100.697 48.1535 86.8324 58.2271C83.0025 61.0096 81.0876 62.4009 80.412 64.4801C79.7365 66.5594 80.4679 68.8105 81.9307 73.3127C87.2267 89.6121 89.8747 97.7617 85.9198 100.635C81.9648 103.509 75.0323 98.4719 61.1672 88.3983C57.3374 85.6158 55.4225 84.2245 53.2362 84.2245C51.05 84.2245 49.135 85.6158 45.3052 88.3983C31.4402 98.4719 24.5076 103.509 20.5527 100.635C16.5977 97.7617 19.2457 89.6121 24.5417 73.3127C26.0045 68.8105 26.736 66.5594 26.0604 64.4801C25.3848 62.4009 23.4699 61.0096 19.6401 58.2271C5.77499 48.1535 -1.15755 43.1167 0.353113 38.4674C1.86377 33.8181 10.4329 33.8181 27.571 33.8181C32.305 33.8181 34.6719 33.8181 36.4406 32.533C38.2093 31.248 38.9408 28.9968 40.4036 24.4946Z"
        fill="url(#paint0_linear_89_4885)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_89_4885"
        x="0.149292"
        y="0.0454102"
        width="106.174"
        height="106.58"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="5.18927" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.720277 0 0 0 0 0.000989556 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_89_4885"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_89_4885"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_89_4885"
        x1="53.2362"
        y1="5.04203"
        x2="53.2362"
        y2="85.2102"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF2C2" />
        <stop offset="1" stopColor="#FFCF25" />
      </linearGradient>
    </defs>
  </svg>
);

export default function WalkthroughPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Describe your story's idea",
    "Complete activity and gain Stars!",
    "Tell about the moral of your story?",
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
    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <span className="text-gray-500">Skip</span>
        </div>
        <h2 className="text-2xl font-bold text-center py-6">
          {steps[currentStep]}
        </h2>
      </div>
      <div className="p-6">
        {currentStep === 1 && (
          <div className="flex justify-center mb-8">
            <Star />
            <Star />
            <Star />
          </div>
        )}
        {currentStep !== 1 && (
          <div className="w-full h-48 bg-gray-200 mb-8"></div>
        )}
        <div className="flex justify-center space-x-4 mb-8">
          {steps.map((_, index) => (
            <EggStep
              key={index}
              active={currentStep === index}
              completed={currentStep > index}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-yellow-400"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 40%)",
          }}
        ></div>
        <div className="relative px-6 py-4 flex flex-col space-y-2">
          <button
            onClick={nextStep}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          >
            {currentStep === steps.length - 1 ? "Let's Start!" : "Next"}
          </button>
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
