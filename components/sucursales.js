import React, { useState } from "react";
import Map from "./map";

function SucursalesComponent() {

    const [sucursal, setSucursal] = useState("mochistopo")
    const mochisTopoData = {
        nombre: "Sucursal Mochis Topo",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        direccion: "Carretera, Los Mochis - Topolobampo km 8.5, 81360 Los Mochis, Sin.",
        telefono: "668 688 9153",
        horario: "13:00 - 23:00, Cerrado martes"
    };
    const centroData = {
        nombre: "Sucursal Centro",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        direccion: "Dr. Miguel Aguilar Silva 1019, America, 81200 Los Mochis, Sin.",
        telefono: "668 254 3585",
        horario: "13:00 - 22:00, Cerrado martes"
    };

  return (
    
    <section className="w-full px-10 text-center" id="sucursales">
      <h2 className="text-lg text-white font-bold mt-2">
        Conoce nuestras sucursales
      </h2>
      <div className="flex gap-2 justify-center py-4">
        <h2 className={`cursor-pointer rounded hover:font-bold bg-white text-secondary p-0.5 ${sucursal === "centro" ? "font-bold" : ""}`} onClick={() => setSucursal("centro")}>Sucursal Centro</h2>
        <h2 className={`cursor-pointer rounded hover:font-bold bg-white text-secondary p-0.5 ${sucursal === "mochistopo" ? "font-bold" : ""} `} onClick={() => setSucursal("mochistopo")}>Sucursal Mochis Topo</h2>
      </div>
      <div className="flex flex-col w-full sm:flex-row">
        <div className="w-full sm:w-1/2 text-white px-4 text-center">
          <h2 className="font-bold text-[20px] mb-2">{sucursal === "mochistopo" ? mochisTopoData.nombre : centroData.nombre}</h2>
          <h3 className="mb-2">
          {sucursal === "mochistopo" ? mochisTopoData.info : centroData.info}
          </h3>
          <p>
            <b>Dirección: </b>{sucursal === "mochistopo" ? mochisTopoData.direccion : centroData.direccion}
          </p>
          <p>
            <b>Teléfono: </b>{sucursal === "mochistopo" ? mochisTopoData.telefono : centroData.telefono}
          </p>
          <p>
            <b>Horario: </b>{sucursal === "mochistopo" ? mochisTopoData.horario : centroData.horario}
          </p>
        </div>
        <div className="w-full sm:w-1/2 mt-4">
          <Map address={sucursal === "mochistopo" ? "Sushi Campero" : "Dr. Miguel Aguilar Silva 1019, America, 81200 Los Mochis, Sin."} />
        </div>
      </div>
    </section>
  );
}

export default SucursalesComponent;
