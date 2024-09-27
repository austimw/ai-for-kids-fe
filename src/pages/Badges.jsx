import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BadgeContainer = ({ earned = false, badgeSrc }) => (
  <div
    className={`w-[200px] h-[180px] rounded-3xl border-4 ${
      earned ? 'border-yellow-400' : 'border-yellow-200'
    } flex items-center justify-center bg-white`}
  >
    <div className="w-[165px] h-[165px] rounded-full flex items-center justify-center relative">
      <div className="absolute w-full text-center">
        <div className="text-white text-xs rounded-full w-full h-full">
          <img src={badgeSrc} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
);

export default function BadgesPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full relative bg-yellow-50 p-10 relative bg-[#FFF4CC]">
      <button
        className="absolute top-6 left-6 bg-red-500 rounded-xl p-2"
        aria-label="Close"
        onClick={() => navigate('/home')}
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <h1 className="text-3xl font-bold text-center mt-16 mb-8">Your Badges</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <BadgeContainer
          earned={true}
          badgeSrc={'src/assets/general/badge-real.png'}
        />
        <div className="w-[200px] h-[180px] border-4 border-yellow-200 border-dashed rounded-3xl"></div>
      </div>

      <div className="h-px bg-yellow-200 my-8"></div>

      <h2 className="text-xl font-semibold text-gray-600 mb-4 text-center">
        Badges yet to receive
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <BadgeContainer badgeSrc={'src/assets/general/honest-tycoon.png'} />
        <BadgeContainer badgeSrc={'src/assets/general/kindness-leader.png'} />
        <BadgeContainer
          badgeSrc={'src/assets/general/responsibility-star.png'}
        />
        <BadgeContainer badgeSrc={'src/assets/general/team-player.png'} />
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-full -mr-24 -mb-24 opacity-50"></div>
    </div>
  );
}
