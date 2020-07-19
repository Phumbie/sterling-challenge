<template>
  <div>
    <div class="pagination d-flex justify-content-center m-3">
      <p class="text-center my-auto mr-2">1 - 8 of {{ totalResults }}</p>
      <div class="button d-flex">
        <button class="navigation left" @click="previous"><</button>
        <button class="navigation right" @click="next">></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["totalResults", "totalPages"],
  methods: {
    next() {
      this.$emit("next");
    },
    previous() {
      this.$emit("previous");
    }
  }
};
</script>
<style scoped>
.pagination {
  text-align: center;
}
.navigation {
  border: 1px solid #dcdcdc;
  height: 2rem;
  width: 2rem;
  outline: none;
  cursor: pointer;
}
.left {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.right {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
</style>
