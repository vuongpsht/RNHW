export const QUERY_COUNTRIES = `
query Country {
  countries(filter: {}) {
    capital
    code
    currency
    continent {
      code
      name
    }
    emoji
    emojiU
    languages {
      code
      name
      rtl
      native
    }
    name
    native
    phone
  }
}
`;

export const QUERY_CONTINENT = `
query($countryCode: ID!) {
  continent(code: $countryCode) {
    code
    name
    countries {
      capital
      code
      emoji
      emojiU
      currency
      continent {
        code
        name
      }
      name
      native
      phone
      languages {
        code
        name
        native
        rtl
      }
    }
  }
}
`;

export const QUERY_COUNTRY = `query ($countryCode: ID!) {
  country(code: $countryCode) {
    capital
    code
    continent {
      code
      name
    }
    emoji
    currency
    emojiU
    name
    native
    phone
    languages {
      name
      code
      native
      rtl
    }
  }
}
`;
