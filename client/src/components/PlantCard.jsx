import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlantCard({ plant }) {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-900">
      <Link to={`/plant/${plant.id}`}>
        <img src={plant.image_url} alt={plant.Name} />
      </Link>
      <h1>
        <strong> Nom : </strong> {plant.Name}
      </h1>
      <p>
        <strong>Nom Scientifique :</strong> {plant.scientificName}
      </p>
      <p>{plant.description}</p>
      <p>
        <strong>Vertues :</strong> {plant.virtues}
      </p>
      <p>
        <strong>Contre Indications:</strong> {plant.contraindications}
      </p>
    </div>
  );
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    Name: PropTypes.string,
    scientificName: PropTypes.string,
    description: PropTypes.string,
    virtues: PropTypes.string,
    contraindications: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default PlantCard;
