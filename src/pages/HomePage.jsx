import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { FloatingEgg } from "../assets";

export default function HomePage() {
  const { data, loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData("/stories");
  }, []);

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/welcome");
  };

  if (loading) {
    return <img src={FloatingEgg} alt="Loading" />;
  }

  return (
    <div className="w-full h-full bg-yellow-300 p-6 flex flex-col relative">
      <img
        src="src/assets/general/badge.svg"
        alt=""
        className="absolute w-[69px] h-[62.95px] z-10 top-[23px] right-[12px] cursor-pointer"
        onClick={() => navigate("/badges")}
      />
      <img
        src="src/assets/general/white-bg.svg"
        alt=""
        className="absolute w-[70px] h-[62.95px] top-[31px] right-[20px] cursor-pointer"
      />
      <header className="mb-6 mt-20">
        <h2 className="text-xl font-semibold">Hello</h2>
        <h1 className="text-4xl font-bold mb-2">Reev!</h1>
        <p className="text-lg">
          Start crafting engaging stories for your kids!
        </p>
      </header>

      <div className="space-y-4 flex-grow text-white max-h-[519px]">
        {data &&
          data.map((story) => (
            <div
              key={story.story_name}
              onClick={() => navigate(`/video/${story.id}`)}
              className="hover:scale-105 cursor-pointer active:scale-95 bg-purple-300 rounded-2xl flex relative overflow-hidden h-[158px] shadow-[0_5px_0_#dc9b23]"
            >
              <div className="z-10 pl-4">
                <button className="bg-red rounded-full py-2 mb-4 mt-2">
                  <img
                    src="src/assets/general/play-button.svg"
                    className="w-8 h-8"
                  />
                </button>
                <h3 className="text-xl font-semibold mt-6">
                  {story.story_name}
                </h3>
              </div>
              <img
                src={story?.image_assets?.[0]}
                alt="Isometric city"
                className="h-full w-[500px] object-cover absolute top-0 right-0"
              />
            </div>
          ))}
      </div>

      <div className="flex justify-center w-full">
        <button
          onClick={handleCreateClick}
          className=" hover:scale-105 active:scale-95 bg-red-500 text-white text-xl font-bold py-4 px-6 rounded-2xl mt-6 flex items-center justify-center relative w-[350px] shadow-[0_8px_0_#9d361f]"
        >
          Create Video
          <img
            src="src/assets/general/play-button.gif"
            className="absolute w-[48px] h-[45px] top-[-25px] left-[25px] transform rotate-[-30deg] z-5"
          />
          <img
            src="src/assets/general/oval-bubble.svg"
            className="absolute top-2 left-2"
          />
        </button>
      </div>
    </div>
  );
}