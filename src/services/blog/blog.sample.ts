const blogData = [
  {
    name: "event_day",
    label: "À venir",
    position: 0,
    card: {
      header: true,
      type: 'darkLargeCard'
    },
    children: [
      {
        labelLeft: "Concert de Youssou",
        sublabelLeft: "Grand Théatre",
        labelRight: "Jeudi 1er janvier",
        sublabelRight: "13h10",
        photo: "https://xalimasn.com/wp-content/uploads/2018/06/10257393-16743230.jpg"
      },
      {
        labelLeft: "Concert de Dip",
        sublabelLeft: "Place de la Nation",
        labelRight: "Jeudi 1er janvier",
        sublabelRight: "13h10",
        photo: "https://www.metrodakar.net/wp-content/uploads/2019/09/Dip-Doundou-Guiss-1.jpg"
      },
      {
        labelLeft: "Sound System",
        sublabelLeft: "Sharkys",
        labelRight: "Jeudi 1er janvier",
        sublabelRight: "13h10",
        photo: "https://agdk.nelamservices.com/system/evenements/photos/000/007/590/cover/19944640_667495760110906_5568639689739389797_o.jpg?1500291123",
      },
      {
        labelLeft: "Teaupla de Elzo",
        sublabelLeft: "Sharkys",
        labelRight: "Jeudi 5 janvier",
        sublabelRight: "17h10",
        photo: "https://i.ytimg.com/vi/2Q0K1FqetgY/maxresdefault.jpg",
      }
    ]
  },
  {
    name: "fashion_place",
    label: "Tendance du moment",
    position: 1,
    card: {
      header: true,
      type: 'darkLongCard'
    },
    children: [
      {
        labelLeft: "Sharkys",
        notation: 3.7,
        likes: 45,
        photo: "https://s3-media0.fl.yelpcdn.com/bphoto/mQ4kaIpefJ2oy-OkpGFeYQ/o.jpg"
      },
      {
        labelLeft: "Marina B",
        notation: 4.7,
        likes: 18,
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/0b/8f/66/14/photo3jpg.jpg"
      },
      {
        labelLeft: "Pullman",
        notation: 4.9,
        likes: 18,
        photo: "https://content.r9cdn.net/rimg/himg/dc/07/9b/ice-36146-62191757_3XL-611285.jpg?width=500&height=350&crop=true&caller=HotelDetailsPage3"
      },
      {
        labelLeft: "Radisson",
        notation: 2,
        likes: 18,
        photo: "https://i.pinimg.com/originals/94/64/6e/94646e44bc3766a79729b94bf4e0f7ff.jpg"
      }
    ]
  },
  {
    name: "disco",
    label: "Discothèque",
    position: 2,
    card: {
      header: true,
      type: 'darkLargeCard'
    },
    children: [
      {
        labelLeft: "Castel Nigth Club",
        sublabelLeft: "Place de la Nation",
        labelRight: "Jeudi 1er janvier",
        sublabelRight: "13h10",
        photo:
          "https://1.bp.blogspot.com/-4paBx8uqqEg/XXuQ5h0bs5I/AAAAAAAACCg/pFgxliojeEcMW1q4jFyXLyGfaUHLuyEEQCLcBGAsYHQ/s640/Club-night-soiree-party-vacance-loisirs-sortie-LEUKSENEGAL-Dakar-Senegal-Afrique-Castel.jpg"
      },
      {
        labelLeft: "Night Club Gaindé",
        sublabelLeft: "Place de la Nation",
        labelRight: "Jeudi 1er janvier",
        sublabelRight: "13h10",
        photo: "https://i.ytimg.com/vi/PWwmJ9MnTyU/maxresdefault.jpg"
      },
      {
        labelLeft: "Sound System",
        sublabelLeft: "Plage de mamelle",
        labelRight: "Jeudi 1er janvier",
        sublabelRight: "13h10",
        photo: "https://agdk.nelamservices.com/system/evenements/photos/000/007/590/cover/19944640_667495760110906_5568639689739389797_o.jpg?1500291123"
      }
    ]
  },
  {
    name: "fashion_artist",
    label: "Artiste du moment",
    position: 3,
    card: {
      header: true,
      type: 'darkCardList'
    },
    children: [
      {
        labelRight: "Wally Seck",
        photo: "https://www.accorhotelsarena.com/sites/default/files/mock-up-event_wally_0.jpg",
        children: [
          {
            name: "Place de la Nation",
            value: "Lundi 13 Janvier"
          },
          {
            name: "Grand théâtre",
            value: "Lundi 14 Janvier"
          },
          {
            name: "Penc Mi",
            value: "Lundi 15 Janvier"
          },
          {
            name: "Baramundi",
            value: "Lundi 18 Janvier"
          }
        ]
      },
      {
        labelRight: "Pape DIOUF",
        photo: "http://thieysenegal.com/images/Pape-Diouf-chanteur.jpg",
        children: [
          {
            name: "Sarona",
            value: "Lundi 13 Janvier"
          },
          {
            name: "Grand théâtre",
            value: "Lundi 144 Janvier"
          },
          {
            name: "Pullman",
            value: "Lundi 17 Janvier"
          },
          {
            name: "Paris Congrès",
            value: "Lundi 18 Janvier"
          }
        ]
      },
      {
        labelRight: "Dip Doundou GUISS",
        photo: "https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/201902/dipsurscene.jpg?itok=k-oihIgB",
        children: [
          {
            name: "Stade Leopole Senghor",
            value: "Lundi 13 Janvier"
          },
          {
            name: "Grand théâtre",
            value: "Lundi 14 Janvier"
          },
          {
            name: "Zenith Paris",
            value: "Lundi 15 Janvier"
          },
          {
            name: "Baramundi",
            value: "Lundi 18 Janvier"
          }
        ]
      },
    ]
  }
]

export default blogData;