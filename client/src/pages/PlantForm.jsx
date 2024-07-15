import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PlantForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState({
    plantsName: "",
    scientificName: "",
    description: "",
    virtues: "",
    contraindications: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const { VITE_API_URL } = import.meta.env;

  useEffect(() => {
    if (id) {
      axios
        .get(`${VITE_API_URL}/api/plants/${id}`)
        .then((response) => setPlant(response.data))
        .catch(() => setError("Error fetching the plant!"));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlant((prevPlant) => ({ ...prevPlant, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${VITE_API_URL}/api/plants/${id}`, plant)
        .then(() => navigate.push("/plants"))
        .catch(() => setError("Error updating the plant!"));
    } else {
      axios
        .post(`${VITE_API_URL}/api/plants`, plant)
        .then(() => navigate.push("/plants"))
        .catch(() => setError("Error creating the plant!"));
    }
  };

  const handleDelete = () => {
    axios
      .delete(`${VITE_API_URL}/api/plants/${id}`)
      .then(() => navigate.push("/plants"))
      .catch(() => setError("Error deleting the plant!"));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">
        {id ? "Edit Plant" : "Add Plant"}
      </h1>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="plantsName" className="block text-sm font-medium">
            Plant Name
          </label>
          <input
            type="text"
            id="plantsName"
            name="plantsName"
            value={plant.plantsName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="scientificName" className="block text-sm font-medium">
            Scientific Name
          </label>
          <input
            type="text"
            id="scientificName"
            name="scientificName"
            value={plant.scientificName}
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
            value={plant.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="virtues" className="block text-sm font-medium">
            Virtues
          </label>
          <textarea
            id="virtues"
            name="virtues"
            value={plant.virtues}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contraindications"
            className="block text-sm font-medium"
          >
            Contraindications
          </label>
          <textarea
            id="contraindications"
            name="contraindications"
            value={plant.contraindications}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={plant.image}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
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
  );
}

export default PlantForm;
