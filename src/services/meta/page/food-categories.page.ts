import { IHydrateModel } from "../../../defs";

const foodPageCategories: IHydrateModel = {
  bulkHead: { index: "meta", action: "create"},
  criteria: [{name: "collection", value: "food-page-category"}],
  __typename: "Meta",
  items: [
  {
    id: "FOOD_PAGE_CAT_0000001",
    collection: "food-page-category",
    label: "Tout",
    screen: "food-home",
  }, {
    id: "FOOD_PAGE_CAT_0000002",
    label: "Fast-food",
    collection: "food-page-category",
  },
  {
    id: "FOOD_PAGE_CAT_0000003",
    label: "Patisserie",
    screen: "food-home",
    collection: "food-page-category",
  },
  {
    id: "FOOD_PAGE_CAT_0000004",
    label: "Glacier",
    screen: "food-home",
    collection: "food-page-category",
  },
  {
    id: "FOOD_PAGE_CAT_0000005",
    label: "Grillade",
    screen: "food-home",
    collection: "food-page-category",
  },
]
}

export default foodPageCategories;
