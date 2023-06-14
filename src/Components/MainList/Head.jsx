// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import styles from './head.module.css'
import Menu from '../Drop-down-menu/Menu'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom';


const Head = () => {

    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
    const currentDay= currentDate.getDate()

    const navigate=useNavigate()
    const user = localStorage.getItem('user'); 
    const logout = () => {
        // Clear token and user data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        
        // Redirect or perform any other action after logout
        navigate('/spinner'); // Redirect to the login page, assuming you have a route for it
        console.log('logged out succesfully')
      };

  return (
    <div className={styles.wrapper}>
        <div className={styles.head}>
      
            <div className={styles.date}>
                <p className={styles.month}>{currentMonth}</p>
                <div className={styles.dayWrapper}>
                    <p className={styles.day}>{currentDay}</p>
                </div>
                
            </div>

            <div className={styles.today}>
                <h1>Today</h1>
            </div>
            <div className={styles.dots}>
            <Menu />
           
            </div>

            {user ? <button  className='btn btn-danger btn-lg' onClick={logout}>Log Out</button>: ''}
        </div>

      




    </div>
  )
}

export default Head