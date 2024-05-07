import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PokemonDetail,
  PokemonResponse,
  PokemonType,
} from "./PokemonService/PokemonResponse/PokemonResponse";
import { PokemonRequest } from "./PokemonService/PokemonRequest/PokemonRequest";

const PokemonService = createApi({
  reducerPath: "PokemonService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit.toString(),
          offset: data.offset.toString(),
        });

        return `pokemon?${params}`;
      },
    }),
    getPokemons2: builder.mutation<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit.toString(),
          offset: data.offset.toString(),
        });

        return {
          url: `pokemon?${params}`,
          method: "GET",
        };
      },
    }),
    getPokemonDetail: builder.query<PokemonDetail, string>({
      query: (name) => {
        return `pokemon/${name}`;
      },
      transformResponse: (rawData: PokemonType) => {
        const resultAbility = rawData.abilities.map((item) => {
          return item.ability.name;
        });

        const resultStats = rawData.stats.map((item) => {
          return { base_stat: item.base_stat, name: item.stat.name };
        });

        const resultTypes = rawData.types.map((item) => {
          return { name: item.type.name, url: item.type.url };
        });

        const _response: PokemonDetail = {
          id: rawData.id,
          // types: rawData.types.map((type) => type.type.name),
          name: rawData.name,
          base_experience: rawData.base_experience,
          image: {
            mainimg: rawData.sprites.other["official-artwork"].front_default,
            back_default: rawData.sprites.back_default,
            back_shiny: rawData.sprites.back_shiny,
            front_default: rawData.sprites.front_default,
            front_shiny: rawData.sprites.front_shiny,
          },
          abilities: resultAbility,
          stats: resultStats,
          types: resultTypes,
        };
        return _response;
      },
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemons2Mutation,
  useGetPokemonDetailQuery,
} = PokemonService;
export default PokemonService;
