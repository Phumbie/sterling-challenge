<template>
  <div>
    <Title title="Popular Starships" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" v-for="i in 6" :key="i">
          <SkeletonLine :height="`20rem`" :width="`100%`" v-if="loading" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-4"
          v-for="starship in starShips"
          :key="starship.name"
        >
          <StarshipCard :starship="starship" />
        </div>
      </div>

      <Nuxt-Link to="starships"><Button /> </Nuxt-Link>
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import StarshipCard from "../partials/starshipCard";
import Button from "../partials/button";
export default {
  components: {
    Title,
    StarshipCard,
    Button
  },
  mounted() {
    this.$store.dispatch("getStarships");
  },
  computed: {
    starShips() {
      return this.$store.state.starship;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>
<style scoped>
.star-ship_button {
  display: flex;
  justify-content: flex-end;
}
.view-more {
  border: 1px solid black;
  width: 40%;
  margin: auto;
  padding: 0.5rem;
}
</style>
