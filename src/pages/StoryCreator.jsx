import {
  Family,
  Friends,
  Princess,
  Mermaid,
  Superheros,
  TalkingAnimals,
  Unicorns,
  AtHome,
  AtSchool,
  InCity,
  WithFriends,
  MysticForest,
  OnShip,
  OuterSpace,
  DefeatVillian,
  DiscoverSomething,
  Journey,
  LearningLesson,
  MakingFriends,
  SavingTheDay,
  SolvingMystery,
  Cross,
  Done,
} from "../assets";
import Slider from "./Slider";

const characters = [
  { name: "Family", image: Family },
  { name: "Friends", image: Friends },
  { name: "Princes", image: Princess },
  { name: "Mermaid", image: Mermaid },
  { name: "Super heroes", image: Superheros },
  { name: "Talking Animals", image: TalkingAnimals },
  { name: "Unicorns", image: Unicorns },
];

const setting = [
  { name: "At Home", image: AtHome },
  { name: "At School", image: AtSchool },
  { name: "In a city", image: InCity },
  { name: "With friends", image: WithFriends },
  { name: "Mystic Forest", image: MysticForest },
  { name: "On ship", image: OnShip },
  { name: "Outer space", image: OuterSpace },
];

const plot = [
  { name: "Defeat villains", image: DefeatVillian },
  { name: "Discover something", image: DiscoverSomething },
  { name: "Journey", image: Journey },
  { name: "Learning lessons", image: LearningLesson },
  { name: "Making friends", image: MakingFriends },
  { name: "Saving the day", image: SavingTheDay },
  { name: "Solving mystery", image: SolvingMystery },
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
          heading="Plot"
          description="What happens in your story ?"
          sliderItems={plot}
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
