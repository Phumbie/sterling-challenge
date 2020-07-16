<template>
  <div>
    <div class="container my-5">
      <h4 class="text-center mt-5">Popular Characters</h4>

      <div class="row mt-4">
        <div class="col-md-6">
          <div class="profile-card d-flex">
            <div class="profile-card_picture">
              <img
                style="width:100%; height: 100%"
                src="/images/character-1.jpg"
                alt="picture-img"
              />
            </div>
            <div class="profile-card_content d-flex align-items-center p-2">
              <div>
                <h6>Luke Skywalker</h6>
                <p class="mt-2">Son of Anakin</p>
                <p>
                  Luke Skywalker, a Force sensitive human male, was a lengendary
                  Jedi Master who fought in the Galactice civil war during the
                  reign of the Galactic empire..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-card d-flex">
            <div class="profile-card_picture">
              <img
                style="width:100%; height: 100%"
                src="/images/character-1.jpg"
                alt="picture-img"
              />
            </div>
            <div class="profile-card_content d-flex align-items-center p-2">
              <div>
                <h6>Luke Skywalker</h6>
                <p class="mt-2">Son of Anakin</p>
                <p>
                  Luke Skywalker, a Force sensitive human male, was a lengendary
                  Jedi Master who fought in the Galactice civil war during the
                  reign of the Galactic empire..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-character-button mt-5">
        <button class="btn view-more">VIEW MORE</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  color: #a9a9a9;
}
h4,
h6 {
  color: #353839;
}
.profile-card_picture {
  width: 60%;
}
.profile-card_content {
  background-color: #f5f5f5;
  width: 40%;
}
.view-character-button {
  text-align: center;
}
.view-more {
  padding: 0.5rem;
  width: 40%;
  border: 1px solid black;
}
</style>
