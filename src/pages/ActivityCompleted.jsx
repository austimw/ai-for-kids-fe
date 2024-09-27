export default function ActivityCompleted() {
  return (
    <div className="h-full w-full bg-white flex flex-col">

      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-12 pb-24 relative">
        {/* Completion banner */}
        <img src="src/assets/general/activity-completed.png" alt="" className="absolute top-[142px]"/>

        {/* Reward section */}
        <div className="w-[266px] h-[235px] top-[275px] gap-0 rounded-[30px] bg-[#FFF5D1] flex flex-col justify-center mt-[120px]">
        <h2 className="text-[32px] font-normal leading-[38.4px] tracking-[0.02em] text-center mt-14 mb-3 flex justify-center">Good job, Reeve!</h2>
          <p className="text-orange-500 font-montserrat-alternates text-[16px] font-medium leading-[19.5px] text-center mb-2">Reward</p>
          <div className="flex items-center justify-center">
            <img src="src/assets/general/star.svg" alt="" />
            <span className="text-2xl font-bold text-gray-800 font-montserrat-alternates ml-2">x3</span>
          </div>
        </div>

        {/* Decorative elements */}
        <img src='src/assets/general/popper.gif' className="w-[120.29px] h-[121px] absolute top-[425px] left-[79px] scale-[1.4]"/>
        <img src='src/assets/general/popper.gif' className="w-[120.29px] h-[121px] absolute top-[425px] rotate-[270deg] left-[308px] scale-[1.4]"/>
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
      <img src="src/assets/general/yellow-wave.png" alt="" className="absolute bottom-0"/>
      
    </div>
  )
}