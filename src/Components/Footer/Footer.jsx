
import styles from './footer.module.css'
import social from '../../assets/Untitled/‎Untitled.‎001.png'
import nuclio from '../../assets/nuclio/‎nuclio.‎001.png'
import guitar from '../../assets/guitar/‎guitar.png'
import city1 from '../../assets/city/‎city1.png'
import city2 from '../../assets/city/‎city2.png'


const Footer = () => {

    
  return (
    <div className={styles.wrapper}>
     <img className={styles.social} src = {city1}/> 
   <img className={styles.social} src = {social}/>
   <div className={styles.G}>
    
     <img className={styles.guitar} src = {guitar}/> 
     <p className={styles.title}>Powered by Gerardo Madrid...</p>
   </div>
   
   <a href='https://nuclio.school/'><img  className={styles.nuclio} src  = {nuclio}/></a> 
   <img className={styles.city2} src = {city2}/> 
    
    </div>
  )
}

export default Footer