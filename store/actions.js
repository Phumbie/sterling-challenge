export const getCharacters = async function({ commit }) {
  try {
    const people = await this.$axios.get("/people");
    commit("addCharacters", people);
  } catch (err) {
    console.log(err);
  }
};
