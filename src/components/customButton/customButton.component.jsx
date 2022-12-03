import "./customButton.styles.scss";

const CustomButton = ({ name, type, onClickHandler, customClass }) => (
  <button
    className={
      customClass
        ? `custom-button custom-button--${customClass}`
        : "custom-button"
    }
    type={type}
    onClick={onClickHandler}
  >
    {name}
  </button>
);

export default CustomButton;
