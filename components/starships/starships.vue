<template>
  <div>
    <Title title="Popular Starships" />
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="i in 10" :key="i">
          <Starships />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import Starships from "../partials/starshipCard";
export default {
  components: {
    Title,
    Starships
  }
};
</script>