<template>
  <div>
    <Header @search="search" />
    <Title title="Starwars Characters" />

    <!-- <SkeletonLine /> -->
    <div class="container">
      <div class="d-flex">
        <p class="my-auto mr-2">Filter:</p>
        <el-select v-model="gender" filterable placeholder="select">
          <el-option label="All" value></el-option>
          <el-option label="Male" value="male"></el-option>
          <el-option label="Female" value="female"></el-option>
          <el-option label="Robot" value="robot"></el-option>
        </el-select>
      </div>

      <loader :display="loading" />
      <div class="row" v-if="$store.state.allCharacters">
        <div
          class="col-12 col-md-6"
          v-for="allCharacter in filteredCharacters"
          :key="allCharacter.name"
        >
          <CharacterCard :profile="allCharacter" />
        </div>
      </div>
      <Pagination
        @previous="previous"
        @next="next"
        :firstItemOnPage="firstItemOnPage"
        :lastItemOnPage="lastItemOnPage"
        :totalResults="$store.state.allCharactersCount"
        :totalPages="totalPages"
      />
    </div>
  </div>
</template>
<script>
import Header from "../partials/header";
import Title from "../partials/title";
import CharacterCard from "../partials/characterCard";
import Pagination from "../partials/pagination";

export default {
  components: {
    Header,
    Title,
    CharacterCard,
    Pagination
  },
  data() {
    return {
      gender: "",
      currentPage: 1,
      lastItemOnPage: null,
      firstItemOnPage: null
      // loading: true
    };
  },
  mounted() {
    this.$store.dispatch("getAllCharacters", this.currentPage);
    // .then(response => {
    //   alert("response successful").catch(e => {
    //     alert("error");
    //   });
    // });
    this.checkTotalPages();
  },
  computed: {
    filteredCharacters() {
      let newList = this.$store.state.allCharacters;
      if (this.gender == "") {
        return newList;
      } else {
        let filteredCharacters = newList.filter(character => {
          return character.gender.toLowerCase() == this.gender.toLowerCase();
        });
        return filteredCharacters;
      }
    },
    totalPages() {
      return Math.ceil(this.$store.state.allCharactersCount / 10);
    },
    totalItems() {
      return this.$store.state.allCharactersCount;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    checkTotalPages() {
      if (this.totalPages == 1) {
        this.firstItemOnPage = 1;
        this.lastItemOnPage = this.$store.state.allCharactersCount;
      } else {
        // DEFAULT WHEN PAGE LOADS AND WE HAVE MORE THAN ONE PAGE
        this.firstItemOnPage = 1;
        this.lastItemOnPage = 10;
      }
    },
    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$store.dispatch("getAllCharacters", this.currentPage);

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
        this.$store.dispatch("getAllCharacters", this.currentPage);
      }
    },
    search(val) {
      this.$store
        .dispatch("getAllCharacters", val.toString())
        .then(response => {
          this.checkTotalPages();
        });
    }
  }
};
</script>
<style scoped></style>
