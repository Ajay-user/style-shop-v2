import "./customButton.styles.scss";

const CustomButton = ({ name, type, onClickHandler }) => (
  <button className="custom-button" type={type} onClick={onClickHandler}>
    {name}
  </button>
);

export default CustomButton;
