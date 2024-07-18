import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function TeaCard({ tea, large }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`w-60 p-2 object-cover shadow-lg rounded-lg bg-[#fff7ed] overflow-hidden ${large ? "h-full" : ""}`}
      >
        <img
          src={tea.image}
          alt={tea.teaName}
          className={`max-w-40 ${large ? "h-3/4" : "max-h-40"} object-cover rounded-lg`}
        />

        <Link to={`/Recipes/${tea.id}`}>
          <button
            type="button"
            className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
          >
            ➔
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-black rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left" />
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Click !
            </span>
          </button>
        </Link>

        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">{tea.teaName}</h1>
          <p className="text-gray-700 mb-1">
            <strong>Description :</strong> {tea.description}
          </p>
          <p className="text-gray-700 mb-1 pb-6">
            <strong>Préparation :</strong> {tea.preparation}
          </p>
          <Link to={`/Recipe/edit/${tea.id}`} className="text-blue-500">
            <button
              type="button"
              className="group flex h-fit w-fit flex-col items-center justify-center rounded-full bg-[#F1ddcf] px-[2em] py-[1em] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]"
            >
              <p className="font-nunito text-[1em] font-semibold text-[#d19466] duration-200 group-active:translate-y-[5%]">
                Modifier
              </p>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

TeaCard.propTypes = {
  tea: PropTypes.shape({
    id: PropTypes.number.isRequired,
    teaName: PropTypes.string,
    description: PropTypes.string,
    preparation: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  large: PropTypes.bool,
};

TeaCard.defaultProps = {
  large: false,
};

export default TeaCard;
