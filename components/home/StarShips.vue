<template>
  <div>
    <Title title="Popular Starships" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <StarshipCard />
        </div>
        <div class="col-12 col-md-4">
          <StarshipCard />
        </div>
        <div class="col-12 col-md-4">
          <StarshipCard />
        </div>
      </div>
      <div class="view-button text-center mt-5">
        <button class="btn view-more">VIEW MORE</button>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import StarshipCard from "../partials/starshipCard";
export default {
  components: {
    Title,
    StarshipCard
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
