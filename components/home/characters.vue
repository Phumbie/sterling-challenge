<template>
  <div>
    <div class="container my-5">
      <Title title="Popular Characters" />
      <div class="row mt-4">
        <div
          class="col-12 col-md-6"
          v-for="character in characters"
          :key="character.name"
        >
          <CharacterCard :profile="character" />
        </div>
      </div>
      <div class="view-character-button mt-5">
        <Nuxt-Link to="/characters"
          ><button class="btn view-more">VIEW MORE</button></Nuxt-Link
        >
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import CharacterCard from "../partials/characterCard";
export default {
  components: {
    Title,
    CharacterCard
  },
  data() {
    return {
      // characters: []
    };
  },
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  methods: {}
};
</script>
<style scoped>
p {
  color: #a9a9a9;
}
h4,
h6 {
  color: #353839;
}
.view-character-button {
  text-align: center;
}
.view-more {
  padding: 0.5rem;
  width: 40%;
  border: 1px solid black;
}
</style>
