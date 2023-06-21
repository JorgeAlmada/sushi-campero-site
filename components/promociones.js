import React from "react";
import Image from "next/image";
import promocheve from "../public/images/promocheve.jpg";
import promosushi from "../public/images/promosushi.jpg";

function PromocionesComponent() {
  const promociones = [
    {
      name: "Promo cerveza",
      img: promocheve
    },
    {
      name: "Promo sushi",
      img: promosushi
    }
  ];
  return (
    <section className="w-full px-10" id="promociones">
      <div className="items-center text-center w-full">
        <h2 className="text-lg text-white font-bold mt-2">Promociones</h2>
        <div className="flex flex-row flex-wrap">
          {promociones.map((promo, index) => {
            return (
              <div className="w-full md:w-1/2 p-1 rounded-xl" key={promo.name}>
                <div className="w-full rounded-xl">
                  <Image
                    src={promo.img}
                    alt={promo.name}
                    className="w-100 h-100 rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PromocionesComponent;
