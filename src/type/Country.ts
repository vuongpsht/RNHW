export type Languages = {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
};

export type Continent = {
  code: string;
  name: string;
  countries?: Country[];
};
export type Country = {
  capital: string;
  code: string;
  currency: string;
  emoji: string;
  emojiU: string;
  languages: Languages[];
  name: string;
  native: string;
  phone: string;
  continent: Continent;
};
export type CountriesQuery = {
  countries?: Country[];
};
export type CountryQuery = {
  country?: Country;
};
export type ContinentQuery = {
  continent: Continent;
};
