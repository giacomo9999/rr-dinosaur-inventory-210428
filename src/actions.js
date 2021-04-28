import { ADD_DINOSAUR } from "./types";

// defining the action creators
export const addDinosaur = (dinosaur) => {
  console.log("Action: ", dinosaur);
  return {
    type: ADD_DINOSAUR,
    dinosaur,
  };
};
