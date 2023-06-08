import styles from './mainForm.module.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import axios from 'axios'




const MainForm = () => {
//Register con fetch
  const [answer,setanswer]=useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


 
const Register=(e)=>{
 
  e.preventDefault();
    const obj = { name, email, password }
    
    console.log(obj)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };
 

 
    const signIn = async () => {
      try {
        const response = await axios.get('http://Localhost:3006/register',requestOptions);
        // eslint-disable-next-line no-unused-vars
       const data= await response
       
       setanswer('Ha sido registrado con exito')
       console.log(data.token)
      } catch (error) {
        console.error(error);
      }
    };

    signIn()


    setname('')
    setemail('')
    setpassword('')
   
    function runFunctionWithDuration(duration) {
      
    setanswer('Usuario agregado con exito')
      setTimeout(function() {
        setanswer('') 
      }, duration);}
    
    
    // Example usage:
    runFunctionWithDuration(5000);
   
}


  return (
    <>
    <form name='miForm' >
      <div className={styles.inputData}>
          <h1>Sign In</h1>
        <div className={styles.dainput}>
            <label htmlFor="name" style={{fontWeight:'bolder'}}>NAME</label>
            <input value={name} className='form-control'   name='name'
             id='name' type='text' placeholder= 'input your username'
              onChange={(e)=>{setname(e.target.value)}}
             />
        </div>
        
        <div className={styles.dainput}>
            <label htmlFor="email" style={{fontWeight:'bolder'}}>EMAIL</label>
            <input  value={email} className="form-control" name='email'
            id='email' type='text' placeholder='input your email'
              onChange={(e)=>{setemail(e.target.value)}}
            />
        </div>
        
       <div className={styles.dainput}>
            <label htmlFor="password" style={{fontWeight:'bolder'}}>PASSWORD</label>
            <input value={password} className="form-control" name='password'
            id='password' type='text'  placeholder='input your password'
              onChange={(e)=>{setpassword(e.target.value)}}
            />
       </div>
        
     </div>

     <div className= {styles.buttons}>
          
          <button id='signin' className="btn btn-warning" onClick={(e)=>{Register(e)}}>Sign In</button>
          <p type= 'submit' className='signin' >
          <Link  to="/">
            Already a member? please Log in
          </Link>
          </p>

     </div>

          <p id='answer' className='form-group' style={{textAlign:'center'}}>{answer}</p>

      
    </form>
  </>
)}

export default MainForm