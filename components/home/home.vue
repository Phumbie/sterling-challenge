<template>
  <div>
    <!-- <loader :display="loading" /> -->

    <Header :display="true" />
    <StarShip />
    <Planets />
    <Characters />
  </div>
</template>
<script>
import Header from "../partials/header";
import StarShip from "./StarShips";
import Planets from "./planets";
import Characters from "./characters";
export default {
  components: {
    Header,
    StarShip,
    Planets,
    Characters
  },
  computed: {
    // loading() {
    //   return this.$store.state.loading;
    // }
  }
};
</script>
