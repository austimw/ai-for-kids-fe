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

const StoryCreator = () => {
  return (
    <div className="flex h-[80%] flex-col bg-white rounded-lg p-5">
      <div className="text-black flex justify-end">
        <img src={Cross} alt="Close" className="w-10 h-10 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar">
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
      </div>
    </div>
  );
};

export default StoryCreator;
