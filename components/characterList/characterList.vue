<template>
  <div>
    <Title title="Starwars Characters" />

    <div class="container">
      <div class="d-flex">
        <p class="my-auto mr-2">Filter:</p>
        <el-select
          v-model="gender"
          filterable
          placeholder="select"
          @change="chooseGender"
        >
          <el-option label="Male" value="male"> </el-option>
          <el-option label="Female" value="female"> </el-option>
          <el-option label="Robot" value="robot"> </el-option>
        </el-select>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-6"
          v-for="allCharacter in filteredCharacters"
          :key="allCharacter.name"
        >
          <CharacterCard :profile="allCharacter" />
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import CharacterCard from "../partials/characterCard";
import Pagination from "../partials/pagination";
export default {
  components: {
    Title,
    CharacterCard,
    Pagination
  },
  data() {
    return {
      gender: ""
    };
  },
  mounted() {
    this.$store.dispatch("getAllCharacters", this.gender);
  },
  computed: {
    allCharacters() {
      return this.$store.state.allCharacters;
    },
    filteredCharacters() {
      return this.$store.state.allCharacters.filter(character => {
        return character.gender.includes(this.gender);
      });
    }
  },
  methods: {
    chooseGender() {
      this.$store.dispatch("getAllCharacters");
    }
  }
};
</script>
<style scoped></style>
