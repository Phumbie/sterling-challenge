import Vuex from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
    // state: () => ({
    //   characters: []
    // }),
    // mutations: {
    //   addCharacters(state, arr) {
    //     state.characters = arr.data.results;
    //     // console.log(state.characters);
    //   }
    // },
    // actions: {
    //   async getPeople({ commit }) {
    //     try {
    //       const people = await this.$axios.get("/people");
    //       commit("addCharacters", people);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // }
  });
};
export default createStore;
