<template>
  <div>
    <Header @search="search" />
    <Title title="Popular Planets" />
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3 p-2" v-for="planet in getPlanets" :key="planet.name">
          <Planets :planet="planet" />
        </div>
      </div>
    </div>
    <Pagination
      @next="next"
      @previous="previous"
      :firstItemOnPage="firstItemOnPage"
      :lastItemOnPage="lastItemOnPage"
      :totalResults="$store.state.allPlanetsCount"
      :totalPages="totalPages"
    />
  </div>
</template>
<script>
import Header from "../partials/header";
import Title from "../partials/title";
import Planets from "../partials/planetCard";
import Pagination from "../partials/pagination";
export default {
  components: {
    Header,
    Title,
    Planets,
    Pagination
  },
  data() {
    return {
      currentPage: 1,
      lastItemOnPage: null,
      firstItemOnPage: null
    };
  },

  mounted() {
    this.$store.dispatch("getAllPlanets", this.currentPage);
    this.checkTotalPages();
  },
  computed: {
    getPlanets() {
      return this.$store.state.allPlanets;
    },
    totalPages() {
      return Math.ceil(this.$store.state.allPlanetsCount / 10);
    },
    totalItems() {
      return this.$store.state.allPlanetsCount;
    }
  },
  methods: {
    checkTotalPages() {
      console.log("checked");
      if (this.totalPages == 1) {
        this.firstItemOnPage = 1;
        this.lastItemOnPage = this.$store.state.allPlanetsCount;
      } else {
        // DEFAULT WHEN PAGE LOADS AND WE HAVE MORE THAN ONE PAGE
        this.firstItemOnPage = 1;
        this.lastItemOnPage = 10;
      }
    },
    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$store.dispatch("getAllPlanets", this.currentPage);
        if (this.lastItemOnPage + 10 < this.totalItems) {
          // PASSES IF THE LAST ITEM IS LESS THAN TOTAL MEANING MORE PAGES
          this.firstItemOnPage = this.lastItemOnPage + 1;
          this.lastItemOnPage = this.firstItemOnPage + 9;
        } else {
          // PASSES IF LAST ITEM IS GREATER MEANING NO MORE PAGES AFTER THIS ONE
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
        this.$store.dispatch("getAllPlanets", this.currentPage);
      }
    },
    search(val) {
      this.$store.dispatch("getAllPlanets", val.toString()).then(response => {
        this.checkTotalPages();
      });
    }
  }
};
</script>
