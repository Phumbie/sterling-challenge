<template>
  <div>
    <h4 class="text-center mt-5">Popular Planets</h4>
    <div class="container text-center mt-5">
      <vue-glide :options="options">
        <vue-glide-slide
          ><div class="planet-card">
            <img
              style="width: 100%; height: 100%"
              src="/images/planet-1.jpg"
              alt=""
            />
            <div class="planet-name">
              <h5 class="text-center text-white">Coreilla</h5>
            </div>
          </div></vue-glide-slide
        >
        <vue-glide-slide
          ><div class="planet-card">
            <img
              style="width: 100%; height: 100%"
              src="/images/planet-1.jpg"
              alt=""
            />
            <div class="planet-name">
              <h5 class="text-center text-white">Coreilla</h5>
            </div>
          </div></vue-glide-slide
        >
        <vue-glide-slide
          ><div class="planet-card">
            <img
              style="width: 100%; height: 100%"
              src="/images/planet-1.jpg"
              alt=""
            />
            <div class="planet-name">
              <h5 class="text-center text-white">Coreilla</h5>
            </div>
          </div></vue-glide-slide
        >
        <vue-glide-slide
          ><div class="planet-card">
            <img
              style="width: 100%; height: 100%"
              src="/images/planet-1.jpg"
              alt=""
            />
            <div class="planet-name">
              <h5 class="text-center text-white">Coreilla</h5>
            </div>
          </div></vue-glide-slide
        >
        <template slot="control" class="control glide__bullets">
          <button data-glide-dir="=0" class="button-control"></button>
          <button data-glide-dir="=1" class=" button button-control"></button>
          <button data-glide-dir="=2" class="button button-control"></button>
          <button data-glide-dir="=3" class="button button-control"></button>
        </template>
      </vue-glide>
    </div>
  </div>
</template>
<script>
export default {
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
      }
    };
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
</style>
