<template>
  <div>
    <hero-banner
      :imageUrl="post.fields.heroImage.fields.file.url"
      :text="post.fields.title"
    ></hero-banner>
    <div class="container">
      <post-description :text="post.fields.description"></post-description>
      <post-body :body="post.fields.body"></post-body>
    </div>
  </div>
</template>

<script>
import client from '@/services/contentfulClient.js';
import HeroBanner from '@/components/HeroBanner.vue';
import PostDescription from '@/components/PostDescription.vue';
import PostBody from '@/components/PostBody.vue';
export default {
  components: {
    HeroBanner,
    PostDescription,
    PostBody,
  },
  props: {
    slug: String,
  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    client.getPostBySlug(this.slug).then((entries) => {
      this.post = entries && entries.items.length ? entries.items[0] : {};
      console.log(this.post);
    });
  },
};
</script>

<style lang="css" scoped>
.container {
  max-width: 920px;
  margin: 30px auto;
}
</style>
