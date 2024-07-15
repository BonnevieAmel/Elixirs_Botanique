import { Link } from "react-router-dom";
import LogoEB from "../assets/images/LogoEB.png";

function NavBar() {
  return (
    <nav className="bg-[#fff7ed] text-black p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img src={LogoEB} alt="Logo" className="h-12 mr-2" />
          <span className="text-lg md:hidden">Elixirs Botanique</span>
        </div>
        <div className="hidden md:flex justify-center flex-grow">
          <span className="text-xl">Elixirs Botanique</span>
        </div>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <Link to="/" className="hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/Plants" className="hover:underline">
              Plantes
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="hover:underline">
              Recettes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
