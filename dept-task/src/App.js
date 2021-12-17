import { useState } from "react";
import Button from "./components/Button";
import ColorList from "./components/ColorList";
import Color from "./components/Color";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [myRndClrs, setRndClrs] = useState([]);
  const [currColor, setCurrColor] = useState("");

  // Get random color on click
  const getRandom = async () => {
    const newClr = await fetchRandom();
    setCurrColor(newClr.colors[0].hex);

    // If newColor is not in the list add it
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

  // Update List after drag
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(myRndClrs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setRndClrs(items);
  }

  return (
    <div className="App">
      <h1>Dept</h1>
      <Button onClick={getRandom} btnColor={currColor} />
      <>
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
          "No Colors To Show :("
        )}
      </>
    </div>
  );
}

export default App;
