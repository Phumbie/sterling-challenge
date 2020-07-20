export const ADD_CHARACTERS = (state, val) => {
  state.characters = val.data.results.slice(0, 4);
};

export const ADD_STARSHIP = (state, val) => {
  state.starship = val.data.results.slice(0, 6);
};
export const ADD_PLANET = (state, val) => {
  state.planet = val.data.results.slice(0, 4);
};
export const ADD_ALL_STARSHIPS = (state, val) => {
  state.allStarShip = val.data.results;
  state.allStarshipsCount = val.data.count;
};
export const ADD_ALL_CHARACTERS = (state, val) => {
  state.allCharacters = val.data.results;
  state.allCharactersCount = val.data.count;
};
export const ADD_ALL_PLANETS = (state, val) => {
  state.allPlanets = val.data.results;
  state.allPlanetsCount = val.data.count;
};
export const GET_SINGLE_CHARACTER = (state, val) => {
  state.singleCharacter = val.data;
};
export const GET_SINGLE_STARSHIP = (state, val) => {
  state.singleStarship = val.data;
};
export const GET_SINGLE_PLANET = (state, val) => {
  state.singlePlanet = val.data;
};
