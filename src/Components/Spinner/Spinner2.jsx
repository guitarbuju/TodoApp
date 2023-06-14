import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./spinner.module.css";

const Spinner = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const delay = 3500; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      // Navigate to another component after the specified delay
      navigate("/today");
    }, delay);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.ver}>Welcome to Todo App List....</h1>
        <h1 className={styles.loader}></h1>
      </div>
    </div>
  );
};

export default Spinner;
