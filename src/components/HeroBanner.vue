<template>
  <div
    class="hero-banner"
    :style="{ 'background-image': 'url(' + imageUrl + ')' }"
  >
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hero-banner',
  props: {
    imageUrl: String,
    text: String,
  },
};
</script>

<style lang="css" scoped>
.hero-banner {
  height: 400px;
  position: relative;
  background-size: cover;
}

.hero-banner::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.hero-banner h1 {
  color: white;
  z-index: 10;
  position: absolute;
  font-size: 4em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}
</style>
