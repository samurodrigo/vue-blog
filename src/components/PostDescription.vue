<template>
  <div class="post-description">
    <div class="post-description__inner">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-description',
  props: {
    text: String,
  },
};
</script>

<style lang="css" scoped>
.post-description {
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 1.4em;
}
.post-description__inner {
  border: solid 5px white;
  padding: 20px;
}
</style>
