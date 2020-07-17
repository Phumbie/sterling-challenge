<template>
  <div>
    <div class="p-2">
      <div class="star-ship-card">
        <div class="star-ship-image">
          <img style="height: 100%; width: 100%" src="/images/starship-1.jpg" alt />
        </div>
        <div class="star-ship-body">
          <h5 class="star-ship_title">Ghost</h5>
          <small class="text-justify">
            The Ghost is a modified VCX 100 light freighter, manufactured by
            the Correlaian Engineering Corporation
          </small>
          <br />
          <div class="star-ship_button mt-2">
            <button class="read">Read more →</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.star-ship-card {
  /* padding: 0.5rem; */
  /* height: 10rem; */
  background-color: #e1e1e1;
  padding-bottom: 10px;
}
.star-ship-image {
  /* height: 7rem; */
  position: relative;
}
.star-ship-body {
  padding: 0.5rem;
  background-color: #f5f5f5;
  position: relative;
  left: 10px;
  /* line-height: 1rem; */
  /* bottom: 10px; */
}
.read {
  border: none;
  border-radius: 2px;
  padding: 0.3rem;
}
</style>