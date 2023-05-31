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
    setId(event.target.value)
    event.target.checked=false
  };

  useEffect(() => {
    if (_id) {
      PatchNew1()
    }
  }, [_id])

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
      daList()
    }
  };
  // If the patch request is successful, update the list
  

 //////////////////////////////////DELETE TASK///////////////////////
  
  const handleDelete = async (_id) => {
    const requestOptions = {
      method: 'DELETE',
    };

    const response = await fetch(`http://localhost:3006/delete/${_id}`, requestOptions);
    if (response.ok) {
      // If the delete request is successful, update the list
      daList()
    }
  };
/////////// TIME STAMP/////////////

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US")
};


  return (
    <>
      <Head />
      <div className={styles.wrapper}>
      {Lista.length=== 0?
      (<h1>No List Available Yet</h1>):
        (<ul className={styles.list_container}>
          {Lista.map((element, index) => (
            <li
            
              onDoubleClick={() => handleDelete(element._id)}
              key={index}
              className={!element.done ? styles.element : styles.done}
            >
              <input
                value={element._id}
                onChange={handleChange}
                disabled={element.done ? "disabled" : ""}
                type="radio"
              />
              <p>{element.task}</p>
              <span className={styles.formatDate}>updated at:  {formatDate(element.updatedAt)}</span>
            </li>
          ))}
        </ul>)}
      </div>
    </>
  );
};

export default List;
