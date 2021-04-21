<template>
  <div>
    <header>
      <navbar />
    </header>
    <body>
      <images />
    </body>
  </div>
</template>

<script>
// import Images from "./components/Images.vue";
import Navbar from "./components/Navbar.vue";
import Images from "./components/Images.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Images,
  },
};
</script>

<style></style>
