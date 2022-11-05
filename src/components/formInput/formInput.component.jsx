import "./formInput.styles.scss";

const FormInput = (props) => (
  <div className="form-group">
    <input
      className="form-group__input form-group__common"
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      value={props.value}
      pattern={props.pattern ? props.pattern : null}
      title={props.title ? props.title : null}
      required
    ></input>

    <label className="form-group__label form-group__common" htmlFor={props.id}>
      {props.label}
    </label>
  </div>
);

export default FormInput;
