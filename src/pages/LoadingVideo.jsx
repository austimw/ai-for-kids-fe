import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OwlIcon from "../assets/video/owl-icon.svg";
import BulbIcon from "../assets/video/bulb-icon.svg";
import Flower from "../assets/video/flower.svg";
import Comment from "../assets/video/comment.svg";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { generatedVideoId } from "../atoms/generatedVideo";
import { useRecoilState } from "recoil";

const owlVariants = {
  jump: {
    y: [0, -10, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const flowerVariants = {
  highlight: { scale: 1.2, opacity: 1 },
  normal: { scale: 1, opacity: 0.5 },
};

const LoadingScreen = () => {
  const { data, loading, error, fetchData } = useFetch();

  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentFlowerIndex, setCurrentFlowerIndex] = useState(0);
  const [videoId, setVideoId] = useRecoilState(generatedVideoId);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      fetchData(`/stories/${videoId}`);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const texts = [
    "By involving kids in the story creation process, they become active participants.",
    "This fosters a love for reading and storytelling.",
    "Creative storytelling enhances imagination and language skills.",
    "Interactive stories make learning fun and engaging for children.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 100);

    const textAndFlowerTimer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentFlowerIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(textAndFlowerTimer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/video");
    }, 5000);
  }, []);

  return (
    <div className="bg-gif-background w-[500px] bg-cover bg-center bg-yellow-300 flex flex-col items-center py-24 px-10">
      <div className="flex items-start w-full mt-14">
        <motion.img
          src={OwlIcon}
          alt="Owl character"
          className="w-24 h-24 mt-10"
          variants={owlVariants}
          duration={0.5}
          animate="jump"
        />
        <img src={Comment} className="animate-bounce-scale" />
      </div>

      <div className="w-full max-w-md bg-white rounded-full h-4 my-36">
        <div
          className="bg-red-500 h-4 rounded-full transition-all duration-300 ease-out font-semibold text-sm font-sans flex items-center justify-center text-white"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <div className="relative w-full max-w-md mb-1 mt-4">
        <img
          src={BulbIcon}
          alt="Light bulb"
          className="absolute -top-8 right-0 w-12 h-12"
        />
        <div className="bg-white rounded-xl p-4 shadow-lg h-32 flex items-center justify-center">
          <motion.p
            key={currentTextIndex}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.9 }}
            className="text-center text-gray-800"
          >
            {texts[currentTextIndex]}
          </motion.p>
        </div>
      </div>

      <div className="flex space-x-4 items-center justify-center mb-8 mt-7">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            variants={flowerVariants}
            animate={index === currentFlowerIndex ? "highlight" : "normal"}
            transition={{ duration: 0.9 }}
            className="text-3xl"
          >
            <img src={Flower} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
