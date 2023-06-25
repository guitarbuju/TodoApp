
import styles from './footer.module.css'
import social from '../../assets/Untitled/‎Untitled.‎001.png'
import nuclio from '../../assets/nuclio/‎nuclio.‎001.png'
import guitar from '../../assets/guitar/‎guitar.png'
const Footer = () => {

    
  return (
    <div className={styles.wrapper}>
   <img className={styles.social} src = {social}/>
   <div className={styles.G}>
    
     <img className={styles.guitar} src = {guitar}/> 
     <p className={styles.title}>Powered by Gerardo Madrid...</p>
   </div>
   
   <a href='https://nuclio.school/'><img  className={styles.nuclio} src  = {nuclio}/></a> 

    
    </div>
  )
}

export default Footer