import { gql } from "apollo-server-express";

const typeDefs = gql`
type Query {
  aggModelByField(model: Model!, criteria: [NameValueInput], fieldname: String!): [Attribute]!
  aggPlaceByField(criteria: [NameValueInput], fieldname: String!): [Attribute]!
  aggPlaceByZone(criteria: [NameValueInput]): [Attribute]!
  aggProductByField(criteria: [NameValueInput], fieldname: String!): [Attribute]!
  aggProductByNestedField(criteria: [NameValueInput]!, parentField: String!, childField: String!): [Attribute]!
  aggUserByZone: [Attribute]
  getRootMeta: [Attribute]
  getUser(userid: String!): User!
  getUserByEmail(email: String!): User
  getAccount(query: AccountQuery): Account
  getCard(model: Model!, id: ID!): Card
  getPlace(id: String!): Card!
  getProduct(id: String!): Product!
  getEvent(eventid: String!): Event!
  getUsersByLike(placeid: String!): UserListResponse!
  getLocations(size: Int, criteria: [NameValueInput]): MetaLocationList!
  getMetaList(model: Model!, parentID: ID!): MetaListResponse!
  getMeta(model: Model!, id: ID!): IMeta! 
  getPage(criteria: [NameValueInput]): [TSection]
  getPageModel(criteria: [NameValueInput]): [PageCategory]
  getCmsPage(criteria: [NameValueInput], size: Int!, from: Int!): [SectionCategory]
  getSectionTab(criteria: [NameValueInput]): [TSection]
  getProductAgg(placeid: String!): [Attribute]!
  getCMSPlaces(id: String!): [Place]
  getCMSProducts(id: String!): [Product]
  getCatalogue(sellerid: String!): CatalogueResponse
  getProfile(id: String!): User!
  getCollections(sellerid: String!, categoriesName: [String!]!, collectionName: String!): [Collection]
  getInputOptions(model: String!, input: String!): [Template]
  groupByDateEvent(criteria: [NameValueInput], size: Int, from: Int): [Attribute]!
  groupProductByField(criteria: [NameValueInput], field: String!): [ProductGroup]
  hydrate: Boolean!
  isValidUser(password: String!, email: String!): String!
  metricRegister: [Attribute]!
  profiles: [User!]!
  searchUser(size: Int, from: Int, criteria: [NameValueInput]): UserListResponse!
  searchPlace(size: Int, from: Int, criteria: [NameValueInput]): PlaceListResponse!
  searchProduct(size: Int, from: Int, criteria: [NameValueInput]): ProductListResponse
  searchEvent(size: Int, from: Int, criteria: [NameValueInput]): EventListResponse!
  searchMeta(model: Model!, type: SearchType!, q: String): MetaListResponse!
  searchLayout(start: String!, end: String!): [TLayout]
  searchLocations(size: Int, criteria: [NameValueInput]): MetaLocationList!
  token(id: String!): String!
}

enum SearchType {
  getByParentID
  prefixSearch
  search
}

input CustomSearchInput {
  type: SearchType!
  parentID: ID
}

type THeader {
  label: String
  sublabel: String
}

type SectionCategory {
  id: String
  order: Int
  header: THeader
  sections: [Section]
}

type SectionTheme {
  base: String
  backgroundColor: String
}

type Section {
  id: ID!
  total: Int
  header: TSectionHeader
  cardComponent: cardComponent!
  templateSearch: templateSearch
  fetchParams: FetchParams
  sellerid: String
  name: String
  collection: String
  category: String
  screen: String
  order: Int
  cards: [Card]
  sectionTheme: SectionTheme
}

type CatalogueResponse {
  id: String
  sections: [Section]
  CATALOGUE_CATEGORIES: [Attribute]
}

type Collection {
  id: String
  sellerid: String
  name: String
  total: Int
  category: Attribute!
  collection: Attribute!
  order: Int!
  cards: [Product]
  ENABLED: Boolean
  CREATED_AT: String
  LAST_UPDATE_DATE: String
  LAST_UPDATE_USER: String
}

input CollectionInput {
  id: String
  sellerid: String!
  name: String
  total: Int
  category: AttributeInput!
  collection: AttributeInput!
  order: Int
  cards: [ProductInput]
}

type ProductGroup {
  name: String!
  total: Int
  items: [Product]
}

type Mutation {
  #addPicturesUser(userid: String!, pictures: [Upload!]!): Boolean
  uploadPictures(model: String!, id: ID!, pictures: [Upload!]!, formatType: String!): Boolean
  uploadPicture(model: String!, id: ID!, picture: Upload!, field: String!): Boolean
  deletePictures(model: String!, modelId: ID!, picturesIds: [String!]!): Boolean
  deleteEntities(model: Model!, modelIds: [ID!]!, catalogueToRefresh: ID): Boolean!
  addCatCol(catcol: I_Meta!): String
  addMeta(meta: I_Meta!): String!
  addProductToCatalogue(product: ProductInput): Boolean!
  addProductToPlace(placeid: String!, product: ProductInput!): String!
  # addLogo(model: Model!, modelId: ID!, picture: [Upload!]!): Picture
  addTCollection(tcollection: TCollectionInput): String!
  addTCategory(tcategory: TCategoryInput): String!
  addTSize(tsize: TSizeInput): String!
  addTSpicy(tquantity: TSpicyInput): String!
  addTRole(trole: TRoleInput): String!
  addTIngredient(tingredient: TIngredientInput): String!
  addTRecipe(trecipe: TRecipeInput): String!
  addTGastronomy(tgastronomy: TGastronomyInput): String!
  addTSection(tsection: TSectionInput): String!
  addTLayout(tlayout: TLayoutInput): String!
  createUser(user: UserInput!): String!
  createPlace(place: PlaceInput!): String!
  createProduct(product: ProductInput!): String!
  create(model: String!, ): String!
  createEvent(event: EventInput!): String!
  deleteUser(userid: String!): Boolean!
  deletePlace(placeid: String!): Boolean!
  deleteProduct(id: String!): Boolean!
  deleteEvent(id: ID!): Boolean!
  deleteMeta(ids: [ID!]!): Boolean!
  getProduct(id: String!): [Card!]!
  generateQRCode(model: Model!, modelId: ID!): String!
  getEvent(id: String!): [Event!]!
  likePlace(placeid: String!): Boolean!
  login(email: String!, password: String!): Passport!
  #updateCatalogueOrder(sellerid: String!, order: [AttributeInput!]!): Boolean
  updateCategoriesOrder(sellerid: String!, order: [AttributeInput!]!): Boolean
  updateCollection(collection: CollectionInput!): Boolean!
  #uploadPictureUser(userid: String!, picture: Upload!): Boolean
  uploadPicturesPlace(placeid: String!, pictures: [Upload!]!): Boolean!
  uploadPicturesProduct(productid: String!, pictures: [Upload!]!, formatType: String!): Boolean
  uploadPicturesEvent(id: String!, pictures: [Upload!]!): Boolean
  updateUser(id: String!, user: UserUpdateInput!): Boolean!
  updatePlace(id: ID!, place: PlaceUpdateInput!): Boolean!
  updateProduct(id: ID!, product: ProductUpdateInput!): UpdateResponse!
  updateEvent(id: String!, user: EventUpdateInput!): Boolean!
  refreshCatalogue(sellerid: String!): [SectionCategory]
  refreshCollectionFromCatalogue(collection: CollectionInput): Boolean!
  setAvatar(model: Model!, modelId: ID!, pictureId: ID!): Boolean!
  setNotation(entity: String!, id: String!, notation: Float!, comment: String): Boolean!
  setProductCategories(placeid: String!): Boolean
  setPlaceNotation(placeid: String!, notation: Float!, comment: String): Boolean!
  test(id: String!): String!
}

union DataModel = Product | Event

type UpdateResponse {
  catalogueUpdated: Boolean
  productUpdated: Boolean
}

enum CardType {
  LargeCardM
  LargeCardL
  SquareCardM
  SquareCardL
  SquareCardXL
  RoundedCardM
}

type CardHeader {
  id: String
  label: String
  sublabel: String
  src: String
}

interface Card {
  id: ID!
  name: String!
  cardType: String
  header: CardHeader
  primary: String
  secondary: String
  tertiary: String
  quaternary: String
  ranking: Ranking
}

enum Model {
  PLACE
  PRODUCT
  PROGRAM
  EVENT
  USER
  LOCATION
  META
}

type Template {
  name: String!
  input: String!
  model: String!
  position: Int
}

type TLayout {
  name: String!
  children: [TSection]
}

type cardComponent {
  type: String!
  redirection: String
}

type templateSearch {
  page: String!
  operation: String
  query: String
  childrenComponent: cardComponent
  searchParams: SearchParams
}

type TSubChildrenCard {
  id: String
  label: String
  sublabel: String
  src: String
  ranking: Ranking
}

type TSectionHeader {
  label: String
  sublabel: String
}

type FetchParams {
  operation: String
  query: String
  searchParams: SearchParams
}

type PageCategory {
  id: String
  order: Int
  header: THeader
  sections: [Section]
}

type TSection {
  id: String!
  header: TSectionHeader
  order: Int
  fetchParams: FetchParams
  childrenComponent: cardComponent
  cardComponent: cardComponent
  templateSearch: templateSearch
  children: [TCard]
  THEME: String
}

type Account {
  userid: String
  username: String
  email: String!
  refreshToken: String
  accessToken: String
  active: Boolean
  provider: String
  roles: [String]
}

type Location {
  address: String
  zone: String
  district: String
  coordinates: Coordinates
  country: String
  ocean: Boolean
}

input LocationInput {
  address: String!
  zone: String
  district: String
  coordinates: CoordinatesInput
  ocean: Boolean
  country: String!
}


############### META #######################################

interface IMeta {
  id: String!
  name: String!
  parentID: String
}

type MetaListResponse {
  total: Int
  data: [IMeta]!
}

type MetaLocationList {
  total: Int
  data: [MetaLocation]
}

type MetaLocation implements IMeta {
  id: String!
  name: String!
  parentID: String
  label: String
  collection: String
  category: String
  position: Int
}

type O_FieldMeta {
  name: String!
  valueType: String
}

type O_Attribute {
  id: String
  name: String!
  value: String
}
type Meta implements IMeta {
    id: String!
    name: String!
    label: String
    owner: String!
    parentID: String
    childRequirements: [O_FieldMeta]
    order: Int
    attributes: [O_Attribute]
}

enum E_childRequirement {
  undefined
  cardType
}

input I_MetaField {
  name: String!
  valueType: String
}

input I_Meta {
  id: ID
  name: String!
  label: String
  parentID: ID
  attributes: [I_Attribute]
  owner: ID
  childRequirements: [I_MetaField]
}

input MetaCategoryInput {
  id: String
  name: String
  order: Int
  cardType: String
}

input MetaCollectionInput {
  id: String!
  name: String!
  order: Int
}

input LocationUpdateInput {
  country: String
  address: String
  zone: String
  district: String
  location: [CoordinatesUpdateInput]
  ocean: Boolean
}

input AccountQuery {
  userid: String
  email: String
  id: String
  accessToken: String
  refreshToken: String
}

type Category {
  name: String!
  count: Int
  children: [Category!]
}

input TSectionInput {
  name: String!
  card: String!
  position: Int
  size: Int
  operation: String!
}

input TLayoutInput {
  model: String!
  name: String!
  children: [TSectionInput!]!
}

input TCollectionInput {
  name: String!
  model: String!
}

input TCategoryInput {
  name: String!
  model: String!
}

input TSizeInput {
  name: String!
  value: String!
  input: String!
  model: String!
  position: Int
}

input TQuantityInput {
  name: String!
  value: String!
  input: String!
  model: String!
}

input TSpicyInput {
  name: String!
  value: String!
  input: String!
  model: String!
}

input TRoleInput {
  name: String!
  value: String!
  input: String!
}

input TRecipeInput {
  name: String!
  model: String!
  input: String!
}

input TIngredientInput {
  name: String!
  model: String!
  input: String!
}

input TGastronomyInput {
  name: String!
  input: String!
}

type Gastronomie {
  name: String!
  model: String!
}

type Contact {
  phone: String!
  email: String!
}

input ContactInput {
  phone: String
  email: String
}

input ContactUpdateInput {
  phone: String!
  email: String!
}

type Coordinates {
  lat: Float
  lon: Float
}

type Country {
  code: String!
  name: String!
}

input CountryInput {
  code: String!
  name: String!
}

type Event {
    id: String!
    name: String!
    start: String!
    end: String
    src: String
    description: String
    contact: Contact!
    prices: [Price!]
    categories: [String!]!
    tags: [String!]
    place: [Place!]
    location: Location!
    ranking: Ranking
    artists: [User!]
    hosts: [User!]
    pictures: [Picture!]
    CREATED_AT: String
    LAST_UPDATE_DATE: String
    LAST_UPDATE_USER: String
  }

  input PlaceEventInput {
    id: String!
    name: String!
  }

input EventInput {
    id: String
    name: String
    start: String!
    end: String
    place: PlaceEventInput!
    description: String
    prices: [PriceInput!]
    categories: [String!]!
    contact: ContactInput
    tags: [String!]
    location: LocationInput
    artists: [UserInput!]
    hosts: [UserInput!]
}

  type EventListResponse {
    total: Int
    data: [Event]!
  }

  type File {
    filename: String
    mimetype: String
    encoding: String
    size: Float
  }

  input GastronomyInput {
    name: String!
    code: String!
  }

  type Coodinate {
    lat: Float
    lng: Float
  }

  input CoordinatesInput {
    lat: Float
    lon: Float
  }

  input CoordinatesUpdateInput {
    lat: Float
    lon: Float
  }

  type Attribute {
    id: String
    name: String
    label: String
    cardType: String
    value: Float
    order: Int
    children: [Attribute]
  }

  input AttributeInput {
    id: String
    name: String
    order: Int
    value: Float
  }

  type Passport {
    accessToken: String!
    refreshToken: String!
  }

  input NameValueArgs {
    name: String!
    value: String!
  }

  input NameValueInput {
    name: String!
    value: String
    collection: [String]
  }

  type NameValue {
    props: Boolean
    type: String
    name: String!
    value: String
    collection: [String]
  }

  type Picture {
    id: String
    position: Int
    mobile: String
    desktop: String
    provider: String
    format: String
    small: String
    big: String
    main: Boolean
  }

  input PictureInput {
    id: String
    position: Int
    small: String
    big: String
  }

type LocationListResponse {
  total: Int
  data: [Location]!
}

type Order {
  name: String
  id: String
  order: String
}

type THEME {
  primaryColor: String
  secondaryColor: String
  tertiaryColor: String
}

type Place implements Card {
    id: ID!
    name: String!
    description: String
    categories: [String!]!
    gastronomies: [String!]
    categoryType: String!
    price: [Price]
    qrcode: Picture
    src: String
    logo: Picture
    tags: [String!]
    contact: Contact
    location: Location
    ranking: Ranking
    temporaly: Boolean
    catalogue: [SectionCategory]
    pictures: [Picture]
    facebook: String
    twitter: String
    CREATED_AT: String
    LAST_UPDATE_DATE: String
    LAST_UPDATE_USER: String
    CATALOGUE_ORDER: [Order]
    CATALOGUE_CATEGORIES: [Order]
    THEME: THEME
    cardType: String
    primary: String
    secondary: String
    tertiary: String
    quaternary: String
    header: CardHeader
  }

  type PlaceCreateResponse {
    status: Int
    payload: String
  }

  type PlaceDeleteResponse {
    status: Int
    deleted: Boolean
  }

  type PlaceDetailResponse {
    status: Int
    place: Place!
  }
  input ThemeInput {
    primaryColor: String
    secondaryColor: String
    tertiaryColor: String
  }

  input PlaceInput {
    name: String!
    description: String
    categories: [String!]!
    gastronomies: [String!]
    categoryType: String!
    price: [PriceInput]
    tags: [String!]
    contact: ContactInput
    location: LocationInput!
    temporaly: Boolean
    facebook: String
    twitter: String
    THEME: ThemeInput
  }

  input PlaceUpdateInput {
    name: String
    description: String
    categories: [String]
    gastronomies: [String]
    tags: [String]
    contact: ContactInput
    location: LocationUpdateInput
    temporaly: Boolean
    facebook: String
    twitter: String
    THEME: ThemeInput
  }

  type PlaceListResponse {
    total: Int
    data: [Place!]!
  }

  type UserListResponse {
    total: Int
    data: [User]!
  }

  type PlaceUpdateResponse {
    status: Int
    updated: Boolean
  }

  enum PricePeriod {
    PERMANENT
    HOURLY
    DAILY
    WEEKLY
    MONTHLY
    ANNUALY
  }

  type Price {
    period: PricePeriod!
    price: Float!
    currency: String
    base: Float
    discount: Float
    main: Boolean
  }

  input PriceInput {
    period: PricePeriod!
    currency: String
    base: Float!
    discount: Float
    main: Boolean
  }

  input I_Attribute {
    id: String
    name: String!
    value: String!
  }

  type Product implements Card {
    id: ID!
    name: String!
    cardType: String
    category: Attribute!
    collection: Attribute!
    gastronomy: String
    recipes: [O_Attribute!]
    spicy: String
    src: String
    tags: [String!]
    price: Float!
    currency: String
    discount: Float
    quantity: Int
    size: String
    description: String
    ranking: Ranking
    pictures: [Picture]
    hasmenu: Boolean
    stock: Boolean
    seller: Seller
    order: Int
    CREATED_AT: String
    LAST_UPDATE_DATE: String
    LAST_UPDATE_USER: String
    primary: String
    secondary: String
    tertiary: String
    quaternary: String
    header: CardHeader
  }

  input ProductUpdateInput {
    name: String
    sellerid: String!
    category: MetaCategoryInput
    collection: MetaCollectionInput
    gastronomy: String
    recipes: [I_Meta]
    spicy: String
    src: String
    tags: [String]
    price: Float
    currency: String
    discount: Float
    quantity: Int
    size: String
    description: String
    hasmenu: Boolean
    stock: Boolean
  }

  type UIMeta {
    positionInCatalog: Int
  }

  type Seller {
    id: String!
    name: String
    categories: [String]
    src: String
    phone: String!
    email: String
    address: String
    zone: String
    ocean: Boolean
    country: String
    district: String
    ranking: Ranking
    logo: Picture
  }

  input SellerInput {
    id: String!
    name: String
    address: String
    zone: String
    ocean: Boolean
    country: String
    district: String
  }

  type ProductCreateResponse {
    status: Int
    created: Boolean
  }

  type ProductDeleteResponse {
    status: Int
    deleted: Boolean
  }

  type ProductDetailResponse {
    status: Int
    total: Int
    error: String
    payload: Product!
  }

  input ProductInput {
    id: String
    sellerid: String!
    name: String!
    category: MetaCategoryInput!
    collection: MetaCollectionInput!
    gastronomy: String
    recipes: [I_Meta!]
    spicy: String
    tags: [String!]
    price: Float!
    currency: String!
    discount: Float
    quantity: Int
    size: String
    description: String
    hasmenu: Boolean
    stock: Boolean
    UIMETA: UIMetaInput
  }

  input UIMetaInput {
    positionInCatalog: Int
  }

  type ProductListResponse {
    total: Int
    data: [Product]!
  }

  type ProductUpdateResponse {
    status: Int
    updated: Boolean
  }

  input UserInput {
    fullname: String!
    firstname: String!
    lastname: String!
    artistname: String
    gender: String!
    birthdate: String!
    contact: ContactInput
    location: LocationInput
    tags: [String]
    roles: [String!]
    password: String!
    description: String
    ranking: RankingInput
    src: Int
    pictures: [PictureInput]
    facebook: String
    twitter: String
    visibility: Boolean
  }

  type Ranking {
    notation: Float
    likes: Int
    total: Float
    votes: Int
  }

  input RankingInput {
    notation: Float!
    likes: Int!
  }

  input RankingUpdateInput {
    notation: Float!
    likes: Int!
  }

  type Recipe {
    name: String!
    code: String!
    quantity: Float
  }

  input RecipeInput {
    name: String!
    code: String!
    quantity: String
  }

  input ScheduleInput {
    day: String!
    startAm: String
    endAm: String
    startPm: String
    endPm: String
  }

  type SearchParams {
    index: String
    criteria: [NameValue]
    from: Int
    size: Int
    cmsId: String
  }

  type SocialNet {
    name: String
    link: String
  }

  type TCardHeader {
    id: String
    label: String
    sublabel: String
    src: String
  }

  type TCard {
    id: String
    key: String
    label: String
    labelLeft: String
    sublabelLeft: String
    labelRight: String
    sublabelRight: String
    order: Int
    src: String
    header: TCardHeader
    ranking: Ranking
    subchildren: [TCard]
  }

  type User {
    id: String
    fullname: String
    firstname: String
    lastname: String
    artistname: String
    gender: String
    birthdate: String
    contact: Contact
    location: Location
    tags: [String]
    roles: [String!]
    description: String
    ranking: Ranking
    logo: Picture
    src: String
    pictures: [Picture]
    facebook: String
    twitter: String
    CREATED_AT: String
    LAST_UPDATE_DATE: String
    LAST_UPDATE_USER: String
  }

  input UserUpdateInput {
    fullname: String
    firstname: String
    lastname: String
    artistname: String
    gender: String
    birthdate: String
    contact: ContactUpdateInput
    location: LocationUpdateInput
    tags: [String]
    roles: [String]
    description: String
    ranking: RankingUpdateInput
    facebook: String
    twitter: String
  }

  input EventUpdateInput {
    id: String
    name: String
    start: String
    end: String
    description: String
    prices: [PriceInput]
    categories: [String]
    contact: ContactInput
    tags: [String]
    location: LocationInput
    ranking: RankingInput
    artists: [UserInput]
    hosts: [UserInput]
    pictures: [PictureInput]
  }
`

export default typeDefs;