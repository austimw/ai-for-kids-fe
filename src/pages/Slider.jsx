import { useRecoilState } from "recoil";
import { ideaParams } from "../atoms/ideaAtom";

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
            className="flex-col h-50 text-white flex items-center justify-center rounded-lg hover:shadow-lg "
            onClick={() =>
              setSelectedItem((prev) => ({ ...prev, [heading]: item.name }))
            }
          >
            <img
              src={item.image}
              alt={item.name}
              className="min-h-28 min-w-28"
            />
            <div className="text-black truncate">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
