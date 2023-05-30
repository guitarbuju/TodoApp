// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './head.module.css'


const Head = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.head}>
            <div className={styles.date}>
                <p className={styles.month}>MAY</p>
                <div className={styles.dayWrapper}>
                    <p className={styles.day}>23</p>
                </div>
                
            </div>

            <div className={styles.today}>
                <h1>Today</h1>
            </div>
            <div className={styles.dots}>
                <span>...</span>
            </div>

        </div>








    </div>
  )
}

export default Head