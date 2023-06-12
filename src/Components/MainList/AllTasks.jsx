// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./Alltasks.module.css";

import axios from 'axios'

const AllTasks = () => {
  const [Lista, setLista] = useState([]);

  ///////////////FETCH LISTA GENERAL///////////////

    const daList = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Include the token in the headers
        }
      };

    const response = await axios.get("http://Localhost:3006/",config);
    const data = await response.data;
    const sortedList = data.sort((a, b) => b - a).reverse();

    setLista(sortedList);
  };

  useEffect(() => {
    daList();
  }, [Lista]);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };
 

  return (
    <>
     <h4>List of all Tasks</h4>
     
     
      <div className={styles.wrapper}>
        {Lista.length === 0 ? (
          <h1>No List Available Yet</h1>
        ) : (
          <ul className={styles.list_container}>
         
            {Lista.map((element, index) => (
              <li
                
                key={index}
                className={ styles.element }
              >
              <p>{element.task}</p>
              <div className={styles.statusWrapper}>
                  <p className={styles.formatDate}>
                    update:{formatDate(element.date)}
                  </p>
                  {element.inProgress ? (
                    <p className={styles.formatProgress}>in progress</p>
                  ) : (
                    <p className={styles.formatDate}>Completed</p>
                  )}
                  <div
                  >
                    &#9746;
                  </div>
                </div>
               
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AllTasks;
