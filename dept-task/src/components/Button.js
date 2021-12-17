const Button = ({ onClick, btnColor }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{ color: `${btnColor}` }}
      >
        Generate
      </button>
    </div>
  );
};

export default Button;
