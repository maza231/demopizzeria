export type Pizza = {
  name: string;
  description: string;
  price: number;
  tags?: ("vegetariana" | "piccante" | "novità")[];
};

export type MenuCategory = {
  id: string;
  title: string;
  pizzas: Pizza[];
};

// Menu segnaposto. Modifica nomi, ingredienti e prezzi quando hai quelli definitivi.
export const menu: MenuCategory[] = [
  {
    id: "classiche",
    title: "Le Classiche",
    pizzas: [
      {
        name: "Margherita",
        description: "Pomodoro San Marzano, fiordilatte, basilico, olio EVO",
        price: 7,
        tags: ["vegetariana"],
      },
      {
        name: "Marinara",
        description: "Pomodoro, aglio, origano, basilico",
        price: 6,
        tags: ["vegetariana"],
      },
      {
        name: "Diavola",
        description: "Pomodoro, fiordilatte, salame piccante",
        price: 9,
        tags: ["piccante"],
      },
      {
        name: "Capricciosa",
        description: "Pomodoro, fiordilatte, prosciutto, funghi, carciofi, olive",
        price: 11,
      },
    ],
  },
  {
    id: "speciali",
    title: "Le Speciali",
    pizzas: [
      {
        name: "Bufala & Crudo",
        description: "Mozzarella di bufala, prosciutto crudo, rucola, grana",
        price: 13,
        tags: ["novità"],
      },
      {
        name: "Vivo",
        description: "Crema di zucca, fiordilatte, salsiccia, scaglie di grana",
        price: 12,
      },
      {
        name: "Ortolana",
        description: "Fiordilatte, zucchine, melanzane, peperoni, pomodorini",
        price: 10,
        tags: ["vegetariana"],
      },
      {
        name: "Nduja & Stracciatella",
        description: "Pomodoro, stracciatella, nduja, basilico",
        price: 13,
        tags: ["piccante", "novità"],
      },
    ],
  },
];
