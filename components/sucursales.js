import React, { useState } from "react";
import Map from "./map";

function SucursalesComponent() {
  const [sucursal, setSucursal] = useState("mochistopo");
  const mochisTopoData = {
    nombre: "Sucursal Mochis Topo",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    direccion:
      "Carretera, Los Mochis - Topolobampo km 8.5, 81360 Los Mochis, Sin.",
    telefono: "668 688 9153",
    horario: "13:00 - 23:00, Cerrado martes",
  };
  const centroData = {
    nombre: "Sucursal Centro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    direccion: "Dr. Miguel Aguilar Silva 1019, America, 81200 Los Mochis, Sin.",
    telefono: "668 254 3585",
    horario: "13:00 - 22:00, Cerrado martes",
  };

  return (
    <section className="w-full px-10 text-center" id="sucursales">
      <h2 className="text-lg text-white font-bold mt-2">
        Conoce nuestras sucursales
      </h2>
      <div className="flex gap-2 justify-center py-4">
        <a
          class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-secondary inline-block cursor-pointer"
          onClick={() => setSucursal("centro")}
        >
          <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-secondary group-hover:h-full opacity-90"></span>
          <span class="relative group-hover:text-white font-bold">
            Sucursal Centro
          </span>
        </a>
        <a
          class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-secondary inline-block cursor-pointer"
          onClick={() => setSucursal("mochistopo")}
        >
          <span class="h-full absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-secondary group-hover:h-full opacity-90"></span>
          <span class="relative group-hover:text-white font-bold">
            Sucursal Mochis Topo
          </span>
        </a>
      </div>
      <div className="flex flex-col w-full sm:flex-row">
        <div className="w-full sm:w-1/2 text-white px-4 text-center">
          <h2 className="font-bold text-[20px] mb-2">
            {sucursal === "mochistopo"
              ? mochisTopoData.nombre
              : centroData.nombre}
          </h2>
          <h3 className="mb-2">
            {sucursal === "mochistopo" ? mochisTopoData.info : centroData.info}
          </h3>
          <p>
            <b>Dirección: </b>
            {sucursal === "mochistopo"
              ? mochisTopoData.direccion
              : centroData.direccion}
          </p>
          <p>
            <b>Teléfono: </b>
            {sucursal === "mochistopo"
              ? mochisTopoData.telefono
              : centroData.telefono}
          </p>
          <p>
            <b>Horario: </b>
            {sucursal === "mochistopo"
              ? mochisTopoData.horario
              : centroData.horario}
          </p>
        </div>
        <div className="w-full sm:w-1/2 mt-4">
          <Map
            address={
              sucursal === "mochistopo"
                ? "Sushi Campero"
                : "Dr. Miguel Aguilar Silva 1019, America, 81200 Los Mochis, Sin."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default SucursalesComponent;
