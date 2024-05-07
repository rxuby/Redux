import React from "react";
import PokemonLogo from "../images/International_Pokémon_logo 1.png";
import { useNavigate } from "react-router-dom";

function PokemonError() {
  const navigator = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center content-center">
        <img width={"70%"} src={PokemonLogo} alt="logo" />
        <h1 className="font-extrabold text-[4rem]" style={{ color: "#3A5DA8" }}>
          NOT FOUND
        </h1>
      </div>
      <button
        className=" p-4"
        style={{
          color: "#3A5DA8",
          textDecoration: "underline",
          textDecorationColor: "#3A5DA8",
        }}
        onClick={() => navigator("/")}
      >
        back to home
      </button>
    </div>
  );
}

export default PokemonError;
