<template>
  <div class="home">
    <blog-card
      v-for="(post, index) in posts"
      :key="index"
      :blog-post="post"
    ></blog-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import client from '@/services/contentfulClient.js';
import BlogCard from '@/components/BlogCard.vue';
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    BlogCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    //console.log(client);
    client.getBlogPosts().then((posts) => {
      this.posts = posts.items;
      console.log(this.posts);
    });
  },
};
</script>
