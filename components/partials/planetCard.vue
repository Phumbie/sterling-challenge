<template>
  <div>
    <div class="planet-card " @click="viewPlanet">
      <img
        class="image"
        style="width: 100%; height: 100%"
        :src="planetImage"
        alt
      />
      <div class="planet-name text-center">
        <h5 class="text-center text-white">{{ planet.name }}</h5>
        <h6
          class="text-center text-white"
          v-if="planet.population === 'unknown'"
        >
          {{ planet.population }}
        </h6>
        <h6 class="text-center text-white" v-else>
          {{ planet.population | formatAmount }}
        </h6>
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
  },
  methods: {
    viewPlanet() {
      let id = new URL(this.planet.url).pathname.slice(13);
      this.$router.push(`/planets/${id}`);
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
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.planet-card:hover {
  transform: scale(1.1, 1.1);
}
.planet-name {
  position: absolute;
  bottom: 2.5rem;
  width: 100%;
}
.image {
  border-radius: 5px;
}
.hvr-overline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-overline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  top: 0;
  background: #2098d1;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-overline-from-center:hover:before,
.hvr-overline-from-center:focus:before,
.hvr-overline-from-center:active:before {
  left: 0;
  right: 0;
}
</style>
