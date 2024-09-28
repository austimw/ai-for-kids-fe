import {
  Bear,
  Dog,
  Dolphin,
  Elephant,
  Tiger,
  Unicorn,
  AtHome,
  AtSchool,
  InCity,
  MysticForest,
  Cross,
  Done,
} from "../assets";
import Slider from "./Slider";

const characters = [
  { name: "Unicorn", image: Unicorn },
  { name: "Dog", image: Dog },
  { name: "Dolphin", image: Dolphin },
  { name: "Elephant", image: Elephant },
  { name: "Tiger", image: Tiger },
  { name: "Bear", image: Bear },
];

const setting = [
  { name: "Home", image: AtHome },
  { name: "School", image: AtSchool },
  { name: "City", image: InCity },
  { name: "Mystic Forest", image: MysticForest },
];

const Morals = [
  { name: "Sharing is caring" },
  { name: "Be truthful and honest." },
  { name: "Appreciate what you love." },
  { name: "Believe in yourself" },
  { name: "Face you fears." },
];

const StoryCreator = ({ handleClose, className }) => {
  return (
    <div
      className={`flex h-[90%] w-full flex-col bg-white rounded-[32px] p-5 ${className}`}
    >
      <div className="text-black flex justify-end">
        <img
          src={Cross}
          alt="Close"
          className="w-8 h-8 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar">
        <Slider
          heading="Characters"
          description="Who&rsquo;s your story about ?"
          sliderItems={characters}
        />
        <Slider
          heading="Setting"
          description="Where does your story take place ?"
          sliderItems={setting}
        />
        <Slider
          heading="Morals"
          description="What should be the learning from your story? ?"
          sliderItems={Morals}
        />
        <div className="mx-auto">
          <img
            src={Done}
            alt="Close"
            className="fixed bottom-8 left-32 cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryCreator;
