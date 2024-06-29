import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlantCard from "../components/PlantCard";

function PlantPage() {
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/plants/${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        console.error("There was an error fetching the plant!", error);
        setError("There was an error fetching the plant!");
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!plant) {
    return <div>Loading...</div>;
  }

  return <PlantCard plant={plant} />;
}

export default PlantPage;
