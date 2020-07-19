<template>
  <div class="mt-5">
    <Title title="Popular Planets" />
    <div class="container text-center">
      <vue-glide :options="options" v-if="planets.length">
        <vue-glide-slide v-for="planet in planets" :key="planet.name">
          <Planet :planet="planet" />
        </vue-glide-slide>
        <template slot="control" class="control glide__bullets">
          <button data-glide-dir="=0" class="button-control"></button>
          <button data-glide-dir="=1" class="button button-control"></button>
          <button data-glide-dir="=2" class="button button-control"></button>
          <button data-glide-dir="=3" class="button button-control"></button>
        </template>
      </vue-glide>
    </div>
    <div class="view-planet-button container mt-3">
      <Nuxt-Link to="/planets"
        ><button class="btn view-more">VIEW MORE</button></Nuxt-Link
      >
    </div>
  </div>
</template>
<script>
import Title from "../partials/title";
import Planet from "../partials/planetCard";
export default {
  components: {
    Title,
    Planet
  },
  data() {
    return {
      options: {
        gap: 20,
        type: "carousel",
        rewind: false,
        breakpoints: {
          800: {
            perView: 2
          }
        },
        // direction: {
        //   ltr: "glide--ltr",
        //   rtl: "glide--rtl"
        // },
        slider: "glide--slider",
        carousel: "glide--carousel",
        swipeable: "glide--swipeable",
        dragging: "glide--dragging",
        cloneSlide: "glide__slide--clone",
        activeNav: "glide__bullet--active",
        activeSlide: "glide__slide--active",
        disabledArrow: "glide__arrow--disabled"
      },
      image: Math.round(Math.random() * (3 - 1) + 1)
    };
  },
  mounted() {
    this.$store.dispatch("getPlanets");
    // .then(console.log(this.$store.state.planet));
  },
  computed: {
    planets() {
      return this.$store.state.planet;
      console.log(this.$store.state.planet);
    },
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
.button-control {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  background-color: #e1e1e1;
  outline: none;
  transition: all 0.5s linear;
}
.button-control:focus {
  background-color: green;
}
/* .button-control:active {
  background-color: green;
} */
.glide__bullet--active {
  background-color: yellow;
}

.view-planet-button {
  text-align: center;
}
.view-more {
  padding: 0.5rem;
  width: 40%;
  border: 1px solid black;
}
</style>
