import { useState } from "react";
import Button from "./components/Button";
import Color from "./components/Color";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [myRndClrs, setRndClrs] = useState([]);
  const [currColor, setCurrColor] = useState("");

  // Get random color on click
  const getRandom = async () => {
    const newClr = await fetchRandom();
    setCurrColor(newClr.colors[0].hex);

    if (
      newClr.colors[0].hex &&
      !myRndClrs.find((randomColor) => randomColor === newClr.colors[0].hex)
    ) {
      setRndClrs([...myRndClrs, newClr.colors[0].hex]);
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

  // Update List Order
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(myRndClrs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setRndClrs(items);
  }

  return (
    <div className="App">
      <div className="grid_1">
        <h1>Random Color</h1>
      </div>
      <div className="grid_2">
        <Button onClick={getRandom} btnColor={currColor} />
      </div>
      <div className="grid_3">
        {myRndClrs.length > 0 ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="myRndClrs">
              {(provided) => (
                <ul
                  className="colorList"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {myRndClrs.map((color, index) => {
                    return (
                      <Draggable key={color} draggableId={color} index={index}>
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Color
                              key={index}
                              color={color}
                              currColor={currColor}
                            />
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <p>No Colors To Show :(</p>
        )}
      </div>
    </div>
  );
}

export default App;
