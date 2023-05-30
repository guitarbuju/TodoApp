// eslint-disable-next-line no-unused-vars
import {React,useEffect} from 'react'
import styles from './trigger.module.css'
import {useForm} from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.css';
import List from '../MainList/List' //Este es el componente con la lista
//import Listado from '../../daList/'//se importa la funcion que trae el array con la data desde el fichero de funciones


const Trigger = () => {
  //  const OneList=Listado()// se pasa como prop
  //  console.log(OneList)
// eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } }=useForm()

    //////////////POST TAREA NUEVA///////////////////////   
    const onSubmit = (predata)=>{
    const done=false
    const ProperDate = new Date(predata.date).toISOString();
    
    //aqui sacamos el date con el formato de string
    // eslint-disable-next-line no-unused-vars
    const {date,...moredata}=predata
    //aqui agregamos a los datos recogidos del formulario el done y la fecha con el formato apropiado
    const obj={...moredata,ProperDate,done}

    console.log(obj)
      
    const PostNew1= async()=>{
    const requestedOptions={
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    
    const response= await fetch('http://Localhost:3006/main',requestedOptions)
    const data= await response.json()
    console.log(data)

    }
     
       PostNew1()

    }
   
  return (
<>
    <List />
    <div className={styles.wrapper}>
        
           <form onSubmit={handleSubmit(onSubmit)}>
             <div className='form-group'>
                <label>Add new Date</label>
                <input  type='date'   className='form-control'{...register("date")}/>
                <label>Add new Task</label>
                <input type='text' className='form-control'{...register("task")}/>
            </div>
            <div className={styles.buttonGroup}>
                <input value ='Input' type='submit' className='btn btn-outline-primary btn-lg'/>
                <input value='Reset' type='reset' className='btn btn-outline-warning btn-lg'/>
            </div>
           </form>
          
    </div>
    </>
  )
}

export default Trigger