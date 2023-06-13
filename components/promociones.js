import React from "react";
import Image from "next/image";
import combokiiro from "../public/images/combokiiro.jpg";
import comboshiro from "../public/images/comboshiro.jpg";
import comboaka from "../public/images/comboaka.jpg";
import comboao from "../public/images/comboao.jpg";
import combokuro from "../public/images/combokuro.jpg";

function PromocionesComponent() {
  const promociones = [
    {
      name: "Combo Kiiro",
      img: combokiiro,
      combo: [
        "Medio Kany Roll",
        "Medio Pollo Thai",
        "Medio Litro de Té"
      ]
    },
    {
      name: "Combo Shiro",
      img: comboshiro,
      combo: [
        "Medio Tampico Chilli",
        "Media Orden de Alitas Thai",
        "Medio Litro de Té"
      ]
    },
    {
      name: "Combo AKA",
      img: comboaka,
      combo: [
        "Medio Norteño",
        "Medio Pollo WOK",
        "Medio Litro de Té"
      ]
    },
    {
      name: "Combo AO",
      img: comboao,
      combo: [
        "Medio Bombazo",
        "Medio Yakimeshi",
        "Medio Litro de Té"
      ]
    },
    {
      name: "Combo Kuro",
      img: combokuro,
      combo: [
        "Medio Campero Roll",
        "Medio Yakisoba Mixto",
        "Medio Litro de Té"
      ]
    },
  ];
  return (
    <section className="w-full px-10" id="promociones">
      <div className="items-center text-center w-full">
        <h2 className="text-lg text-white font-bold mt-2">Promociones</h2>
        <div className="flex flex-row flex-wrap">
          {promociones.map((promo, index) => {
            return (
              <div className="w-full md:w-1/5 p-1 shadow-xl" key={promo.name}>
                <div className="w-full">
                  <Image
                    src={promo.img}
                    alt={promo.name}
                    className="w-100 h-100"
                  />
                  <div className="rounded-b-lg bg-secondary bg-opacity-80 text-center">
                    <h2 className="text-lg font-bold text-white">
                      {promo.name}
                    </h2>
                    <ul>
                        {promo.combo.map((el, index2) => {return <li key={`${el}${index}${index2}`}>{el}</li>})}
                    </ul>
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

export default PromocionesComponent;
