import { useState, useEffect} from "react";
import styles from "../MainList/list.module.css"
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Description from "../Description/Description";
import {BASE_URL} from '../../../config'



const List = ({showForm}) => {
  const [Lista, setLista] = useState([]);
  const [ShowDesc,SetShowDesc]=useState(false)
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  ///////////////FETCH LISTA GENERAL///////////////
  const daList = async () => {
   
    const requestedOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      ` ${BASE_URL}/today/${user}`,
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
   

    const requestedOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `${BASE_URL}/done/${_id}/${user}`,
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
   

    const requestedOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `${BASE_URL}/delete/${_id}/${user}`,
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
   

    const requestedOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `${BASE_URL}/inprogress/${_id}/${user}`,
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
    SetShowDesc(true)

  };

  return (
   
    <div className={styles.supercontainer}>
  
    
      <div className={styles.container}>
      
      <h4>List of Today&apos;s Tasks</h4>

        <div className={styles.wrapper}>
          {Lista.length === 0 ? (
            <h1>No List Available Yet</h1>
          ) : (
            <ul className={ styles.list_container}>
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
                    <p className={styles.toggler} data-id={element._id} onClick={handleDescription}>
                      &#x2630;
                    </p>
                    <p className={styles.task}>{element.task}</p>
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
      {ShowDesc && <Description id={id2} Lista={Lista} ShowDesc={ShowDesc} SetShowDesc={SetShowDesc}/>}
   
    </div>
      
  );
};

export default List;

