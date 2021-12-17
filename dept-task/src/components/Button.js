const Button = ({ onClick, btnColor, btnText }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{ color: `${btnColor}` }}
      >
        {btnText === "" ? "Generate" : btnText}
      </button>
    </div>
  );
};

export default Button;
