const Color = ({ color }) => {
  return (
    <>
      <li style={{ color: `#${color}` }}>#{color}</li>
    </>
  );
};

export default Color;
