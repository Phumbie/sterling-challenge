<template>
  <div>
    <Title title="Popular Starships" />
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="i in 9" :key="i">
          <Starships />
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import Starships from "../partials/starshipCard";
import Pagination from "../partials/pagination";
export default {
  components: {
    Title,
    Starships,
    Pagination
  }
};
</script>
