import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../assets/video/button.svg";
import Volume from "../assets/video/volume.svg";
import Mute from "../assets/video/mute.svg";
import { FloatingEgg } from "../assets";
import useFetch from "../hooks/useFetch";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, fetchData } = useFetch();
  const [isMuted, setIsMuted] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    fetchData(`/stories/${id}`);
  }, []);

  useEffect(() => {
    if (data && data.master_video_url) {
      setVideoUrl(data.master_video_url);
    }
  }, [data]);

  if (loading) {
    return <img src={FloatingEgg} alt="Loading" />;
  }

  return (
    <div className="bg-[#FFF4CC] text-white py-10 px-10 flex flex-col">
      <div className="flex justify-between mb-4">
        {/* <button className="bg-red-500 p-2 rounded-lg">
          <X size={24} />
        </button> */}
        <div className="flex space-x-4">
          {/* <button className="bg-yellow-500 p-2 rounded-lg">
            <img src={Reload} className="w-6 h-6" />
          </button> */}
          {isMuted ? (
            <img src={Mute} className="w-10 h-10" id="mute-button" />
          ) : (
            <img src={Volume} className="w-10 h-10" id="mute-button" />
          )}
        </div>
      </div>

      <h1 className="text-4xl font-bold font-summary-notes text-[#1D1D1D] my-4 mb-10">
        {data?.story_name}
      </h1>

      <div className="relative w-[450px] h-[430px] aspect-video bg-gradient-to-r from-green-400 to-yellow-300 rounded-lg overflow-hidden mb-4">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          muted={isMuted}
        />
      </div>

      <p className="text-xl text-[#2B2B2B] text-center mb-6 font-summary-notes w-[80%] mx-auto mt-10">
        After watching the video, ask your child to complete the activity and
        get back to you once it's done. This will improve their experience.
      </p>
      <div
        className="mx-auto w-[100%] cursor-pointer"
        onClick={() => navigate("/activity")}
      >
        <img src={Button} className="h-[80px] w-full" />
      </div>
      {/* <button className="bg-red-500 text-white py-3 px-6 rounded-full text-xl font-bold mb-4 transform transition-transform duration-200 hover:scale-105">
        Start Activity
      </button> */}

      <button className="text-[#828282] mt-10 text-xl font-summary-notes">
        Save & Go to Home
      </button>
    </div>
  );
};

export default VideoPlayer;
