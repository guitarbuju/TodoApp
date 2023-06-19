import PropTypes from "prop-types";
import Styles from "./description.module.css";
import Image from '../../assets/WORK3.png'


const Description = ({ id, Lista , ShowDesc , SetShowDesc}) => {
  Description.propTypes = {
  
    id: PropTypes.string.isRequired,
    Lista: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        task: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date),
        done: PropTypes.bool.isRequired,
        inProgress: PropTypes.bool.isRequired,
        createdAt: PropTypes.instanceOf(Date),
        updatedAt: PropTypes.instanceOf(Date),
      })
    ).isRequired,
    ShowDesc: PropTypes.bool.isRequired,
    setShowDesc: PropTypes.func.isRequired,
  };

  const handleCloseClick = () => {
    SetShowDesc(false);
  };


  const foundElement = Lista.find((element) => element._id === id);

  return (
    <div className={Styles.mainwrap}>
       <p onClick={handleCloseClick}>CLOSE x</p>
      <img src={Image}/>
      <ul className={Styles.boxwrap}>
        {foundElement && (
          <>
            <li>
              <h1>{foundElement.task}</h1>
            </li>
            <li>Id: {foundElement._id}</li>
            <li>Category: {foundElement.category}</li>

            <li>
              Due Date: {new Date(foundElement.date).toLocaleDateString()}
            </li>
            <li>Completed: {foundElement.done ? "Yes" : "No"}</li>
            <li>InProgress: {foundElement.inProgress ? "Yes" : "No"}</li>
            <li>
              Created At:{" "}
              {new Date(foundElement.createdAt).toLocaleDateString()}
            </li>
            <li>
              Updated At:{" "}
              {new Date(foundElement.updatedAt).toLocaleDateString()}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Description;
