import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/countries");

      dispatch({
        type: "GET_COUNTRIES",
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );

      return dispatch({
        type: "GET_COUNTRIES_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCountriesById = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/countriesById/" + id);

      dispatch({
        type: "GET_COUNTRIES_BY_ID",
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    const resp = await axios.post("http://localhost:3001/activity", payload);
    console.log(resp);
    return resp;
  };
};

export const filterByContinent = (payload) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
};

export const sortByPopulation = (payload) => {
  return {
    type: "SORT_BY_POPULATION",
    payload,
  };
};

export const sortByName = (payload) => {
  return {
    type: "SORT_BY_NAME",
    payload,
  };
};
