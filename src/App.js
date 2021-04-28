import { useDispatch, useSelector } from "react-redux";
import { addDinosaur } from "./actions";

const App = () => {
  const dinosaurs = useSelector((state) => state.dinosaurs);
  const dispatch = useDispatch();

  const handleAddDinosaur = () => {
    const dinosaur = document.querySelector(".dinosaur").value;
    dispatch(addDinosaur(dinosaur));
    console.log("App...Adding new dinosaur", dinosaur);
    document.querySelector(".dinosaur").value = "";
  };

  return (
    <div className="container-outer">
      <h1>APP</h1>
      <div className="dinosaurs">
        {dinosaurs.map((dino, index) => (
          <p key={index}>{dino.dinoName}</p>
        ))}
      </div>
      <input type="text" className="dinosaur" />
      <button onClick={handleAddDinosaur}>Add Dinosaur</button>
    </div>
  );
};

export default App;
