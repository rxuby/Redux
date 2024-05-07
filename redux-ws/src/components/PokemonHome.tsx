import { Pagination } from "antd";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { useGetPokemonsQuery } from "../services/PokemonService";
import { motion } from "framer-motion";
import PokemonLogo from "../images/International_Pokémon_logo 1.png";
import PokeBall from "../images/Mask_group.png";

function PokemonHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 10;

  const { data } = useGetPokemonsQuery({ limit: 50, offset: 0 });

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = currentPage * pageSize;
  const pokemonsToShow = data?.results?.slice(startIdx, endIdx);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <img width={"1%"} className="mr-2" src={PokeBall} alt="pokeball" />
        <p className=" text-zinc-400">loading...</p>
      </div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="App"> </div>
      <div className="flex flex-col items-center justify-center content-center">
        <img width={"20%"} src={PokemonLogo} alt="logo" />
        <h1 className="font-bold text-[2rem]" style={{ color: "#3A5DA8" }}>
          Dex
        </h1>
      </div>
      <div className="grid grid-cols-5 mx-[4em] my-[0.5em] gap-5 ">
        {pokemonsToShow?.map((item, index) => (
          <PokemonCard key={index} name={item.name} />
        ))}
      </div>
      <div>
        <Pagination
          style={{ marginTop: "20px" }}
          current={currentPage}
          pageSize={pageSize}
          total={data?.results?.length}
          onChange={handleChangePage}
        />
      </div>
    </motion.div>
  );
}

export default PokemonHome;
