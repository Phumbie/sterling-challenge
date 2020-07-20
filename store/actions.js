export const getCharacters = async function({ commit }) {
  commit("SET_LOADING", true);
  try {
    const people = await this.$axios.get("/people/");
    commit("ADD_CHARACTERS", people);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};

export const getStarships = async function({ commit }) {
  commit("SET_LOADING", true);
  try {
    const starShips = await this.$axios.get("/starships/");
    commit("ADD_STARSHIP", starShips);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};

export const getPlanets = async function({ commit }) {
  commit("SET_LOADING", true);
  try {
    const planets = await this.$axios.get("/planets/");
    commit("ADD_PLANET", planets);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};

export const getAllStarships = async function({ commit }, arg) {
  commit("SET_LOADING", true);
  let allStarShips;
  if (typeof arg === "string") {
    allStarShips = await this.$axios.get(`/starships/?page=1&search=${arg}`);
  } else {
    allStarShips = await this.$axios.get(`/starships/?page=${arg}`);
  }
  try {
    allStarShips;
    commit("ADD_ALL_STARSHIPS", allStarShips);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};

export const getAllCharacters = async function({ commit }, arg) {
  commit("SET_LOADING", true);

  let allCharacters;
  if (typeof arg === "string") {
    allCharacters = await this.$axios.get(`/people/?page=1&search=${arg}`);
  } else {
    allCharacters = await this.$axios.get(`/people/?page=${arg}`);
  }
  try {
    allCharacters;
    commit("ADD_ALL_CHARACTERS", allCharacters);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};
export const getAllPlanets = async function({ commit }, arg) {
  commit("SET_LOADING", true);
  let allPlanets;
  if (typeof arg === "string") {
    allPlanets = await this.$axios.get(`/planets/?page=1&search=${arg}`);
  } else {
    allPlanets = await this.$axios.get(`/planets/?page=${arg}`);
  }
  try {
    allPlanets;
    commit("ADD_ALL_PLANETS", allPlanets);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};
export const getSingleCharacter = async function({ commit }, id) {
  commit("SET_LOADING", true);
  try {
    let character = await this.$axios.get(`/people/${id}/`);
    commit("GET_SINGLE_CHARACTER", character);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};
export const getSingleSpaceship = async function({ commit }, id) {
  commit("SET_LOADING", true);
  try {
    let starship = await this.$axios.get(`/starships/${id}/`);
    commit("GET_SINGLE_STARSHIP", starship);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
  console.log("getSingleSpaceship called");
};
export const getSinglePlanet = async function({ commit }, id) {
  commit("SET_LOADING", true);
  try {
    let planet = await this.$axios.get(`/planets/${id}/`);
    commit("GET_SINGLE_PLANET", planet);
    commit("SET_LOADING", false);
  } catch (err) {
    commit("SET_LOADING", false);

    console.log(err);
  }
};
