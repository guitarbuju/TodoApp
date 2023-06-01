// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./list.module.css";
import Head from "./Head";

const List = () => {
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
    const requestedOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://Localhost:3006/done/${_id}`,
      requestedOptions
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // If the delete request is successful, update the list
      daList();
    }
  };
  // If the patch request is successful, update the list

  //////////////////////////////////DELETE TASK///////////////////////

  const handleDelete = async (_id) => {
    const requestedOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://Localhost:3006/delete/${_id}`,
      requestedOptions
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // If the delete request is successful, update the list
      daList();
    }
  };

  ////////////////////////// PATCH IN PROGRESS///////////////////////

  const InProgress = async (_id) => {
    const requestedOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://Localhost:3006/inprogress/${_id}`,
      requestedOptions
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // If the delete request is successful, update the list
      daList();
    }
  };
  // If the patch request is successful, update the list

  /////////// TIME STAMP/////////////

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };

  return (
    <>
      <Head />
      <div className={styles.wrapper}>
        {Lista.length === 0 ? (
          <h1>No List Available Yet</h1>
        ) : (
          <ul className={styles.list_container}>
            {Lista.map((element, index) => (
              <li
                onDoubleClick={() => InProgress(element._id)}
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
                  <p>{element.task}</p>
                </div>
                <div className={styles.statusWrapper}>
                <p className={styles.formatDate}>update:{formatDate(element.date)}</p>
                  {element.inProgress ? (
                    <p className={styles.formatDate}>in progress</p>
                  ) : (
                    <p className={styles.formatDate}>not in progress</p>
                  )}
                  <div 
                  onClick={()=>handleDelete(element._id)}
                  className={styles.close_button}>&#9746;</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default List;
