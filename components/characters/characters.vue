<template>
  <div>
    <Title title="Starwars Characters" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6" v-for="i in 8" :key="i">
          <CharacterCard />
        </div>
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
  }
};
</script>