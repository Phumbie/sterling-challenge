<template>
  <div>
    <StarShip />
    <Planets />
    <Characters />
  </div>
</template>
<script>
import StarShip from "./StarShips";
import Planets from "./planets";
import Characters from "./characters";
export default {
  components: {
    StarShip,
    Planets,
    Characters
  }
};
</script>
