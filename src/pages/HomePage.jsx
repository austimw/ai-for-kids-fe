import { Play, CheckCircle, Video } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/welcome");
  }
  return (
    <div className="w-full h-full bg-yellow-300 p-6 flex flex-col">
      <header className="mb-6 mt-20">
        <h2 className="text-xl font-semibold">Hello</h2>
        <h1 className="text-4xl font-bold mb-2">Reev!</h1>
        <p className="text-lg">Start crafting engaging stories for your kids!</p>
      </header>

      <div className="space-y-4 flex-grow text-white">
        <div className="bg-purple-300 rounded-2xl px-4 flex relative overflow-hidden h-[158px] shadow-[0_5px_0_#dc9b23]">
          <div className="z-10">
            <button className="bg-red rounded-full py-2 mb-4 mt-2">
              <img src="src/assets/general/play-button.svg" className="w-8 h-8" />
            </button>
            <h3 className="text-xl font-semibold mt-6">Kota Matematika</h3>
          </div>
          <div className="transform scale-150 translate-x-[-25%] translate-y-[-25%] absolute bottom-0 right-0 w-32 h-32">
            <img src="src/assets/general/g10.png" alt="Isometric city" className="object-cover absolute bottom-0" />
          </div>
          {/* <img src="src/assets/general/sample-video.png" className="absolute w-[20.74px] h-[135.45px] absolute transform rotate-[37.89deg]"/> */}
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-red-400 rounded-2xl px-4 flex relative overflow-hidden h-[158px] shadow-[0_5px_0_#dc9b23]">
          <div className="z-10">
          <button className="bg-red rounded-full py-2 mb-4 mt-2">
              <img src="src/assets/general/play-button.svg" className="w-8 h-8" />
            </button>
            <h3 className="text-xl font-semibold mt-6">Kota Olahraga</h3>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm">Activity Completed</span>
            </div>
          </div>
          <div className="transform scale-150 translate-x-[-25%] translate-y-[-25%] absolute bottom-0 right-0 w-32 h-32">
            <img src="src/assets/general/g10.png" alt="Isometric city" className="object-cover absolute bottom-0" />
          </div>
        </div>
      </div>

      <div className='flex justify-center w-full'>
      <button onClick={handleCreateClick} className="bg-red-500 text-white text-xl font-bold py-4 px-6 rounded-2xl mt-6 flex items-center justify-center relative w-[400px] shadow-[0_8px_0_#9d361f]">
        Create Video
        <img src="src/assets/general/play-button.gif" className="absolute w-[48px] h-[45px] absolute top-[-25px] left-[25px] transform rotate-[-30deg] z-5"/>
        <img src="src/assets/general/oval-bubble.svg" className="absolute top-2 left-2"/>
      </button>
      </div>
    </div>
  )
}