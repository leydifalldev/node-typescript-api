import { IProduct } from "../../defs";
import { IHydrateModel } from "../../defs";

const productSample: IHydrateModel = {
  bulkHead: { index: "product", action: "create" },
  __typename: "Product",
  criteria: [],
  items: [
    {
      "id": "gWdOoHIBiUpIE3J8bU5W",
      "name": "Pizza Orientale",
      "cardType": "FoodCard",
      "category": {
        "id": "PROCAT0000004",
        "name": "plat de resistance"
      },
      "collection": {
        "name": "pizza",
        "id": "FOOCOL0000001"
      },
      "gastronomy": "italienne",
      "recipes": [
        "Mergez",
        "Pommes de terre",
        "Viandes"
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "discount": 10,
      "quantity": 1,
      "size": "Petite",
      "stock": true,
      "seller": {
        "id": "RADISSON_BLUE_DAKAR_001",
        "name": "Radisson Blu",
        "phone": "+221 33 869 33 33",
        "email": "acceuil@radisson-blu.sn",
        "address": "2 RUE DU PALAIS PRESIDENTIEL",
        "zone": "Plateau",
        "district": "sandaga",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        }
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "pictures": [
        {
          "small": "https://laperfectopizza.fr/wp-content/uploads/2015/04/fond3-600x600.jpg",
          "big": "https://laperfectopizza.fr/wp-content/uploads/2015/04/fond3-600x600.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "CMS": [
        {
          "id": "CMS_BESTOFPIZZA",
          "order": 2
        }
      ],
      "src": "https://laperfectopizza.fr/wp-content/uploads/2015/04/fond3-600x600.jpg",
      "CREATED_AT": "2020-06-10T22:16:33.862Z",
      "LAST_UPDATE_DATE": "2020-06-10T22:16:33.862Z",
      "__typename": "Product"
    },
    {
      "id": "U8GW6HIBYjDkHZ5hIzGK",
      "name": "Pizza 4 fromages",
      "cardType": "FoodCard",
      "category": {
        "id": "PROCAT0000004",
        "name": "plat de resistance"
      },
      "collection": {
        "id": "FOOCOL0000001",
        "name": "pizza"
      },
      "gastronomy": "italienne",
      "recipes": [
        "Tomates",
        "Pommes de terre",
        "Fromage Blanc",
        "Fromage Chèvre"
      ],
      "price": 2400,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "PULLMAN_DAKAR_001",
        "name": "PULLMAN",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://media-exp1.licdn.com/dms/image/C4D0BAQFqQJqp6qYfyA/company-logo_200_200/0?e=2159024400&v=beta&t=VjtRBszi08nWWhQZ_4qBnnKErvG6PStj-kkDf3O47wo"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:10:44.985Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:25:26.567Z",
      "CMS": [
        {
          "id": "CMS_BESTOFPIZZA",
          "order": 1
        }
      ],
      "pictures": [
        {
          "small": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573060/relpd6jxjspjbgt6whzr.jpg",
          "big": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1592573060/relpd6jxjspjbgt6whzr.jpg",
          "id": "5646e0f3-9360-477f-85cb-8f87b9f135b0"
        },
        {
          "small": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573111/jvze10b2uael6slzdsqr.jpg",
          "big": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1592573111/jvze10b2uael6slzdsqr.jpg",
          "id": "33c2dffe-5856-4a1e-ac97-e45870211bed"
        },
        {
          "small": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573124/kfjlfbhwesikrlucn8gf.jpg",
          "big": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1592573124/kfjlfbhwesikrlucn8gf.jpg",
          "id": "742435d1-d4fa-47d1-a94f-c37e73fd5925"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573124/kfjlfbhwesikrlucn8gf.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUpIE3J8bU5W",
      "name": "Crêpe chocolat",
      "cardType": "FoodCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000002",
        "name": "crêpes"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "RADISSON_BLUE_DAKAR_001",
        "name": "Radisson Blu",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CMS": [
        {
          "id": "CMS_BESTOFCREPE",
          "order": 1
        }
      ],
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573414/peozws1fijzzwofkdgzw.jpg",
          "big": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1592573414/peozws1fijzzwofkdgzw.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1592573414/peozws1fijzzwofkdgzw.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUpIE3J8bUhhjkdfs",
      "name": "Crêpe chocolat",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "cardType": "FoodCard",
      "collection": {
        "id": "FOOCOL0000002",
        "name": "crêpes"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "RADISSON_BLUE_DAKAR_001",
        "name": "Radisson Blu",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CMS": [
        {
          "id": "CMS_BESTOFCREPE",
          "order": 2
        }
      ],
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://idata.over-blog.com/3/73/46/67/archives/14/jp-copie-3.jpg",
          "big": "https://idata.over-blog.com/3/73/46/67/archives/14/jp-copie-3.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://idata.over-blog.com/3/73/46/67/archives/14/jp-copie-3.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUpIE3J8bp5W",
      "name": "Coca Cola",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT0000003",
        "name": "boisson"
      },
      "collection": {
        "id": "FOOCOL0000011",
        "name": "boisson gazeuse"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "RADISSON_BLUE_DAKAR_001",
        "name": "Radisson Blu",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://media.houra.fr/ART-IMG-XL/48/17/5000112611748-1.jpg",
          "big": "https://media.houra.fr/ART-IMG-XL/48/17/5000112611748-1.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://media.houra.fr/ART-IMG-XL/48/17/5000112611748-1.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUpIE3J8bt5W",
      "name": "Grillade - DIBI",
      "cardType": "FoodCard",
      "category": {
        "id": "PROCAT0000006",
        "name": "plat"
      },
      "collection": {
        "id": "FOOCOL0000009",
        "name": "grillade"
      },
      "gastronomy": "sénégalaise",
      "recipes": [
        "Viande",
        "Oignons",
        "Poivre",
        "Sel",
      ],
      "spicy": "NONE",
      "price": 5200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "DIBITERIE_OUBA_001",
        "phone": "+221 33 869 33 33",
        "name": "Dibiterie OUBA",
        "categories": [
          "Fast food",
          "Restaurant",
          "Terasse",
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "RUE DES GARDIENS, GRAND YOFF, SENEGAL",
        "zone": "YOFF",
        "district": "GRAND YOFF",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "notation": 4.7,
        "likes": 45,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "CMS": [
        {
          "id": "CMS_BESTOFGRILL",
          "order": 1
        }
      ],
      "pictures": [
        {
          "small": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
          "big": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUpIE3J8dt5W",
      "name": "Grillade - Foie",
      "cardType": "FoodCard",
      "category": {
        "id": "PROCAT0000006",
        "name": "plat"
      },
      "collection": {
        "id": "FOOCOL0000009",
        "name": "grillade"
      },
      "gastronomy": "sénégalaise",
      "recipes": [
        "Foie",
        "Oignons",
        "Poivre",
        "Sel",
      ],
      "spicy": "NONE",
      "price": 5200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "DIBITERIE_OUBA_001",
        "name": "Dibiterie OUBA",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Fast food",
          "Restaurant",
          "Terasse",
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "RUE DES GARDIENS, GRAND YOFF, SENEGAL",
        "zone": "YOFF",
        "district": "GRAND YOFF",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "CMS": [
        {
          "id": "CMS_BESTOFGRILL",
          "order": 2
        }
      ],
      "pictures": [
        {
          "small": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
          "big": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14211984_1748110958786009_2390306690332057852_n.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=Fb5s0nMHdHMAX9WgFXf&_nc_ht=scontent-cdt1-1.xx&oh=d6dd361f0df21e19a0c930c8a8ba08d5&oe=5F394965",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUprr3J8dt5W",
      "name": "Coca Cola",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT0000003",
        "name": "boisson"
      },
      "collection": {
        "id": "FOOCOL0000011",
        "name": "boisson gazeuse"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "DIBITERIE_OUBA_001",
        "name": "Dibiterie OUBA",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Fast food",
          "Restaurant",
          "Terasse",
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "RUE DES GARDIENS, GRAND YOFF, SENEGAL",
        "zone": "YOFF",
        "district": "GRAND YOFF",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://media.houra.fr/ART-IMG-XL/48/17/5000112611748-1.jpg",
          "big": "https://media.houra.fr/ART-IMG-XL/48/17/5000112611748-1.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://media.houra.fr/ART-IMG-XL/48/17/5000112611748-1.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUpru3J8dt5W",
      "name": "Fanta",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT0000003",
        "name": "boisson"
      },
      "collection": {
        "id": "FOOCOL0000011",
        "name": "boisson gazeuse"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "DIBITERIE_OUBA_001",
        "name": "Dibiterie OUBA",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Fast food",
          "Restaurant",
          "Terasse",
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "RUE DES GARDIENS, GRAND YOFF, SENEGAL",
        "zone": "YOFF",
        "district": "GRAND YOFF",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.magasin-stalingrad.com/Files/112063/Img/24/fanta-citron-zoom.jpg",
          "big": "https://www.magasin-stalingrad.com/Files/112063/Img/24/fanta-citron-zoom.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.magasin-stalingrad.com/Files/112063/Img/24/fanta-citron-zoom.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHIBiUprugJ8dt5W",
      "name": "Fanta",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT0000003",
        "name": "boisson"
      },
      "collection": {
        "id": "FOOCOL0000011",
        "name": "boisson gazeuse"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "RADISSON_BLUE_DAKAR_001",
        "name": "Radisson Blu",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.magasin-stalingrad.com/Files/112063/Img/24/fanta-citron-zoom.jpg",
          "big": "https://www.magasin-stalingrad.com/Files/112063/Img/24/fanta-citron-zoom.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.magasin-stalingrad.com/Files/112063/Img/24/fanta-citron-zoom.jpg",
      "__typename": "Product"
    },
    {
      "id": "gffOoHkBiUprugJ8dt5W",
      "name": "Fanta Cassis",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT0000003",
        "name": "boisson"
      },
      "collection": {
        "id": "FOOCOL0000011",
        "name": "boisson gazeuse"
      },
      "gastronomy": "argentine",
      "recipes": [
        "Chocolat",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "RADISSON_BLUE_DAKAR_001",
        "name": "Radisson Blu",
        "phone": "+221 33 869 33 33",
        "categories": [
          "Restaurant",
          "Pub",
          "Hotel",
          "Terasse",
          "Bar"
        ],
        "ranking": {
          "likes": 0,
          "notation": 0,
          "total": 0,
          "votes": 0
        },
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal"
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://images.quickoffice.nl/002/600x450/Frisdrank-Fanta-Cassis-blikje-0-33l-(c)897064.jpg",
          "big": "https://images.quickoffice.nl/002/600x450/Frisdrank-Fanta-Cassis-blikje-0-33l-(c)897064.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://images.quickoffice.nl/002/600x450/Frisdrank-Fanta-Cassis-blikje-0-33l-(c)897064.jpg",
      "__typename": "Product"
    },
    // Glace VANILLE SHARKYS
    {
      "id": "SHARKYS_001_GLACE_VANILLE",
      "name": "Glace Vanille",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 300,
        "notation": 3.5,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F52389108-a0c9-4924-9ab0-04ebb07cb595.2Ejpeg/748x372/quality/80/crop-from/center/glace-vanille-thermomix.jpeg",
          "big": "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F52389108-a0c9-4924-9ab0-04ebb07cb595.2Ejpeg/748x372/quality/80/crop-from/center/glace-vanille-thermomix.jpeg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F52389108-a0c9-4924-9ab0-04ebb07cb595.2Ejpeg/748x372/quality/80/crop-from/center/glace-vanille-thermomix.jpeg",
      "__typename": "Product"
    },
    // Glace VANILLE Fraise
    {
      "id": "SHARKYS_001_GLACE_VANILLE_FRAISE",
      "name": "Glace Vanille Fraise",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly",
        "Fraise"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 400,
        "notation": 4.5,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://cdn.lacuisinedannie.com/images/857.jpg",
          "big": "https://cdn.lacuisinedannie.com/images/857.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://cdn.lacuisinedannie.com/images/857.jpg",
      "__typename": "Product"
    },
    // Glace VANILLE Ananas
    {
      "id": "SHARKYS_001_GLACE_VANILLE_ANANAS",
      "name": "Glace Vanille Ananas",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly",
        "Ananas"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 300,
        "notation": 3.5,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://lh3.googleusercontent.com/proxy/8VORTYkYajutG9iFbQWkOXS-eWNrqCRnDLRRTQU8UTe7nERLGTQ38SITjTJg1SiPa49_RrU2QBvJTbKKcVfPs4MusAUEdg7FcG50PdC9gIalYbjqKOLuD_Kjvg",
          "big": "https://lh3.googleusercontent.com/proxy/8VORTYkYajutG9iFbQWkOXS-eWNrqCRnDLRRTQU8UTe7nERLGTQ38SITjTJg1SiPa49_RrU2QBvJTbKKcVfPs4MusAUEdg7FcG50PdC9gIalYbjqKOLuD_Kjvg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://lh3.googleusercontent.com/proxy/8VORTYkYajutG9iFbQWkOXS-eWNrqCRnDLRRTQU8UTe7nERLGTQ38SITjTJg1SiPa49_RrU2QBvJTbKKcVfPs4MusAUEdg7FcG50PdC9gIalYbjqKOLuD_Kjvg",
      "__typename": "Product"
    },

    // Glace VANILLE Pistache
    {
      "id": "SHARKYS_001_GLACE_VANILLE_PISTACHE",
      "name": "Glace Vanille Pistache",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly",
        "Pistache"
      ],
      "spicy": "NONE",
      "price": 1000,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.glaceslopez.fr/temas/bootstrap/imagenes/parfums/creme-glace/creme-glace-parfum-pistache-glaces-lopez.jpg",
          "big": "https://www.glaceslopez.fr/temas/bootstrap/imagenes/parfums/creme-glace/creme-glace-parfum-pistache-glaces-lopez.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.glaceslopez.fr/temas/bootstrap/imagenes/parfums/creme-glace/creme-glace-parfum-pistache-glaces-lopez.jpg",
      "__typename": "Product"
    },

    // Glace VANILLE PECHE
    {
      "id": "SHARKYS_001_GLACE_VANILLE_PECHE",
      "name": "Glace Vanille Pêche",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly",
        "Pêche"
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.magimix.fr/files/rec_214/pecheyabricoty800.jpg",
          "big": "https://www.magimix.fr/files/rec_214/pecheyabricoty800.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.magimix.fr/files/rec_214/pecheyabricoty800.jpg",
      "__typename": "Product"
    },

    // Glace VANILLE TROPIC - SHARKYS
    {
      "id": "SHARKYS_001_GLACE_VANILLE_TROPIC",
      "name": "Glace Vanille Tropic",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly",
        "Mange",
        "Orange",
        "Cerises"
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.mesinspirationsculinaires.com/wp-content/uploads/2017/08/lassi-glace-aux-peches-recette1.jpg",
          "big": "https://www.mesinspirationsculinaires.com/wp-content/uploads/2017/08/lassi-glace-aux-peches-recette1.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.mesinspirationsculinaires.com/wp-content/uploads/2017/08/lassi-glace-aux-peches-recette1.jpg",
      "__typename": "Product"
    },

    // Glace VANILLE CHOCOLAT - SHARKYS
    {
      "id": "SHARKYS_001_GLACE_VANILLE_CHOCOLAT",
      "name": "Glace Vanille Chocolat",
      "cardType": "ProductRoundedCard",
      "category": {
        "id": "PROCAT0000001",
        "name": "dessert"
      },
      "collection": {
        "id": "FOOCOL0000014",
        "name": "glace"
      },
      "gastronomy": "world",
      "recipes": [
        "Vanille",
        "Crème chantilly",
        "Chocolat"
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "SHARKYS_001",
        "name": "Sharkys",
        "phone": "+221 33 820 93 93",
        "categories": [
          "Restaurant",
          "Pub",
          "Terasse",
          "Fast food",
          "Bar"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "district": "Les mamelles",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
          "big": "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
      "__typename": "Product"
    },

    // Glace VANILLE CHOCOLAT - SHARKYS
    {
      "id": "KFC_001_TENDERS",
      "name": "Tenders",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "5 savoureux filets de poulet",
        "marinés et panés",
      ],
      "spicy": "NONE",
      "price": 1200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
          "big": "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.ptitchef.com/imgupl/recipe/fondant-au-chocolat-et-glace-vanille--md-13943p17218.jpg",
      "__typename": "Product"
    },
    {
      "id": "KFC_001_8HOT_WINGS",
      "name": "8 Hot Wings",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "8 Ailes de poulet marinées, épicées et panées",
      ],
      "spicy": "NONE",
      "price": 4200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/345d2d4032e655fdea396027ea27f41a.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/345d2d4032e655fdea396027ea27f41a.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/345d2d4032e655fdea396027ea27f41a.png",
      "__typename": "Product"
    },
    {
      "id": "KFC_001_3PIECES_CHICKEN",
      "name": "3 Pièces de poulet",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "3 Pilons ou haut de cuisse, épicées et panées",
      ],
      "spicy": "NONE",
      "price": 3200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/60acdd47c691bde6e12984a3b9ba1dc7.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/60acdd47c691bde6e12984a3b9ba1dc7.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/60acdd47c691bde6e12984a3b9ba1dc7.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_3PIECES_CHICKEN_5_TENDERS",
      "name": " Bucket 3 Pièces de poulet + 5 Tenders® ",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "3 pilons ou hauts de cuisse marinés et panés",
        "5 Vrais morceaux de poulet coupés, marinés et panés",
        "2 sauces",
      ],
      "spicy": "NONE",
      "price": 3200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/b71e9c844fab9f4b0440ac68e072bc9a.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/b71e9c844fab9f4b0440ac68e072bc9a.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/b71e9c844fab9f4b0440ac68e072bc9a.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_BUCKET_20TENDERS",
      "name": " Bucket 20 Tenders® ",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "20 Vrais morceaux de poulet coupés, marinés et panés",
        "6 sauces"
      ],
      "spicy": "NONE",
      "price": 3200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/488ffaf5df363cc020b05ede62c9ac7d.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/488ffaf5df363cc020b05ede62c9ac7d.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/488ffaf5df363cc020b05ede62c9ac7d.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_32_HOT_WINGS",
      "name": "Bucket 32 Hot Wings®",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "20 Vrais morceaux de poulet coupés, marinés et panés",
        "6 sauces"
      ],
      "spicy": "NONE",
      "price": 3200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/f0d682207ade5369a07aa983ebdc1b84.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/f0d682207ade5369a07aa983ebdc1b84.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/f0d682207ade5369a07aa983ebdc1b84.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_32_HOT_WINGS",
      "name": "Bucket 32 Hot Wings®",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "20 Vrais morceaux de poulet coupés, marinés et panés",
        "6 sauces"
      ],
      "spicy": "NONE",
      "price": 3200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/f0d682207ade5369a07aa983ebdc1b84.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/f0d682207ade5369a07aa983ebdc1b84.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/f0d682207ade5369a07aa983ebdc1b84.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_TENDERS_HOT_WINGS_CHICKEN",
      "name": " Bucket 8 Tenders® + 8 Hot Wings® + 8 Pièces de poulet ",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "8 Vrais morceaux de poulet coupés marinés et panés",
        "3 sauces + 8 Ailes de poulet marinées, épicées et panées",
        "8 pilons ou haut de cuisse marinés et panés",
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/117f2746d690d149d78d0812097f84f6.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/117f2746d690d149d78d0812097f84f6.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/117f2746d690d149d78d0812097f84f6.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_50_HOT_WINGS",
      "name": "Bucket 50 Hot Wings® ",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_POULETS_BUCKETS",
        "name": "Poulets & Buckets"
      },
      "collection": {
        "id": "FOOCOL_CHICKEN_BASE",
        "name": "Au poulet"
      },
      "gastronomy": "world",
      "recipes": [
        "50 Ailes de poulet marinées, épicées et panées"
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/e1e1e0995774fcd8c1e08e8d98e91fae.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/e1e1e0995774fcd8c1e08e8d98e91fae.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/e1e1e0995774fcd8c1e08e8d98e91fae.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_HOT_DOG_CLASSIC",
      "name": "Hot Dog Classic",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_CARD",
        "name": "À la carte",
      },
      "collection": {
        "id": "FOOCOL_BURGERS_WRAPS_SALADES",
        "name": "Burgers, Wraps & Buckets",
      },
      "gastronomy": "world",
      "recipes": [
        "Pain moelleux et toasté",
        "2 Tenders®, mourtarde US, oignons croustillants",
        "2 tranches de cheddar fondu et ketchup"
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/d1cf833c8627cb987474d339d8035d5d.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/d1cf833c8627cb987474d339d8035d5d.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/d1cf833c8627cb987474d339d8035d5d.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_HOT_DOG_2HOT4U",
      "name": "Hot Dog 2HOT4U®",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_CARD",
        "name": "À la carte",
      },
      "collection": {
        "id": "FOOCOL_BURGERS_WRAPS_SALADES",
        "name": "Burgers, Wraps & Buckets",
      },
      "gastronomy": "world",
      "recipes": [
        "Pain moelleux et toasté",
        "2 Tenders®, mourtarde US, oignons croustillants",
        "2 tranches de cheddar fondu, jalapeños croquants",
        "sauce 2HOT4U®"
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/fdc40a333e01417c00baffb4a27888cb.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/fdc40a333e01417c00baffb4a27888cb.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/fdc40a333e01417c00baffb4a27888cb.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_CRISPY_CLUB_WRAP",
      "name": "Crispy Club Wrap",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_CARD",
        "name": "À la carte",
      },
      "collection": {
        "id": "FOOCOL_BURGERS_WRAPS_SALADES",
        "name": "Burgers, Wraps & Buckets",
      },
      "gastronomy": "world",
      "recipes": [
        "2 Tenders®",
        "cheddar fondu",
        "salade",
        "tomate",
        "mayonnaise"
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/b30d8e598004b598e663cb4093fd8a0f.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/b30d8e598004b598e663cb4093fd8a0f.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/b30d8e598004b598e663cb4093fd8a0f.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_CRISPY_CLUB_WRAP_BACON",
      "name": "Crispy Club Wrap Bacon",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_CARD",
        "name": "À la carte",
      },
      "collection": {
        "id": "FOOCOL_BURGERS_WRAPS_SALADES",
        "name": "Burgers, Wraps & Buckets",
      },
      "gastronomy": "world",
      "recipes": [
        "2 Tenders®",
        "cheddar fondu",
        "salade",
        "tomate",
        "mayonnaise"
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/a52cba9266c45380844bc1d0488291f8.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/a52cba9266c45380844bc1d0488291f8.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/a52cba9266c45380844bc1d0488291f8.png",
      "__typename": "Product"
    },

    {
      "id": "KFC_001_DOUBLE_STACKER_CHEESE_BACON",
      "name": "Double Stacker Cheese & Bacon",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_CARD",
        "name": "À la carte",
      },
      "collection": {
        "id": "FOOCOL_BURGERS_WRAPS_SALADES",
        "name": "Burgers, Wraps & Buckets",
      },
      "gastronomy": "world",
      "recipes": [
        "2 filets de poulet marinés et pané",
        "2 tranches de bacon",
        "pains aux graines de sésame",
        "cheddar fondu",
        "salade",
        "tomate",
        "sauce cheddar fondu goût fumé"
      ],
      "spicy": "NONE",
      "price": 12200,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "KFC_001",
        "name": "KFC",
        "phone": "+221 33 824 00 00",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      },
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static.innovorder.fr/uploads/6aa2c52b2e12/c4262a6942e2f16403ee569f4a946e6d.png",
          "big": "https://static.innovorder.fr/uploads/6aa2c52b2e12/c4262a6942e2f16403ee569f4a946e6d.png",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static.innovorder.fr/uploads/6aa2c52b2e12/c4262a6942e2f16403ee569f4a946e6d.png",
      "__typename": "Product"
    },

    {
      "id": "MCDO_MCMUFFIN_EGG_CHEESE",
      "name": "Le McMuffin Egg et Cheese",
      "cardType": "ProductSquareCard", 
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_MCMUFFIN",
        "name": "Mc Muffin",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oeufs",
        "Cheddar"
      ],
      "spicy": "NONE",
      "price": 2900,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "CMS": [
        {
          "id": "CMS_BESTOFBURGER",
          "order": 1
        }
      ],
      "pictures": [
        {
          "small": "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg",
          "big": "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg",
      "__typename": "Product"
    },

    {
      "id": "MCDO_MCMUFFIN_EGG_BACON",
      "name": "Le McMuffin Egg et Bacon",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_MCMUFFIN",
        "name": "Mc Muffin",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oeufs",
        "Cheddar"
      ],
      "spicy": "NONE",
      "price": 2700,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "CMS": [
        {
          "id": "CMS_BESTOFBURGER",
          "order": 1
        }
      ],
      "pictures": [
        {
          "small": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvRRWXBVuJ1wqRhhTW7LoQ-qIJ4XXAXzQ1-w&usqp=CAU",
          "big": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvRRWXBVuJ1wqRhhTW7LoQ-qIJ4XXAXzQ1-w&usqp=CAU",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvRRWXBVuJ1wqRhhTW7LoQ-qIJ4XXAXzQ1-w&usqp=CAU",
      "__typename": "Product"
    },

    {
      "id": "MCDO_LE_HUMBERGER",
      "name": "Le Hamburger",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_BUGER",
        "name": "Burger",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oigons",
        "Tomates",
        "Salade",
        "Cornichon"
      ],
      "spicy": "NONE",
      "price": 2700,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "ranking": {
        "likes": 900,
        "notation": 5,
        "total": 0,
        "votes": 0
      },
      "CMS": [
        {
          "id": "CMS_BESTOFBURGER",
          "order": 2
        }
      ],
      "pictures": [
        {
          "small": "https://sohealthy.fr/wp-content/uploads/2017/06/hamburger-mcdo-calories.jpg",
          "big": "https://sohealthy.fr/wp-content/uploads/2017/06/hamburger-mcdo-calories.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://sohealthy.fr/wp-content/uploads/2017/06/hamburger-mcdo-calories.jpg",
      "__typename": "Product"
    },

    {
      "id": "MCDO_LE_CHEESEBERGER",
      "name": "Le Cheeseburger",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_BUGER",
        "name": "Burger",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oigons",
        "Tomates",
        "Salade",
        "Cornichon"
      ],
      "spicy": "NONE",
      "price": 2900,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "CMS": [
        {
          "id": "CMS_BESTOFBURGER",
          "order": 3
        }
      ],
      "ranking": {
        "likes": 440,
        "notation": 3.9,
        "total": 0,
        "votes": 0
      },
      "pictures": [
        {
          "small": "https://lh3.googleusercontent.com/proxy/0e3Jz94RTjsoUezdBFn2mJqtMzXbR1g4j5aHaZmtdpFdfyGudNa-_Hn5ZbX-VwbZWgWhPXjjXIVEqr5oorAmIjRNwT_cZhIe1p4F_N9NOEyXbmxdyTD2EQ",
          "big": "https://lh3.googleusercontent.com/proxy/0e3Jz94RTjsoUezdBFn2mJqtMzXbR1g4j5aHaZmtdpFdfyGudNa-_Hn5ZbX-VwbZWgWhPXjjXIVEqr5oorAmIjRNwT_cZhIe1p4F_N9NOEyXbmxdyTD2EQ",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://lh3.googleusercontent.com/proxy/0e3Jz94RTjsoUezdBFn2mJqtMzXbR1g4j5aHaZmtdpFdfyGudNa-_Hn5ZbX-VwbZWgWhPXjjXIVEqr5oorAmIjRNwT_cZhIe1p4F_N9NOEyXbmxdyTD2EQ",
      "__typename": "Product"
    },

    {
      "id": "MCDO_MCFISH",
      "name": "Le McFish",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_BUGER",
        "name": "Burger",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oigons",
        "Tomates",
        "Salade",
        "Cornichon"
      ],
      "spicy": "NONE",
      "price": 2500,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "CMS": [
        {
          "id": "CMS_BESTOFBURGER",
          "order": 3
        }
      ],
      "ranking": {
        "likes": 450,
        "notation": 3.6,
        "total": 0,
        "votes": 0
      },
      "pictures": [
        {
          "small": "https://upload.wikimedia.org/wikipedia/commons/f/f7/McDonald%27s_Filet-O-Fish_sandwich_%281%29.jpg",
          "big": "https://upload.wikimedia.org/wikipedia/commons/f/f7/McDonald%27s_Filet-O-Fish_sandwich_%281%29.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://upload.wikimedia.org/wikipedia/commons/f/f7/McDonald%27s_Filet-O-Fish_sandwich_%281%29.jpg",
      "__typename": "Product"
    },

    {
      "id": "MCDO_PTIT_WRAP_CHEVRE",
      "name": "Le Ptit Wrap Chèvre",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_PTIT_WRAP",
        "name": "Le P'tit Wrap",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oigons",
        "Tomates",
        "Salade",
        "Cornichon"
      ],
      "spicy": "NONE",
      "price": 2500,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "ranking": {
        "likes": 450,
        "notation": 3.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://lh3.googleusercontent.com/proxy/nOYixo4G_COwuRIn00GJKHO9C2YXhRBMHM_DMacyQ-ez1SyvLxSgRw2DfSwX7ihzHYEKgUu1ITa3U7008_LloatUOIzF2F4B",
          "big": "https://lh3.googleusercontent.com/proxy/nOYixo4G_COwuRIn00GJKHO9C2YXhRBMHM_DMacyQ-ez1SyvLxSgRw2DfSwX7ihzHYEKgUu1ITa3U7008_LloatUOIzF2F4B",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://lh3.googleusercontent.com/proxy/nOYixo4G_COwuRIn00GJKHO9C2YXhRBMHM_DMacyQ-ez1SyvLxSgRw2DfSwX7ihzHYEKgUu1ITa3U7008_LloatUOIzF2F4B",
      "__typename": "Product"
    },

    {
      "id": "MCDO_PTIT_WRAP_RANCH",
      "name": "Le Ptit Ranch",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_PTIT_WRAP",
        "name": "Le P'tit Wrap",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oigons",
        "Tomates",
        "Salade",
        "Cornichon"
      ],
      "spicy": "NONE",
      "price": 1500,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "ranking": {
        "likes": 450,
        "notation": 3.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://lh3.googleusercontent.com/proxy/0LA3h3CjHsz4hXNszY_e1KuV7UJjz6sj2v7dGrxEFe6-zBf2qqvr3pj3LO8BBf6cM1cSISPrl_4I4mNHn8qWwPQEFrEqYQMCC3QIzBUTjCQQQk4UJPeuoLLuI3c7xAoUVg",
          "big": "https://lh3.googleusercontent.com/proxy/0LA3h3CjHsz4hXNszY_e1KuV7UJjz6sj2v7dGrxEFe6-zBf2qqvr3pj3LO8BBf6cM1cSISPrl_4I4mNHn8qWwPQEFrEqYQMCC3QIzBUTjCQQQk4UJPeuoLLuI3c7xAoUVg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://lh3.googleusercontent.com/proxy/0LA3h3CjHsz4hXNszY_e1KuV7UJjz6sj2v7dGrxEFe6-zBf2qqvr3pj3LO8BBf6cM1cSISPrl_4I4mNHn8qWwPQEFrEqYQMCC3QIzBUTjCQQQk4UJPeuoLLuI3c7xAoUVg",
      "__typename": "Product"
    },

    {
      "id": "MCDO_NUGGETS",
      "name": "Les 20 Chicken McNuggets",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_NUGGETS",
        "name": "Nuggets",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Oigons",
        "Tomates",
        "Salade",
        "Cornichon"
      ],
      "spicy": "NONE",
      "price": 3500,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "ranking": {
        "likes": 450,
        "notation": 3.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.thesun.co.uk/wp-content/uploads/2019/07/20SpicyNuggets_HR-e1564491802866.jpg?w=1240",
          "big": "https://www.thesun.co.uk/wp-content/uploads/2019/07/20SpicyNuggets_HR-e1564491802866.jpg?w=1240",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.thesun.co.uk/wp-content/uploads/2019/07/20SpicyNuggets_HR-e1564491802866.jpg?w=1240",
      "__typename": "Product"
    },

    {
      "id": "MCDO_NUGGETS_CHEVRE",
      "name": "La boite à partager chèvre",
      "cardType": "ProductCardMedium",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_NUGGETS",
        "name": "Nuggets",
      },
      "gastronomy": "world",
      "recipes": [
        "Fromage",
        "Chèvre"
      ],
      "spicy": "NONE",
      "price": 3500,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "ranking": {
        "likes": 450,
        "notation": 3.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://static-pepper.dealabs.com/threads/thread_large/default/1823753_1.jpg",
          "big": "https://static-pepper.dealabs.com/threads/thread_large/default/1823753_1.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://static-pepper.dealabs.com/threads/thread_large/default/1823753_1.jpg",
      "__typename": "Product"
    },

    {
      "id": "MCDO_FRITES",
      "name": "FRITES",
      "cardType": "ProductSquareCard",
      "category": {
        "id": "PROCAT_MCDO_LILHUNGRY",
        "name": "PETIT FAIM",
      },
      "collection": {
        "id": "FOOCOL_MACDO_ACCOMPAGNEMENT",
        "name": "Les accompagnements",
      },
      "gastronomy": "world",
      "recipes": [
        "Pommes de terre",
      ],
      "spicy": "NONE",
      "price": 500,
      "currency": "FCFA",
      "quantity": 1,
      "size": "Moyenne",
      "stock": true,
      "seller": {
        "id": "MCDO_001",
        "name": "McDonalds",
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com",
        "categories": [
          "Restaurant",
          "Fast food"
        ],
        "gastronomies": [
          "US"
        ],
        "ranking": {
          "likes": 400,
          "notation": 4.6,
          "total": 0,
          "votes": 0
        },
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
        "logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      },
      "ranking": {
        "likes": 450,
        "notation": 3.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-06-19T13:29:58.565Z",
      "LAST_UPDATE_DATE": "2020-06-19T13:30:14.598Z",
      "pictures": [
        {
          "small": "https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/fr/mcdonalds-fries-medium.jpg",
          "big": "https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/fr/mcdonalds-fries-medium.jpg",
          "id": "30c9aec8-bf5c-4f1e-9efa-2cef1fa468a2"
        }
      ],
      "src": "https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/fr/mcdonalds-fries-medium.jpg",
      "__typename": "Product"
    },
  ]
}

export default productSample;