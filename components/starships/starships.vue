<template>
  <div>
    <Title title="Popular Starships" />
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="allStarShip in allStarShips"
          :key="allStarShip.name"
        >
          <Starships :starship="allStarShip" />
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import Starships from "../partials/starshipCard";
import Pagination from "../partials/pagination";
export default {
  components: {
    Title,
    Starships,
    Pagination
  },
  mounted() {
    this.$store.dispatch("getAllStarships");
    // this.$store.dispatch("getCharacters");
  },

  computed: {
    allStarShips() {
      return this.$store.state.allStarShip;
    }
  }
};
</script>
