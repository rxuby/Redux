import {
  Route,
  Routes,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
// import "./App.css";
import PokemonError from "@components/PokemonError";
import PokemonHome from "@components/PokemonHome";
import PokemonDetail from "@components/PokemonDetail";
import PokemonCard from "@components/PokemonCard";

import path from "path";

const route = createBrowserRouter([
  {
    path: "*",
    element: <PokemonError />,
  },
  {
    path: "/pokedetail/*",
    element: <PokemonError />,
  },
  // {
  //   path: "/",
  //   element: <PokemonHome />,
  // },
  {
    path: "/",
    element: <PokemonHome />,
  },

  {
    path: "/pokedetail/:id",
    element: <PokemonDetail />,
  },
]);

export default route;
