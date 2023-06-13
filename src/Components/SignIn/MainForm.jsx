import styles from './mainForm.module.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

const MainForm = () => {
// eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm();

 const navigate=useNavigate()
 
 const onSubmit= async(data)=>{
  console.log(data)
 
  try {
    const response = await axios.post('http://localhost:3006/register', data);
    const { token } = response.data;
    console.log(response.data) 
    // Save the token to local storage
    localStorage.setItem('token', token);

    navigate('/today')

    console.log('Logged in successfully');
  } catch (error) {
    console.error(error);
  }
}

 
 


  return (
    <>
    <form name='regForm' onSubmit={handleSubmit(onSubmit)} >
      <div className={styles.inputData}>
          <h1>Sign In</h1>
        <div className={styles.dainput}>
            <label htmlFor="name" style={{fontWeight:'bolder'}}>NAME</label>
            <input  className='form-control'  
              type='text' placeholder= 'input your username'
             {...register("name", { required: true })}
             />
        </div>
        
        <div className={styles.dainput}>
            <label htmlFor="email" style={{fontWeight:'bolder'}}>EMAIL</label>
            <input  className="form-control"
             type='email' placeholder='input your email'
            {...register("email", { required: true })}
            />
        </div>
        
       <div className={styles.dainput}>
            <label htmlFor="password" style={{fontWeight:'bolder'}}>PASSWORD</label>
            <input  className="form-control"
            type='password'  placeholder='input your password'
            {...register("password", { required: true })}
            />
       </div>
        
     </div>

     <div className= {styles.buttons}>
          
          <button type='submit' className="btn btn-warning">Sign In</button>
          <p  >
          <Link  to="/">
            Already a member? please Log in
          </Link>
          </p>

     </div>
         

      
    </form>
  </>
)}

export default MainForm