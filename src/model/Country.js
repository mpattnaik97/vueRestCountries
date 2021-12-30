export default class Country {
  constructor() {
    this.name = Array;
    this.flags = "";
    this.subregion = "";

    this.population = 0;
    this.region = "";
    this.capital = "";
    this.topLevelDomain = [""];
    this.currencies = [""];
    this.languages = [""];
    this.borders = [""];
  }

  // constructor(country) {
  //   this.name = country.name;
  //   this.flag = country.flag;
  //   this.nativeName = country.nativeName;
  //   this.population = country.population;
  //   this.region = country.region;
  //   this.capital = country.capital;
  //   this.domain = country.domain;
  //   this.currencies = country.currencies;
  //   this.languages = country.languages;
  //   this.nbr = country.nbr;
  // }

  getCountry() {
    return this;
  }

  setCountry(country) {
    this.name = country.name;
    this.flags = country.flags;
    this.population = country.population;
    this.region = country.region;
    this.capital = country.capital;
    this.subregion = country.subregion;
    this.currencies = country.currencies;
    this.languages = country.languages;
    this.borders = country.borders;
  }
}
