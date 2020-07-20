<template>
  <div class="header">
    <div class="container">
      <Nuxt-Link to="/">
        <div class="logo">
          <img style="height: 100%; width: 100%" src="/images/logo.png" alt="logo" />
        </div>
      </Nuxt-Link>
      <div class="logo-image heading d-flex justify-content-center">
        <img style="height: 2rem; width: 2.7rem" src="/images/logo.png" alt="logo" />
        <h5 class="text-white ml-2 my-auto">Directory</h5>
      </div>
      <hr class="hr-line my-1" />
      <!-- <p class="text-white text-center header-brief">
        Find your favorite Characters,Films,Species, Starships and Planets
      </p>-->
      <!-- <div class="container"> -->
      <p
        class="text-center text-white"
      >Find your favorite Characters, Films, Species,Starships and Planets</p>
      <div class="search">
        <div class="input-group flex-nowrap search">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.9rem"
                version="1.1"
                viewBox="-1 0 136 136.21852"
                width="0.9rem"
              >
                <g>
                  <g id="surface1">
                    <path
                      d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 "
                      data-original="#000000"
                      class="active-path"
                      data-old_color="#000000"
                      fill="#CDC9C9"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>

          <input
            type="text"
            class="form-control search"
            placeholder="Enter a search term"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            v-model="search"
            @keyup.enter="submit"
          />
        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    submit() {
      this.$emit("search", this.search);
      // this.search = "";
    }
  }
};
</script>
<style scoped>
.header {
  background-image: url("/images/hero-banner.jpg");

  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  color: white;
}
.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  height: 2.5rem;
  width: 4rem;
}
.search {
  width: 1;
}
.hr-line {
  background-color: white;
  width: 8rem;
  height: 0.1rem;
  margin: 0 auto;
}
.header-brief {
  /* font-size: 1.2rem; */
  /* width: 70%; */
  margin: auto;
}
@media only screen and (min-width: 768px) {
  .search {
    width: 70%;
    margin: auto;
  }
  .hr-line {
    width: 10rem;
  }
}
</style>
