// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./list.module.css";
import Head from "./Head";
import axios from 'axios'

const Completed = () => {
  const [Lista, setLista] = useState([]);

  ///////////////FETCH LISTA GENERAL///////////////
  const daList = async () => {
    const response = await axios.get("http://Localhost:3006/");
    const data = await response.data;
    const sortedList = data.sort((a, b) => b - a).reverse();

    setLista(sortedList);
  };

  useEffect(() => {
    daList();
  }, [Lista]);
  

  const DoneList=Lista.filter((element)=>element.done===true) 

  return (
    <>
    <h4>List of Completed Tasks</h4>
      <Head />
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
               
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </>
  );
};

export default Completed;
