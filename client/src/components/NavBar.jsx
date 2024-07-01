import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <nav className="h-28 uppercase">
      <div className=" flex">
        <ul className="w-screen flex flex-end justify-center space-x-12 ml-[20%] text-s font-bold flex-row items-center ">
          <li className="green">
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/PlantsPage">Plantes</Link>
          </li>
          <li className="bg-green-800 p-3 rounded-xl text-white">
            <Link to="/RecipePage"> Recettes </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
