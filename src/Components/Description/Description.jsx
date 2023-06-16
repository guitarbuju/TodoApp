import PropTypes from "prop-types";
import Styles from "./description.module.css";

const Description = ({ id, Lista }) => {
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
  };

  const foundElement = Lista.find((element) => element._id === id);

  return (
    <div>
      <h3>Description</h3>
      <ul>
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
