import { Link } from "react-router-dom";
import { useGetPokemonDetailQuery } from "../services/PokemonService";
import { motion } from "framer-motion";

const PokemonCard = ({ name }: { name: string }) => {
  const { data } = useGetPokemonDetailQuery(name);

  

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="border-white  rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
        <div className="flex flex-col justify-center items-center content-center ">
          <Link
            to={`/pokedetail/${name}`}
            className="flex flex-col justify-center items-center content-center"
          >
            <img width={"60%"} className="" src={data?.image.mainimg} alt="" />
            <div className="w-full px-6 py-4 text-lg  flex justify-between border-t bg-gray-500 text-white ">
              <p>{data?.name} </p>
              <p>#{data?.id}</p>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;
