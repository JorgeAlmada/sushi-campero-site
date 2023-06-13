import React from "react";

function MenuList() {
  const sections = [
    {
      name: "Entradas Frías",
      id: "Entradas",
      products: [
        {
          name: "Nigiris",
          price: "$150",
        },
        {
          name: "Tiradito de atún",
          price: "$150",
        },
        {
          name: "Tiradito de camarón",
          price: "$150",
        },
        {
          name: "Sashimi de atún",
          price: "$150",
        },
        {
          name: "Sashimi de salmón",
          price: "$150",
        },
        {
          name: "Tostadas de atún",
          price: "$150",
        },
        {
          name: "Tostada tropical",
          price: "$150",
        },
        {
          name: "Aguachile campero",
          price: "$150",
        },
        {
          name: "Tostadas shiroi",
          price: "$150",
        },
      ],
    },
    {
      name: "Entradas Calientes",
      products: [
        {
          name: "Dedos de queso",
          price: "$85",
        },
        {
          name: "Edamames",
          price: "$85",
        },
        {
          name: "Orden de rollito relleno",
          price: "$85",
        },
        {
          name: "Caribes tempura (camaron, surimi, marlin)",
          price: "$110",
        },
        {
          name: "Caribes especiales (a elegir)",
          price: "$130",
        },
        {
          name: "Nuggets de pollo",
          price: "$130",
        },
        {
          name: "Alitas thai",
          price: "$140",
        },
        {
          name: "Brochetas (pollo, res o puerco)",
          price: "$120",
        },
        {
          name: "Brochetas (atún, camarón o salmón)",
          price: "$140",
        },
        {
          name: "Brocheta embarazada (Ensalada de surimi, queso)",
          price: "$120",
        },
      ],
    },
    {
      name: "Cocteles",
      id: "Cocteles",
      products: [
        {
          name: "El Campero",
          price: "$165",
          description:
            "Camarón crudo, cebolla morada, pepino, aguacate y cilantro",
        },
        {
          name: "Bucanero",
          price: "$175",
          description:
            "Cubos de atún, marinadas en salsa acompañada de pepino y chile jalapeño",
        },
        {
          name: "Cabo pulmo",
          price: "$180",
          description: "Camarón crudo, cocido y pulpo",
        },
      ],
    },
    {
      name: "Tacos",
      id: "Tacos",
      description:
        "Taco de maíz en costra de queso acompañado con ensalada criolla",
      products: [
        {
          name: "Tacos de camarón",
          price: "$120",
        },
        {
          name: "Tacos de atún",
          price: "$150",
        },
        {
          name: "Tacos de pulpo",
          price: "$150",
        },
        {
          name: "Tacos de res",
          price: "$120",
        },
      ],
    },
    {
      name: "Sopas",
      id: "Sopas",
      products: [
        {
          name: "Udón de pollo",
          description: "Sopa de fideos udón con vegetales",
          price: "$130",
        },
        {
          name: "Udón de camarón",
          description: "Sopa de fideos udón con vegetales",
          price: "$160",
        },
        {
          name: "Ramen",
          description:
            "Caldo de puerco con alga, huevo, fideos, shiitake y especias orientales",
          price: "$175",
        },
      ],
    },
    {
      name: "Especialidades",
      id: "Especialidades",
      products: [
        {
          name: "Camarones piola",
          description:
            "Camarones rellenos de queso crema, aguacate y salmón, envueltos en fideo de papa espolvoreados con parmesano",
          price: "$185",
        },
        {
          name: "Mar batalloso",
          description:
            "Calamar frito salteado en aceite de ajonjolí picoso acompañado de tallos de cebollín y togarashi",
          price: "$180",
        },
        {
          name: "Al wok de pollo",
          description:
            "Proteína al tempura bañada en salsa yakisoba sobre una cama de arroz frito",
          price: "$160",
        },
        {
          name: "Al wok de camarón",
          description:
            "Proteína al tempura bañada en salsa yakisoba sobre una cama de arroz frito",
          price: "$190",
        },
        {
          name: "Al wok de atún",
          description:
            "Proteína al tempura bañada en salsa yakisoba sobre una cama de arroz frito",
          price: "$190",
        },
        {
          name: "Al wok de salmón",
          description:
            "Proteína al tempura bañada en salsa yakisoba sobre una cama de arroz frito",
          price: "$240",
        },
        {
          name: "Camarones roca",
          description: "Camarones tempura salseados en aderezo de la casa",
          price: "$175",
        },
        {
          name: "Pulpo anclado",
          description:
            "Pulpo marinado en salsa de la casa fundido en queso, jalapeño y caribe",
          price: "$225",
        },
        {
          name: "Arroz de mariscos",
          description:
            "Arroz frito marinado con un toque de soya, germinado de soya, apio, calamar, camarón y pulpo",
          price: "$185",
        },
        {
          name: "Pollo thai",
          description:
            "Pollo capeado en tempura acompañado de vegetales frescos salteados en salsa thai de la casa, con un toque de chile de árbol",
          price: "$150",
        },
      ],
    }, {
        name: "Pastas",
        id: "Pastas",
        products: [
            {
                name: "Pasta en lava de atún",
                description: "Cama de pasta fetuccini salteada a las hierbas finas acompañado de un medallón de atún o salmón bañado en salsa rocoto",
                price: "$180"
            },
            {
                name: "Pasta en lava de salmón",
                description: "Cama de pasta fetuccini salteada a las hierbas finas acompañado de un medallón de atún o salmón bañado en salsa rocoto",
                price: "$240"
            },
            {
                name: "Pasta medusa",
                description: "Cama de pasta fetuccini salteada a las hierbas finas acompañado de un medallón de atún o salmón bañado en salsa rocoto",
                price: "$180"
            }
        ]
    },
    {
        name: "Rollos clásicos",
        id: "Rollos",
        products: [
            {
                name: "Bombazo",
                description: "Surimi, topping de ensalada de surimi y ajonjolí salseado con anguila",
                price: "$120"
            },
            {
                name: "Aguacate roll",
                description: "Camarón empanizado, láminas de aguacate, topping de ensalada de surimi, aderezo chipotle y ajonjolí",
                price: "$135"
            },
            {
                name: "Mango roll",
                description: "Camarón cocido, láminas de mango, topping de ensalada de surimi, salsa de mango y ajonjolí",
                price: "$145"
            },
            {
                name: "Philadelphia roll",
                description: "Surimi, envuelto en alga, láminas de philadelphia, salseado con aderezo chipotle, acompañado de ensalada de surimi con ajonjolí",
                price: "$130"
            },{
                name: "Mar y tierra",
                description: "Res y camarón, topping de ensalada de surimi aparte y chipotle",
                price: "$140"
            },
            {
                name: "3 Quesos",
                description: "Surimi, queso manchego, americano y philadelphia, empanizado",
                price: "$145"
            }
        ]
    },
    {
        name: "Naturales",
        products: [
            {
                name: "California roll",
                description: "Surimi, topping de ensalada de surimi, ajonjolí y aderezo spicy",
                price: "$120"
            },
            {
                name: "Tuna roll",
                description: "Atún marinado, topping de ensalada de surimi, ajonjolí, aderezo spicy",
                price: "$120"
            },
            {
                name: "Marlin roll",
                description: "Marlin marinado con aderezo de la casa, topping de ensalada de surimi, ajonjolí y aderezo spicy",
                price: "$120"
            },
            {
                name: "Camarón roll",
                description: "Camarón cocido, topping de ensalada de surimi, ajonjolí y aderezo spicy",
                price: "$135"
            },
            {
                name: "Salmón roll",
                description: "Salmón, envuelto en alga, láminas de philadelphia, salseado con aderezo chipotle, acompañado de surimi con ajonjolí",
                price: "$150"
            },
            {
                name: "Sushi bowl",
                description: "Cama de arroz, proteína a elegir (surimi, atún o camarón) marinada en aderezo, pepino, zanahoria, alga y aguacate",
                price: "$150"
            },
        ]
    },
    {
        name: "Platillos",
        id: "Platillos",
        products: [
            {
                name: "Teriyaki de pollo o puerco",
                description: "Proteína salteada con vegetales en salsa teriyaki sobre una cama de arroz blanco",
                price: "$140"
            },{
                name: "Teriyaki de camaron",
                description: "Proteína salteada con vegetales en salsa teriyaki sobre una cama de arroz blanco",
                price: "$180"
            },{
                name: "Teriyaki de res",
                description: "Proteína salteada con vegetales en salsa teriyaki sobre una cama de arroz blanco",
                price: "$170"
            },{
                name: "Teriyaki Mixto (pollo y puerco)",
                description: "Proteína salteada con vegetales en salsa teriyaki sobre una cama de arroz blanco",
                price: "$150"
            },{
                name: "Yakimeshi de pollo o puerco",
                description: "Arroz frito, proteína, vegetales finos salteados, queso crema, aguacate y ensalada de surimi",
                price: "$140"
            },{
                name: "Yakimeshi de camarón",
                description: "Arroz frito, proteína, vegetales finos salteados, queso crema, aguacate y ensalada de surimi",
                price: "$185"
            },{
                name: "Yakimeshi de res",
                description: "Arroz frito, proteína, vegetales finos salteados, queso crema, aguacate y ensalada de surimi",
                price: "$160"
            },{
                name: "Yakimeshi mixto (pollo y puerco)",
                description: "Arroz frito, proteína, vegetales finos salteados, queso crema, aguacate y ensalada de surimi",
                price: "$150"
            },{
                name: "Yakisoba de pollo o puerco",
                description: "Pasta udón salteada en vegetales y proteína en salsa yakisoba",
                price: "$150"
            },{
                name: "Yakisoba de camarón",
                description: "Pasta udón salteada en vegetales y proteína en salsa yakisoba",
                price: "$180"
            },{
                name: "Yakisoba de res",
                description: "Pasta udón salteada en vegetales y proteína en salsa yakisoba",
                price: "$160"
            },{
                name: "Yakisoba mixto (pollo y puerco)",
                description: "Pasta udón salteada en vegetales y proteína en salsa yakisoba",
                price: "$150"
            },{
                name: "Alitas thai",
                price: "$140"
            },{
                name: "Rib eye de la casa",
                description: "Filete de rib eye a la plancha acompañado de papa, guacamole y tortillas",
                price: "$320"
            }
        ]
    }

  ];
  return (
    <section className="w-full p-4 mt-[96px]">
      {sections.map((section, index) => {
        return (
          <div
            key={section.name}
            className="w-full bg-white bg-opacity-50 rounded p-4 mt-4 shadow-xl"
            id={section.id}
          >
            <h1 className="text-primary font-bold text-[36px]">{section.name}</h1>
            <p>{section.description}</p>
            <div className="flex flex-wrap">
              {section.products.map((product, index2) => {
                return (
                  <div
                    className="w-full md:w-1/3 mt-4 p-2"
                    key={product.name + index2}
                  >
                    <p className="text-primary font-bold text-[16px]">
                      {product.name} - <b>{product.price}</b>
                    </p>
                    <p className="text-black text-[14px]">{product.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MenuList;
