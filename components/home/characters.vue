<template>
  <div>
    <div class="container my-5">
      <Title title="Popular Characters" />

      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <CharacterCard />
        </div>
        <div class="col-12 col-md-6">
          <CharacterCard />
        </div>
      </div>
      <div class="view-character-button mt-5">
        <button class="btn view-more">VIEW MORE</button>
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
<style scoped>
p {
  color: #a9a9a9;
}
h4,
h6 {
  color: #353839;
}
.view-character-button {
  text-align: center;
}
.view-more {
  padding: 0.5rem;
  width: 40%;
  border: 1px solid black;
}
</style>
