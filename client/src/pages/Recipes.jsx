import { useState, useEffect } from "react";
import axios from "axios";

function Recipes() {
  const [teas, setTeas] = useState([]);
  const { VITE_API_URL } = import.meta.env;
  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/api/teas`)
      .then((response) => setTeas(response.data))
      .catch((error) => console.error("Error fetching teas:", error));
  }, [VITE_API_URL]);

  return (
    <div>
      <h1>Recettes de Tisanes</h1>
      <ul>
        {teas.map((tea) => (
          <li key={tea.id}>
            <a href={`/Recipes/${tea.id}`}>{tea.teaName}</a>
            <p>{tea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
