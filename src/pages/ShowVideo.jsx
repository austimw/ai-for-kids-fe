import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Button from "../assets/video/button.svg";
import Reload from "../assets/video/reload.svg";
import Volume from "../assets/video/volume.svg";
import Mute from "../assets/video/mute.svg";


const VideoPlayer = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
  );
  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-[#3c3c28] text-white py-10 px-10 flex flex-col">
      <div className="flex justify-between mb-4">
        <button className="bg-red-500 p-2 rounded-lg">
          <X size={24} />
        </button>
        <div className="flex space-x-4">
          <button className="bg-yellow-500 p-2 rounded-lg">
            <img src={Reload} className="w-6 h-6" />
            {/* <RefreshCw size={24} /> */}
          </button>
          {/* <button className="bg-yellow-500 p-2 rounded-lg">
            <Volume2 size={24} />
          </button> */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMute}
          >
            {isMuted ? (
              <img src={Mute} className="w-10 h-10"/>
            ) : (
              <img src={Volume} className="w-10 h-10"/>
            )}
          </motion.button>
        </div>
      </div>

      <h1 className="text-4xl font-bold font-summary-notes text-yellow-300 my-4 mb-10">
        Video name
      </h1>

      <div className="relative w-full aspect-video bg-gradient-to-r from-green-400 to-yellow-300 rounded-lg overflow-hidden mb-4">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          muted={isMuted}
        />
      </div>

      <p className="text-xl text-center mb-6 font-summary-notes w-[80%] mx-auto mt-10">
        After watching the video, ask your child to complete the activity and
        get back to you once it's done. This will improve their experience.
      </p>
      <div className="mx-auto w-[100%] cursor-pointer" onClick={() => navigate("/")}>
        <img src={Button} className="h-[80px] w-full" />
      </div>
      {/* <button className="bg-red-500 text-white py-3 px-6 rounded-full text-xl font-bold mb-4 transform transition-transform duration-200 hover:scale-105">
        Start Activity
      </button> */}

      <button className="text-gray-400 mt-10 text-xl font-summary-notes">
        Save & Go to Home
      </button>
    </div>
  );
};

export default VideoPlayer;
