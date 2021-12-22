import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsVaild, setEnteredNameIsVaild] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsVaild(true);
      return;
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsVaild(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsVaild(false);
      return;
    }
    setEnteredNameIsVaild(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  };
  const nameInputIsValid = !enteredNameIsVaild && enteredNameTouched;
  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
