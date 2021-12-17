const Color = ({ color, currColor }) => {
  return (
    <>
      <li>
        <p
          style={{
            color: `#${color}`,
            fontWeight: `${currColor === color ? 900 : 100}`,
            textDecoration: `${currColor === color ? "underline" : "none"}`,
          }}
        >
          #{color}
        </p>
      </li>
    </>
  );
};

export default Color;
