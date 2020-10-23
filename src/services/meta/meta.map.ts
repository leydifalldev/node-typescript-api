import productCollections from "./collections/product.collection";
import productCategories from "./categories/product.categories";
import placeCategories from "./categories/place.categories";
import categoryTypes from "./categoryTypes/categoryTypes";
import eventCategories from "./categories/event.categories";
import userRoles from "./roles/user.role";
import gastronomies from "./gastronomies/gastronomies";
import foodComposition from "./composition/food.composition";
import foodPageCategories from "./page/food-categories.page";

export let commits = new Map([
  ['categoryTypes', categoryTypes],
  //['productCollections', productCollections],
  //['productCategories', productCategories],
  //['placeCategories', placeCategories],
  // ['gastronomies', gastronomies],
  // ['foodComposition', foodComposition],
  // ['eventCategories', eventCategories],
  // ['userRoles', userRoles],
]);