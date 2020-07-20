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
        <h4 class="text-center mt-3">{{ starship.name }}</h4>
      </div>
    </header>
    <div class="container mt-4 table-responsive">
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
            <td>{{ starship.name }}</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Cargo Capacity:</td>
            <td>{{ starship.cargo_capacity }}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>MGLT:</td>
            <td>{{ starship.MGLT }}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Consumables:</td>
            <td>{{ starship.consumables }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Cost in credits:</td>
            <td>{{ starship.cost_in_credits }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Crew:</td>
            <td>{{ starship.crew }}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Hyperdrie Rating:</td>
            <td>{{ starship.hyperdrive_rating }}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Length:</td>
            <td>{{ starship.length }}</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Manufacturer:</td>
            <td>{{ starship.manufacturer }}</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Max Speed:</td>
            <td>{{ starship.max_atmosphering_speed }}</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Model:</td>
            <td>{{ starship.model }}</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Passengers:</td>
            <td>{{ starship.passengers }}</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>Starship Class:</td>
            <td>{{ starship.starship_class }}</td>
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
      image: Math.round(Math.random() * (6 - 1) + 1)
    };
  },
  computed: {
    starship() {
      return this.$store.state.singleStarship;
    },
    profileImage() {
      return `/images/starship-${this.image}.jpg`;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  mounted() {
    this.$store.dispatch(
      "getSingleSpaceship",
      this.$route.params.singlestarship
    );
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
table {
  border-radius: 10px !important;
  -webkit-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
}
</style>
