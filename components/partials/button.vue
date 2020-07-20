<template>
  <div>
    <div class="view-character-button mt-3">
      <button class="btn view-more hvr-shutter-out-horizontal">
        VIEW MORE
      </button>
    </div>
  </div>
</template>
<style scoped>
.view-character-button {
  text-align: center;
}
.view-more {
  padding: 0.5rem;
  width: 40%;
  border: 1px solid black;
}
.hvr-shutter-out-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: white;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-shutter-out-horizontal:hover,
.hvr-shutter-out-horizontal:focus,
.hvr-shutter-out-horizontal:active {
  color: white;
}
.hvr-shutter-out-horizontal:hover:before,
.hvr-shutter-out-horizontal:focus:before,
.hvr-shutter-out-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
