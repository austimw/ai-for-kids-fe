import { atom } from "recoil";

export const generatedVideoId = atom({
  key: "generatedVideo", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
