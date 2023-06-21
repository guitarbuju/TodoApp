import styles from "../SignIn/mainForm.module.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import happy2 from "../../assets/happy2.jpeg";

const LoginForm = () =>{

  const [errorMessage, setErrorMessage] = useState("")

  // eslint-disable-next-line no-unused-vars
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post("http://localhost:3006/login", data);
        // eslint-disable-next-line no-unused-vars
      const { token, user ,error} = response.data;

      console.log(response.data)
      
      // Save the token to local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.id);

      navigate("/spinner2");
   
  console.log("Logged in successfully");
} catch (error) {
  const errorMessage = error.response.data.error;
  setErrorMessage(errorMessage)
    console.error(errorMessage);
    
  }
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}><span style={{color:'#fec734',textShadow:'0.5px 0.5px 0.5px gray',fontSize:' 45px'}}>ToDo App</span>List </h1>
        <h2 className={styles.title}>Welcome Back !!! come on IN </h2>
        <img className={styles.img} src={happy2} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputData}>
          <h1>Log In</h1>
          <div className={styles.dainput}>
            <label htmlFor="email" style={{ fontWeight: "bolder" }}>
              EMAIL
            </label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
          </div>

          <div className={styles.dainput}>
            <label htmlFor="password" style={{ fontWeight: "bolder" }}>
              PASSWORD
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errorMessage && <span>{errorMessage}</span>}
          </div>
        </div>

        <div className={styles.buttons}>
          <p className="signin">
            <Link to="/signIN">Not a member yet?. Please <span style={{
                textDecoration: "underline",
                textShadow: "0.5px 0.5px 0.5px gray",
              }}>REGISTER</span></Link>
            <br />
            wanna go back{" "}
            <Link
              style={{
                textDecoration: "underline",
                textShadow: "0.5px 0.5px 0.5px gray",
              }}
              to="/"
            >
              HOME?
            </Link>
          </p>

          <button type="submit" id="login" className="btn btn-warning">
            LogIn
          </button>
          <button type="reset" id="reset" className="btn btn-success">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
