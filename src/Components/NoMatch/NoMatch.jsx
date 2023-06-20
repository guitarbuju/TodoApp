import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Spinner/spinner.module.css";

const NoMatch = () => {
  const navigate = useNavigate();
  const logout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
   
    console.log('logged out succesfully')
  };
  useEffect(() => {
    logout()
    const delay = 2000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      // Navigate to another component after the specified delay
      navigate("/");
    }, delay);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.ver}>Sorry Not Found.....</h1>
        <h1 className={styles.loader}></h1>
      </div>
    </div>
  );
};

export default NoMatch;
