import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import PlantCard from "./PlantCard";
import NavBar from "./NavBar";

function PlantList() {
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
      .catch((err) => {
        console.error("error fetching the plants!", err);
        setError("error fetching the plants!");
      });
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
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
          <div className="container mx-auto p-8 flex-1 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <Link
                to="/plants/new"
                className="bg-green-900 text-white px-4 py-2 rounded-md"
              >
                Ajouter une nouvelle Plante
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default PlantList;
