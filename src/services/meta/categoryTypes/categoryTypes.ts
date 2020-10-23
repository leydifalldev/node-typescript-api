import { IHydrateModel } from "../../../defs";

const categoryTypes: IHydrateModel = {
  __typename: "Meta",
  bulkHead: { index: 'meta', action: 'create' },
  criteria: [{ name: "hierarchy.name", value: "supremeLevel" }],
  items: [
    {
      id: "place-food-type",
      name: "PlaceFoodType",
      hierarchy: {
        "name": "supremeLevel"
      }
    },
    {
      id: "food-type",
      name: "FoodType",
      hierarchy: {
        "name": "supremeLevel"
      }
    }, 
    {
      id: "program-type",
      name: "ProgramType",
      hierarchy: {
        "name": "supremeLevel"
      }
    },
    {
      id: "rent-type",
      name: "RentType",
      hierarchy: {
        "name": "supremeLevel"
      }
    }
  ]
}

export default categoryTypes;
