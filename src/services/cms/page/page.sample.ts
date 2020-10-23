import { IHydrateModel } from "../../../defs";

const pageSample: IHydrateModel = {
  bulkHead: { index: "pagemodel", action: "create" },
  criteria: [],
  __typename: "Page",
  items: [
    {
      id: "CMSCAT_FAST_FOOD",
      index: "product",
      order: 1,
      header: {
        label: "Fast food"
      },
      sections: [
        {
          id: "CMS_BESTOFPIZZA",
          index: "product",
          order: 1,
          header: {
            label: "Best of Pizza",
            sublabel: "",
            fontFamily: "",
            fontSize: 16,
            color: ""
          },
          cardComponent: {
            type: 'FoodCard',
            redirection: "FoodDetailScreen"
          },
          screen: "food-home",
          templateSearch: {
            page: 'FoodListScreen',
            operation: "searchProduct",
            query: "SEARCH_PRODUCT",
            childrenComponent: {
              type: 'FoodCard',
              redirection: "FoodDetailScreen"
            },
            searchParams: {
              size: 20,
              from: 0,
              criteria: [
                {
                  name: "collection.id",
                  value: "FOOCOL0000001",
                }
              ]
            }
          },
          sectionTheme: {
            base: "LIGHT",
            backgroundColor: "#FFFFFF",
          }
        },
        {
          id: "CMS_BESTOFBURGER",
          index: "product",
          order: 2,
          header: {
            label: "Meilleurs Hamburgers",
            sublabel: "",
            fontFamily: "",
            fontSize: 16,
            color: ""
          },
          cardComponent: {
            type: 'FoodCard',
            redirection: "FoodDetailScreen"
          },
          screen: "food-home",
          templateSearch: {
            page: 'FoodListScreen',
            operation: "searchProduct",
            query: "SEARCH_PRODUCT",
            childrenComponent: {
              type: 'FoodCard',
              redirection: "FoodDetailScreen"
            },
            searchParams: {
              size: 20,
              from: 0,
              criteria: [
                {
                  name: "collection.id",
                  value: "FOOCOL_BUGER",
                }
              ]
            }
          },
          sectionTheme: {
            base: "LIGHT",
            backgroundColor: "#FFFFFF",
          }
        },
        {
          id: "CMS_BESTOFCREPE",
          index: "product",
          order: 3,
          header: {
            label: "Notre sélection de crêpes",
            sublabel: "",
          },
          cardComponent: {
            type: 'FoodCard',
            redirection: "FoodDetailScreen"
          },
          screen: "food-home",
          templateSearch: {
            page: 'FoodListScreen',
            operation: "searchProduct",
            query: "SEARCH_PRODUCT",
            childrenComponent: {
              type: 'FoodCard',
              redirection: "FoodDetailScreen"
            },
            searchParams: {
              size: 20,
              from: 0,
              criteria: [
                {
                  name: "collection.id",
                  value: "FOOCOL0000002",
                }
              ]
            }
          },
          sectionTheme: {
            base: "LIGHT",
            backgroundColor: "#FFFFFF",
          }
        },
      ],
    },
    {
      id: "CMSCAT_RESTAURANTS",
      header: {
        label: "Restaurants",
      },
      order: 2,
      sections: [
        {
          id: "CMS_BESTOFRESTAURANT",
          order: 1,
          index: "place",
          header: {
            label: "Les restaurants tendances",
            sublabel: "",
          },
          cardComponent: {
            type: 'LongPlaceCard',
            redirection: "PlaceDetailScreen"
          },
          screen: "food-home",
          templateSearch: {
            page: 'PlaceListScreen',
            operation: "searchPlace",
            query: "SEARCH_PLACE",
            childrenComponent: {
              type: 'LargePlaceCard',
              redirection: "PlaceListScreen"
            },
            searchParams: {
              size: 20,
              from: 0,
              criteria: []
            }
          },
          sectionTheme: {
            base: "DARKONLIGHT",
          }
        },
      ]
    },
    {
      id: "CMSCAT_GRILL",
      header: {
        label: "Grillades",
      },
      order: 3,
      sections: [
        {
          id: "CMS_BESTOFGRILL",
          index: "product",
          order: 1,
          header: {
            label: "Les meilleures Grillades",
          },
          cardComponent: {
            type: 'FoodCard',
            redirection: "FoodDetailScreen"
          },
          screen: "food-home",
          templateSearch: {
            page: 'FoodListScreen',
            operation: "searchProduct",
            query: "SEARCH_PRODUCT",
            childrenComponent: {
              type: 'FoodCard',
              redirection: "FoodDetailScreen"
            },
            searchParams: {
              size: 20,
              from: 0,
              criteria: [
                {
                  name: "collection.id",
                  value: "FOOCOL0000009",
                }
              ]
            }
          },
          sectionTheme: {
            base: "DARKONLIGHT",
          }
        }
      ]
    },
  ]
}

export default pageSample;