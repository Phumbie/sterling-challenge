<template>
  <div>
    <Header @search="search" />
    <Title title="Popular Starships" />
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="allStarShip in allStarShips" :key="allStarShip.name">
          <Starships :starship="allStarShip" />
        </div>
      </div>
      <Pagination
        :firstItemOnPage="firstItemOnPage"
        :lastItemOnPage="lastItemOnPage"
        @next="next"
        @previous="previous"
        :totalResults="$store.state.allStarshipsCount"
        :totalPgaes="totalPages"
      />
    </div>
  </div>
</template>
<script>
import Header from "../partials/header";
import Title from "../partials/title";
import Starships from "../partials/starshipCard";
import Pagination from "../partials/pagination";
export default {
  components: {
    Title,
    Starships,
    Pagination,
    Header
  },
  data() {
    return {
      currentPage: 1,
      lastItemOnPage: null,
      firstItemOnPage: null
    };
  },
  mounted() {
    this.$store.dispatch("getAllStarships", this.currentPage);
    if (this.totalPages == 1) {
      this.firstItemOnPage = 1;
      this.lastItemOnPage = this.$store.state.allStarshipsCount;
    } else {
      this.firstItemOnPage = 1;
      this.lastItemOnPage = 10;
    }
  },
  computed: {
    allStarShips() {
      return this.$store.state.allStarShip;
    },
    totalPages() {
      return Math.ceil(this.$store.state.allStarshipsCount / 10);
    }
  },
  methods: {
    next() {
      // console.log(this.lastItemOnPage, this.firstItemOnPage);
      if (this.currentPage < this.totalPages) {
        console.log(this.currentPage, this.totalPages);
        this.currentPage++;
        this.$store.dispatch("getAllStarships", this.currentPage);
        if (this.lastItemOnPage + 10 < this.totalItems) {
          this.firstItemOnPage = this.lastItemOnPage + 1;
          this.lastItemOnPage = this.firstItemOnPage + 9;
        } else {
          this.firstItemOnPage = this.lastItemOnPage + 1;
          this.lastItemOnPage = this.totalItems;
        }
      }
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.firstItemOnPage = this.firstItemOnPage - 10;
        this.lastItemOnPage = this.firstItemOnPage + 9;
        this.$store.dispatch("getAllStarships", this.currentPage);
      }
    },
    search(val) {
      this.$store.dispatch("getAllStarships", val.toString());
      console.log(val);
    }
  }
};
</script>
