<template>
  <div>
    <!-- <Header @search="search" /> -->
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
      if (this.currentPage < this.totalPages) {
        console.log(this.currentPage, this.totalPages);
        this.currentPage++;
        this.$store.dispatch("getAllStarships", this.currentPage);
      }
      if (this.lastItemOnPage + 10 < this.totalItems) {
        console.log(this.lastItemOnPage);
        // PASSES IF THE LAST ITEM IS LESS THAN TOTAL MEANING MORE PAGES
        this.firstItemOnPage = this.lastItemOnPage + 1;
        this.lastItemOnPage = this.firstItemOnPage + 9;
      } else {
        // PASSES IF LAST ITEM IS GREATER MEANING NO MORE PAGES AFTER THIS ONE
        this.firstItemOnPage = this.lastItemOnPage + 1;
        this.lastItemOnPage = this.totalItems;
      }
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.firstItemOnPage = this.firstItemOnPage - 10;
        this.lastItemOnPage = this.lastItemOnPage - 10;
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
