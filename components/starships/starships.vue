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
      <Pagination
        @next="next"
        @previous="previous"
        :totalResults="$store.state.allStarshipsCount"
      />
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
  data() {
    return {
      currentPage: 1,
      totalPages: Math.ceil(this.$store.state.allStarshipsCount / 10)
    };
  },
  mounted() {
    this.$store.dispatch("getAllStarships", this.currentPage);
  },

  computed: {
    allStarShips() {
      return this.$store.state.allStarShip;
    }
  },
  methods: {
    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$store.dispatch("getAllStarships", this.currentPage);
      }
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$store.dispatch("getAllStarships", this.currentPage);
      }
    }
  }
};
</script>
