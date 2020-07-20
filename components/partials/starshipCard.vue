<template>
  <div>
    <div class="p-2">
      <div class="star-ship-card">
        <div class="star-ship-image">
          <img style="height: 100%; width: 100%" :src="starshipImage" alt />
        </div>
        <div class="star-ship-body">
          <h5 class="star-ship_title">{{ starship.name }}</h5>
          <p class="text-justify">{{ starship.model }}</p>
          <p>{{ starship.cargo_capacity | formatAmount }}</p>
          <br />
          <div class="star-ship_button mt-2 d-flex">
            <button
              class="read ml-auto hvr-overline-from-left"
              @click="viewStarship"
            >
              Read more →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["starship"],
  data() {
    return {
      image: Math.round(Math.random() * (6 - 1) + 1)
    };
  },
  computed: {
    starshipImage() {
      return `/images/starship-${this.image}.jpg`;
    }
  },
  methods: {
    viewStarship() {
      let id = new URL(this.starship.url).pathname.slice(15);
      console.log(this.starship.url);
      this.$router.push(`/starships/${id}`);
    }
  }
};
</script>
<style scoped>
.star-ship-card {
  /* padding: 0.5rem; */
  /* height: 10rem; */
  background-color: #e1e1e1;
  padding-bottom: 10px;
}
.star-ship-image {
  height: 12rem;
  position: relative;
}
.star-ship-body {
  padding: 0.5rem;
  background-color: #f5f5f5;
  position: relative;
  left: 10px;
  /* line-height: 1rem; */
  /* bottom: 10px; */
}
.read {
  border: none;
  border-radius: 2px;
  padding: 0.4rem;
  background-color: #d3d3d3;
  cursor: pointer;
}
.star-ship_button {
  cursor: pointer;
}
.hvr-overline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-overline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  top: 0;
  background: black;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-overline-from-left:hover:before,
.hvr-overline-from-left:focus:before,
.hvr-overline-from-left:active:before {
  right: 0;
}
</style>
