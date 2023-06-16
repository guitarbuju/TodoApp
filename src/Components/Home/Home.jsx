import Styles from "./Home.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import cielo from "../../assets/people.jpeg";

const Home = () => {
  return (
    <div className={Styles.container}>
      <div>
        <img src={cielo} className={Styles.img} />
        <div>
          <h1 className={Styles.title}>
            Welcome to
            <span
              style={{ color: "#fec734", textShadow: "0.5px 0.5px 0.5px gray",fontSize:'70px' }}
            >
              Todo App
            </span>
            List...
          </h1>
          <div className={Styles.appear}>
            <p>Now you`re gonna get it done...</p>
            <p className="btn btn-primary btn-lg">
              <Link style={{ color: "white" }} to="/login">
                I wanna Get in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
