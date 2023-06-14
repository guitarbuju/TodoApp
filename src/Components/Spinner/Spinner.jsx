import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  styles from './spinner.module.css'


const Spinner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      // Navigate to another component after the specified delay
      navigate('/');
    }, delay);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className={styles.wrapper}>

        <h1 className={styles.loader}></h1>
        <h2 className={styles.ver}>Thank You for visiting....</h2>
    </div>
  )
}

export default Spinner;