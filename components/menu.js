import React, {useState} from "react";


function MenuComponent() {
  const menus = [
    {
      id: "x11",
      name: "Entradas",
      url: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "x12",
      name: "Cocteles",
      url: "https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: "x41",
      name: "Tacos",
      url: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "432",
      name: "Sopas",
      url: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "1233",
      name: "Especialidades",
      url: "https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "554",
      name: "Pastas",
      url: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80",
    },
    {
      id: "5656",
      name: "Rollos",
      url: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80",
    },
    {
      id: "5665",
      name: "Platillos",
      url: "https://images.unsplash.com/photo-1636401870585-a8852371e84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
              <div className="w-full md:w-1/4 h-32 p-1 shadow-xl" key={index}>
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
