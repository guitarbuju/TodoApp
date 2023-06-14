
import styles from '../SignIn/mainForm.module.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
// eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm();
  
const navigate=useNavigate()

  const onSubmit= async(data)=>{
    console.log(data)
   
    try {
      const response = await axios.post('http://localhost:3006/login', data);
      const { token,user } = response.data;
     
      console.log(response.data) 
      // Save the token to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);

      navigate('/spinner2')

      console.log('Logged in successfully');
    } catch (error) {
      console.error(error);
    }
  }



  

  return (
    <>
    <form name='miForm' onSubmit={handleSubmit(onSubmit)} >
      <div className={styles.inputData}>
      <h1>Log In</h1>
        <div className={styles.dainput}>
            <label htmlFor="email" style={{fontWeight:'bolder'}}>EMAIL</label>
            <input type='email' className='form-control' {...register("email", { required: true })} />
        </div>
        
       <div className={styles.dainput}>
            <label htmlFor="password" style={{fontWeight:'bolder'}}>PASSWORD</label>
            <input type='password' className='form-control' {...register("password", { required: true })} />
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