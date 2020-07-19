<template>
  <div>
    <Header @search="search" />
    <Title title="Starwars Characters" />

    <div class="container">
      <div class="d-flex">
        <p class="my-auto mr-2">Filter:</p>
        <el-select v-model="gender" filterable placeholder="select">
          <el-option label="Male" value="male"> </el-option>
          <el-option label="Female" value="female"> </el-option>
          <el-option label="Robot" value="robot"> </el-option>
        </el-select>
      </div>

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
      totalPages: Math.ceil(this.$store.state.allCharactersCount / 10)
    };
  },
  mounted() {
    this.$store.dispatch("getAllCharacters", this.currentPage);
  },
  computed: {
    filteredCharacters() {
      let newList = this.$store.state.allCharacters;
      return newList.filter(character => {
        return character.gender.includes(this.gender);
      });
    }
  },
  methods: {
    next() {
      if (this.currentPage < this.totalPages) {
        // console.log(this.totalPages);
        this.currentPage++;
        this.$store.dispatch("getAllCharacters", this.currentPage);
      }
    },
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$store.dispatch("getAllCharacters", this.currentPage);
      }
    },
    search(val) {
      this.$store.dispatch("getAllCharacters", val);
      console.log(val);
    }
  }
};
</script>
<style scoped></style>
