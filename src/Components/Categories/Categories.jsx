import { NavLink, Outlet } from "react-router-dom";
import Image from "../../assets/categories.003.png";
import Styles from "./categories.module.css";

const Categories = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <h1>Categories</h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink className="nav-link" to="personal">
                  Personal
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="others">
                  Others
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="work">
                  Work
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <img src={Image} />
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
