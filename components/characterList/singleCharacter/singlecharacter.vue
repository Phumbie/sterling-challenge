<template>
  <div>
    <header class="d-flex align-items-center justify-content-center">
      <div class="text-center">
        <div class="header-image">
          <img
            style="height: 100%; width: 100%"
            :src="profileImage"
            alt="image"
          />
        </div>
        <h3 class="text-white text-center mt-3">{{ profile.name }}</h3>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: Math.round(Math.random() * (4 - 1) + 1)
    };
  },
  mounted() {
    // console.log();
    this.$store.dispatch(
      "getSingleCharacter",
      this.$route.params.singlecharacter
    );
  },
  computed: {
    profile() {
      return this.$store.state.singleCharacter;
    },
    profileImage() {
      return `/images/character-${this.image}.jpg`;
    }
  }
};
</script>
<style scoped>
header {
  height: 25rem;
  background-image: url("/images/hero-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.header-image {
  height: 12rem;
  width: 12rem;
  margin: auto;
  /* border-radius: 5px; */
}
</style>
