<template>
  <div>
    <div class="planet-card p-2">
      <img style="width: 100%; height: 100%" :src="planetImage" alt />
      <div class="planet-name text-center">
        <h5 class="text-center text-white">{{ planet.name }}</h5>
        <h6 class="text-center text-white">{{ planet.population }}</h6>
        <small class="text-center text-white">{{ planet.climate }}</small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["planet"],
  data() {
    return {
      image: Math.round(Math.random() * (3 - 1) + 1)
    };
  },
  computed: {
    planetImage() {
      return `/images/planet-${this.image}.jpg`;
    }
  }
};
</script>
<style scoped>
.planet-card {
  height: auto;
  /* padding: 0.5rem; */
  /* background-image: url("/images/planet-1.jpg"); */
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}
.planet-name {
  position: absolute;
  bottom: 2.5rem;
  width: 100%;
}
</style>
