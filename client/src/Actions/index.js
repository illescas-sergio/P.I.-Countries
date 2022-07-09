import axios from "axios";

export const getCountries = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/countries")
      .then((resp) => {
        dispatch({
          type: "GET_COUNTRIES",
          payload: resp.data,
        });
      })
      .catch((error) => console.error(error));
  };
};


export const getCountriesByName = (name) => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/countries?name=" + name)
      .then((resp) => resp.data)
      .then((data) =>
        dispatch({
          type: "GET_COUNTRIES_BY_NAME",
          payload: data,
        })
      )
      .catch((error) => {
        console.error(error);
      });
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
  return async function () {
    const resp = await axios.post("http://localhost:3001/activity", payload);
    return resp;
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const resp = await axios.get("http://localhost:3001/activities");
    return dispatch({
      type: "GET_ACTIVITIES",
      payload: resp.data
    });
  }
};

export const filteredByActivities = (payload) => {
  
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
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
