import Color from "./Color";
const ColorList = ({ colors, currColor }) => {
  return (
    <>
      <ul className="colorList">
        {colors.map((color, index) => (
          <Color key={index} color={color} currColor={currColor} />
        ))}
      </ul>
    </>
  );
};

export default ColorList;
