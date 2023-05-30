// eslint-disable-next-line no-unused-vars
import {useState,useEffect,React} from 'react'
import styles from './list.module.css'
import Head from './Head'


const List = () => {
 
const[Lista,setLista]=useState([])


///////////////FETCH LISTA GENERAL///////////////
  const daList=async()=>{ 
    
         const response= await fetch('http://Localhost:3006/')
         const data= await response.json()
         const sortedList=data.sort((a, b) =>b -a).reverse();
        
         setLista(sortedList)
      
    }
   
    useEffect(() => {
      daList()
    }, [Lista])

 

  return (
    <>
      <Head/>  
    <div className={styles.wrapper}>
        <ul className={styles.list_container}>
       
        {Lista.map((element,index)=><li key={index}
        className={!element.done ? styles.element : styles.done}
        >
        <input disabled={element.done ? 'disabled':''} type='radio'/>
        <p >{element.task}</p></li>)}
      
        </ul>
           
    </div>
    </>
  )
}

export default List