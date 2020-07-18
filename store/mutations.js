export const ADD_CHARACTERS = (state, val) => {
  state.characters = val.data.results.slice(0, 4);
  console.log(state.characters);
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
  //   console.log(state.planet);
};
export const ADD_ALL_CHARACTERS = (state, val) => {
  state.allCharacters = val.data.results;
  console.log(state.allCharacters);
};
