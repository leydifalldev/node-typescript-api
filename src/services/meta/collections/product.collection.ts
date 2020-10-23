import { IHydrateModel } from "../../../defs";

const productCollections: IHydrateModel = {
  __typename: "Meta",
  bulkHead: { index: "meta", action: "create"},
  criteria: [{name: "hierarchy.name", value: "mediumLevel"}],
  items: [
  {
    id: "food-type-plat-pizza",
    cardType: 'LargeCardL',
    name: "pizza",
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-plat"
    },
  }, {
    id: "food-type-plat-crepes",
    name: "crêpes",
    cardType: 'LargeCardL',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-plat"
    },
  },
  {
    id: "food-type-plat-hamburger",
    name: "hamburger",
    cardType: 'SquareCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-plat"
    },
  },
  {
    id: "food-type-plat-tacos",
    name: "tacos",
    cardType: 'SquareCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-plat"
    },
  },
  {
    id: "food-type-plat-chawarma",
    name: "chawarma",
    cardType: 'SquareCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-plat"
    },
  },
  {
    id: "food-type-plat-grillade",
    name: "grillade",
    cardType: 'SquareCardXL',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-plat"
    },
  },
  {
    id: "food-type-detente-chicha",
    name: "chicha",
    cardType: 'SquareCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type"
    },
  },
  {
    id: "food-type-boissons-jus-de-fruit",
    name: "jus de fruit",
    cardType: 'RoundedCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-boissons"
    },
  }, {
    id: "food-type-boissons-boisson-gazeuse",
    name: "boisson gazeuse",
    cardType: 'RoundedCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-boissons"
    },
  },
  {
    id: "food-type-boissons-boisson-alcolisee",
    name: "boisson alcolisee",
    cardType: 'RoundedCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-boissons"
    },
  },
  {
    id: "food-type-boissons-boisson-energisante",
    name: "boisson energisante",
    cardType: 'RoundedCardM',
    hierarchy: {
      name: "mediumLevel",
      parent: "food-type-boissons"
    },
  },
  // {
  //   id: "food-type-desserts-glace",
  //   name: "glace",
  //   cardType: 'RoundedCardM',
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type-desserts"
  //   },
  // },
  // {
  //   id: "au-poulet-mc-donalds",
  //   name: "Au poulet",
  //   cardType: 'SquareCardL',
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: ""
  //   },
  // },
  // {
  //   id: "epice",
  //   name: "Épicé",
  //   cardType: 'SquareCardL',
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },
  // {
  //   id: "au-poisson",
  //   name: "Au poisson",
  //   cardType: 'SquareCardL',
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },
  // {
  //   id: "sauces",
  //   collection: "food-collection",
  //   name: "Sauces",
  //   cardType: "SquareCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "burgers-wraps-buckets",
  //   name: "Burgers, Wraps & Buckets",
  //   cardType: "LargeCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "mc-muffin",
  //   name: "Mc Muffin",
  //   cardType: "SquareCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "burger",
  //   name: "Burger",
  //   cardType: "SquareCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "FOOCOL_PTIT_WRAP",
  //   name: "Le P'tit Wrap",
  //   cardType: "LargeCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "FOOCOL_NUGGETS",
  //   name: "Nuggets",
  //   cardType: "LargeCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "FOOCOL_MACDO_ACCOMPAGNEMENT",
  //   name: "Les accompagnements",
  //   cardType: "SquareCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },

  // {
  //   id: "FOOCOL_MACDO_DONUT",
  //   name: "DONUTS",
  //   cardType: "SquareCardM",
  //   hierarchy: {
  //     name: "mediumLevel",
  //     parent: "food-type"
  //   },
  // },
]
}

export default productCollections;
