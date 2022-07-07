const inicialState = {
  countries: [],
  allCountries: [],
  activities: [],
  countriesDetail: {}
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_COUNTRIES_BY_NAME":
      return {
        ...state,
        countries: action.payload,
      };

    case "GET_COUNTRIES_BY_ID":
      return {
        ...state,
        countriesDetail: action.payload,
      };

    case "POST_ACTIVITY":
      return {
        ...state,
      };

      case "GET_ACTIVITIES":
        console.log('llego al reduceer')
        return {
          ...state,
          activities: action.payload
        };

    case "FILTER_BY_CONTINENT":
      const countriesAll = state.allCountries;
      const filteredCountries =
        action.payload === "All"
          ? countriesAll
          : countriesAll.filter((el) => el.continent === action.payload);

      return {
        ...state,
        countries: filteredCountries,
      };

    case "FILTER_BY_ACTIVITY":
      
      const countries = state.allCountries;
      
      const filteredByActivities = countries.filter((el) =>
        el.activities
          .map((el) => {
            return el.name;
          })
          .includes(action.payload)
      );

      return {
        ...state,
        countries: [...filteredByActivities],
      };

    case "SORT_BY_POPULATION":
      const sortedByPopulation =
        action.payload === "pop-asc"
          ? state.countries.sort((a, b) => b.population - a.population)
          : state.countries.sort((a, b) => a.population - b.population);

      return {
        ...state,
        countries: sortedByPopulation,
      };

    case "SORT_BY_NAME":
      const sorted =
        action.payload === "alph-asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        countries: sorted,
      };

    default:
      return state;
  }
}

export default rootReducer;