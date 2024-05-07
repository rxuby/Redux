import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonDetailQuery } from "../services/PokemonService";
import PokemonError from "./PokemonError";

function PokemonDetail() {
  const { id } = useParams(); // ใช้ useParams เพื่อดึงค่า id จาก URL
  const { data } = useGetPokemonDetailQuery(id || ""); // ใช้ id เพื่อดึงข้อมูลโปเกมอน
  const navigator = useNavigate();

  if (!data) {
    return <div><PokemonError/></div>;
  }

  return (
    <div className="flex items-center justify-center content-center">
      <div
        className=" flex flex-col items-center justify-center content-center w-[400px] h-fit mt-6 border rounded-3xl shadow-lg "
        style={{ backgroundColor: "#70C15C" }}
      >
        <h1 className="absolute font-light mt-2 top-[0] left-[790px]  text-[5rem]  text-gray-100/10">
          #{data.id}
        </h1>
        <div className="flex flex-col w-full px-6 pt-4 pb-36">
          <button onClick={() => navigator("/")}>
            <svg
              width="39"
              height="34"
              viewBox="0 0 39 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0897 29.6826C16.3192 30.9698 18.8482 31.6475 21.4226 31.6475C23.997 31.6475 26.526 30.9698 28.7555 29.6826C30.985 28.3954 32.8363 26.5441 34.1235 24.3146C35.4107 22.0851 36.0884 19.5561 36.0884 16.9817C36.0884 14.4073 35.4107 11.8783 34.1235 9.6488C32.8363 7.41933 30.985 5.56795 28.7555 4.28076C26.526 2.99357 23.997 2.31592 21.4226 2.31592C18.8482 2.31592 16.3192 2.99357 14.0897 4.28076"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="4"
              />
              <path
                d="M3.09033 16.9815L1.52859 15.7321L0.529082 16.9815L1.52859 18.2309L3.09033 16.9815ZM19.5893 18.9815C20.6939 18.9815 21.5893 18.0861 21.5893 16.9815C21.5893 15.877 20.6939 14.9815 19.5893 14.9815V18.9815ZM8.86148 6.56604L1.52859 15.7321L4.65207 18.2309L11.985 9.06482L8.86148 6.56604ZM1.52859 18.2309L8.86148 27.397L11.985 24.8983L4.65207 15.7321L1.52859 18.2309ZM3.09033 18.9815H19.5893V14.9815H3.09033V18.9815Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </button>
          <div className="flex font-bold  text-[2.5rem] text-white">
            <h1>{data.name}</h1>
          </div>

          <div className="flex ">
            {data.types.map((type, index) => (
              <p
                className=" text-[12px] text-white  rounded-xl bg-gray-100/30 mx-[2px] px-3"
                key={index}
              >
                {type.name}
              </p>
            ))}
          </div>
          <div className="flex justify-center content-center ">
            <img
              className="absolute  w-[13%] bottom-[48%]"
              src={data.image.mainimg}
              alt={data.name}
            />
          </div>
        </div>

        <div className="bg-white  rounded-3xl pt-10 pb-6  w-full">
          <div className="flex flex-row justify-around items-center content-center mx-6 ">
            <img src={data.image.front_default} alt="image front default" />
            <img src={data.image.back_default} alt="image back default" />
            <img src={data.image.front_shiny} alt="image front shiny" />
            <img src={data.image.back_shiny} alt="image back shiny" />
          </div>

          <div
            className="mx-6 border rounded-full w-24 text-white py-1 mb-2 "
            style={{ backgroundColor: "#70C15C" }}
          >
            <p className="">Exp : {data.base_experience}</p>
          </div>

          <div className="bg-stone-100 grid grid-cols-3 grid-flow-row mx-6 text-left text-[10px]  rounded-xl p-[10px] pt-3 pb-3">
            {data.stats.map((stat, index) => (
              <p key={index} className="ml-2 text-neutral-500">
                {stat.base_stat} : {stat.name}
              </p>
            ))}
          </div>

          <div className="mx-6 mt-3 ">
            <p className="text-left mb-1 text-neutral-500">Abilities</p>
            <div className="bg-stone-100 list-decimal flex flex-col justify-start items-start   rounded-xl text-[10px] p-[10px] pt-3 pb-[30px]">
              {data.abilities.map((ability, index) => (
                <li className="ml-2 text-neutral-500" key={index}>
                  {ability}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
