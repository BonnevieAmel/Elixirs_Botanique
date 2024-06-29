import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <Link to={`/plant/${plant.id}`}>
        <img src={plant.image_url} alt={plant.name} />
        <h2>{plant.name}</h2>
      </Link>
      <p>
        <strong>Scientific Name:</strong> {plant.scientific_name}
      </p>
      <p>{plant.description}</p>
      <p>
        <strong>Virtues:</strong> {plant.virtues}
      </p>
      <p>
        <strong>Contraindications:</strong> {plant.contraindications}
      </p>
    </div>
  );
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    scientific_name: PropTypes.string,
    description: PropTypes.string,
    virtues: PropTypes.string,
    contraindications: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default PlantCard;
