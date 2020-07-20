<template>
  <div>
    <loader :display="loading" />

    <header class="d-flex align-items-center justify-content-center">
      <Nuxt-Link to="/">
        <div class="logo">
          <img
            style="height: 100%; width: 100%"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
      </Nuxt-Link>
      <div class="text-center header-card">
        <div class="header-image">
          <img
            style="height: 100%; width: 100%"
            :src="profileImage"
            alt="image"
          />
        </div>
        <h3 class=" text-center mt-3">{{ profile.name }}</h3>
      </div>
    </header>
    <div class="container  mt-4 table-responsive">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name:</td>
            <td>{{ profile.name }}</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Eye Color:</td>
            <td>{{ profile.eye_color }}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hair Color:</td>
            <td>{{ profile.hair_color }}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Skin Color:</td>
            <td>{{ profile.skin_color }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Gender:</td>
            <td>{{ profile.gender }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Mass:</td>
            <td>{{ profile.mass | formatAmount }}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Height:</td>
            <td>{{ profile.height }}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Birth Year:</td>
            <td>{{ profile.birth_year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>
<style scoped>
header {
  height: 30rem;
  background-image: url("/images/hero-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.header-card {
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem;
  width: 15rem;
}
.header-image {
  /* height: 12rem;
  width: 12rem; */
  margin: auto;
  /* border-radius: 5px; */
}
.logo {
  position: absolute;
  top: 2rem;
  left: 1rem;
  height: 2.5rem;
  width: 4rem;
}
.table-responsive {
  border-radius: 5px !important;
}
table {
  border-radius: 10px !important;
  -webkit-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
}
</style>
