import { motion } from "framer-motion";
import PlantList from "../components/PlantList";

function PlantsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.5 }}
    >
      <PlantList />
    </motion.div>
  );
}

export default PlantsPage;
