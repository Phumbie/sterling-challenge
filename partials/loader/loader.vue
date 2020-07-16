<template>
  <div>
    <div class="lds-ring" v-if="display">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['display'],
  watch: {
    display() {
      if (this.display == true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'initial'
      }
    }
  }
}
</script>
<style scoped>
* {
  --font-color: #999999;
  --theme-color: #1068ed;
  --dark-font: #1f314e;
}

.lds-ring {
  /* display: inline-block; */
  position: fixed;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 45%;
  left: 40%;
  width: 60px;
  height: 60px;
  margin: 8px;
  border: 8px solid white;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--theme-color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
