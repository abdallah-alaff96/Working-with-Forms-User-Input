import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: lastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: enteredEmailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`${firstName} - ${lastName} - ${enteredEmail}`);

    firstNameReset();
    lastNameReset();
    enteredEmailReset();
  };

  const firstNameErrorClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameErrorClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const enteredEmailErrorClass = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameErrorClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text">Fix the first name!</p>
          )}
        </div>
        <div className={lastNameErrorClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && <p className="error-text">Fix the last name!</p>}
        </div>
      </div>
      <div className={enteredEmailErrorClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && <p className="error-text">Wrong Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
