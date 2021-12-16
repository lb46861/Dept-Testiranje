import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [myRndClrs, setRndClrs] = useState([]);
  const [currColor, setCurrColor] = useState("");

  // Get random color on click
  const getRandom = async () => {
    const newClr = await fetchRandom();
    setCurrColor(newClr.colors[0].hex);

    // If newColor is not in the list add it
    if (
      !myRndClrs.find(
        (randomColor) => randomColor.colors[0].hex === newClr.colors[0].hex
      )
    ) {
      setRndClrs([...myRndClrs, newClr]);
    }
  };

  // Fetch random color
  const fetchRandom = async () => {
    const res = await fetch("https://www.colr.org/json/color/random", {
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <h1>Dept</h1>
      <Button onClick={getRandom} btnColor={currColor} />
    </div>
  );
}

export default App;
