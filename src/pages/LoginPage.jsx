import { ArrowLeft, Volume2 } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-blue-100 flex flex-col">
      {/* Top section */}
      <div className="bg-yellow-300 rounded-b-[50px] pb-16 pt-4 px-4 relative">
        <div className="flex justify-between mb-8">
          <button className="bg-yellow-400 p-2 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <button className="bg-yellow-400 p-2 rounded-full">
            <Volume2 size={24} />
          </button>
        </div>
        <h1 className="text-5xl font-bold text-center mb-4">Whims.ai</h1>
        <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
          <img src="src/assets/general/owl.svg" alt="Owl mascot" className="w-20 h-20" />
        </div>
      </div>

      {/* Content section */}
      <div className="flex-1 px-6 pt-8 ">
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-[#4AA378] text-white py-3 rounded-xl text-lg font-semibold shadow-[4px_4px_#167143]" >
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

        <div className='flex justify-center font-summary-notes'>
        <button className="w-[203px] bg-red-500 text-white py-3 rounded-xl text-xl font-semibold mb-4 shadow-[4px_4px_#b9523b]">
          Continue
        </button>
        </div>

        <div className="text-center mb-4">or</div>

        <div className='flex justify-center font-summary-notes'>
        <button className="w-[80px] h-[80px] rounded-[28px] border border-blue-500 rounded-[28px] py-3 flex items-center justify-center items-center mb-6 border-[3px] border-solid border-[#5E59C0] shadow-[0_5px_0_#4380c5]">
                <img src="src/assets/general/google.svg" alt="Google logo" />
                </button>
        </div>
        
        <p className="text-center text-sm text-gray-600">
          By continuing, you agree to our{' '}<br></br>
          <a href="#" className="underline">terms of service</a> and{' '}
          <a href="#" className="underline">privacy policy</a>
        </p>
      </div>
    </div>
  )
}