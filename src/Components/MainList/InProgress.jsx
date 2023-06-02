// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./list.module.css";
import Head from "./Head";

const Completed = () => {
  const [Lista, setLista] = useState([]);

  ///////////////FETCH LISTA GENERAL///////////////
  const daList = async () => {
    const response = await fetch("http://Localhost:3006/");
    const data = await response.json();
    const sortedList = data.sort((a, b) => b - a).reverse();

    setLista(sortedList);
  };

  useEffect(() => {
    daList();
  }, [Lista]);
  

  const ProgressList=Lista.filter((element)=>
  element.inProgress===true && element.done=== false) 

  return (
    <>
    <h4>List of in progress Tasks</h4>
      <Head />
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
               
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Completed;
