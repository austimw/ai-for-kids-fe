const Slider = ({ heading, description, sliderItems = [] }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[18px] text-[#145DC8]">{heading}</div>
      <div className="text-[#717171]">{description}</div>
      <div className="flex w-[660px] overflow-x-scroll no-scrollbar gap-4">
        {sliderItems.map((item) => (
          <div
            key={item.name}
            className="flex-col h-50 text-white flex items-center justify-center rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="min-h-40 min-w-40"
            />
            <div className="text-black truncate">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
