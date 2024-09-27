import { useRecoilState } from "recoil";
import { ideaParams } from "../atoms/ideaAtom";
import { Selected } from "../assets";

const Slider = ({ heading, description, sliderItems = [] }) => {
  const [selectedItem, setSelectedItem] = useRecoilState(ideaParams);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="text-[18px] text-[#145DC8]">{heading}</div>
        <div className="text-[#717171]">{description}</div>
      </div>
      <div className="flex w-[660px] overflow-x-scroll no-scrollbar gap-4">
        {sliderItems.map((item) => (
          <div
            key={item.name}
            className="flex-col h-50 text-white flex items-center justify-center rounded-lg"
            onClick={() =>
              setSelectedItem((prev) => ({ ...prev, [heading]: item.name }))
            }
          >
            <div className="relative">
              {selectedItem[heading] === item.name && (
                <img
                  src={Selected}
                  alt="Selected"
                  className="w-6 h-6 absolute top-2 left-1"
                />
              )}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className={`cursor-pointer max-h-28 max-w-28 min-h-28 min-w-28 bg-[#FFF8D3] border-2 border-[#FFD500] hover:shadow-yellow-300  rounded-lg p-4 ${
                    selectedItem[heading] === item.name
                      ? "border-[#9B01DC]"
                      : ""
                  }`}
                />
              )}
              {heading === "Morals" && (
                <div
                  className={`flex justify-center items-center cursor-pointer text-black max-h-28 max-w-28 min-h-28 min-w-28 bg-[#FFF8D3] border-2 border-[#FFD500] hover:shadow-yellow-300  rounded-lg p-4 ${
                    selectedItem[heading] === item.name
                      ? "border-[#9B01DC]"
                      : ""
                  }`}
                >
                  {item.name}
                </div>
              )}
            </div>
            {heading !== "Morals" && (
              <div className="text-black truncate">{item.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
