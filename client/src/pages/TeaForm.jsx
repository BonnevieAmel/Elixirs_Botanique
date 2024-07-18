import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function TeaForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tea, setTea] = useState({
    teaName: "",
    description: "",
    preparation: "",
  });
  const [plants, setPlants] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [error, setError] = useState(null);
  const { VITE_API_URL } = import.meta.env;

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/api/plants`)
      .then((response) => setPlants(response.data))
      .catch((err) => {
        console.error("Error fetching plants:", err);
        setError("Error fetching plants!");
      });

    if (id) {
      axios
        .get(`${VITE_API_URL}/api/teas/${id}`)
        .then((response) => {
          const teaData = response.data;

          setTea({
            teaName: teaData.teaName,
            description: teaData.description,
            preparation: teaData.preparation,
          });
          setSelectedPlants(
            teaData.plants.map((p) => ({
              id: p.id,
              plantsName: p.plantsName,
              quantity: p.quantity,
            }))
          );
        })

        .catch((err) => {
          console.error("Error fetching the tea recipe:", err);
          setError();
        });
    }
  }, [VITE_API_URL, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTea((prevTea) => ({ ...prevTea, [name]: value }));
  };

  const handleQuantityChange = (plantId, quantity) => {
    const newSelectedPlants = selectedPlants.map((plant) =>
      plant.id === plantId ? { ...plant, quantity } : plant
    );
    setSelectedPlants(newSelectedPlants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTea = {
      ...tea,
      plants: selectedPlants,
    };

    if (id) {
      axios
        .put(`${VITE_API_URL}/api/teas/${id}`, newTea)
        .then(() => navigate("/Recipes"))
        .catch((err) => {
          console.error("Error updating the tea recipe:", err);
          setError("Error updating the tea recipe!");
        });
    } else {
      axios
        .post(`${VITE_API_URL}/api/teas`, newTea)
        .then(() => navigate("/Recipes"))
        .catch((err) => {
          console.error("Error creating the tea recipe:", err);
          setError("Error creating the tea recipe!");
        });
    }
  };

  const handleDelete = () => {
    axios
      .delete(`${VITE_API_URL}/api/teas/${id}`)
      .then(() => navigate("/Recipes"))
      .catch((err) => {
        console.error("Error deleting the tea recipe:", err);
        setError("Error deleting the tea recipe!");
      });
  };

  const handleAddPlant = (plant) => {
    if (!selectedPlants.some((p) => p.id === plant.id)) {
      setSelectedPlants([...selectedPlants, { ...plant, quantity: "" }]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">
          {id
            ? "Modifier la recette de tisane"
            : "Ajouter une recette de tisane"}
        </h1>
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="teaName" className="block text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="teaName"
              name="teaName"
              value={tea.teaName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={tea.description}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="preparation" className="block text-sm font-medium">
              Préparation
            </label>
            <textarea
              id="preparation"
              name="preparation"
              value={tea.preparation}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <h2>Plantes</h2>
          <ul>
            {plants.map((plant) => (
              <li key={plant.id}>
                {plant.plantsName}
                <button type="button" onClick={() => handleAddPlant(plant)}>
                  Ajouter
                </button>
              </li>
            ))}
          </ul>
          <h2>Plantes Sélectionnées</h2>
          <ul>
            {selectedPlants.map((plant) => (
              <li key={plant.id}>
                {plant.plantsName}
                <input
                  type="text"
                  placeholder="Quantité"
                  value={plant.quantity}
                  onChange={(e) =>
                    handleQuantityChange(plant.id, e.target.value)
                  }
                />
              </li>
            ))}
          </ul>
          <div className="space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              {id ? "Update" : "Create"}
            </button>
            {id && (
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default TeaForm;
