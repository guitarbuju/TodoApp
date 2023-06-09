// eslint-disable-next-line no-unused-vars
import { React, useEffect,useState } from "react";
import styles from "./trigger.module.css";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import List from "../MainList/List"; //Este es el componente con la lista
import axios from 'axios'
//import Listado from '../../daList/'//se importa la funcion que trae el array con la data desde el fichero de funciones

const Trigger = () => {
  const [showForm, setShowForm] = useState(false)

  const handleToggle = () => {
    setShowForm(!showForm)}

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  //////////////POST TAREA NUEVA///////////////////////
  const onSubmit = (predata) => {
    const done = false;
    const inProgress = false;
    const ProperDate = new Date(predata.date).toISOString();
   console.log(ProperDate)

    //aqui sacamos el date con el formato de string
    // eslint-disable-next-line no-unused-vars
    const { date, ...moredata } = predata;
    //aqui agregamos a los datos recogidos del formulario el done y la fecha con el formato apropiado
    const obj = { ...moredata, ProperDate, done, inProgress };

    console.log(obj);

    const PostNew1 = async () => {
      // 

      try {

        const token = localStorage.getItem('token')
        const config= {
          headers: { "Content-Type": "application/json" ,
                   "Authorization": `Bearer ${token}`},
        }
        const response = await axios.post(
          "http://localhost:3006/main",
          obj,config
          
        );
    
        const data = response.data;
        console.log(data);
        
        setShowForm(false)

      } catch (error) {
        console.error(error);
       
      }
    };


    PostNew1();
  };

  return (
    <>
    
      <List />
      <div className={styles.wrapper}>
      <p className={styles.createNew} 
      onClick={handleToggle}>
      <span>&#x2A01;</span>
      Create new item</p>
      
      {showForm && (

        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="form-group">
            <div>
            <label>Add Due Date </label>
            <input type="date" className="form-control" {...register("date")} />


            </div>
            
            <label>Add New Task</label>
            <input type="text" className="form-control" {...register("task")} />
            <label>Add Category</label>
            <select className="form-select form-select-sm" name="Category" {...register("category")}>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className={styles.buttonGroup}>
            <input
              value="Input"
              type="submit"
              className="btn btn-outline-primary btn-lg"
            />
            <input
              value="Reset"
              type="reset"
              className="btn btn-outline-warning btn-lg"
            />
          </div>
        </form>)}
      </div>
    
    </>
  );
};

export default Trigger;
