import Color from "./Color";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const ColorList = ({ colors, currColor }) => {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="colors">
          {(provided) => (
            <ul
              className="colorList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {colors.map((color, index) => {
                return (
                  <Draggable key={index} draggableId={color} index={index}>
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
    </>
  );
};

export default ColorList;
