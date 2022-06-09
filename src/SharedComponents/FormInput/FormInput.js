import useInput from "../../hooks/useInput";
import { useNavigate, Link } from "react-router-dom";
import FormCard from "./localComponents/FormCard/FormCard";

import classes from "./FormInput.module.scss";
const FormInput = (props) => {
  const navigate = useNavigate();

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    isValid: enteredPasswordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsValid) {
      return;
    }

    let body = {
      email: enteredEmail,
      password: enteredPassword,
    };

    //! GraphQL implementation

    // const graphqlQueryCreateUser = {
    //     query: `
    //     mutation {
    //         createUser(userInput: {email: "${enteredEmail}", password: "${enteredPassword}"}) {
    //           _id
    //           email
    //         }
    //       }
    //     `
    // }

    //   const graphqlQueryLoginUser = {
    //     query: `{
    //             login(email: "${enteredEmail}", password: "${enteredPassword}") {
    //                 token
    //                 userId
    //             }
    //         }`,
    //   };

    // const graphqlConditional = () => {
    //     if (props.graphql === 'register') {
    //         return {
    //                 query: `
    //                 mutation {
    //                     createUser(userInput: {email: "${enteredEmail}", password: "${enteredPassword}"}) {
    //                       _id
    //                       email
    //                     }
    //                   }
    //                 `
    //             }
    //     } else if (props.graphql === 'login') {
    //             return {
    //                 query: `{
    //                         login(email: "${enteredEmail}", password: "${enteredPassword}") {
    //                             token
    //                             userId
    //                         }
    //                     }`
    //               };
    //     } else {
    //         console.log('wrong graphql props passed to FormInput')
    //     }
    // }

    // fetch('http://localhost/5000/graphql', {
    //     method: 'POST',
    //     body: JSON.stringify(graphqlConditional),
    //     headers: {
    //         'Content-Type': 'application/json'
    //       }
    // })
    // .then(response => response.json())
    // .then(data => {
    // console.log(data.data.login.token)
    //     document.cookie = `${props.tokenName}=${data.data.login.token || true};max-age=60*10000`
    //     return navigate(props.navigateTo, {replace: true})
    // })

    //! REST API implementation
    fetch(`https://social-media-rest.vercel.app/auth/${props.postEndPoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("register or login user data", data);
        document.cookie = `${props.tokenName}=${
          data.token || true
        };max-age=60*10000`;
        return navigate(props.navigateTo, { replace: true });
      })
      .catch((err) => console.log(".catch block for register user", err));

    resetPasswordInput();
    resetEmailInput();
  };

  const passwordInputClasses = passwordInputHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  const emailInputClasses = emailInputHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  return (
    <FormCard>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <h1 className={classes.title}>Please {props.buttonText} To Continue</h1>

        <div className={emailInputClasses}>
          <label htmlFor="email">Your E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            data-testid="email-input"
          />
          {emailInputHasError && (
            <p className={classes["error-text"]} data-testid="error-msg">
              Please enter a valid email.
            </p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            data-testid="password-input"
          />
          {passwordInputHasError && (
            <p className={classes["error-text"]} data-testid="error-msg2">
              Password must not be empty.
            </p>
          )}
        </div>
        <div className={classes["form-control"]}>
          <button
            id={classes.button}
            className={classes.button}
            disabled={!formIsValid}
          >
            {props.buttonText}
          </button>
        </div>
        <Link to={props.linkTo} className={classes.link}>
          {props.linkText}!
        </Link>
      </form>
    </FormCard>
  );
};

export default FormInput;
