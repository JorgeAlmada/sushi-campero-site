import React, {useState} from "react";
import entradas from "../public/images/menupics/entradas.jpg";
import cocteles from "../public/images/menupics/cocteles.jpg";
import tacos from "../public/images/menupics/tacos.PNG";
import sopas from "../public/images/menupics/sopas.jpg";
import especialidades from "../public/images/menupics/especialidades.JPG";
import pastas from "../public/images/menupics/pastas.jpg";
import rollos from "../public/images/menupics/rollos.jpg";
import platillos from "../public/images/menupics/platillos.jpg";


function MenuComponent() {
  const menus = [
    {
      id: "x11",
      name: "Entradas",
      url: entradas.src,
    },
    {
      id: "x12",
      name: "Cocteles",
      url: cocteles.src,
    },
    {
      id: "x41",
      name: "Tacos",
      url: tacos.src,
    },
    {
      id: "432",
      name: "Sopas",
      url: sopas.src,
    },
    {
      id: "1233",
      name: "Especialidades",
      url: especialidades.src,
    },
    {
      id: "554",
      name: "Pastas",
      url: pastas.src,
    },
    {
      id: "5656",
      name: "Rollos",
      url: rollos.src,
    },
    {
      id: "5665",
      name: "Platillos",
      url: platillos.src,
    },
  ];

  const bgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const showDiv = (el) => {
    el.currentTarget.children[0].classList.remove("opacity-0");
  };
  const hideDiv = (el) => {
    el.currentTarget.children[0].classList.add("opacity-0");
  };

  return (
    <section className="w-full px-10" id="menu">
      <div className="items-center text-center w-full">
        <h2 className="text-lg text-white font-bold mt-2">
          Conoce nuestro menú
        </h2>
        <div className="flex flex-row flex-wrap">
          {menus.map((menuItem, index) => {
            return (
              <div className="w-full md:w-1/4 h-32 p-1 shadow-xl" key={menuItem.id}>
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url(" + menuItem.url + ")",
                    ...bgStyle,
                  }}
                  onMouseEnter={(el) => showDiv(el)}
                  onMouseLeave={(el) => hideDiv(el)}
                >
                  <div className="w-full h-full bg-black bg-opacity-80 text-center flex flex-col opacity-0 transition-opacity duration-500">
                    <h2 className="text-lg text-secondary font-bold mt-auto">
                      {menuItem.name}
                    </h2>
                    <a className="text-white mb-auto" href={`menu#${menuItem.name}`}>
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuComponent;
