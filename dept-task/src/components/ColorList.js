import Color from "./Color";
const ColorList = ({ colors }) => {
  return (
    <>
      <ul className="colorList">
        {colors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </ul>
    </>
  );
};

export default ColorList;
