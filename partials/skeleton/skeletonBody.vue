<template>
  <div class="skeleton">
    <slot></slot>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.skeleton {
  padding: 15px;
  max-width: 100%;
  width: 100%;
  background: #fff;
  /* margin-bottom: 20px; */
  /* border-radius: 5px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #ecebed; */
  /* -webkit-box-shadow: -3px -2px 37px -33px rgba(16, 104, 237, 1);
  -moz-box-shadow: -3px -2px 37px -33px rgba(16, 104, 237, 1);
  box-shadow: -3px -2px 37px -33px rgba(16, 104, 237, 1); */
  animation: wave-squares 2s infinite ease-;
}
@keyframes wave-lines {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>