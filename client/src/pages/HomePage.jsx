import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import PlantCard from "../components/PlantCard";
import NavBar from "../components/NavBar";

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
            <div className="text-center mb-8 p-4 bg-[#fff7ed] rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-[#a2b88c] mb-4">
                Bienvenue sur notre site de Plantes Médicinales
              </h1>
              <p className="text-lg text-black">
                Découvrez comment les plantes médicinales peuvent nous aider à
                traverser la vie sereinement. Explorez nos fiches détaillées et
                apprenez-en plus sur les vertus de chaque plante.
              </p>
            </div>
            <div className="p-4">
              {plants.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              )}
            </div>{" "}
            {/* Ajout de la parenthèse fermante ici */}
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default HomePage;
