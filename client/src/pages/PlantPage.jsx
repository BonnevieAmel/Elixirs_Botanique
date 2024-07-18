import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
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
  
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center w-screen h-screen bg-[#a2b88c]">
        <section className="w-[90%] h-[90%] shadow-lg rounded-lg bg-[#fff7ed] overflow-hidden flex flex-col">
          <NavBar />
          <div className="flex justify-center items-center h-screen bg-[#a2b88c]">
            <PlantCard plant={plant} large />
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default PlantPage;
