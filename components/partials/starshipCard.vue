<template>
  <div>
    <div class="p-2">
      <div class="star-ship-card">
        <div class="star-ship-image">
          <img style="height: 100%; width: 100%" :src="starshipImage" alt />
        </div>
        <div class="star-ship-body">
          <h5 class="star-ship_title">{{ starship.name }}</h5>
          <p class="text-justify">
            {{ starship.model }}
          </p>
          <p>{{ starship.cargo_capacity }}</p>
          <br />
          <div class="star-ship_button mt-2 d-flex">
            <button class="read ml-auto">Read more →</button>
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
  background-color: #bfc1c2;
}
</style>
