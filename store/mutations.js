export const addCharacters = (state, arr) => {
  state.characters = arr.data.results.slice(0, 4);
  console.log(state.characters);
};
