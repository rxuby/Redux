// import { Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
// import "./App.css";
// import Counter from "./components/Counter";
// import Register from "./components/FormRegister";
// import {
//   useGetPokemons2Mutation,
//   useGetPokemonsQuery,
// } from "./services/PokemonService";
// import { useEffect } from "react";
import { Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import router from "@functions/route";

function App() {
  return <RouterProvider router={router} />;

  //   const [getListPokemons, result_data_pokemon] = useGetPokemons2Mutation();

  //   const getDataPokemon = useGetPokemonsQuery({
  //     limit: 10,
  //     offset: 0,
  //   });

  //   const fngetListPokemon = async (limit: number, offset: number) => {
  //     try {
  //       const result = await getListPokemons({ limit, offset }).unwrap();
  //       if (result.results) {
  //         console.log(result);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     fngetListPokemon(20, 0);
  //   }, []);

  //   if(result_data_pokemon.isLoading){
  //     return (
  //       <p>Loading...</p>
  //     )
  //   }

  //   console.log(result_data_pokemon);

  //   return (
  //     <div>
  //       <div className="App"> </div>
  //       <h1>Pokemon API</h1>
  //       {result_data_pokemon.data?.results?.map((item) => (
  //         <li>{item.name}</li>
  //       ))}
  //     </div>
  //   );
}

export default App;
