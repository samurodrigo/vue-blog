<template>
  <div class="post-body">
    <vue-markdown>{{ body }}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
export default {
  name: 'post-body',
  components: {
    VueMarkdown,
  },
  props: {
    body: String,
  },
};
</script>

<style lang="css">
.post-body {
  font-size: 1.4em;
  margin-top: 30px;
}
.post-body p img {
  max-width: 100%;
}
</style>
