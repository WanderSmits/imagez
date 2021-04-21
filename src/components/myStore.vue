<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="post in posts" :key="post.id">
      <h3>Post Title:</h3>
      {{ post.title }}
      <h3>Post Body:</h3>
      {{ post.body }}
    </div>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: "myStore",
  data() {
    return {
      msg: "Welcome to my Vuex Store",
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>
