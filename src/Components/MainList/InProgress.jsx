// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./inProgress.module.css";

import axios from 'axios'

const Completed = () => {
  const [Lista, setLista] = useState([]);

  ///////////////FETCH LISTA GENERAL///////////////
  const daList = async () => {

    const token=localStorage.getItem('token')
    const config={
      headers:{Authorization:`Bearer ${token}`
    }}

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
  const ProgressList=Lista.filter((element)=>
  element.inProgress===true && element.done=== false) 

  return (
    <>
    <h4>List of in progress Tasks</h4>
     
      <div className={styles.wrapper}>
        {ProgressList.length === 0 ? (
          <h1>No List Available Yet</h1>
        ) : (
          <ul className={styles.list_container}>
         
            {ProgressList.map((element, index) => (
              <li
                
                key={index}
                className={ styles.element }
              >
              <p>{element.task}</p>
              <div className={styles.statusWrapper}>
                  <p className={styles.formatDate}>
                    since:{formatDate(element.date)}
                  </p>
                  </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Completed;
