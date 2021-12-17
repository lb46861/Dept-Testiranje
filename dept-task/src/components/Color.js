const Color = ({ color, currColor }) => {
  return (
    <>
      <p
        style={{
          color: `#${color}`,
          fontWeight: `${currColor === color ? "bold" : 100}`,
          border: `${currColor === color ? "2px solid #333" : "none"}`,
          borderRadius: "10px",
        }}
      >
        #{color}
      </p>
    </>
  );
};

export default Color;
