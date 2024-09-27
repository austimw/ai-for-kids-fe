import { ArrowLeft, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="w-full h-full bg-[#e8f3ff] flex flex-col relative">
      {/* Top section */}
      <img src="src/assets/general/login-page-yellow-bg.png" alt="" className='absolute w-[501px] top-[-90px] left-0'/>
      <div className="rounded-b-[50px] pb-16 pt-4 px-4 relative">
        <div className="flex justify-between mb-1">
          <button className="bg-yellow-400 p-2 rounded-full">
            <img src="src/assets/general/back-button.svg" alt="" />
          </button>
          <button className="bg-yellow-400 p-2 rounded-full">
            <img src="src/assets/general/sound-button.svg" alt="" />
          </button>
        </div>
        <h1 className="text-[100px] font-bold text-center mb-4 mt-[-28px] h-[106px]">Whims.ai</h1>
        <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
          <img
            src="src/assets/general/owl.svg"
            alt="Owl mascot"
            className="w-20 h-20"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="flex-1 px-16 pt-8 ">
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-[#4AA378] text-white py-3 rounded-xl text-lg font-semibold shadow-[4px_4px_#167143]">
            Login
          </button>
          <button className="flex-1 bg-white py-3 rounded-xl text-lg font-semibold shadow-[4px_4px_#b0cabd]">
            Sign Up
          </button>
        </div>

        <div className="space-y-4 mb-1">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full py-3 px-4 rounded-[20px] border border-green-600 bg-white text-gray-500 border-[3px] border-solid border-[#4AA378]"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="w-full py-3 px-4 rounded-[20px] border border-green-600 bg-white text-gray-500 border-[3px] border-solid border-[#4AA378] shadow-[0_25px_0_#D2E7FF]"
          />
        </div>

        <p className="text-sm text-gray-600 mb-6 ml-2">
          A email verification link will be send to your email id
        </p>

        <div className="flex justify-center font-summary-notes">
          <button onClick={handleClick} className="hover:scale-105 active:scale-95 w-[203px] bg-red-500 text-white py-3 rounded-xl text-xl font-normal mb-4 shadow-[4px_4px_#b9523b]">
            Continue
          </button>
        </div>

        <div className="text-center mb-4">or</div>

        <div className="flex justify-center font-summary-notes">
          <button className="w-[80px] h-[80px] rounded-[28px] border border-blue-500 rounded-[28px] py-3 flex items-center justify-center items-center mb-6 border-[3px] border-solid border-[#5E59C0] shadow-[0_5px_0_#4380c5]">
            <img src="src/assets/general/google.svg" alt="Google logo" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          By continuing, you agree to our <br></br>
          <a href="#" className="underline">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}
