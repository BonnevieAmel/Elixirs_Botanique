import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsRecipe() {
  const { id } = useParams();
  const [tea, setTea] = useState(null);
  const [plants, setPlants] = useState([]);
  const { VITE_API_URL } = import.meta.env;

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/api/plants`)
      .then((response) => {
        setTea(response.data);
        return axios.get(`${VITE_API_URL}/api/teasplants/recipe/${id}`);
      })
      .then((response) => setPlants(response.data))
      .catch((error) => console.error("Error fetching tea details:", error));
  }, [VITE_API_URL, id]);

  if (!tea) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tea.teaName}</h1>
      <p>{tea.description}</p>
      <h2>Plantes utilisées</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.plantsName} - {plant.quantity}
          </li>
        ))}
      </ul>
      <h2>Préparation</h2>
      <p>{tea.preparation}</p>
    </div>
  );
}

export default DetailsRecipe;
