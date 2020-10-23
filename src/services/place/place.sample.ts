import { IPlace } from "../../defs";
import { IHydrateModel } from "../../defs";

const placeSample: IHydrateModel = {
  bulkHead: { index: "place", action: "create" },
  criteria: [],
  __typename: "Place",
  items: [
    {
      "id": "RADISSON_BLUE_DAKAR_001",
      "name": "Radisson Blu",
      "categories": [
        "Restaurant",
        "Pub",
        "Hotel",
        "Terasse",
        "Bar"
      ],
      "gastronomies": [
        "FR",
        "CN",
        "IN",
        "ID",
        "SN",
        "US"
      ],
      "contact": {
        "phone": "+221 33 869 33 33",
        "email": "acceuil@radisson-blu.sn"
      },
      "location": {
        "address": "56 AV DE LA CORNICHE, DAKAR",
        "zone": "CORNICHE EST",
        "district": "almadies",
        "ocean": true,
        "country": "Senegal"
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 4,
        "total": 0,
        "votes": 0
      },
      //"logo": "https://pbs.twimg.com/profile_images/1247888799603933184/dP6mcqQ5_400x400.jpg",
      "CATALOGUE_ORDER": [
        {
          "id": "FOOCOL0000001",
          "order": 1
        },
        {
          "id": "FOOCOL0000002",
          "order": 2,
        },
      ],
      "CREATED_AT": "2020-05-04T12:25:25.231Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:25:39.127Z",
      "CMS": [
        {
          "id": "CMS_BESTOFRESTAURANT",
          "order": 2
        }
      ],
      "pictures": [
        {
          "mobile": "https://q-cf.bstatic.com/images/hotel/max1024x768/232/232822718.jpg",
          "desktop": "https://q-cf.bstatic.com/images/hotel/max1024x768/232/232822718.jpg",
          "id": "00d6c29c-6131-4634-ab88-4f71fc1b55ae"
        }
      ],
      "src": "https://q-cf.bstatic.com/images/hotel/max1024x768/232/232822718.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#03019E",
        "tertiaryColor": "#000000"
      },
      "__typename": "Place",
    },
    {
      "id": "PULLMAN_DAKAR_001",
      "name": "PULLMAN",
      "categories": [
        "Restaurant",
        "Pub",
        "Discothèque",
        "Hotel",
        "Terasse",
        "Fast food",
        "Bar"
      ],
      "gastronomies": [
        "FR",
        "SN",
        "CA",
        "CN"
      ],
      "contact": {
        "phone": "00221.77.254.67.78",
        "email": "acceuil@pullman.sn"
      },
      "location": {
        "address": "2 RUE DU PALAIS PRESIDENTIEL",
        "zone": "Plateau",
        "district": "sandaga",
        "ocean": true,
        "country": "Senegal"
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 5,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:21:51.927Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:22:00.704Z",
      "CMS": [
        {
          "id": "CMS_BESTOFRESTAURANT",
          "order": 1
        }
      ],
      "pictures": [
        {
          "mobile": "https://pix10.agoda.net/hotelImages/782/78270/78270_17062310580054014184.jpg?s=1024x768",
          "desktop": "https://pix10.agoda.net/hotelImages/782/78270/78270_17062310580054014184.jpg?s=1024x768",
          "id": "0674aa31-fb4b-4a1f-9b5a-c0bfcc82fb3f"
        }
      ],
      "src": "https://pix10.agoda.net/hotelImages/782/78270/78270_17062310580054014184.jpg?s=1024x768",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#000000",
        "tertiaryColor": "#404042"
      },
      "__typename": "Place",
    },
    {
      "id": "MARINA_B_001",
      "name": "Marina B",
      "categories": [
        "Discothèque",
        "Restaurant",
        "Pub",
        "Terasse",
        "Bar"
      ],
      "gastronomies": [
        "FR",
        "CN",
        "MX",
        "LY"
      ],
      "contact": {
        "phone": "00221.77.234.12.00",
        "email": "acceuil@marina-b.sn"
      },
      "location": {
        "address": "23 ROUTE DES ALMADIES, DAKAR",
        "zone": "Les Almadies",
        "ocean": true,
        "country": "Senegal",
        "district": "almadies",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 3.5,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:34:33.566Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:34:48.874Z",
      "CMS": [
        {
          "id": "CMS_BESTOFRESTAURANT",
          "order": 3
        }
      ],
      "pictures": [
        {
          "mobile": "https://media-cdn.tripadvisor.com/media/photo-s/0c/c2/f8/a2/pool.jpg",
          "desktop": "https://media-cdn.tripadvisor.com/media/photo-s/0c/c2/f8/a2/pool.jpg",
          "id": "a311643d-8f73-482e-b3eb-630b8bf1dc85"
        }
      ],
      "src": "https://media-cdn.tripadvisor.com/media/photo-s/0c/c2/f8/a2/pool.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#B41115",
        "tertiaryColor": "#68A8C6"
      },
      "__typename": "Place",
    },
    {
      "id": "KFC_001",
      "name": "KFC",
      "categories": [
        "Restaurant",
        "Fast food"
      ],
      "gastronomies": [
        "US"
      ],
      "contact": {
        "phone": "+221 33 824 00 00",
        "email": "command@kfc-senegal.com"
      },
      "location": {
        "address": "Rue de l'Universite, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
      },
      "temporaly": false,
      "ranking": {
        "likes": 400,
        "notation": 4.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:27:41.562Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:27:51.402Z",
      "CMS": [
        {
          "id": "CMS_BESTOFRESTAURANT",
          "order": 4
        }
      ],
      "pictures": [
        {
          "mobile": "https://i0.wp.com/senegalblackrainbow.org/wp-content/uploads/2019/09/kfc.jpeg?resize=620%2C406&ssl=1",
          "desktop": "https://i0.wp.com/senegalblackrainbow.org/wp-content/uploads/2019/09/kfc.jpeg?resize=620%2C406&ssl=1",
          "id": "aefe4d02-5b93-44b3-91dc-4386f6d25ad1"
        }
      ],
      "src": "https://i0.wp.com/senegalblackrainbow.org/wp-content/uploads/2019/09/kfc.jpeg?resize=620%2C406&ssl=1",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#9E090F",
        "tertiaryColor": "#000000"
      },
      "__typename": "Place",
    },
    {
      "id": "TERROU_BI_001",
      "name": "Terrou-Bi",
      "categories": [
        "Hotel",
        "Restaurant",
        "Discothèque",
        "Terasse",
        "Fast food",
        "Bar"
      ],
      "gastronomies": [],
      "contact": {
        "phone": "00221.77.254.00.99",
        "email": "acceuil@terrou-bi.com"
      },
      "location": {
        "address": "1 RUE DE LA CORNICHE EST",
        "zone": "Corniche-Est",
        "district": "Fann",
        "ocean": true,
        "country": "Senegal"
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 3.9,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:31:22.864Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:31:33.234Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588595492/xlnluidq6hrj8f9s9zxb.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588595492/xlnluidq6hrj8f9s9zxb.jpg",
          "id": "bb699017-ac39-437e-9d58-21ad3381abac"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588595492/xlnluidq6hrj8f9s9zxb.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#9A9275",
        "tertiaryColor": "#000000"
      },
      "__typename": "Place",
    },
    {
      "id": "SHARKYS_001",
      "name": "Sharkys",
      "categories": [
        "Restaurant",
        "Pub",
        "Terasse",
        "Fast food",
        "Bar"
      ],
      "gastronomies": [
        "FR",
        "SN"
      ],
      "contact": {
        "phone": "00221.77.254.67.76",
        "email": "direction@sharkys.com"
      },
      "location": {
        "address": "Rue ng-172, Dakar, Sénégal",
        "zone": "Corniche-Ouest",
        "ocean": true,
        "country": "Senegal",
        "district": "Les mamelles",
      },
      "temporaly": false,
      "ranking": {
        "likes": 400,
        "notation": 4.6,
        "total": 0,
        "votes": 0
      },
      //"logo": "https://chichamaps.s3.amazonaws.com/uploads/sharkys-dakar-chicha-shisha-hookah-restaurant-narguile-cachimba-kalyan.jpg",
      "CREATED_AT": "2020-05-04T12:06:56.117Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:08:37.809Z",
      "CMS": [
        {
          "id": "CMS_BESTOFRESTAURANT",
          "order": 6
        }
      ],
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594116/vibjiiz5h1lsdv6vfxxc.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588594116/vibjiiz5h1lsdv6vfxxc.jpg",
          "id": "b22a9d06-6ba6-46f3-a1c6-1845292d59d5"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594116/vibjiiz5h1lsdv6vfxxc.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#5BC5D4",
        "tertiaryColor": "#C11D28"
      },
      "__typename": "Place",
    },
    {
      "id": "LE_GONDOLIER_001",
      "name": "Le Gondolier",
      "categories": [
        "Restaurant",
        "Pub",
        "Discothèque",
        "Hotel",
        "Terasse",
        "Fast food",
        "Bar"
      ],
      "gastronomies": [
        "FR"
      ],
      "contact": {
        "phone": "00221.77.254.67.76",
        "email": "commande@legondolier.com"
      },
      "location": {
        "address": "67 AV VIRAGE, DAKAR",
        "zone": "YOFF",
        "ocean": true,
        "country": "Senegal",
        "district": "virage",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:15:22.675Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:15:34.761Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594533/ahofk2p6fhiess8sva0y.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588594533/ahofk2p6fhiess8sva0y.jpg",
          "id": "05c25971-08a5-4453-ac78-34241e2f89e3"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594533/ahofk2p6fhiess8sva0y.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#C2C7C2",
        "tertiaryColor": "#6B695E"
      },
      "__typename": "Place",
    },
    {
      "id": "LA_GALETTE_001",
      "name": "La galette ",
      "categories": [
        "Restaurant",
        "Terasse",
        "Fast food"
      ],
      "gastronomies": [
        "FR",
        "SN",
        "LY"
      ],
      "contact": {
        "phone": "00221.99.567.98.66",
        "email": "commande@lagalette.com"
      },
      "location": {
        "address": "1 AV POMPIDOU",
        "zone": "Plateau",
        "ocean": false,
        "country": "Senegal",
        "district": "sandaga",
      },
      "temporaly": true,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:18:01.828Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:18:13.823Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594692/d6jzcdttocrxipbktbgc.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588594692/d6jzcdttocrxipbktbgc.jpg",
          "id": "882c98f4-e52b-4535-ba0c-0991a8258305"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594692/d6jzcdttocrxipbktbgc.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#790107",
        "tertiaryColor": "#252525"
      },
      "__typename": "Place",
    },
    {
      "id": "LA_GONDOLE_001",
      "name": "La Gondole",
      "categories": [
        "Restaurant",
        "Pub",
        "Terasse",
        "Fast food"
      ],
      "gastronomies": [
        "FR"
      ],
      "contact": {
        "phone": "00221.77.989.90.09",
        "email": "commande@lagondole.com"
      },
      "location": {
        "address": "25 AV POMPIDOU, DAKAR",
        "zone": "Plateau",
        "ocean": true,
        "country": "Senegal",
        "district": "sandaga",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:13:14.396Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:13:27.805Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594406/olqtk9akvtnlfpcyjuzt.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588594406/olqtk9akvtnlfpcyjuzt.jpg",
          "id": "24b11e58-e042-433e-9c8d-b587041ca903"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588594406/olqtk9akvtnlfpcyjuzt.jpg",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#B5030F",
        "tertiaryColor": "#7DB02A"
      },
      "__typename": "Place",
    },
    {
      "id": "HOTEL_VDN_001",
      "name": "Hotel vdn",
      "categories": [
        "Terasse",
        "Hotel",
        "Restaurant",
        "Fast food",
        "Bar"
      ],
      "gastronomies": [
        "FR",
        "US"
      ],
      "contact": {
        "phone": "00221.77.254.67.70",
        "email": "acceuil@hotel-vdn.com"
      },
      "location": {
        "address": "23 VOIE VDN, DAKAR",
        "zone": "SICAP",
        "ocean": false,
        "country": "Senegal",
        "district": "Sacrè coeur",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:40:43.411Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:41:06.551Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588596064/vlajqvek3fiktbsjblte.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588596064/vlajqvek3fiktbsjblte.jpg",
          "id": "3084ed9c-257f-4d00-a731-3db4d38a5973"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588596064/vlajqvek3fiktbsjblte.jpg",
      "__typename": "Place",
    },
    {
      "id": "CHEZ_KATIA",
      "name": "Chez katia",
      "categories": [
        "Terasse",
        "Fast food",
        "Restaurant",
        "Pub",
        "Bar"
      ],
      "gastronomies": [
        "US",
        "SN"
      ],
      "contact": {
        "phone": "00221.77.098.99.76",
        "email": "commande@chezkatia.com"
      },
      "location": {
        "address": "56 ROUTE DES ALMADIES, DAKAR",
        "zone": "Les Almadies",
        "ocean": false,
        "country": "Senegal",
        "district": "Les Almadies",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:44:48.597Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:45:00.121Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588596298/hgudxvwwqdhbg4b7ytez.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588596298/hgudxvwwqdhbg4b7ytez.jpg",
          "id": "3533027a-5d5f-4377-96fb-a2886575141d"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588596298/hgudxvwwqdhbg4b7ytez.jpg",
      "__typename": "Place",
    },
    {
      "id": "ALI_BABA_001",
      "name": "ALI BABA",
      "categories": [
        "Fast food",
        "Restaurant",
        "Terasse",
        "Bar"
      ],
      "gastronomies": [
        "DZ"
      ],
      "contact": {
        "phone": "00221.77.254.67.55",
        "email": "commande@ali-baba.com"
      },
      "location": {
        "address": "2 RUE DES PASSERELLES",
        "zone": "SICAP",
        "district": "Sacré Coeur 2",
        "ocean": false,
        "country": "Senegal",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-05T18:40:32.340Z",
      "LAST_UPDATE_DATE": "2020-05-05T18:40:44.789Z",
      "pictures": [
        {
          "mobile": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588704044/tt01q9t6zlqnip97myqq.jpg",
          "desktop": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_300,w_400/v1588704044/tt01q9t6zlqnip97myqq.jpg",
          "id": "b62a07cf-5f55-4a60-bfb9-7631f9c4f185"
        }
      ],
      "src": "https://res.cloudinary.com/dkv/image/upload/c_scale,h_150,w_200/v1588704044/tt01q9t6zlqnip97myqq.jpg",
      "__typename": "Place",
    },
    {
      "id": "DIBITERIE_MBOUTE_001",
      "name": "Dibiterie le Mbouté",
      "categories": [
        "Fast food",
        "Restaurant",
        "Terasse",
      ],
      "gastronomies": [
        "DZ"
      ],
      "contact": {
        "phone": "+221338221388",
        "email": "commande@mboute.com"
      },
      "location": {
        "address": "Rue 11 x 6 Medina Dakar, SENEGAL",
        "zone": "Medina",
        "district": "RUE 11 x 21",
        "ocean": false,
        "country": "Senegal",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-05T18:40:32.340Z",
      "LAST_UPDATE_DATE": "2020-05-05T18:40:44.789Z",
      "pictures": [
        {
          "mobile": "https://lesateliersdeiba.files.wordpress.com/2017/12/dibi-34.jpg?w=470",
          "desktop": "https://lesateliersdeiba.files.wordpress.com/2017/12/dibi-34.jpg?w=470",
          "id": "b62a07cf-5f55-4a60-bfb9-7631f9c4f185"
        }
      ],
      "src": "https://lesateliersdeiba.files.wordpress.com/2017/12/dibi-34.jpg?w=470",
      "__typename": "Place",
    },
    {
      "id": "DIBITERIE_OUBA_001",
      "name": "Dibiterie OUBA",
      "categories": [
        "Fast food",
        "Restaurant",
        "Terasse",
      ],
      "gastronomies": [
        "DZ"
      ],
      "contact": {
        "phone": "+221 77 633 57 57",
        "email": "commande@ouba.com"
      },
      "location": {
        "address": "RUE DES GARDIENS, GRAND YOFF, SENEGAL",
        "zone": "YOFF",
        "district": "GRAND YOFF",
        "ocean": false,
        "country": "Senegal",
      },
      "temporaly": false,
      "ranking": {
        "likes": 0,
        "notation": 0,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-05T18:40:32.340Z",
      "LAST_UPDATE_DATE": "2020-05-05T18:40:44.789Z",
      "pictures": [
        {
          "mobile": "https://www.leral.net/photo/art/grande/45307661-36650381.jpg?v=1587806662",
          "desktop": "https://www.leral.net/photo/art/grande/45307661-36650381.jpg?v=1587806662",
          "id": "b62a07cf-5f55-4a60-bfb9-7631f9c4f185"
        }
      ],
      "src": "https://www.leral.net/photo/art/grande/45307661-36650381.jpg?v=1587806662",
      "__typename": "Place",
    },
    {
      "id": "MCDO_001",
      "name": "McDonalds",
      "categories": [
        "Restaurant",
        "Fast food"
      ],
      "gastronomies": [
        "US"
      ],
      "contact": {
        "phone": "+221 33 824 00 03",
        "email": "command@mcdonalds.com"
      },
      "location": {
        "address": "Rue du dauphin, Dakar, Sénégal",
        "zone": "Corniche-Est",
        "district": "Point E",
        "ocean": true,
        "country": "Senegal",
      },
      "temporaly": false,
      "ranking": {
        "likes": 500,
        "notation": 4.6,
        "total": 0,
        "votes": 0
      },
      "CREATED_AT": "2020-05-04T12:27:41.562Z",
      "LAST_UPDATE_DATE": "2020-05-04T12:27:51.402Z",
      "CMS": [
        {
          "id": "CMS_BESTOFRESTAURANT",
          "order": 5
        }
      ],
      //"logo": "https://m.mcdonalds.fr/mcdo-mcdofr-front-theme-mobile/image/mcdo-france-android-app.png",
      "pictures": [
        {
          "mobile": "https://ciliabule.fr/wp-content/uploads/mcdonalds-marketing-ciliabule-1080x608.png",
          "desktop": "https://ciliabule.fr/wp-content/uploads/mcdonalds-marketing-ciliabule-1080x608.png",
          "id": "aefe4d02-5b93-44b3-91dc-4386f6d25ad1"
        }
      ],
      "src": "https://ciliabule.fr/wp-content/uploads/mcdonalds-marketing-ciliabule-1080x608.png",
      "THEME": {
        "primaryColor": "#FFFFFF",
        "secondaryColor": "#044713",
        "tertiaryColor": "#FCC611"
      },
      "__typename": "Place",
    }
  ]
}
export default placeSample;
