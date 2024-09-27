export default function ActivityCompleted() {
  return (
    <div className="h-full w-full bg-white flex flex-col relative">

      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-12 pb-24 relative max-h-[673px]">
        {/* Completion banner */}
        <img src="src/assets/general/completed.png" alt="" className="absolute top-[47.44px]"/>

        {/* Reward section */}
        <div className="w-[266px] h-[339px] top-[184px] gap-0 rounded-[30px] bg-[#FFF5D1] flex flex-col justify-center mt-[72px] px-[15px]">
        <h2 className="text-[24.67px] font-normal leading-[29.6px] tracking-[0.02em] text-center mt-[22px] mb-[10px]">You have achieved a<br></br> badge!</h2>
        <img src="src/assets/general/badge-real.png" alt="" />
        </div>

        {/* Decorative elements */}
        <img src='src/assets/general/popper.gif' className="w-[100px] h-[100px] absolute top-[445px] left-[91px] scale-[1.4]"/>
        <img src='src/assets/general/popper.gif' className="w-[100px] h-[100px] absolute top-[445px] rotate-[270deg] right-[91px] scale-[1.4]"/>
      </div>

      {/* Bottom section with wavy background */}
      <div className="relative flex justify-center">
        <div className="relative z-10 px-8 py-6 space-y-4 w-[414px]">
          <button className="w-full bg-gradient-to-b from-red-400 to-red-500 text-white text-xl font-bold py-4 rounded-[20px] shadow-[0_8px_0_#ac3f26]">
            Create new video
          </button>
          <button className="w-full bg-white text-gray-800 text-xl font-bold py-4 rounded-[20px] shadow-[0_8px_0_#acb4c0] border border-gray-300">
            Go to Home
          </button>
        </div>
      </div>

      {/* SVG for wavy background */}
      <img src="src/assets/general/yellow-wave.png" alt="" className="absolute top-[537px] w-[500px]"/>
      
    </div>
  )
}