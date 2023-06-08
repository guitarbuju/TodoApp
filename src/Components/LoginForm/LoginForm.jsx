
import styles from '../SignIn/mainForm.module.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios'




const LoginForm = () => {
// eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm();
  


  const onSubmit= async(data)=>{
    console.log(data)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
     axios.post("http://localhost:3006/login", requestOptions)
     .then((res)=>res.json())
     .then((data)=>console.log(data))
     .catch((err)=>console.log(err))
    
  }



  

  return (
    <>
    <form name='miForm' onSubmit={handleSubmit(onSubmit)} >
      <div className={styles.inputData}>
      <h1>Log In</h1>
        <div className={styles.dainput}>
            <label htmlFor="email" style={{fontWeight:'bolder'}}>EMAIL</label>
            <input className='form-control' {...register("email", { required: true })} />
        </div>
        
       <div className={styles.dainput}>
            <label htmlFor="password" style={{fontWeight:'bolder'}}>PASSWORD</label>
            <input className='form-control' {...register("password", { required: true })} />
       </div>
        
     </div>

     <div className= {styles.buttons}>
          
          <p className='signin' >
          <Link to="/signIN">
            Not a member yet?. Please register
          </Link>
          </p>

          <button type= 'submit' id='login' className="btn btn-warning"  
         >Log In</button>
          <button type= 'reset' id='reset' className="btn btn-success"  
         >Reset</button>

     </div>
          
      
    </form>
  </>
)}

export default LoginForm