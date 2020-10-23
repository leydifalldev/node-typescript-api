import { IHydrateModel } from "../../../defs";

const placeSample: IHydrateModel = {
  bulkHead: { index: "tsection", action: "create" },
  criteria: [],
  __typename: "Page",
  items: [
    {
      id: "TSECTION_GASTRONOMIES",
      order: 1,
      childrenComponent: {
        type: 'GastronomyCard',
        redirection: "FoodDetailScreen"
      },
      header: {
        label: "Gestronomie",
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
              name: "gastronomy",
              from: "props",
              type: "numeric"
            }
          ]
        }
      },
      children: [
        {
          order: 0,
          label: "américaine",
          id: "américaine",
        },
        {
          order: 1,
          label: "Chinoise",
          id: "chinoise",
        },
        {
          order: 2,
          label: "italienne",
          id: "italienne",
        },
        {
          order: 3,
          label: "libanaise",
          id: "libanaise",
        }
      ]
    },
    {
      id: "TSECTION_BESTOFPIZZA",
      order: 2,
      header: {
        label: "Best of Pizza"
      },
      childrenComponent: {
        type: 'LargeCard',
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
              from: "props",
              type: "numeric"
            }
          ]
        }
      },
      children: [
        {
          reference: "gWdOoHIBiUpIE3J8bU5W",
          order: 1,
          labelLeft: "Pizza Orientale",
          sublabelLeft: "Mergez - Pommes de terre - Viandes",
          labelRight: "1200 FCFA",
          src: "https://www.charcuteriedupacifique.pf/media/k2/items/cache/358873fad4914931314b94f2036b503a_XL.jpg",
          header: {
            id: "RADISSON_BLUE_DAKAR_001",
            label: "Radisson Blu",
            sublabel: "Corniche-Ouest",
            src: "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg"
          },
          ranking: {
            notation: 2.7,
            likes: 45
          },
        },
        {
          reference: "U8GW6HIBYjDkHZ5hIzGK",
          order: 2,
          labelLeft: "Pizza 4 fromages",
          sublabelLeft: "Tomates - Pommes de terre - Fromage Blanc - Fromage Chèvre",
          labelRight: "2400 FCFA",
          src: "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573111/jvze10b2uael6slzdsqr.jpg",
          header: {
            id: "RADISSON_BLUE_DAKAR_001",
            label: "Radisson Blu",
            sublabel: "Corniche-Ouest",
            src: "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg"
          },
          ranking: {
            notation: 1.7,
            likes: 45
          },
        }
      ],
      THEME: "LIGHT"
    },
    {
      id: "TSECTION_BESTOFCREPE",
      order: 3,
      header: {
        label: "Notre sélection de crêpes"
      },
      childrenComponent: {
        type: 'LargeCard',
        redirection: "FoodDetailScreen"
      },
      screen: "food-home",
      templateSearch: {
        page: 'FoodListScreen',
        operation: "searchProduct",
        childrenComponent: {
          type: 'FoodCard',
          redirection: "FoodDetailScreen"
        },
        query: "SEARCH_PRODUCT",
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
      children: [
        {
          reference: "gWdOoHIBiUpIE3J8bU5W",
          order: 1,
          labelLeft: "Pizza Orientale",
          sublabelLeft: "Mergez - Pommes de terre - Viandes",
          labelRight: "1200 FCFA",
          src: "https://www.charcuteriedupacifique.pf/media/k2/items/cache/358873fad4914931314b94f2036b503a_XL.jpg",
          header: {
            id: "RADISSON_BLUE_DAKAR_001",
            label: "Radisson Blu",
            sublabel: "Corniche-Ouest",
            src: "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg"
          },
          ranking: {
            notation: 4.7,
            likes: 45
          },
        },
        {
          reference: "U8GW6HIBYjDkHZ5hIzGK",
          order: 2,
          labelLeft: "Pizza 4 fromages",
          sublabelLeft: "Tomates - Pommes de terre - Fromage Blanc - Fromage Chèvre",
          labelRight: "2400 FCFA",
          src: "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573111/jvze10b2uael6slzdsqr.jpg",
          header: {
            id: "RADISSON_BLUE_DAKAR_001",
            label: "Radisson Blu",
            sublabel: "Corniche-Ouest",
            src: "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg"
          },
          ranking: {
            notation: 3.7,
            likes: 45
          },
        }
      ],
      THEME: "LIGHT"
    },
    {
      id: "TSECTION_TOPRESTAURANT",
      order: 4,
      header: {
        label: "Les restaurants tendances"
      },
      childrenComponent: {
        type: 'LongCard',
        redirection: "PlaceDetailScreen",
      },
      screen: "food-home",
      templateSearch: {
        page: 'FoodListScreen',
        operation: "searchPlace",
        childrenComponent: {
          type: 'PlaceFoodCard',
          redirection: "PlaceDetailScreen"
        },
        query: "SEARCH_PLACE",
        searchParams: {
          size: 20,
          from: 0,
          criteria: [

          ]
        }
      },
      children: [
        {
          reference: "SHARKYS_001",
          order: 1,
          labelLeft: "Sharkys",
          src: "https://s3-media0.fl.yelpcdn.com/bphoto/mQ4kaIpefJ2oy-OkpGFeYQ/o.jpg",
          ranking: {
            notation: 3.7,
            likes: 45
          },
        },
        {
          reference: "MARINA_B_001",
          order: 2,
          labelLeft: "Marina B",
          src: "https://media-cdn.tripadvisor.com/media/photo-s/0b/8f/66/14/photo3jpg.jpg",
          ranking: {
            notation: 3.7,
            likes: 45
          },
        },
        {
          reference: "PULLMAN_DAKAR_001",
          order: 3,
          labelLeft: "Pullman",
          src: "https://content.r9cdn.net/rimg/himg/dc/07/9b/ice-36146-62191757_3XL-611285.jpg?width=500&height=350&crop=true&caller=HotelDetailsPage3",
          ranking: {
            notation: 3.7,
            likes: 45
          },
        },
        {
          reference: "RADISSON_BLUE_DAKAR_001",
          order: 4,
          labelLeft: "Radisson",
          src: "https://i.pinimg.com/originals/94/64/6e/94646e44bc3766a79729b94bf4e0f7ff.jpg",
          ranking: {
            notation: 4.9,
            likes: 18
          }
        },
      ],
      THEME: "DARK"
    },

    {
      id: "TSECTION_BESTOFGRILL",
      order: 5,
      header: {
        label: "Notre selection de Grillade"
      },
      childrenComponent: {
        type: 'LargeCard',
        redirection: "FoodDetailScreen"
      },
      screen: "food-home",
      templateSearch: {
        page: 'FoodListScreen',
        operation: "searchProduct",
        childrenComponent: {
          type: 'FoodCard',
          redirection: "FoodDetailScreen"
        },
        query: "SEARCH_PRODUCT",
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
      children: [
        {
          reference: "gffOoHIBiUpIE3J8bt5W",
          order: 1,
          labelLeft: "Grillade - DIBI",
          sublabelLeft: "Viandes - Oignons- Poivre",
          labelRight: "2200 FCFA/kg",
          src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
          header: {
            id: "DIBITERIE_OUBA_001",
            label: "Dibiterie OUBA",
            sublabel: "YOFF",
            src: "https://www.leral.net/photo/art/grande/45307661-36650381.jpg?v=1587806662"
          },
          ranking: {
            notation: 4.7,
            likes: 45
          },
        },
        {
          reference: "gffOoHIBiUpIE3J8dt5W",
          order: 2,
          labelLeft: "Grillade - Foie",
          sublabelLeft: "Foie - Oignons - Fromage Blanc - Poivre - Sel",
          labelRight: "2400 FCFA",
          src: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
          header: {
            id: "DIBITERIE_OUBA_001",
            label: "Dibiterie OUBA",
            sublabel: "YOFF",
            src: "https://www.leral.net/photo/art/grande/45307661-36650381.jpg?v=1587806662"
          },
          ranking: {
            notation: 4.7,
            likes: 45
          },
        },
      ],
      THEME: "LIGHT"
    },

    {
      id: "TSECTION_BESTOFICECREAM",
      order: 6,
      header: {
        label: "Meilleures glaces",
        sublabel: "Selon les dakarois"
      },
      childrenComponent: {
        type: 'LargeCard',
        redirection: "FoodDetailScreen"
      },
      screen: "food-home",
      templateSearch: {
        page: 'FoodListScreen',
        operation: "searchProduct",
        childrenComponent: {
          type: 'FoodCard',
          redirection: "FoodDetailScreen"
        },
        query: "SEARCH_PRODUCT",
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
      children: [
        {
          reference: "SHARKYS_001",
          order: 1,
          header: {
            id: "SHARKYS_001",
            label: "Sharkys",
            sublabel: "Corniche-Ouest",
            src: "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg"
          },
          ranking: {
            notation: 3.5,
            likes: 300
          },
          subchildren: [
            {
              id: "SHARKYS_001_GLACE_VANILLE",
              label: "Glace Vanille",
              sublabel: "1000 FCFA",
              src: "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F52389108-a0c9-4924-9ab0-04ebb07cb595.2Ejpeg/748x372/quality/80/crop-from/center/glace-vanille-thermomix.jpeg",
              ranking: {
                notation: 3.5,
                likes: 300
              }
            },
            {
              id: "SHARKYS_001_GLACE_VANILLE_FRAISE",
              label: "Glace Vanille Fraise",
              sublabel: "1000 FCFA",
              src: "https://cdn.lacuisinedannie.com/images/857.jpg",
              ranking: {
                notation: 4.5,
                likes: 400
              }
            },
            {
              id: "SHARKYS_001_GLACE_VANILLE_ANANAS",
              label: "Glace Vanille Ananas",
              sublabel: "1000 FCFA",
              src: "https://lh3.googleusercontent.com/proxy/8VORTYkYajutG9iFbQWkOXS-eWNrqCRnDLRRTQU8UTe7nERLGTQ38SITjTJg1SiPa49_RrU2QBvJTbKKcVfPs4MusAUEdg7FcG50PdC9gIalYbjqKOLuD_Kjvg",
              ranking: {
                notation: 3.5,
                likes: 300
              }
            },
            {
              id: "SHARKYS_001_GLACE_VANILLE_PISTACHE",
              label: "Glace Vanille Pistache",
              sublabel: "1200 FCFA",
              src: "https://www.glaceslopez.fr/temas/bootstrap/imagenes/parfums/creme-glace/creme-glace-parfum-pistache-glaces-lopez.jpg",
              ranking: {
                notation: 3.5,
                likes: 300
              }
            },
            {
              id: "SHARKYS_001_GLACE_VANILLE_PECHE",
              label: "Glace Vanille Pêche",
              sublabel: "1200 FCFA",
              src: "https://www.magimix.fr/files/rec_214/pecheyabricoty800.jpg",
              ranking: {
                notation: 3.5,
                likes: 300
              }
            },
            {
              id: "SHARKYS_001_GLACE_VANILLE_TROPIC",
              label: "Glace Vanille Tropic",
              sublabel: "1200 FCFA",
              src: "https://www.mesinspirationsculinaires.com/wp-content/uploads/2017/08/lassi-glace-aux-peches-recette1.jpg",
              ranking: {
                notation: 3.5,
                likes: 300
              }
            },
            {
              id: "SHARKYS_001_GLACE_VANILLE_CHOCOLAT",
              label: "Glace Vanille Chocolat",
              sublabel: "1200 FCFA",
              src: "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
              ranking: {
                notation: 3.5,
                likes: 300
              }
            }
          ]
        },
      ],
      THEME: "LIGHT"
    },
  ]
}

export default placeSample