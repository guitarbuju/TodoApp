// eslint-disable-next-line no-unused-vars
import { useState, useEffect, React } from "react";
import styles from "./Alltasks.module.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Description from "../Description/Description";

const List = () => {
  const [Lista, setLista] = useState([]);

  ///////////////FETCH LISTA GENERAL///////////////
  const daList = async () => {
    const token = localStorage.getItem("token");

    const requestedOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "http://Localhost:3006/",
      requestedOptions
    );
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
    const token = localStorage.getItem("token");

    const requestedOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
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

  // If the patch request is successful, update the list

  //////////////////////////////////DELETE TASK///////////////////////

  const handleDelete = async (_id) => {
    const token = localStorage.getItem("token");

    const requestedOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `http://Localhost:3006/delete/${_id}`,
      requestedOptions
    );
    const data = await response.data;
    console.log(data);
    if (response.ok) {
      // If the delete request is successful, update the list
      daList();
    }
  };

  ////////////////////////// PATCH IN PROGRESS///////////////////////

  const InProgress = async (_id) => {
    const token = localStorage.getItem("token");

    const requestedOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `http://Localhost:3006/inprogress/${_id}`,
      requestedOptions
    );
    const data = await response.data;
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
  ///// Id para el outlet de descripcion
  const [id2, setId2] = useState("");

  const handleDescription = (event) => {
    const id = event.target.dataset.id;
    setId2(id);
  };

  return (
    <div className={styles.supercontainer}>
      <div className={styles.container}>
      
          <h4>List of all Tasks </h4>
         
       

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
                    <p data-id={element._id} onClick={handleDescription}>
                      &#x2630;
                    </p>
                    <p>{element.task}</p>
                  </div>
                  <div className={styles.statusWrapper}>
                    <p className={styles.formatDate}>
                      duedate:{formatDate(element.date)}
                    </p>
                    {element.inProgress ? (
                      <p className={styles.formatProgress}>in progress </p>
                    ) : (
                      <p></p>
                    )}
                    <div
                      onClick={() => handleDelete(element._id)}
                      className={styles.close_button}
                    >
                      &#9746;
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Description id={id2} Lista={Lista} />
    </div>
  );
};

export default List;
