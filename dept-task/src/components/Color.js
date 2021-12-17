const Color = ({ color, currColor }) => {
  return (
    <>
      <p
        style={{
          color: `#${color}`,
          fontWeight: `${currColor === color ? 900 : 100}`,
          textDecoration: `${currColor === color ? "underline" : "none"}`,
        }}
      >
        #{color}
      </p>
    </>
  );
};

export default Color;
