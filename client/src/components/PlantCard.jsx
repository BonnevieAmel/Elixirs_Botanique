import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlantCard({ plant, large }) {
  return (
    <div
      className={`w-60 p-2 object-cover shadow-lg rounded-lg bg-[#fff7ed] overflow-hidden ${large ? "h-full" : ""}`}
    >
      <Link to={`/PlantPage/${plant.id}`}>
        <img
          src={plant.image}
          alt={plant.plantsName}
          className={`max-w-40 ${large ? "h-3/4" : "max-h-40"} object-cover rounded-lg`}
        />
      </Link>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{plant.plantsName}</h1>
        <p className="text-gray-700 mb-1">
          <strong>Nom Scientifique :</strong> {plant.scientificName}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Vertues :</strong> {plant.virtues}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Contre Indications:</strong> {plant.contraindications}
        </p>
      </div>
    </div>
  );
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    plantsName: PropTypes.string,
    scientificName: PropTypes.string,
    description: PropTypes.string,
    virtues: PropTypes.string,
    contraindications: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  large: PropTypes.bool,
};

PlantCard.defaultProps = {
  large: false,
};

export default PlantCard;
