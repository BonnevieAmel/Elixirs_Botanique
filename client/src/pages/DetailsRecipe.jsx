import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TeaCard from "../components/TeaCard";

function DetailsRecipe() {
  const { id } = useParams();
  const [tea, setTea] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/teas/${id}`)
      .then((response) => {
        setTea(response.data);
      })
      .catch((err) => {
        console.error("error fetching the tea recipe!", err);
        setError("error fetching the tea recipe!");
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tea) {
    return <div>Chargement...</div>;
  }

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex size-max m-auto w-96 h-auto">
        <TeaCard tea={tea} />
      </div>
    </section>
  );
}

export default DetailsRecipe;
