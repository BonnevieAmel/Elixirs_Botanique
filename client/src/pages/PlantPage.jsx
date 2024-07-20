import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlantCard from "../components/PlantCard";
import NavBar from "../components/NavBar";

function PlantPage() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plants/${id}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((err) => {
        console.error("error fetching the plant!", err);
        setError("error fetching the plant!");
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!plant) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <NavBar />
      <section className="flex justify-center items-center min-h-screen">
        <div className="flex size-max m-auto w-96 h-auto">
          <PlantCard plant={plant} />
        </div>
      </section>
    </>
  );
}

export default PlantPage;
