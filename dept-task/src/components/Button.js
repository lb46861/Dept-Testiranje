const Button = ({ onClick, btnColor }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{ color: `#${btnColor}` }}
      >
        Color
      </button>
    </div>
  );
};

export default Button;
