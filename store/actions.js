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
    // console.log(starShips);
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

export const getAllStarships = async function({ commit }) {
  try {
    const allStarShips = await this.$axios.get("/starships/");
    commit("ADD_ALL_STARSHIPS", allStarShips);
  } catch (err) {
    console.log(err);
  }
};

export const getAllCharacters = async function({ commit }) {
  try {
    const allCharacters = await this.$axios.get("/people/");
    commit("ADD_ALL_CHARACTERS", allCharacters);
  } catch (err) {
    console.log(err);
  }
};
