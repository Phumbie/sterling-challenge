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
        <h3 class=" text-center mt-3">{{ planet.name }}</h3>
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
            <td>{{ planet.name }}</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Climate:</td>
            <td>{{ planet.climate }}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Diameter:</td>
            <td>{{ planet.diameter | formatAmount }}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Gravity:</td>
            <td>{{ planet.gravity }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Orbital Period:</td>
            <td>{{ planet.orbital_period }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Population:</td>
            <td>{{ planet.population | formatAmount }}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Rotation Period:</td>
            <td>{{ planet.rotation_period }}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Surface water:</td>
            <td>{{ planet.surface_water }}</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Terrain:</td>
            <td>{{ planet.terrain }}</td>
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
      image: Math.round(Math.random() * (3 - 1) + 1)
    };
  },
  mounted() {
    this.$store.dispatch("getSinglePlanet", this.$route.params.singlePlanet);
  },
  computed: {
    planet() {
      return this.$store.state.singlePlanet;
    },
    profileImage() {
      return `/images/planet-${this.image}.jpg`;
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
  top: 1rem;
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
