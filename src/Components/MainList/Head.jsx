// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './head.module.css'
import Menu from '../Drop-down-menu/Menu'



const Head = () => {

    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
    const currentDay= currentDate.getDate()

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

        </div>








    </div>
  )
}

export default Head