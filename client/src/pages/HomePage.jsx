import { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "../components/PlantCard";

function HomePage() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plants`)
      .then((response) => {
        console.info("Response data:", response.data);
        if (Array.isArray(response.data)) {
          setPlants(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setError("Unexpected response format");
        }
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        console.error("error fetching the plants!", error);
        setError("error fetching the plants!");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default HomePage;
