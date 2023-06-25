import styles from "./footer.module.css";
import social from "../../assets/Untitled/‎Untitled.‎001.png";
import nuclio from "../../assets/nuclio/‎nuclio.‎001.png";
import guitar from "../../assets/guitar/‎guitar.png";
import city from "../../assets/bcn/‎bcn.‎001.png";
import cityLogo from "../../assets/bcn/‎bcn.‎002.png";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
     <img className={styles.social} src={city} />
      <img className={styles.social} src={social} />
      <div className={styles.G}>
        <img className={styles.guitar} src={guitar} />
        <p className={styles.title}>Powered by Gerardo Madrid...</p>
      </div>

      <a href="https://nuclio.school/">
        <img className={styles.nuclio} src={nuclio} />
      </a>
      <img className={styles.cityLogo} src={cityLogo} />
    </div>
  );
};

export default Footer;
