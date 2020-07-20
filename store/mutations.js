export const ADD_CHARACTERS = (state, val) => {
  state.characters = val.data.results.slice(0, 4);
  //   console.log(state.characters);
};

export const ADD_STARSHIP = (state, val) => {
  state.starship = val.data.results.slice(0, 6);
  //   console.log(state.starship);
};
export const ADD_PLANET = (state, val) => {
  state.planet = val.data.results.slice(0, 4);
  //   console.log(state.planet);
};
export const ADD_ALL_STARSHIPS = (state, val) => {
  state.allStarShip = val.data.results;
  state.allStarshipsCount = val.data.count;
  //   console.log(state.planet);
};
export const ADD_ALL_CHARACTERS = (state, val) => {
  state.allCharacters = val.data.results;
  state.allCharactersCount = val.data.count;
  //   console.log(state.allCharacters);
};
export const ADD_ALL_PLANETS = (state, val) => {
  state.allPlanets = val.data.results;
  state.allPlanetsCount = val.data.count;
  //   console.log(state.allPlanets, state.allPlanetsCount);
};
export const GET_SINGLE_CHARACTER = (state, val) => {
  state.singleCharacter = val.data;
  //   console.log(state.singleCharacter);
};
export const GET_SINGLE_STARSHIP = (state, val) => {
  state.singleStarship = val.data;
  //   console.log(state.singleStarship);
};
export const GET_SINGLE_PLANET = (state, val) => {
  state.singlePlanet = val.data;
  console.log(state.singlePlanet);
};
