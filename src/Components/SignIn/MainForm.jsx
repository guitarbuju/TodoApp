import styles from "./mainForm.module.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import happy3 from "../../assets/happy3.jpeg";
import { BASE_URL } from "../../../config";

const MainForm = () => {
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
      const response = await axios.post(`${BASE_URL}/register`, data);
      const { token, user } = response.data;
      console.log(response.data);
      // Save the token to local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.id);

      navigate("/spinner2");

      console.log("Register successfull");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span
            style={{
              color: "#fec734",
              textShadow: "0.5px 0.5px 0.5px gray",
              fontSize: "45px",
            }}
          >
            ToDo App
          </span>
          List
        </h1>
        <h2 className={styles.title}>!!! come on IN !!! Register</h2>
        <img className={styles.img} src={happy3} />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputData}>
          <h1>Sign In</h1>
          <div className={styles.dainput}>
            <label htmlFor="name" style={{ fontWeight: "bolder" }}>
              Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="input your username"
              {...register("name", { required: true })}
            />
          </div>

          <div className={styles.dainput}>
            <label htmlFor="email" style={{ fontWeight: "bolder" }}>
              Email
            </label>
            <input
              className="form-control"
              type="email"
              placeholder="input your email"
              {...register("email", { required: true })}
            />
          </div>

          <div className={styles.dainput}>
            <label htmlFor="password" style={{ fontWeight: "bolder" }}>
              Password
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="input your password"
              {...register("password", { required: true })}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="submit" className="btn btn-warning">
            Sign In
          </button>
          <div className={styles.links}>
            <p>
              <Link to="/login">
                Already a member? please
                <span
                  style={{
                    textDecoration: "underline",
                    textShadow: "0.5px 0.5px 0.5px gray",
                    fontSize:'16px'
                  }}
                >
                  LOG IN
                </span>
              </Link>{" "}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainForm;
