import { IHydrateModel } from "../../../defs";

const productCategories: IHydrateModel = {
  bulkHead: { index: 'meta', action: 'create'},
  criteria: [{ name: "hierarchy.parent", value: "food-type" }],
  __typename: "Meta",
  items: [
    {
      id: "food-type-desserts",
      name: "Desserts",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    }, {
      id: "food-type-entrees",
      name: "Entrées",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-boissons",
      name: "Boissons",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-plat-de-resistance",
      name: "Plat de resistance",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-boisson",
      name: "Boisson",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-plat",
      name: "Plat",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-kfc-poulets-buckets",
      name: "Poulets & Buckets",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-burgers-wraps-salades",
      name: "Burgers, Wraps & Buckets",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "mc-donalds"
    },
    {
      id: "food-type-bon-plan-du-colonel",
      name: "Bon plan du colonel",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "mc-donalds"
    },
    {
      id: "food-type-menu-enfant",
      name: "Menu Enfant",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "mc-donalds"
    },
    {
      id: "food-type-offre-du-moment",
      name: "Offre du moment",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-en-ce-moment",
      name: "En ce moment",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-menu",
      name: "MENU",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-a-la-carte",
      name: "À la carte",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "kfc"
    },
    {
      id: "food-type-bon-plan-du-colonel",
      name: "Bon plan du colonel",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "kfc"
    },
    {
      id: "food-type-boisson-cafe",
      name: "Boisson Café",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "kfc"
    },
    {
      id: "food-type-petit-faim",
      name: "PETIT FAIM",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "kfc"
    },
    {
      id: "food-type-burger",
      name: "Burger",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
    {
      id: "food-type-detente",
      name: "Détente",
      hierarchy: {
        name: "highLevel",
        parent: "food-type"
      },
      owner: "global"
    },
  ]
}

export default productCategories;