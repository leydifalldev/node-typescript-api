
fs = require('fs');

const countries = [
  {
    "name": "Afghanistan",
    "collection": "countries"
  },
  {
    "name": "Afrique du Sud",
    "collection": "countries"
  },
  {
    "name": "Albanie",
    "collection": "countries"
  },
  {
    "name": "Algérie",
    "collection": "countries"
  },
  {
    "name": "Allemagne",
    "collection": "countries"
  },
  {
    "name": "Andorre",
    "collection": "countries"
  },
  {
    "name": "Angola",
    "collection": "countries"
  },
  {
    "name": "Antigua-et-Barbuda",
    "collection": "countries"
  },
  {
    "name": "Arabie saoudite",
    "collection": "countries"
  },
  {
    "name": "Argentine",
    "collection": "countries"
  },
  {
    "name": "Arménie",
    "collection": "countries"
  },
  {
    "name": "Australie",
    "collection": "countries"
  },
  {
    "name": "Autriche",
    "collection": "countries"
  },
  {
    "name": "Azerbaïdjan",
    "collection": "countries"
  },
  {
    "name": "Bahamas",
    "collection": "countries"
  },
  {
    "name": "Bahreïn",
    "collection": "countries"
  },
  {
    "name": "Bangladesh",
    "collection": "countries"
  },
  {
    "name": "Barbade",
    "collection": "countries"
  },
  {
    "name": "Belgique",
    "collection": "countries"
  },
  {
    "name": "Belize",
    "collection": "countries"
  },
  {
    "name": "Bhoutan",
    "collection": "countries"
  },
  {
    "name": "Birmanie",
    "collection": "countries"
  },
  {
    "name": "Biélorussie",
    "collection": "countries"
  },
  {
    "name": "Bolivie",
    "collection": "countries"
  },
  {
    "name": "Bosnie-Herzégovine",
    "collection": "countries"
  },
  {
    "name": "Botswana",
    "collection": "countries"
  },
  {
    "name": "Brunei",
    "collection": "countries"
  },
  {
    "name": "Brésil",
    "collection": "countries"
  },
  {
    "name": "Bulgarie",
    "collection": "countries"
  },
  {
    "name": "Burkina",
    "collection": "countries"
  },
  {
    "name": "Burundi",
    "collection": "countries"
  },
  {
    "name": "Bénin",
    "collection": "countries"
  },
  {
    "name": "Cambodge",
    "collection": "countries"
  },
  {
    "name": "Cameroun",
    "collection": "countries"
  },
  {
    "name": "Canada",
    "collection": "countries"
  },
  {
    "name": "Cap-Vert",
    "collection": "countries"
  },
  {
    "name": "Centrafrique",
    "collection": "countries"
  },
  {
    "name": "Chili",
    "collection": "countries"
  },
  {
    "name": "Chine",
    "collection": "countries"
  },
  {
    "name": "Chypre",
    "collection": "countries"
  },
  {
    "name": "Colombie",
    "collection": "countries"
  },
  {
    "name": "Comores",
    "collection": "countries"
  },
  {
    "name": "Congo",
    "collection": "countries"
  },
  {
    "name": "Corée du Nord",
    "collection": "countries"
  },
  {
    "name": "Corée du Sud",
    "collection": "countries"
  },
  {
    "name": "Costa Rica",
    "collection": "countries"
  },
  {
    "name": "Croatie",
    "collection": "countries"
  },
  {
    "name": "Cuba",
    "collection": "countries"
  },
  {
    "name": "Côte d'Ivoire",
    "collection": "countries"
  },
  {
    "name": "Danemark",
    "collection": "countries"
  },
  {
    "name": "Djibouti",
    "collection": "countries"
  },
  {
    "name": "Dominique",
    "collection": "countries"
  },
  {
    "name": "Egypte",
    "collection": "countries"
  },
  {
    "name": "Emirats arabes unis",
    "collection": "countries"
  },
  {
    "name": "Equateur",
    "collection": "countries"
  },
  {
    "name": "Erythrée",
    "collection": "countries"
  },
  {
    "name": "Espagne",
    "collection": "countries"
  },
  {
    "name": "Estonie",
    "collection": "countries"
  },
  {
    "name": "Etats-Unis",
    "collection": "countries"
  },
  {
    "name": "Ethiopie",
    "collection": "countries"
  },
  {
    "name": "Fidji",
    "collection": "countries"
  },
  {
    "name": "Finlande",
    "collection": "countries"
  },
  {
    "name": "France",
    "collection": "countries"
  },
  {
    "name": "Gabon",
    "collection": "countries"
  },
  {
    "name": "Gambie",
    "collection": "countries"
  },
  {
    "name": "Ghana",
    "collection": "countries"
  },
  {
    "name": "Grenade",
    "collection": "countries"
  },
  {
    "name": "Grèce",
    "collection": "countries"
  },
  {
    "name": "Guatemala",
    "collection": "countries"
  },
  {
    "name": "Guinée",
    "collection": "countries"
  },
  {
    "name": "Guinée équatoriale",
    "collection": "countries"
  },
  {
    "name": "Guinée-Bissao",
    "collection": "countries"
  },
  {
    "name": "Guyana",
    "collection": "countries"
  },
  {
    "name": "Géorgie",
    "collection": "countries"
  },
  {
    "name": "Haïti",
    "collection": "countries"
  },
  {
    "name": "Honduras",
    "collection": "countries"
  },
  {
    "name": "Hongrie",
    "collection": "countries"
  },
  {
    "name": "Inde",
    "collection": "countries"
  },
  {
    "name": "Indonésie",
    "collection": "countries"
  },
  {
    "name": "Irak",
    "collection": "countries"
  },
  {
    "name": "Iran",
    "collection": "countries"
  },
  {
    "name": "Irlande",
    "collection": "countries"
  },
  {
    "name": "Islande",
    "collection": "countries"
  },
  {
    "name": "Israël",
    "collection": "countries"
  },
  {
    "name": "Italie",
    "collection": "countries"
  },
  {
    "name": "Jamaïque",
    "collection": "countries"
  },
  {
    "name": "Japon",
    "collection": "countries"
  },
  {
    "name": "Jordanie",
    "collection": "countries"
  },
  {
    "name": "Jérusalem - Territoires palestiniens",
    "collection": "countries"
  },
  {
    "name": "Kazakhstan",
    "collection": "countries"
  },
  {
    "name": "Kenya",
    "collection": "countries"
  },
  {
    "name": "Kirghizstan",
    "collection": "countries"
  },
  {
    "name": "Kiribati",
    "collection": "countries"
  },
  {
    "name": "Kosovo",
    "collection": "countries"
  },
  {
    "name": "Koweït",
    "collection": "countries"
  },
  {
    "name": "Laos",
    "collection": "countries"
  },
  {
    "name": "Lesotho",
    "collection": "countries"
  },
  {
    "name": "Lettonie",
    "collection": "countries"
  },
  {
    "name": "Liban",
    "collection": "countries"
  },
  {
    "name": "Liberia",
    "collection": "countries"
  },
  {
    "name": "Libye",
    "collection": "countries"
  },
  {
    "name": "Liechtenstein",
    "collection": "countries"
  },
  {
    "name": "Lituanie",
    "collection": "countries"
  },
  {
    "name": "Luxembourg",
    "collection": "countries"
  },
  {
    "name": "Macédoine",
    "collection": "countries"
  },
  {
    "name": "Madagascar",
    "collection": "countries"
  },
  {
    "name": "Malaisie",
    "collection": "countries"
  },
  {
    "name": "Malawi",
    "collection": "countries"
  },
  {
    "name": "Maldives",
    "collection": "countries"
  },
  {
    "name": "Mali",
    "collection": "countries"
  },
  {
    "name": "Malte",
    "collection": "countries"
  },
  {
    "name": "Maroc",
    "collection": "countries"
  },
  {
    "name": "Marshall",
    "collection": "countries"
  },
  {
    "name": "Maurice",
    "collection": "countries"
  },
  {
    "name": "Mauritanie",
    "collection": "countries"
  },
  {
    "name": "Mexique",
    "collection": "countries"
  },
  {
    "name": "Micronésie",
    "collection": "countries"
  },
  {
    "name": "Moldavie",
    "collection": "countries"
  },
  {
    "name": "Monaco",
    "collection": "countries"
  },
  {
    "name": "Mongolie",
    "collection": "countries"
  },
  {
    "name": "Monténégro",
    "collection": "countries"
  },
  {
    "name": "Mozambique",
    "collection": "countries"
  },
  {
    "name": "Namibie",
    "collection": "countries"
  },
  {
    "name": "Nauru",
    "collection": "countries"
  },
  {
    "name": "Nicaragua",
    "collection": "countries"
  },
  {
    "name": "Niger",
    "collection": "countries"
  },
  {
    "name": "Nigeria",
    "collection": "countries"
  },
  {
    "name": "Norvège",
    "collection": "countries"
  },
  {
    "name": "Nouvelle-Zélande",
    "collection": "countries"
  },
  {
    "name": "Népal",
    "collection": "countries"
  },
  {
    "name": "Oman",
    "collection": "countries"
  },
  {
    "name": "Ouganda",
    "collection": "countries"
  },
  {
    "name": "Ouzbékistan",
    "collection": "countries"
  },
  {
    "name": "Pakistan",
    "collection": "countries"
  },
  {
    "name": "Palaos",
    "collection": "countries"
  },
  {
    "name": "Panama",
    "collection": "countries"
  },
  {
    "name": "Papouasie-Nouvelle-Guinée",
    "collection": "countries"
  },
  {
    "name": "Paraguay",
    "collection": "countries"
  },
  {
    "name": "Pays-Bas",
    "collection": "countries"
  },
  {
    "name": "Philippines",
    "collection": "countries"
  },
  {
    "name": "Pologne",
    "collection": "countries"
  },
  {
    "name": "Portugal",
    "collection": "countries"
  },
  {
    "name": "Pérou",
    "collection": "countries"
  },
  {
    "name": "Qatar",
    "collection": "countries"
  },
  {
    "name": "Roumanie",
    "collection": "countries"
  },
  {
    "name": "Royaume-Uni",
    "collection": "countries"
  },
  {
    "name": "Russie",
    "collection": "countries"
  },
  {
    "name": "Rwanda",
    "collection": "countries"
  },
  {
    "name": "République dominicaine",
    "collection": "countries"
  },
  {
    "name": "République démocratique du Congo",
    "collection": "countries"
  },
  {
    "name": "République tchèque",
    "collection": "countries"
  },
  {
    "name": "Saint-Christophe-et-Niévès",
    "collection": "countries"
  },
  {
    "name": "Saint-Marin",
    "collection": "countries"
  },
  {
    "name": "Saint-Siège",
    "collection": "countries"
  },
  {
    "name": "Saint-Vincent-et-les Grenadines",
    "collection": "countries"
  },
  {
    "name": "Sainte-Lucie",
    "collection": "countries"
  },
  {
    "name": "Salomon",
    "collection": "countries"
  },
  {
    "name": "Salvador",
    "collection": "countries"
  },
  {
    "name": "Samoa",
    "collection": "countries"
  },
  {
    "name": "Sao Tomé-et-Principe",
    "collection": "countries"
  },
  {
    "name": "Serbie",
    "collection": "countries"
  },
  {
    "name": "Seychelles",
    "collection": "countries"
  },
  {
    "name": "Sierra Leone",
    "collection": "countries"
  },
  {
    "name": "Singapour",
    "collection": "countries"
  },
  {
    "name": "Slovaquie",
    "collection": "countries"
  },
  {
    "name": "Slovénie",
    "collection": "countries"
  },
  {
    "name": "Somalie",
    "collection": "countries"
  },
  {
    "name": "Soudan",
    "collection": "countries"
  },
  {
    "name": "Sri Lanka",
    "collection": "countries"
  },
  {
    "name": "Suisse",
    "collection": "countries"
  },
  {
    "name": "Suriname",
    "collection": "countries"
  },
  {
    "name": "Suède",
    "collection": "countries"
  },
  {
    "name": "Swaziland",
    "collection": "countries"
  },
  {
    "name": "Syrie",
    "collection": "countries"
  },
  {
    "name": "Sénégal",
    "collection": "countries"
  },
  {
    "name": "Tadjikistan",
    "collection": "countries"
  },
  {
    "name": "Tanzanie",
    "collection": "countries"
  },
  {
    "name": "Taïwan",
    "collection": "countries"
  },
  {
    "name": "Tchad",
    "collection": "countries"
  },
  {
    "name": "Thaïlande",
    "collection": "countries"
  },
  {
    "name": "Timor oriental",
    "collection": "countries"
  },
  {
    "name": "Togo",
    "collection": "countries"
  },
  {
    "name": "Tonga",
    "collection": "countries"
  },
  {
    "name": "Trinité-et-Tobago",
    "collection": "countries"
  },
  {
    "name": "Tunisie",
    "collection": "countries"
  },
  {
    "name": "Turkménistan",
    "collection": "countries"
  },
  {
    "name": "Turquie",
    "collection": "countries"
  },
  {
    "name": "Tuvalu",
    "collection": "countries"
  },
  {
    "name": "Ukraine",
    "collection": "countries"
  },
  {
    "name": "Uruguay",
    "collection": "countries"
  },
  {
    "name": "Vanuatu",
    "collection": "countries"
  },
  {
    "name": "Venezuela",
    "collection": "countries"
  },
  {
    "name": "Viêt Nam",
    "collection": "countries"
  },
  {
    "name": "Yémen",
    "collection": "countries"
  },
  {
    "name": "Zambie",
    "collection": "countries"
  },
  {
    "name": "Zimbabwe",
    "collection": "countries"
  }
]

let values = countries.map(country => {
  console.log({...country, id: country.name, label: country.name, category: "country", collection: "world-countries",});
  console.log(',');
});
fs.writeFile('./countries.json', values, (error) => {
  console.log(error);
});

console.log(values);