import { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "../components/PlantCard";

function HomePage() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/plants")
      .then((response) => {
        setPlants(response.data);
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        console.error("There was an error fetching the plants!", error);
        setError("There was an error fetching the plants!");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (plants.length === 0) {
    return <div>Loading...</div>;
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
