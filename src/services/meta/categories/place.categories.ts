import { IHydrateModel } from "../../../defs";

const placeCategories: IHydrateModel = {
  __typename: "Meta",
  bulkHead: { index: 'meta', action: 'create' },
  criteria: [{ name: "hierarchy.parent", value: "program-type" }],
  items: [
    {
      id: "place-food-type-bar",
      name: "Bar",
      hierarchy: {
        "name": "highLevel",
        parent: "place-food-type"
      }
    }, 
    //{
    //   id: "program-type-discotheque",
    //   name: "Discothèque",
    //   hierarchy: {
    //     name: "highLevel",
    //     parent: "program-type"
    //   }
    // },
    // {
    //   id: "place-food-type-pub",
    //   name: "Pub",
    //   hierarchy: {
    //     name: "highLevel",
    //     parent: "place-food-type"
    //   }
    // },
    // {
    //   id: "rent-type-hotel",
    //   name: "Hotel",
    //   hierarchy: {
    //     name: "highLevel",
    //     parent: "rent-type"
    //   }
    // },
    // {
    //   id: "place-food-type-restaurant",
    //   name: "Restaurant",
    //   hierarchy: {
    //     name: "highLevel",
    //     parent: "place-food-type"
    //   }
    // },
    // {
    //   id: "program-type-salle-de-concert",
    //   name: "Salle de concert",
    //   hierarchy: {
    //     name: "highLevel",
    //     parent: "program-type"
    //   }
    // },
    // {
    //   id: "program-type-cinema",
    //   name: "Cinéma",
    //   hierarchy: {
    //     name: "highLevel",
    //     parent: "program-type"
    //   }
    // }
  ]
}

export default placeCategories;
