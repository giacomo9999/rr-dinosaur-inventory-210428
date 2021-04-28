import { ADD_DINOSAUR } from "../types";

const initialState = {
  dinosaurs: [{ dinoName: "Stegosaurus", dinoColor: "chartreuse", dinoId: 1 }],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DINOSAUR:
      console.log("Reducer...", state, action);
      return {
        ...state,
        dinosaurs: state.dinosaurs.concat({
          dinoName: action.dinosaur,
          dinoColor: "",
          dinoId: -999,
        }),
      };
    default:
      return state;
  }
};

export default appReducer;
