// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./head.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate,NavLink } from "react-router-dom";

const Head = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.getDate();

  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const logout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect or perform any other action after logout
    navigate("/spinner"); // Redirect to the login page, assuming you have a route for it
    console.log("logged out succesfully");
  };

  return (
    <div className={styles.wrapper}>
      <div className={user ? styles.head : styles.nohead}>
        <div className={styles.date}>
          <p className={styles.month}>{currentMonth}</p>
          <div className={styles.dayWrapper}>
            <p className={styles.day}>{currentDay}</p>
          </div>
        </div>

        <div className={styles.today}>
          <h1>Today</h1>
        </div>
        <div className={styles.dots}>
          <div className={styles.icons}>
          <p ><NavLink className={styles.NavLink} to="/today">today &#9788;</NavLink></p>
          <p><NavLink  className={styles.NavLink} to="/inProgress">progress &#9852;</NavLink></p>
          <p><NavLink  className={styles.NavLink} to="/completed"> done &#x2713;</NavLink></p>
          <p><NavLink className={styles.NavLink}  to="/allTasks">all &#10026;</NavLink></p>
          <p><NavLink className={styles.NavLink}  to="/categories">cats &#128008;&#8205;&#11035;</NavLink></p>
          </div>
        </div>

        <button className="btn btn-outline-danger" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Head;
