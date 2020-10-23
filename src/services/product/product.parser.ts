const cardParsers = {
  LargeCardM: ({ name, price, recipes, seller }) => ({
    primary: name,
    secondary: price,
    header: {
      label: seller && seller.name,
      sublabel: seller && seller.location && seller.location.zone,
      src: seller && (seller.logo || seller.src)
    }
  }),
  LargeCardL: ({ name, price, recipes, seller }) => ({
    primary: name,
    secondary: recipes && recipes.join("-"),
    tertiary: price,
    header: {
      label: seller && seller.name,
      sublabel: seller && seller.location && seller.location.zone,
      src: seller && (seller.logo || seller.src)
    }
  }),
  SquareCardM: ({ name, price }) => ({
    primary: name,
    secondary: price
  }),
  SquareCardL: ({ name, price }) => ({
    primary: name,
    secondary: price
  }),
  SquareCardXL: ({ name, price, recipes, seller }) => ({
    primary: name,
    secondary: recipes && recipes.join("-"),
    tertiary: price,
    header: {
      label: seller && seller.name,
      sublabel: seller && seller.location && seller.location.zone,
      src: seller && (seller.logo || seller.src)
    }
  }),
  RoundedCardM: ({ name, price }) => ({
    primary: name,
    secondary: price
  }),
}

export default cardParsers;