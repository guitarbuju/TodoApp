// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./Completed.module.css";

import axios from 'axios'

const Completed = () => {
  const [Lista, setLista] = useState([]);
  

  ///////////////FETCH LISTA GENERAL///////////////
  const daList = async () => {
    
    const token= localStorage.getItem('token')
    const user = localStorage.getItem('user')
    const config={
     headers: {Authorization:`Bearer ${token}` }
    }
   

    const response = await axios.get(`http://Localhost:3006/${user}`,config);
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


  const DoneList=Lista.filter((element)=>element.done===true) 

  return (
    <>
    <h4>List of Completed Tasks</h4>
    
      <div className={styles.wrapper}>
        {DoneList.length === 0 ? (
          <h1>No List Available Yet</h1>
        ) : (
          <ul className={styles.list_container}>
         
            {DoneList.map((element, index) => (
              <li
                
                key={index}
                className={ styles.element }
              >
              <p>{element.task}</p>
              <div className={styles.statusWrapper}>
                  <p className={styles.formatDate}>
                    completed:{formatDate(element.date)}
                    <span>{element.category}</span>
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
