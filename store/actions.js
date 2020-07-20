export const getCharacters = async function({ commit }) {
  try {
    const people = await this.$axios.get("/people/");
    commit("ADD_CHARACTERS", people);
  } catch (err) {
    console.log(err);
  }
};

export const getStarships = async function({ commit }) {
  try {
    const starShips = await this.$axios.get("/starships/");
    commit("ADD_STARSHIP", starShips);
  } catch (err) {
    console.log(err);
  }
};

export const getPlanets = async function({ commit }) {
  try {
    const planets = await this.$axios.get("/planets/");
    // console.log(planets);
    commit("ADD_PLANET", planets);
  } catch (err) {
    console.log(err);
  }
};

export const getAllStarships = async function({ commit }, arg) {
  let allStarShips;
  if (typeof arg === "string") {
    allStarShips = await this.$axios.get(`/starships/?page=1&search=${arg}`);
  } else {
    allStarShips = await this.$axios.get(`/starships/?page=${arg}`);
  }
  try {
    allStarShips;
    commit("ADD_ALL_STARSHIPS", allStarShips);
  } catch (err) {
    console.log(err);
  }
};

export const getAllCharacters = async function({ commit }, arg) {
  let allCharacters;
  if (typeof arg === "string") {
    allCharacters = await this.$axios.get(`/people/?page=1&search=${arg}`);
  } else {
    allCharacters = await this.$axios.get(`/people/?page=${arg}`);
  }
  try {
    allCharacters;
    commit("ADD_ALL_CHARACTERS", allCharacters);
  } catch (err) {
    console.log(err);
  }
};
export const getAllPlanets = async function({ commit }, arg) {
  let allPlanets;
  if (typeof arg === "string") {
    allPlanets = await this.$axios.get(`/planets/?page=1&search=${arg}`);
  } else {
    allPlanets = await this.$axios.get(`/planets/?page=${arg}`);
  }
  try {
    allPlanets;
    commit("ADD_ALL_PLANETS", allPlanets);
  } catch (err) {
    console.log(err);
  }
};
export const getSingleCharacter = async function({ commit }, id) {
  try {
    let character = await this.$axios.get(`/people/${id}`);
    // console.log(character);
    commit("GET_SINGLE_CHARACTER", character);
  } catch (err) {
    console.log(err);
  }
};
export const getSingleSpaceship = async function({ commit }, id) {
  try {
    let starship = await this.$axios.get(`/starships/${id}`);
    // console.log(character);
    commit("GET_SINGLE_STARSHIP", starship);
  } catch (err) {
    console.log(err);
  }
};
export const getSinglePlanet = async function({ commit }, id) {
  try {
    let planet = await this.$axios.get(`/planets/${id}`);
    // console.log(character);
    commit("GET_SINGLE_PLANET", planet);
  } catch (err) {
    console.log(err);
  }
};
