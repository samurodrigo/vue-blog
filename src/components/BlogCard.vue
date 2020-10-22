<template>
  <div class="blog-card">
    <div class="left-side">
      <img
        :src="blogPost.fields.heroImage.fields.file.url"
        :alt="blogPost.fields.heroImage.fields.description"
      />
    </div>
    <div class="right-side">
      <div class="content">
        <h2>{{ blogPost.fields.title }}</h2>
        <p>{{ blogPost.fields.description }}</p>
        <router-link
          :to="{ name: 'Post', params: { slug: blogPost.fields.slug } }"
          >Saiba mais</router-link
        >
      </div>
      <div class="post-details">
        <span>Publish date:{{ getDate(blogPost.fields.publishDate) }}</span>
        <span>Author: {{ blogPost.fields.author.fields.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'blog-card',
  props: {
    blogPost: Object,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.blogPost.fields.heroImage.fields.file.url);
  },
  methods: {
    getDate(date) {
      return moment(date).format('DD/MM/yyyy');
    },
  },
};
</script>

<style lang="css" scoped>
.blog-card {
  display: flex;
  margin: 40px;
  overflow: hidden;
  text-align: left;
  font-size: 1.8em;
}
.blog-card h2 {
  margin-top: 0;
}
.blog-card > div {
  flex: 1;
}

.blog-card p {
  font-size: 0.8em;
}

.blog-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-card .right-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
}

.blog-card .post-details {
  flex: 1;
  font-size: 0.6em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
