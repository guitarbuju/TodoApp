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


  /////PATCH TASKS TO DONE
  const [_id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
    event.target.checked = false;
  };

  useEffect(() => {
    if (_id) {
      PatchNew1();
    }
  }, [_id]);

  const PatchNew1 = async () => {
    
    const token = localStorage.getItem('token')

    const requestedOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json",
                 "authorization":`Bearer ${token}` 
                },
    };

    const response = await axios.patch(
      `http://Localhost:3006/done/${_id}`,
      requestedOptions
    );
    const data = await response.data;
    console.log(data);
    if (response.ok) {
      // If the patch request is successful, update the list
      daList();
    }
  };
  
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
                className={!element.done ? styles.element : styles.done}
              >
                <div className={styles.inputWrapper}>
                  <input
                    value={element._id}
                    onChange={handleChange}
                    disabled={element.done ? "disabled" : ""}
                    type="radio"
                  />
              </div>
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
