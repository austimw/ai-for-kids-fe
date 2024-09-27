import { useNavigate } from 'react-router-dom';

export default function ConfirmationDialog({onCrossClick}) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[196px] w-[350px] bg-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[19px]">
      <div className="bg-white shadow-xl p-6 w-[3500px] relative rounded-[19px]">
        <button className="absolute top-2 right-2 rounded-full p-1" onClick={onCrossClick}>
          <img src="src/assets/general/red-cross.png" alt="" />
        </button>
        <h2 className="text-center text-[20px] font-bold mb-6 mt-4">
          Are you sure you want to Mark this <br></br>activity as completed?
        </h2>
        <button
          className="w-full bg-blue-500 text-white text-xl font-semibold py-3 rounded-2xl shadow-[0_6px_0_#2f5989]"
          onClick={() => navigate('/activity-completed')}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
